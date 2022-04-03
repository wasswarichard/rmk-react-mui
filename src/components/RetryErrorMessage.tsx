import RefreshIcon from '@mui/icons-material/Refresh';
import { IconButton, Tooltip } from '@mui/material';
import { FC } from 'react';

export interface IRetryErrorMessageProps {
  message: string;
  retry?: () => void;
}

export const RetryErrorMessage: FC<IRetryErrorMessageProps> = ({
  message,
  retry,
}) => {
  return (
    <>
      {message}
      {retry && (
        <>
          {' '}
          <Tooltip title="Try again" arrow>
            <IconButton
              onClick={() => retry()}
              size="small"
              sx={{ width: 12, height: 12 }}
            >
              <RefreshIcon
                color="inherit"
                sx={{ display: 'block', width: 18, height: 18 }}
              />
            </IconButton>
          </Tooltip>
        </>
      )}
    </>
  );
};

export default RetryErrorMessage;
