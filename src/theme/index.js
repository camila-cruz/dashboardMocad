import { createMuiTheme } from '@material-ui/core/styles';

const white = '#fff';
const black = '#000';
const gray = '#BFBFBF';
const hover = 'rgb(100 255 218 / 29%)';
const bgcolor = 'rgb(100 255 218 / 29%)';
const hovercolor = 'rgb(100 255 218 / 50%)';
const border = '#7983b9';

const theme = createMuiTheme({
  palette: {
    common: {
      white: white,
      black: black,
      gray: gray,
      hover: hover,
      bgcolor: bgcolor,
      hovercolor: hovercolor,
      border: border,
    },
    appbar: {
      background: '#252A48',
      border: '#7983b9',
    },
    drawer: {
      background: '#252A48',
      border: '#7983b9',
    },
    content: {
      background: '#1B1F38',
    },
    primary: {
      main: '#44ab91',
      contrastText: white,
    },
    secondary: {
      main: '#252A48',
    },
  },
  // action: {
  //   hover: border,
  // },
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: 36,
      color: white,
      lineHeight: 1.5,
      padding: 0,
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: white,
        fontSize: '1rem',
      },
    },
    MuiAppBar: {
      root: {
        zIndex: 1201,
      },
    },
  },
});

export default theme;
