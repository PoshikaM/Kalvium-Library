import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="nav-left">
        <img src={logo} alt="Kalvium Library Logo" />
        <h1>Kalvium Library</h1>
      </Link>

      <div className="nav-right">
        <Link to="/Register">
          <button className="register-btn">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
