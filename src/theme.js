import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// import ProximaNova from "./fonts/ProximaNova-Regular.woff2";
// import ProximaNovaBold from "./fonts/ProximaNova-Bold.woff2";
// import ProximaNovaBoldItalic from "./fonts/ProximaNova-BoldIt.woff2";
// import ProximaNovaCondensed from "./fonts/ProximaNovaCond-Regular.woff2";
// import ProximaNovaCondensedBold from "./fonts/ProximaNovaCond-Bold.woff2";
// import ProximaNovaItalic from "./fonts/ProximaNova-RegularIt.woff2";

const serifFont = "'Factoria', serif";
const monospaceFont = "'Proxima Nova Condensed', monospace";
const sansSerifFont = "'Proxima Nova', sans-serif";

let theme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "rgb(32, 120, 146)",
        }
      }
    }
  },
  palette: {
    primary: {
      light: "#42A7C6",
      main: "#207892"
    },
    secondary: {
      main: "#22344D"
    },
    info: {
      light: "#FEF7CD",
      main: "#FCD502"
    },
    warning: {
      main: "#B11F29"
    }
  },
  typography: {
    color: "#090808",
    fontFamily: sansSerifFont,
    fontSize: 28,
    lineHeight: 40,
    h2: {
      fontSize: "3.375rem",
      fontWeight: "bold",
      textTransform: "uppercase"
    },
    h3: {
      fontFamily: monospaceFont,
      fontSize: "2.4rem",
      fontWeight: "bold",
      textTransform: "uppercase"
    },
    body2: {
      fontFamily: monospaceFont,
      fontSize: "2rem"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#FCD502",
          borderRadius: 5,
          color: "#22344D",
          fontFamily: monospaceFont,
          fontSize: 18,
          fontWeight: "bold",
          padding: "9px 14px",
          "&:active, &:focus, &:hover": {
            backgroundColor: "#22344D",
            color: "#fff"
          }
        },
        outlinedPrimary: {
          backgroundColor: "transparent",
          borderColor: "#42A7C6",
          borderRadius: 15,
          borderWidth: 5,

          "&:active, &:focus, &:hover": {
            backgroundColor: "#42A7C6",
            borderColor: "#42A7C6",
            borderWidth: 5,
            color: "#fff"
          }
        }
      }
    }
  }
});

theme.typography = {
  ...theme.typography,
  lineHeight: "1.25em",
  [theme.breakpoints.up("md")]: {
    lineHeight: 40
  }
};

theme = responsiveFontSizes(theme);

export default theme;
