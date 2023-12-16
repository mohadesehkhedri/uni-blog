import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  // palette: {
  //   primary: {
  //     // main: "#ff4444"
  //   }
  // },
  typography: {
    fontFamily: [
      'Josefin Sans',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;