import PageHero from "../components/PageHero";

const EVENTO_JULIO_IMAGES = Array.from({ length: 10 }, (_, i) => ({
  src: `/images/Eventos/EventoJulioBecados${i + 1}.${i % 3 === 2 ? "jpg" : "jpeg"}`,
  alt: `Becados${i + 1}`,
}));

const EVENTO_JUNIO_IMAGES = [
  { src: "/images/Fotos generaciones donadoras/19Junio2026.JPG", alt: "Evento19Junio2026" },
  { src: "/images/Fotos generaciones donadoras/EntregaCheque19Junio2026.jpg", alt: "Evento19Junio2026" },
  { src: "/images/Eventos/EventoJunio19CR1.jpg", alt: "Evento19Junio2026" },
  { src: "/images/Eventos/EventoJunio19CR2.jpg", alt: "Evento19Junio2026" },
];

export default function EventosPage() {
  return (
    <>
      <PageHero
        title="Eventos | Fundación PROFIME"
        subtitle="📸 ¡Revive los eventos donde participamos o que organizamos como fundación!"
      />
      <hr className="separator" />

      <section style={{ background: "var(--gris-claro)", padding: "10px 1rem" }}>
        <div style={{ maxWidth: 1500, margin: "auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.3rem",
              color: "var(--verde-fime)",
              marginBottom: "1rem",
              marginTop: "3rem",
              fontWeight: 700,
            }}
          >
            Bienvenida y Despedida de Alumnos Becados con Movilidad Académica - Julio 2026
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.3rem",
              color: "rgba(0, 0, 0, 0.802)",
              marginTop: "3rem",
              marginBottom: "4rem",
              maxWidth: 1400,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.8,
            }}
          >
            A inicios del mes de julio, miembros y consejeros de la fundación PROFIME nos reunimos junto
            con los alumnos a los que se les otorgó la beca de movilidad académica, tanto con aquellos que
            vuelven de su estancia en el extranjero, como con los que se preparan para partir a sus destinos
            de intercambio. Fue un momento de alegría y emoción, donde compartimos experiencias y anécdotas
            de sus vivencias académicas y culturales. La Fundación PROFIME reafirma su compromiso de apoyar
            a los estudiantes en su desarrollo académico y personal, y se les desea el mayor de los éxitos en
            sus futuros proyectos y estudios. ¡Felicitaciones a todos los alumnos becados y que sigan
            alcanzando grandes logros en su camino académico!
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.3rem",
              color: "rgba(0, 0, 0, 0.802)",
              marginTop: "3rem",
              marginBottom: "4rem",
              maxWidth: 1400,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.8,
            }}
          >
            Agradecemos al Ingeniero Eugenio Serrano por su participación en el evento y por compartir las
            fotografías capturadas por él.
          </p>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1800,
          width: "100%",
          margin: "10px auto 0",
          padding: "0 1rem",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="allies-logos"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            width: "fit-content",
            maxWidth: "100%",
            marginBottom: "2rem",
          }}
        >
          <div className="eventos-img-slide">
            {EVENTO_JULIO_IMAGES.map((img, i) => (
              <img key={i} src={img.src} alt={img.alt} loading="lazy" decoding="async" />
            ))}
          </div>
          <div className="eventos-img-slide">
            {EVENTO_JULIO_IMAGES.map((img, i) => (
              <img key={i} src={img.src} alt={img.alt} loading="lazy" decoding="async" />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--gris-claro)", padding: "10px 1rem" }}>
        <div style={{ maxWidth: 1500, margin: "auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.3rem",
              color: "var(--verde-fime)",
              marginBottom: "1rem",
              marginTop: "3rem",
              fontWeight: 700,
            }}
          >
            Clase del Recuerdo 57 Aniversario - Generación 1964 - 69 IMA - 19 Junio 2026
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.3rem",
              color: "rgba(0, 0, 0, 0.802)",
              marginTop: "3rem",
              marginBottom: "4rem",
              maxWidth: 1400,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.8,
            }}
          >
            La fundación PROFIME tuvo el honor de participar en la Clase del Recuerdo con motivo del 57
            Aniversario de la Generación 1964-69 IMA, celebrada el 19 de junio de 2026. Fue un evento lleno
            de nostalgia y camaradería, donde los exalumnos compartieron recuerdos y experiencias de su
            tiempo en la Facultad de Ingeniería Mecánica y Eléctrica. El presidente de la fundación, el Ing.
            Rogelio Ortiz Zúñiga, y el Ing. César Villafuerte González, secretario de la fundación, estuvieron
            presentes para saludar a los exalumnos y compartir con ellos este momento especial.
          </p>
        </div>
      </section>

      <section style={{ padding: "15px 16px" }}>
        <div
          className="imgeventos"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            marginBottom: "2rem",
          }}
        >
          {EVENTO_JUNIO_IMAGES.map((img, i) => (
            <img key={i} src={img.src} alt={img.alt} loading="lazy" decoding="async" />
          ))}
        </div>
      </section>

      <hr className="separator" />
    </>
  );
}
