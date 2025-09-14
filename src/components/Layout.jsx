import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This is where page content will render */}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
