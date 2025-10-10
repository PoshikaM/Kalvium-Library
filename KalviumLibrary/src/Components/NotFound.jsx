import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <Link to="/">
        <button className="home-btn">Go Back Home</button>
      </Link>
    </div>
  );
}

export default NotFound;