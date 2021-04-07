import WebFont from "webfontloader";
import { createMuiTheme } from "@material-ui/core/styles";

WebFont.load({
  google: {
    families: ["Raleway", "Roboto:400,500"],
  },
});

const theme = createMuiTheme({
  palette: {
    primary: { main: "#6200EE" },
    secondary: { main: "#03DAC5" },
  },
  overrides: {
    MuiTypography: {
      root: {
        fontFamily: "roboto",
      },
      h1: {
        fontFamily: "raleway",
        fontWeight: 600,
      },
      h3: {
        fontWeight: 400,
      },
      button: {
        fontSize: "0.9375rem",
        fontWeight: 500,
      },
    },
  },
});

theme.typography.h1 = {
  [theme.breakpoints.down("lg")]: {
    fontSize: "4vw",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "8vw",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "12vw",
  },
};

theme.typography.h3 = {
  [theme.breakpoints.down("lg")]: {
    fontSize: "2vw",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "4vw",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "6vw",
  },
};

theme.typography.button = {
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.1rem",
  },
};

export default theme;
