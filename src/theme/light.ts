import { createTheme } from '@mui/material/styles';
import createPalette from '@mui/material/styles/createPalette';
import { getBaseTheme } from './base';

export const lightThemePalatte = createPalette({});

export const lightTheme = createTheme({
  ...getBaseTheme(lightThemePalatte),
});
