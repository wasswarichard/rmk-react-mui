import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CloseIcon from '@mui/icons-material/Close';
import ReplayIcon from '@mui/icons-material/Replay';
import {
  Avatar,
  Box,
  Button,
  Card,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  alpha,
  darken,
  useTheme,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { useFormikContext } from 'formik';
import { CSSProperties, FC, useState } from 'react';

import { useFileUpload, useFormikValue } from '../hooks';
import { IFile, IFileUploadFunction } from '../interfaces';
import { ITextFieldProps } from './InputFields';

export interface IImageSelectorProps
  extends Pick<ITextFieldProps, 'helperText' | 'error' | 'onChange' | 'name'> {
  value?: IFile[];
  onChange?: any;
  upload?: IFileUploadFunction;
}

export const ImageSelector: FC<IImageSelectorProps> = ({
  helperText,
  error,
  onChange,
  name,
  value,
  upload,
}) => {
  const { touched, errors } = (useFormikContext() as any) || {};
  value = useFormikValue({ value, name });

  error ??
    (error = (() => {
      if (errors && touched && name && touched[name]) {
        return Boolean(errors[name]);
      }
    })());

  const [fileField, setFileField] = useState<HTMLInputElement | null>(null);
  const { files: images, setFiles: setImages } = useFileUpload({
    fileField,
    upload,
    name,
    value,
    onChange,
  });

  const handleClickImageRemoveButton = (index: number) => {
    images.splice(index, 1);
    setImages([...images]);
  };

  const theme = useTheme();
  const alphaBGColor = alpha(theme.palette.text.primary, 0.3);
  const wrapperStyle: CSSProperties = {};
  error && (wrapperStyle.borderColor = theme.palette.error.main);

  return (
    <FormControl fullWidth error={error}>
      <Card
        sx={{
          p: 1.5,
          borderRadius: 1,
          bgcolor: darken(theme.palette.background.paper, 0.03),
          borderStyle: 'dashed',
          ...wrapperStyle,
        }}
      >
        <input
          type="file"
          ref={(fileField) => {
            setFileField(fileField);
          }}
          multiple
          accept=".jpg,.png,.jpeg,.bmp"
          style={{ display: 'none' }}
        />
        <Grid container spacing={1.5}>
          {images.map(
            (
              {
                base64,
                uploading,
                uploadProgress,
                uploadError,
                cancelUpload,
                retryUpload,
              },
              index
            ) => {
              return (
                <Grid item xs={4} sm={3} md={2} key={index}>
                  <Card
                    sx={{
                      borderRadius: 1,
                      position: 'relative',
                    }}
                  >
                    <Avatar
                      sx={{
                        borderRadius: 1,
                        width: '100%',
                        height: 80,
                        bgcolor: '#fff',
                        opacity: uploading || uploadError ? 0.3 : 1,
                      }}
                      src={base64}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        right: 5,
                        top: 5,
                        display: 'flex',
                        gap: '5px',
                      }}
                    >
                      <IconButton
                        onClick={() => {
                          handleClickImageRemoveButton(index);
                          cancelUpload && cancelUpload();
                        }}
                        sx={{
                          bgcolor: alphaBGColor,
                          '&:hover': {
                            bgcolor: alphaBGColor,
                          },
                          color: theme.palette.background.paper,
                        }}
                        size="small"
                      >
                        <CloseIcon sx={{ fontSize: '12px' }} />
                      </IconButton>
                      {retryUpload && (
                        <IconButton
                          onClick={retryUpload}
                          sx={{
                            bgcolor: alphaBGColor,
                            '&:hover': {
                              bgcolor: alphaBGColor,
                            },
                            color: theme.palette.background.paper,
                          }}
                          size="small"
                        >
                          <ReplayIcon sx={{ fontSize: '12px' }} />
                        </IconButton>
                      )}
                    </Box>
                    {uploadProgress && (uploading || uploadError) ? (
                      <Box
                        sx={{
                          position: 'absolute',
                          height: 3,
                          borderRadius: '4px',
                          width: `${uploadProgress}%`,
                          bgcolor: uploadError ? '#D04437' : '#006BFF',
                          bottom: 0,
                        }}
                      />
                    ) : null}
                  </Card>
                </Grid>
              );
            }
          )}
          <Grid item xs={4} sm={3} md={2}>
            <Button
              onClick={() => {
                fileField?.click();
              }}
              sx={{
                borderRadius: 1,
                width: '100%',
                height: `80px !important`,
                bgcolor: theme.palette.background.paper,
                color: '#BABCC1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                border: 'none',
                '&:hover': {
                  bgcolor: theme.palette.background.paper,
                },
              }}
            >
              <CameraAltIcon />
              <Typography
                variant="body2"
                sx={{ fontSize: 12, color: '#BABCC1' }}
              >
                Add Photos
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Card>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default ImageSelector;
