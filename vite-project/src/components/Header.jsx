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
  { label: "EVENTOS", to: "/eventos" },
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
  return (
    <header id="header">
      <nav>
        <div className="logo-container">
          <Link to="/" className="logo-link" aria-label="Ir a la página de inicio de Fundación PROFIME">
            <img
              src="/images/logos/logo_profime.png"
              alt="Logo PROFIME"
              className="logo-img"
              width="797"
              height="378"
            />
          </Link>
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className={item.children ? "dropdown" : undefined}>
                {item.children ? (
                  <>
                    <a href={item.href}>
                      {item.label}
                      <span className="arrow">▾</span>
                    </a>
                    <ul className="dropdown-menu">
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <Link to={child.to}>{child.label}</Link>
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
