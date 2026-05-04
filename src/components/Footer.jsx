function Footer() {
  return (
    <footer id="contacto">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Fundación PROFIME</h3>
          <p>Pro Facultad de Ingeniería Mecánica y Eléctrica</p>
          <p>Universidad Autónoma de Nuevo León</p>
          <p style={{ marginTop: '1.5rem', fontWeight: 500 }}>FUNDACIÓN PROFIME U.A.N.L. A.C.</p>
        </div>
        <div className="footer-section">
          <h3>Enlaces</h3>
          <a href="/#nosotros">Nosotros</a>
          <a href="/#valores">Valores</a>
          <a href="/#estudiantes">Movilidad Estudiantil</a>
          <a href="/#aliados">Aliados Estratégicos</a>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Pedro de Alba SN, Niños Héroes</p>
          <p>Ciudad Universitaria, 66455</p>
          <p>San Nicolás de los Garza, N.L.</p>
          <p style={{ marginTop: '1rem' }}>Teléfono: 81 1425-5290</p>
          <p>contacto@fundacionprofime.org</p>
        </div>
        <div className="footer-section">
          <h3>Institucional</h3>
          <a href="https://www.uanl.mx/" target="_blank" rel="noopener noreferrer">
            <img src="/images/logos/logo-uanl.png" className="footer-logo" alt="UANL" />
          </a>
          <a href="https://www.fime.uanl.mx/" target="_blank" rel="noopener noreferrer">
            <img src="/images/logos/logo-fime.png" className="footer-logo" alt="FIME" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Fundación PROFIME. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
