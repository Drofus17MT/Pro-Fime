import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const NAV_ITEMS = [
  {
    label: "ACERCA DE",
    href: "#nosotros",
    children: [
      { label: "Consejo Directivo", to: "/consejo-directivo" },
      { label: "Historial de Presidentes", to: "/historial-de-presidentes" },
    ],
  },
  {
    label: "LOGROS",
    href: "#logros",
    children: [
      { label: "Logros de la Fundación", to: "/logros" },
      { label: "Alumnos Beneficiados", to: "/alumnos-beneficiados" },
    ],
  },
  {
    label: "DIPLOMADOS",
    href: "#diplomados",
    children: [
      { label: "4° Diplomado PROFIME", to: "/diplomado/4" },
      { label: "17° Diplomado PROFIME", to: "/diplomado/17" },
      { label: "18° Diplomado PROFIME", to: "/diplomado/18" },
    ],
  },
  {
    label: "EVENTOS",
    to: "/eventos",
  },
  /*
  {
    label: "EVENTOS",
    href: "#eventos",
    children: [
      { label: "Eventos", to: "/eventos" },
      { label: "Juntas", to: "/juntas" },
    ],
  },
  */
  { label: "BOLETINES", to: "/boletines" },
  {
    label: "GALERÍA",
    href: "#galeria",
    children: [
      { label: "Generaciones", to: "/generaciones" },
      { label: "Becados", to: "/becados" },
    ],
  },
  {
    label: "DONATIVO",
    href: "#donativos",
    children: [
      { label: "Realizar Donativo", to: "/donar" },
      { label: "HISTORIAL DE DONACIONES", to: "/historial-de-donaciones" },
    ],
  },
  { label: "CONTACTO", to: "/contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark-mode"));
  const [logoOpacity, setLogoOpacity] = useState(1);

  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);

  // Listen for dark mode changes from the toggle button with logo fade
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const dark = document.documentElement.classList.contains("dark-mode");
      setLogoOpacity(0);
      setTimeout(() => {
        setIsDark(dark);
        setLogoOpacity(1);
      }, 200);
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const header = document.getElementById("header");
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle("scrolled", window.pageYOffset > 30);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header id="header">
      <nav>
        <div className="logo-container">
          <Link
            to="/"
            className="logo-link"
            aria-label="Ir a la página de inicio de Fundación PROFIME"
          >
            <img
              src={isDark ? "/images/logos/logo_profime_oscuro.png" : "/images/logos/logo_profime_claro.png"}
              alt="Logo PROFIME"
              className="logo-img"
              style={{ opacity: logoOpacity, transition: "opacity 0.4s ease" }}
              width="797"
              height="378"
            />
          </Link>
        </div>
        <button
          className={`hamburger${menuOpen ? " active" : ""}`}
          onClick={toggleMenu}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
        {menuOpen && <div className="nav-overlay visible" onClick={toggleMenu} />}
        <div className={`nav-right${menuOpen ? " open" : ""}`}>
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className={item.children ? "dropdown" : undefined}
              >
                {item.children ? (
                  <>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleDropdown(item.label);
                      }}
                    >
                      {item.label}
                      <span className="arrow">▾</span>
                    </a>
                    <ul className="dropdown-menu">
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <Link to={child.to} onClick={() => setMenuOpen(false)}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link to={item.to}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
