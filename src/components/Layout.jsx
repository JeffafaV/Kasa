import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="page">
      <Header />
      <main className="page__content">
        <Outlet /> {/* This is where page content will render */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
