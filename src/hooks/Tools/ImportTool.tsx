import { parseCSV } from '@infinite-debugger/rmk-utils/data';
import { addThousandCommas } from '@infinite-debugger/rmk-utils/numbers';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
  Box,
  Button,
  Grid,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
  alpha,
  useTheme,
} from '@mui/material';
import { omit } from 'lodash';
import { ReactNode, useEffect, useRef, useState } from 'react';

import IconLoadingScreen from '../../components/IconLoadingScreen';
import ImportIcon from '../../components/Icons/ImportIcon';
import DataDropdownField from '../../components/InputFields/DataDropdownField';
import ModalPopup from '../../components/ModalPopup';
import {
  RecordsExplorer,
  RecordsExplorerProps,
} from '../../components/RecordsExplorer';
import { ButtonTool } from '../../components/SearchSyncToolbar';
import { TableColumn } from '../../components/Table';
import { DropdownOption } from '../../interfaces/Utils';
import { useMutation } from '../Utils';

export const importSteps = [
  'Upload a file',
  'Preview data',
  'Map data',
  'Import',
] as const;
export type ImportStep = (typeof importSteps)[number];

export const ALLOWED_FILE_FORMATS = ['csv'];

export interface ImportToolOptions
  extends Partial<
    Pick<RecordsExplorerProps, 'recordLabelPlural' | 'recordLabelSingular'>
  > {
  importFields: DropdownOption[];
  recordsImporter: (data: any[]) => Promise<any>;
  importSuccessMessage?: ReactNode;
}

