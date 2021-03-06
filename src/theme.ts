import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#FBC02D",
          color: "#FFFFFF",
          fontSize: "1rem",
          "&:hover": {
            backgroundColor: "#FBC02D",
          },
          borderRadius: 70,
          marginTop: 15,
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#FBC02D",
    },
    secondary: {
      main: "#FFFFFF",
      light: "#495057",
    },
  },
});

export default theme;
