// components imports
import Footer from "../components/Footer";
import Header from "../components/Header";
import Meta from "../components/Meta";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
