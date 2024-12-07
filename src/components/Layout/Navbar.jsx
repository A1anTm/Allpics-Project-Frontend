import { Link } from 'react-router-dom';
import LoginButton from '../Auth/LoginButton';
import RegisterButton from '../Auth/RegisterButton';

function Navbar() {
return (
    <nav className="navbar">
    <div className="navbar-left">
        <Link to="/" className="logo-link">
        AllPics
        </Link>
    </div>
    <div className="navbar-right">
        <LoginButton />
        <RegisterButton />
    </div>
    </nav>
);
}

export default Navbar;