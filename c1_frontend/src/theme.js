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
      secondary: "#274253",
    },
    background: {
      default: "#F4F4F4",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  overrides: {
    MuiButton: {
      root: {
        maxWidth: "30rem",
      },
      contained: {
        backgroundColor: "#C9D7DD",
        color: "#274253",
      },
    },
    MuiInputBase: {
      root: {
        maxWidth: "30rem",
      },
    },
  },
});
