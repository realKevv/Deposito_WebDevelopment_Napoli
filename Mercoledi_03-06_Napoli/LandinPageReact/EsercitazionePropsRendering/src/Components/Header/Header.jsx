import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>MyApp👌</h1>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <a href="#home">Home</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </ul>
      </nav>
    </header>
  );

  
}
