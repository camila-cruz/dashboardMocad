import { createMuiTheme } from '@material-ui/core/styles';

const white = '#fff';
const black = '#000';
const gray = '#BFBFBF';
const hover = 'rgb(100 255 218 / 29%)';
const bgColor = 'rgb(100 255 218 / 29%)';
const hoverColor = 'rgb(100 255 218 / 50%)';
const border = '#7983b9';

const theme = createMuiTheme({
  palette: {
    common: {
      white: white,
      black: black,
      gray: gray,
      hover: hover,
      bgColor: bgColor,
      hoverColor: hoverColor,
      border: border,
    },
    primary: {
      main: '#1B1F38',
    },
    secondary: {
      main: '#252A48',
    },
  },
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
