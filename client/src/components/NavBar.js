import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div className="navbar">
            <img src='.../public/E-wallet-logo.png' alt="Logo" />
            <a href="https://www.youtube.com/watch?v=jOTeBVtlnXU" target="blank">Husslers anthem</a>
            <Link to="/">Home</Link>
            <Link to="/account">Account</Link>
            <Link to="/exchange-rates">Exchange Rates</Link>
            <Link to="/reminders">Reminders</Link>
            <Link to="/money">My Money</Link>
            <Link to="/login">Log out</Link>
        </div>
     );
}
 
export default NavBar;