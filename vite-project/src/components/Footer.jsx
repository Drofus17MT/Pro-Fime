export default function Footer() {
  return (
    <footer id="contacto">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Fundación PROFIME</h3>
          <p>Facultad de Ingeniería Mecánica y Eléctrica</p>
          <p>Universidad Autónoma de Nuevo León</p>
          <p style={{ marginTop: "1.5rem", fontWeight: 500 }}>
            FUNDACIÓN PROFIME U.A.N.L. A.C.
          </p>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Pedro de Alba SN, Niños Héroes</p>
          <p>Ciudad Universitaria, 66455</p>
          <p>San Nicolás de los Garza, N.L.</p>
          <p style={{ marginTop: "1rem" }}>Teléfono: <a href="tel:+528132460363" className="contact-link">81 3246-0363</a></p>
          <p><a href="https://wa.me/528132460363" className="whatsapp-link">Escríbenos por WhatsApp</a></p>
          <p>Correo: <a href="mailto:contacto@profime.org" className="contact-link">contacto@profime.org</a></p>
        </div>
        <div className="footer-section">
          <h3>Institucional</h3>
          <a href="https://www.uanl.mx/" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/logos/logo-uanl.png"
              className="footer-logo"
              alt="UANL"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a href="https://www.fime.uanl.mx/" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/logos/logo-fime.png"
              className="footer-logo"
              alt="FIME"
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Fundación PROFIME. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
