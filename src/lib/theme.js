import { createTheme } from "@mui/material/styles";

/**
 * The app theme. Pink is the primary colour, with a few very light pink
 * surfaces so the different regions (top bar, user list, content, comments)
 * stay easy to tell apart.
 */
const theme = createTheme({
  palette: {
    primary: {
      main: "#e91e63",
      light: "#ff6090",
      dark: "#b0003a",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f06292",
    },
    background: {
      default: "#fff0f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#3b2a30",
      secondary: "#7a5a63",
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily:
      '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
});

export default theme;