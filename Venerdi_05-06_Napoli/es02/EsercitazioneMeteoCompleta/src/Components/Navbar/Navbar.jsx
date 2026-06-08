import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>🌤 MeteoApp</div>
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Home
            </NavLink>
        </nav>
    )
}

export default Navbar;

