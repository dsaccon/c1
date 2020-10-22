import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6DDA43",
      contrastText: "#FFFFFF",
    },
    secondary: {
      dark: "#274253",
      main: "#296D8E",
      light: "#C9D7DD",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#FFFFFF",
    },
    background: {
      default: "#F4F4F4",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        maxWidth: "30rem",
      },
    },
  },
});
