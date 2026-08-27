import PageHero from "../components/PageHero";

export default function ContactoPage() {
  return (
    <>
      <PageHero
        title="Contáctanos"
        subtitle="Estamos aquí para ayudarte"
      />
      <hr className="separator" />

      <section className="part">
        <div className="contact-cards">
          <div className="value-card">
            <div className="value-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3>Ubicación</h3>
            <p>Centro de Competitividad y Productividad en Ingeniería</p>
            <p>Facultad de Ingeniería Mecánica y Eléctrica</p>
            <p>Pedro de Alba SN, Ciudad Universitaria</p>
            <p>66455 San Nicolás de los Garza, N.L.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3>Teléfono</h3>
            <p><strong>81 3246 0363</strong></p>
            <p className="small-text">Horario: 8:00 AM - 4:00 PM</p>
            <p className="small-text">Lunes a Viernes</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h3>Correo Electrónico</h3>
            <p><strong>contacto@profime.org</strong></p>
            <p className="small-text">Te responderemos en menos de 24 horas</p>
          </div>
        </div>
      </section>
      <hr className="separator" />

      <section className="part">
        <h2 className="section-title">¿Dónde encontrarnos?</h2>
        <p className="section-subtitle">
          Visítanos en nuestras oficinas del Centro de Competitividad y Productividad en Ingeniería
        </p>
        <div className="map-container">
          <iframe
            src="https://maps.google.com/maps?q=Centro%20de%20Competitividad%20y%20Productividad%20en%20Ingenier%C3%ADa%20%28CCPI%29&t=m&z=16&output=embed&iwloc=near"
            title="Centro de Competitividad y Productividad en Ingeniería (CCPI)"
            aria-label="Mapa de ubicación CCPI"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        </div>
      </section>
    </>
  );
}
