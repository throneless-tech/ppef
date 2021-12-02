// base imports
import theme from "../theme.js";

// Material UI imports
import { ThemeProvider } from "@mui/material/styles";

// components imports
import Footer from "../components/Footer";
import Header from "../components/Header";
import Meta from "../components/Meta";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <ThemeProvider theme={theme}>
        <Header />
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
}
