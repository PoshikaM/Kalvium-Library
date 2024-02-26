import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

function Navbar(){

    return(
        <div className="Navbar">

            {/* Page title and logo */}
            <Link to='./' style={{ textDecoration: 'none' }}>
                <div className="flex">
                    <h1>Kalvium Library</h1>
                    <img src={logo} alt="" />
                </div>
            </Link>

            {/* Register button to go to Registration Form Page */}
            <Link to='./Register'>
                <button className="Register">Register</button>
            </Link>

        </div>
    )
}

export default Navbar;