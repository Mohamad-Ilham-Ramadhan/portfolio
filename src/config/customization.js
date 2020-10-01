import { createMuiTheme, lighten } from "@material-ui/core/styles";
import {
  poppins100,
  poppins200,
  poppins300,
  poppins400,
  poppins600,
  poppins700,
} from "./fonts";

// Colors
// ## Primary
const pink = "hsla(350, 78%, 67%, 1)";

// ## Secondary
const lightBlue = "hsla(216, 78%, 67%, 1)";
const lightGreen = "hsla(96, 79%, 66%, 1)";

// ## Neutral
const darkBlue = "hsla(240, 28%, 14%, 1)";
const veryDarkBlue = "hsla(240, 26%, 7%, 1)";
const powerBG = "hsla(240, 21%, 13%, 1)";

const customizedTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  palette: {
    primary: {
      main: pink,
    },
    secondary: {
      main: lightBlue,
      lightGreen: lightGreen,
    },
    neutral: {
      darkBlue,
      veryDarkBlue,
      powerBG,
    },
  },
  typography: {
    fontFamily: "Poppins, Roboto, Helvetica, Arial, sans-serif",
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          poppins100,
          poppins200,
          poppins300,
          poppins400,
          poppins600,
          poppins700,
        ],
        body: {
          fontFamily: "Poppins, Roboto, Helvetica, Arial, sans-serif",
        },
      },
    },
  },
});

export default customizedTheme;
