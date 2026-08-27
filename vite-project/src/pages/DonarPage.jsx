import PageHero from "../components/PageHero";

const BENEFITS = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Becas de Movilidad",
    desc: "Otorgando becas de movilidad para estudiantes de FIME en el extranjero",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="3" y1="9" x2="21" y2="9" />
      </svg>
    ),
    title: "Equipamiento",
    desc: "Equipando aulas y laboratorios en FIME con tecnología de vanguardia",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Diplomados",
    desc: "Ofreciendo diplomados en eficiencia energética y desarrollo profesional",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Red de Contactos",
    desc: "Conectando a cientos de EXAFIMES con oportunidades de desarrollo",
  },
];

export default function DonarPage() {
  const handleCopyCLABE = async () => {
    try {
      await navigator.clipboard.writeText("07 2580 0063 5641 1442");
    } catch (err) {
      console.error("No se pudo copiar:", err);
    }
  };

  return (
    <>
      <PageHero
        title="Haz Tu Donativo"
        subtitle="🤝 ¡Tu apoyo transforma vidas!"
      />
      <hr className="separator" />

      <div className="part" id="donation">
        <div className="donation-container">
          <div className="donation-intro">
            <h2 className="donation-section-title">Tu Contribución Hace la Diferencia</h2>
            <p className="donation-intro-text">
              En la Fundación PROFIME, trabajamos día a día para fortalecer el vínculo entre la academia, la
              industria y nuestros egresados.
            </p>
            <p className="donation-intro-text">Gracias a personas como tú, hemos cambiado y mejorado vidas:</p>
          </div>

          <div className="donation-benefits-grid">
            {BENEFITS.map((b) => (
              <div key={b.title} className="donation-benefit-card">
                <div className="benefit-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="donation-call-to-action">
            <div className="cta-content">
              <h3>¿Quieres ser parte del cambio? 🙌</h3>
              <p>
                Tu donación, sin importar el monto, nos ayuda a continuar con nuestra misión de impulsar la
                formación profesional y el desarrollo integral de los estudiantes y egresados de la FIME.
              </p>
            </div>
          </div>

          <div className="donation-info-card">
            <div className="donation-info-header">
              <div className="donation-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
              </div>
              <h3>Realiza tu donativo de forma segura</h3>
            </div>

            <div className="donation-account-card">
              <div className="account-info-row">
                <span className="account-label">DONATIVO:</span>
                <span className="account-number">06 3564 1144</span>
              </div>
              <div className="account-info-row">
                <span className="account-label">CLABE:</span>
                <span className="account-clabe">07 2580 0063 5641 1442</span>
              </div>
              <button className="copy-button" onClick={handleCopyCLABE}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span>Copiar CLABE</span>
              </button>
            </div>

            <div className="donation-scholarship-info">
              <div className="scholarship-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                <div>
                  <p className="scholarship-title">BECAS MOVILIDAD INTL.</p>
                  <p className="scholarship-subtitle">FUNDACIÓN PROFIME</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="separator" />
    </>
  );
}
