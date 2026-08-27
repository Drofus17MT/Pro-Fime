import { Link } from "react-router-dom";

const SLIDES = [
  {
    title: "Desayuno de la Fraternidad",
    subtitle: "Cartas de agradecimiento a las generaciones que realizaron a la FUNDACION PROFIME | 18 de octubre 2025",
    bg: "/images/slide/slide_1.png",
  },
  {
    title: "Cumplimos 22 años",
    subtitle: "Fundación PROFIME 2025",
    bg: "/images/slide/slide_2.png",
  },
  {
    title: "Carta de Agradecimiento",
    subtitle: "Generaciones donadoras a la Fundación PROFIME | 29 de octubre 2025",
    bg: "/images/slide/slide_3.png",
  },
];

const COUNTRIES = [
  { name: "Francia", flag: "/images/flags/francia.png", emoji: "🇫🇷" },
  { name: "España", flag: "/images/flags/espana.png", emoji: "🇪🇸" },
  { name: "Alemania", flag: "/images/flags/alemania.png", emoji: "🇩🇪" },
  { name: "Inglaterra", flag: "/images/flags/inglaterra.png", emoji: "🇬🇧" },
  { name: "Canadá", flag: "/images/flags/canada.png", emoji: "🇨🇦" },
  { name: "Chile", flag: "/images/flags/chile.png", emoji: "🇨🇱" },
  { name: "EE.UU.", flag: "/images/flags/estados-unidos.png", emoji: "🇺🇸" },
  { name: "Corea S.", flag: "/images/flags/corea-del-sur.png", emoji: "🇰🇷" },
  { name: "Irlanda", flag: "/images/flags/irlanda.png", emoji: "🇮🇪" },
  { name: "Colombia", flag: "/images/flags/colombia.png", emoji: "🇨🇴" },
  { name: "Brasil", flag: "/images/flags/brasil.png", emoji: "🇧🇷" },
  { name: "Australia", flag: "/images/flags/australia.png", emoji: "🇦🇺" },
];

const ALLIES = ["Katcon", "Meritor", "Metalsa", "Nemak", "Ternium", "Viakable", "Vitro"];

