import { Link } from "react-router-dom";
import "./NotFound.scss";
import { useEffect } from "react";

function NotFound() {
  useEffect(() => {
    document.title = "404 | Kasa";
  }, []);

  return (
    <div className="notfound">
      <h1>404</h1>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/">Return to home page</Link>
    </div>
  );
}

export default NotFound;
