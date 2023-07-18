import {
  Button,
  Stack,
  Tooltip,
  Typography,
  outlinedInputClasses,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ReactNode } from 'react';

import DataDropdownField, {
  DataDropdownFieldProps,
  dataDropdownFieldClasses,
} from '../../InputFields/DataDropdownField';
import { ElementTool } from '../../SearchSyncToolbar';
import { TimeScaleOption, timeScaleOptions } from '../models';

export type SelectTimeScaleCallbackFunction = (
  timeScale: TimeScaleOption | null
) => void;

export interface TimeScaleToolProps {
  selectedTimeScale: TimeScaleOption;
  supportedTimeScales?: TimeScaleOption[];
  onSelectTimeScale?: SelectTimeScaleCallbackFunction;
  label?: ReactNode;
}

export const useTimeScaleTool = ({
  selectedTimeScale,
  supportedTimeScales = [...timeScaleOptions],
  onSelectTimeScale,
  label = 'Timescale',
}: TimeScaleToolProps) => {
  const { breakpoints } = useTheme();
  const isSmallScreenSize = useMediaQuery(breakpoints.down('sm'));

  const dataDropdownProps: DataDropdownFieldProps = {
    placeholder: label as string,
    size: 'small',
    value: selectedTimeScale,
    onChange: (event) => {
      onSelectTimeScale?.((event.target.value as any) || null);
    },
    showClearButton: false,
    InputProps: {
      sx: {
        height: 32,
        pr: 0.5,
        [`.${outlinedInputClasses.notchedOutline}`]: {
          border: 'none',
        },
      },
    },
    WrapperProps: {
      sx: {
        [`.${dataDropdownFieldClasses.selectedOptionsWrapper}`]: {
          top: 3,
          width: 'calc(100% - 22px) !important',
        },
      },
    },
    enableLoadingState: false,
  };
  const buttonElement = (
    <Button
      color="inherit"
      variant="contained"
      size="small"
      disableRipple
      sx={{
        minWidth: 0,
        p: 0,
      }}
    >
      <DataDropdownField
        {...dataDropdownProps}
        options={supportedTimeScales.map((timeScaleOption) => {
          return {
            value: timeScaleOption,
            label: timeScaleOption,
          };
        })}
        sx={{
          width: 90,
        }}
      />
    </Button>
  );

  return {
    element: (
      <Stack
        direction="row"
        sx={{
          gap: 0.5,
          alignItems: 'center',
        }}
      >
        {!isSmallScreenSize ? (
          <Typography variant="body2">{label}:</Typography>
        ) : null}
        {buttonElement}
      </Stack>
    ),
    elementMaxWidth: 150,
    collapsedElement: <Tooltip title={label}>{buttonElement}</Tooltip>,
    collapsedElementMaxWidth: 90,
  } as ElementTool;
};
