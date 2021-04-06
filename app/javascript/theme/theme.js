import { createMuiTheme } from "@material-ui/core/styles";

import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Raleway", "Roboto"],
  },
});

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: "raleway",
        fontWeight: 600,
      },
    },
  },
});

export default theme;
