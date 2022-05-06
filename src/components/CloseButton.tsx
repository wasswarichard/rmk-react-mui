import CloseIcon from '@mui/icons-material/Close';
import {
  IconButton,
  IconButtonProps,
  SvgIconProps,
  alpha,
  useTheme,
} from '@mui/material';
import { ReactNode, forwardRef } from 'react';

export interface ICloseButtonProps extends IconButtonProps {
  IconProps?: SvgIconProps;
  icon?: ReactNode;
}

export const CloseButton = forwardRef<HTMLButtonElement, ICloseButtonProps>(
  function CloseButton({ icon, sx, IconProps, ...rest }, ref) {
    const { palette } = useTheme();
    const alphaBGColor = alpha(palette.text.primary, 0.3);
    return (
      <IconButton
        ref={ref}
        {...rest}
        sx={{
          bgcolor: alphaBGColor,
          '&:hover': {
            bgcolor: alphaBGColor,
          },
          color: palette.background.paper,
          ...sx,
        }}
      >
        {icon ? icon : <CloseIcon {...IconProps} />}
      </IconButton>
    );
  }
);

export default CloseButton;
