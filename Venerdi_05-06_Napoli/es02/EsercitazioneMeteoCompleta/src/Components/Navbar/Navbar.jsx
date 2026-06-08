import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                MeteoApp
            </div>

            <div className='nav-links'>
                <NavLink to="/"
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                    Home
                </NavLink>
            </div>
        </nav >
    )
}

export default Navbar;

