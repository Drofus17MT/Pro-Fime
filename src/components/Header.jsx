import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header({ showSearch = false }) {
  useEffect(() => {
    const header = document.getElementById('header');
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header id="header">
      <nav>
        <div className="logo-container">
          <Link to="/">
            <img
              src="/images/logos/logo_profime.png"
              alt="Logo PROFIME"
              className="logo-img"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </Link>
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            <li className="dropdown">
              <a href="/#nosotros">ACERCA DE<span className="arrow">▾</span></a>
              <ul className="dropdown-menu">
                <li><Link to="/consejo-directivo">Consejo Directivo</Link></li>
                <li><Link to="/historial-de-presidentes">Historial de Presidentes</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="/#logros">LOGROS<span className="arrow">▾</span></a>
              <ul className="dropdown-menu">
                <li><Link to="/logros-fundacion">Logros de la Fundación</Link></li>
                <li><Link to="/alumnos-beneficiados">Alumnos Beneficiados</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="/#diplomados">DIPLOMADOS<span className="arrow">▾</span></a>
              <ul className="dropdown-menu">
                <li><Link to="/diplomado/4">4° Diplomado PROFIME</Link></li>
                <li><Link to="/diplomado/17">17° Diplomado PROFIME</Link></li>
                <li><Link to="/diplomado/18">18° Diplomado PROFIME</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="/#galeria">GALERÍA<span className="arrow">▾</span></a>
              <ul className="dropdown-menu">
                <li><Link to="/generaciones">Generaciones</Link></li>
                <li><Link to="/becados">Becados</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="/donar">HAZ TU DONATIVO<span className="arrow">▾</span></Link>
              <ul className="dropdown-menu">
                <li><Link to="/donar">Realizar Donativo</Link></li>
                <li><Link to="/historial-donaciones">Historial de Donaciones</Link></li>
              </ul>
            </li>
            <li><Link to="/contacto">CONTACTO</Link></li>
          </ul>
          {showSearch && (
            <div className="search-container">
              <input type="text" className="search-input" placeholder="Buscar..." />
              <button type="button" className="search-button">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
