// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e13435', // Button color
    },
    background: {
      default: '#060607', // Background color for most sections
      paper: '#131627', // Background color for some sections
    },
    text: {
      primary: '#d6effe', // Text color for headers
      secondary: '#a8aeb5', // Text color for content/paragraphs
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
