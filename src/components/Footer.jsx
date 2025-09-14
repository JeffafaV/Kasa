import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img src="footer-logo.png" alt="footer-logo" />
      <p>© {new Date().getFullYear()} MySite. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
