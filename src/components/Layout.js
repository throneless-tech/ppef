// base imports
import theme from "../theme.js";

// Material UI imports
import { ThemeProvider } from "@mui/material/styles";

// components imports
import Meta from "../components/Meta";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <ThemeProvider theme={theme}>
        <div>
          <main>{children}</main>
        </div>
      </ThemeProvider>
    </>
  );
}
