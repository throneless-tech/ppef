import { createTheme } from "@mui/material/styles";

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
    }
  },
  typography: {
    color: "#090808",
    fontFamily: sansSerifFont
  }
});

export default theme;
