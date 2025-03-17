import { createTheme } from "@mui/material";

export const Theme = createTheme({
  direction: "rtl",
  mode: "dark",
  palette: {
    primary: {
      main: "#7be9fd"
    },
    secondary:{
      main:"#fff"
    },
    success: {
      main: "#009688"
    },
    warning: {
      main: "#4CCD99"
    },
    info: {
      main: "#007F73"
    }
  },
  typography: {
    fontFamily: "roboto,Vazir,Gohar,Leila,rockinsoda"
  }
});