export const useImportTool = ({
  recordLabelPlural,
  recordLabelSingular,
  importFields,
  recordsImporter,
  importSuccessMessage,
}: ImportToolOptions): ButtonTool => {
  if (!recordLabelPlural) {
    recordLabelPlural = 'Records';
  }

  recordLabelSingular ||
    (recordLabelSingular = recordLabelPlural.replace(/s$/gi, ''));

  const lowercaseRecordLabelPlural = recordLabelPlural.toLowerCase();
  const lowercaseRecordLabelSingular = recordLabelSingular.toLowerCase();

  const inputFieldRef = useRef<HTMLInputElement | null>(null);
  const { palette } = useTheme();
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState<ImportStep>('Upload a file');
  const [data, setData] = useState<any[]>([]);
  const [dataColumns, setDataColumns] = useState<TableColumn[]>([]);
  const [mappedFields, setMappedFields] = useState<Record<string, string>>({});

  const multipleFieldsMappedtoSameAttribute = (() => {
    const valueCount: Record<string, string[]> = {};
    const multipleFieldsMappedtoSameAttribute = [];

    // Count the occurrence of each value
    for (const key in mappedFields) {
      const value = mappedFields[key];
      if (valueCount[value]) {
        valueCount[value].push(key);
      } else {
        valueCount[value] = [key];
      }
    }

    // Find keys with the same value
    for (const value in valueCount) {
      const keys = valueCount[value];
      if (keys.length > 1) {
        multipleFieldsMappedtoSameAttribute.push(...keys);
      }
    }

    return multipleFieldsMappedtoSameAttribute;
  })();

  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (activeStep === 'Upload a file') {
      const dragOverEventCallback = (event: Event) => {
        event.preventDefault();
        setIsDragging(true);
      };
      const dragLeaveEventCallback = (event: Event) => {
        event.preventDefault();
        setIsDragging(false);
      };
      const dragEnterEvents = ['drag', 'dragstart', 'dragenter', 'dragover'];
      dragEnterEvents.forEach((event) => {
        window.addEventListener(event, dragOverEventCallback);
      });

      const dragLeaveEvents = ['dragleave', 'drop', 'dragend'];
      dragLeaveEvents.forEach((event) => {
        window.addEventListener(event, dragLeaveEventCallback);
      });
      return () => {
        dragEnterEvents.forEach((event) => {
          window.removeEventListener(event, dragOverEventCallback);
        });
        dragLeaveEvents.forEach((event) => {
          window.removeEventListener(event, dragLeaveEventCallback);
        });
      };
    }
  }, [activeStep]);

  const {
    mutate: importRecords,
    mutating: importingRecords,
    mutated: recordsImported,
    errorMessage: importationErrorMessage,
    reset: resetImportation,
  } = useMutation(() => {
    const mappedData = data.map((row) => {
      const mappedRow: Record<string, any> = {};
      for (const key in mappedFields) {
        const value = mappedFields[key];
        mappedRow[value] = row[key];
      }
      return mappedRow;
    });
    return recordsImporter(mappedData);
  });

  const errorMessage = (() => {
    if (importationErrorMessage) {
      return importationErrorMessage;
    }
    if (multipleFieldsMappedtoSameAttribute.length > 0) {
      return 'Multiple file fields cannot be mapped to the same attribute.';
    }
  })();

  const handleClose = () => {
    setOpen(false);
    setActiveStep('Upload a file');
    setData([]);
    setDataColumns([]);
    setMappedFields({});
    resetImportation();
  };

  const handleSelectedFile = (file: File) => {
    if (
      file.name &&
      ALLOWED_FILE_FORMATS.includes(file.name.split('.').pop() as string)
    ) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileData = event.target?.result;
        if (fileData) {
          const data = parseCSV(fileData as string);
          if (data.length > 0) {
            setActiveStep('Preview data');
            setData(data);
            setDataColumns(
              Object.keys(data[0]).map((key) => {
                return {
                  id: key,
                  label: key,
                };
              })
            );
          } else {
            // TODO: 'Show error message';
          }
        }
      };
      reader.onerror = function (err) {
        console.error(err);
      };
      reader.readAsText(file);
    }
  };

  return {
    label: `Import ${recordLabelPlural}`,
    icon: <ImportIcon />,
    type: 'button',
    onClick: () => {
      setOpen(true);
    },
    popupElement: (
      <ModalPopup
        title={`Import ${recordLabelPlural}`}
        open={open}
        onClose={handleClose}
        errorMessage={errorMessage}
        CardProps={{
          sx: {
            maxHeight: 'none',
            ...(() => {
              switch (activeStep) {
                case 'Preview data':
                case 'Map data':
                  return {
                    maxWidth: 960,
                    height: '80%',
                  };
              }
            })(),
          },
        }}
        CardBodyProps={{
          sx: {
            p: 0,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
          },
        }}
        CloseActionButtonProps={{
          children: (() => {
            if (activeStep === 'Upload a file' || recordsImported) {
              return 'Close';
            }
            return 'Cancel';
          })(),
        }}
        //#region Action buttons
        {...(() => {
          if (!importingRecords && !recordsImported) {
            switch (activeStep) {
              case 'Preview data':
                return {
                  actionButtons: [
                    <Button
                      key={0}
                      variant="contained"
                      onClick={() => {
                        setActiveStep('Map data');
                      }}
                    >
                      Confirm your file
                    </Button>,
                  ],
                };
              case 'Map data':
                if (Object.keys(mappedFields).length > 0 && !errorMessage) {
                  return {
                    actionButtons: [
                      <Button
                        key={0}
                        variant="contained"
                        onClick={() => {
                          setActiveStep('Import');
                        }}
                      >
                        Confirm mapping
                      </Button>,
                    ],
                  };
                }
                break;
              case 'Import':
                if (!errorMessage) {
                  return {
                    actionButtons: [
                      <Button
                        key={0}
                        variant="contained"
                        onClick={() => {
                          importRecords();
                        }}
                      >
                        Import {recordLabelPlural}
                      </Button>,
                    ],
                  };
                }
            }
          }
        })()}
        //#endregion
        {...(() => {
          if (activeStep === 'Map data') {
            const importedColumnCount = Object.keys(mappedFields).length;
            const ignoredColumnCount = dataColumns.length - importedColumnCount;
            return {
              popupStatsElement: (
                <Typography variant="body2" noWrap>
                  <strong>
                    {importedColumnCount} column
                    {importedColumnCount === 1 ? '' : 's'}
                  </strong>{' '}
                  to be imported. Ignored {ignoredColumnCount} column
                  {ignoredColumnCount === 1 ? '' : 's'}
                </Typography>
              ),
            };
          }
        })()}
        showActionsToolbar={!importingRecords}
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {(() => {
          if (importingRecords || recordsImported) {
            return (
              <IconLoadingScreen
                load={importRecords}
                loading={importingRecords}
                isLoaded={recordsImported}
                isLoadingMessage={`Importing ${lowercaseRecordLabelPlural}...`}
                isLoadedMessage={
                  importSuccessMessage ||
                  `${recordLabelPlural} imported successfully!`
                }
                Icon={ImportIcon}
                {...{ errorMessage, recordLabelPlural, recordLabelSingular }}
              />
            );
          }
          return (
            <>
              <Box
                sx={{
                  px: 3,
                  py: 2,
                }}
              >
                <Stepper
                  activeStep={importSteps.indexOf(activeStep)}
                  alternativeLabel
                >
                  {importSteps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
              <Box
                sx={{
                  position: 'relative',
                  flex: 1,
                  ...(() => {
                    switch (activeStep) {
                      case 'Upload a file':
                      case 'Map data':
                      case 'Import':
                        return {
                          p: 3,
                        };
                    }
                  })(),
                }}
              >
                {(() => {
                  switch (activeStep) {
                    case 'Upload a file':
                      return (
                        <>
                          <input
                            ref={inputFieldRef}
                            type="file"
                            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                            style={{ display: 'none' }}
                            onChange={() => {
                              const file = inputFieldRef.current?.files?.[0];
                              if (file) {
                                handleSelectedFile(file);
                              }
                            }}
                          />
                          <Box
                            onClick={() => {
                              inputFieldRef.current?.click();
                            }}
                            onDrop={(event) => {
                              event.preventDefault();
                              setIsDragging(false);
                              const file = event.dataTransfer.files[0];
                              if (file) {
                                handleSelectedFile(file);
                              }
                            }}
                            sx={{
                              border: `2px dashed ${palette.divider}`,
                              borderRadius: '4px',
                              cursor: 'pointer',
                              opacity: 0.5,
                              '&:hover': {
                                opacity: 1,
                              },
                            }}
                          >
                            <Stack
                              sx={{
                                gap: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '300px',
                              }}
                            >
                              <CloudUploadIcon
                                sx={{
                                  fontSize: 80,
                                }}
                              />
                              {(() => {
                                if (isDragging) {
                                  return (
                                    <Typography
                                      variant="body1"
                                      sx={{
                                        fontWeight: 'bold',
                                      }}
                                    >
                                      Drop the file here
                                    </Typography>
                                  );
                                }
                                return (
                                  <>
                                    <Typography
                                      variant="body1"
                                      sx={{
                                        fontWeight: 'bold',
                                      }}
                                    >
                                      Select your file or drag and drop it here
                                    </Typography>
                                    <Typography variant="body2">
                                      .csv, .xlsx or .txt
                                    </Typography>
                                  </>
                                );
                              })()}
                            </Stack>
                          </Box>
                        </>
                      );
                    case 'Preview data': {
                      const maxRecordsToPreview = 100;
                      const dataToPreview = data.slice(0, maxRecordsToPreview);
                      return (
                        <RecordsExplorer
                          title={(() => {
                            if (dataToPreview.length < data.length) {
                              return `Preview first ${addThousandCommas(
                                maxRecordsToPreview
                              )} ${
                                dataToPreview.length === 1
                                  ? lowercaseRecordLabelSingular
                                  : lowercaseRecordLabelPlural
                              } of your file`;
                            }
                            return `${recordLabelPlural} in your file`;
                          })()}
                          {...{ recordLabelPlural, recordLabelSingular }}
                          data={dataToPreview}
                          views={[
                            {
                              type: 'List',
                              columns: dataColumns,
                            },
                          ]}
                          elevation={0}
                        />
                      );
                    }
                    case 'Map data':
                      return (
                        <Stack
                          sx={{
                            gap: 2,
                          }}
                        >
                          <Grid
                            container
                            sx={{
                              px: 3,
                            }}
                          >
                            <Grid
                              item
                              sx={{
                                width: 220,
                              }}
                            >
                              <Typography variant="body2" noWrap>
                                File Field Header
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              xs
                              sx={{
                                minWidth: 0,
                              }}
                            >
                              <Typography variant="body2" noWrap>
                                Data
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              sx={{
                                width: 250,
                              }}
                            >
                              <Typography variant="body2" noWrap>
                                {recordLabelSingular} Attribute
                              </Typography>
                            </Grid>
                          </Grid>

                          {dataColumns.map(({ id: columnId, label }, index) => {
                            const isFieldMapped = Boolean(
                              mappedFields[String(columnId)]
                            );
                            return (
                              <Box
                                key={index}
                                sx={{
                                  p: 3,
                                  bgcolor: alpha(palette.primary.main, 0.05),
                                  borderRadius: '4px',
                                  border: `1px solid ${
                                    isFieldMapped
                                      ? alpha(palette.primary.main, 0.7)
                                      : palette.divider
                                  }`,
                                }}
                              >
                                <Grid container>
                                  <Grid
                                    item
                                    sx={{
                                      width: 220,
                                    }}
                                  >
                                    <Typography variant="body2" noWrap>
                                      {label}
                                    </Typography>
                                  </Grid>
                                  <Grid
                                    item
                                    xs
                                    sx={{
                                      minWidth: 0,
                                    }}
                                  >
                                    {data.slice(0, 3).map((row, index) => {
                                      return (
                                        <Typography
                                          key={index}
                                          variant="body2"
                                          noWrap
                                        >
                                          {row[columnId]}
                                        </Typography>
                                      );
                                    })}
                                  </Grid>
                                  <Grid
                                    item
                                    sx={{
                                      width: 250,
                                    }}
                                  >
                                    <DataDropdownField
                                      options={[
                                        {
                                          label: 'Do not import',
                                          value: 'do_not_import',
                                        },
                                        ...importFields,
                                      ]}
                                      value="do_not_import"
                                      onChange={(event) => {
                                        if (
                                          !event.target.value ||
                                          event.target.value === 'do_not_import'
                                        ) {
                                          setMappedFields(
                                            (prevMappedFields) => {
                                              return omit(
                                                prevMappedFields,
                                                columnId
                                              );
                                            }
                                          );
                                        } else {
                                          setMappedFields(
                                            (prevMappedFields) => {
                                              return {
                                                ...prevMappedFields,
                                                [columnId]: event.target.value,
                                              };
                                            }
                                          );
                                        }
                                      }}
                                      fullWidth
                                      InputProps={{
                                        sx: {
                                          bgcolor: palette.background.paper,
                                        },
                                      }}
                                      showClearButton={false}
                                      error={multipleFieldsMappedtoSameAttribute.includes(
                                        String(columnId)
                                      )}
                                    />
                                  </Grid>
                                </Grid>
                              </Box>
                            );
                          })}
                        </Stack>
                      );
                    case 'Import':
                      return (
                        <>
                          <Typography
                            variant="h2"
                            sx={{
                              fontSize: 24,
                            }}
                          >
                            Confirm {recordLabelPlural} Importation
                          </Typography>
                          <Typography>
                            {addThousandCommas(data.length)}{' '}
                            {data.length === 1
                              ? lowercaseRecordLabelSingular
                              : lowercaseRecordLabelPlural}{' '}
                            will be imported when you confirm
                          </Typography>
                        </>
                      );
                  }
                })()}
              </Box>
            </>
          );
        })()}
      </ModalPopup>
    ),
  };
};
