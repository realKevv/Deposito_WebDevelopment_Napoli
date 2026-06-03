import './Navbar.css'


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <span className="logo"></span>
        <span>AziendaMia</span>
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#servizi">Servizi</a>
        <a href="#contatti">Contatti</a>
      </div>
    </nav>
  );
}