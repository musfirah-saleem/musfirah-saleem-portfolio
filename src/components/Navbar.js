export default function Navbar() {
  return (
    <header>
      <div className="wrap nav">
        <a className="logo" href="#top" aria-label="Musfirah Saleem home">
          <span className="logo-badge">
            M<span className="logo-s">S</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Main">
          <a href="#about">About</a>
          <a href="#architecture">Architecture</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </nav>
        <a className="btn btn-pink btn-small" href="#contact">
          Hire Me
        </a>
      </div>
    </header>
  );
}