export default function HomePage() {
  return (
    <>
      <section style={{ padding: "100px 1rem" }}>
        <div className="contenedor-imagengrande">
          <img
            src="/images/slide/bannerdiplomado.png"
            alt="XIX Diplomado de Eficiencia Energética"
            style={{ width: "90%", height: 600, backgroundColor: "white", borderRadius: "1.5rem" }}
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section>
        <div style={{ paddingTop: 0, textAlign: "center" }}>
          <a
            href="/Boletinespdf/XIX_DIPLOMADO_EN_EFICIENCIA_ENERGETICA.pdf"
            download
            className="cta-button"
            style={{ fontSize: "2rem" }}
          >
            ¡Descarga la información haciendo clic aquí!
          </a>
        </div>
      </section>

      <section className="hero" id="inicio">
        <div className="hero-slider">
          {SLIDES.map((slide, i) => (
            <div key={i} className={`hero-slide${i === 0 ? " active" : ""}`}>
              <div className="hero-image" style={{ backgroundImage: `url('${slide.bg}')` }}>
                <div className="hero-overlay" />
              </div>
              <div className="hero-content">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-dots">
          {SLIDES.map((_, i) => (
            <span key={i} className={`dot${i === 0 ? " active" : ""}`} data-slide={i} />
          ))}
        </div>
        <div className="hero-cta-container">
          <Link to="/contacto" className="cta-button">¡Contáctanos!</Link>
        </div>
      </section>
      <hr className="separator" />

      <section className="part">
        <h2 className="section-title">Nuestra Historia</h2>
        <p className="section-subtitle">
          La única fundación dedicada exclusivamente a apoyar a los estudiantes de la Facultad
        </p>
        <div className="container-base">
          <div className="about-text">
            <h3>¿Quiénes Somos?</h3>
            <p>
              Un grupo de distinguidos egresados mostrando compromiso y disponibilidad correspondiendo a lo
              recibido de la Facultad de Ingeniería Mecánica y Eléctrica, en los aspectos tecnológicos,
              humanos y académicos.
            </p>
            <p>
              Nuestro objetivo es colaborar con la institución y sus alumnos, en diferentes estrategias y
              servicios, para seguir en la búsqueda de las metas de excelencia académica y desarrollo
              profesional.
            </p>
            <p>Para lograr el objetivo se creo una fundación en el año 2004.</p>
            <p>
              <strong>Somos la única Facultad de la UANL que cuenta con una fundación para apoyar a los alumnos.</strong>
            </p>
          </div>
        </div>
      </section>
      <hr className="separator" />

      <section className="part-gris" id="mision-vision">
        <div className="container-base">
          <h2 className="section-title">Misión y Visión</h2>
          <p className="section-subtitle">
            Conoce la misión y visión que guían el trabajo de la Fundación PROFIME.
          </p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-current-location">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 1a1 1 0 0 1 1 1v1.055a9.004 9.004 0 0 1 7.946 7.945h1.054a1 1 0 0 1 0 2h-1.055a9.004 9.004 0 0 1 -7.944 7.945l-.001 1.055a1 1 0 0 1 -2 0v-1.055a9.004 9.004 0 0 1 -7.945 -7.944l-1.055 -.001a1 1 0 0 1 0 -2h1.055a9.004 9.004 0 0 1 7.945 -7.945v-1.055a1 1 0 0 1 1 -1m0 4a7 7 0 1 0 0 14a7 7 0 0 0 0 -14m0 3a4 4 0 1 1 -4 4l.005 -.2a4 4 0 0 1 3.995 -3.8" />
                </svg>
              </div>
              <h3>Misión</h3>
              <p>
                Apoyar a la FIME de la UANL con recursos obtenidos a través de la impartición de cursos,
                seminarios, talleres, asesorías y donativos para realizar nuevos proyectos técnicos y de
                superación para sus estudiantes, así como Apoyar en los gastos para la movilidad a diferentes
                países de los estudiantes sobresalientes de bajos recursos y que hayan obtenido sus becas para
                continuar sus estudios.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 4c4.29 0 7.863 2.429 10.665 7.154l.22 .379l.045 .1l.03 .083l.014 .055l.014 .082l.011 .1v.11l-.014 .111a.992 .992 0 0 1 -.026 .11l-.039 .108l-.036 .075l-.016 .03c-2.764 4.836 -6.3 7.38 -10.555 7.499l-.313 .004c-4.396 0 -8.037 -2.549 -10.868 -7.504a1 1 0 0 1 0 -.992c2.831 -4.955 6.472 -7.504 10.868 -7.504zm0 5a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
                </svg>
              </div>
              <h3>Visión</h3>
              <p>
                Nuestra visión es "Ser una Fundación Líder y reconocida como una organización de excelencia,
                integrada por egresados de la Facultad de Ingeniería Mecánica y Eléctrica de la U.A.N.L
                distinguidos por su vocación de servicio y trayectoria profesional, aportando sus conocimientos
                y experiencias con la finalidad de apoyar a los estudiantes sobresalientes de recursos limitados
                que hayan obtenido sus becas en el extranjero".
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className="separator" />

      <section className="part" id="valores">
        <div className="container-base">
          <h2 className="section-title">Nuestros Valores</h2>
          <p className="section-subtitle">Principios fundamentales que guían nuestro trabajo y compromiso</p>
          <div className="values-grid">
            {[
              { title: "Educación", desc: "Promovemos la excelencia académica y el desarrollo integral de nuestros estudiantes mediante programas de apoyo." },
              { title: "Comunidad", desc: "Fortalecemos los lazos entre egresados, estudiantes y la institución para crear una red de apoyo permanente." },
              { title: "Innovación", desc: "Impulsamos la investigación y el desarrollo tecnológico de vanguardia en beneficio de la comunidad estudiantil." },
              { title: "Resultados", desc: "Medimos nuestro éxito por el impacto positivo y tangible en la vida profesional y académica de los estudiantes." },
            ].map((v) => (
              <div key={v.title} className="value-card">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#ffff" viewBox="0 0 16 16">
                    <path d="M8.211 2.047a0.5 0.5 0 0 0 -0.422 0l-7.5 3.5a0.5 0.5 0 0 0 0.025 0.917l7.5 3a0.5 0.5 0 0 0 0.372 0L14 7.14V13a1 1 0 0 0 -1 1v2h3v-2a1 1 0 0 0 -1 -1V6.739l0.686 -0.275a0.5 0.5 0 0 0 0.025 -0.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z" strokeWidth="1" />
                    <path d="M4.176 9.032a0.5 0.5 0 0 0 -0.656 0.327l-0.5 1.7a0.5 0.5 0 0 0 0.294 0.605l4.5 1.8a0.5 0.5 0 0 0 0.372 0l4.5 -1.8a0.5 0.5 0 0 0 0.294 -0.605l-0.5 -1.7a0.5 0.5 0 0 0 -0.656 -0.327L8 10.466zm-0.068 1.873 0.22 -0.748 3.496 1.311a0.5 0.5 0 0 0 0.352 0l3.496 -1.311 0.22 0.748L8 12.46z" strokeWidth="1" />
                  </svg>
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className="separator" />

      <section className="part-gris" id="estudiantes">
        <div className="container-base">
          <h2 className="section-title">Movilidad Estudiantil Internacional</h2>
          <p className="countries-intro">
            La Fundación PROFIME tiene como pilar impulsa activamente la movilidad estudiantil internacional,
            facilitando que nuestros alumnos enriquezcan su formación académica en prestigiosas instituciones
            alrededor del mundo.
          </p>
          <div className="countries-grid">
            {COUNTRIES.map((c) => (
              <div key={c.name} className="country-card">
                <img src={c.flag} className="country-flag" alt={c.emoji} loading="lazy" decoding="async" />
                <h4 className="country-name">{c.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className="separator" />

      <section className="part" id="aliados">
        <div className="allies-container">
          <h2 className="section-title">Nuestros Aliados Estratégicos</h2>
          <p className="section-subtitle">
            Colaboramos con empresas líderes para ofrecer mejores oportunidades a nuestros estudiantes
          </p>
          <div className="allies-logos">
            {[0, 1].map((slideIdx) => (
              <div key={slideIdx} className="allies-logos-slide">
                {ALLIES.map((name) => (
                  <img
                    key={`${slideIdx}-${name}`}
                    src={`/images/aliados/${name}.png`}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className="separator" />
    </>
  );
}
