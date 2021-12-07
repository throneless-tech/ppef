import { createTheme } from "@mui/material/styles";

// import ProximaNova from "./fonts/ProximaNova-Regular.woff2";
// import ProximaNovaBold from "./fonts/ProximaNova-Bold.woff2";
// import ProximaNovaBoldItalic from "./fonts/ProximaNova-BoldIt.woff2";
// import ProximaNovaCondensed from "./fonts/ProximaNovaCond-Regular.woff2";
// import ProximaNovaCondensedBold from "./fonts/ProximaNovaCond-Bold.woff2";
// import ProximaNovaItalic from "./fonts/ProximaNova-RegularIt.woff2";

const serifFont = "'Factoria', serif";
const monospaceFont = "'Proxima Nova Condensed', monospace";
const sansSerifFont = "'Proxima Nova', sans-serif";

const theme = createTheme({
  palette: {
    primary: {
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
    h2: {
      fontSize: "2.6rem",
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
          fontSize: "1.2rem",
          fontWeight: "bold",
          padding: "9px 14px",
          "&:active, &:focus, &:hover": {}
        },
        outlinedPrimary: {
          backgroundColor: "transparent",
          borderRadius: 15,
          borderWidth: 5,

          "&:active, &:focus, &:hover": {
            borderWidth: 5
          }
        }
      }
    }
  }
});

export default theme;
