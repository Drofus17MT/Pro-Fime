const sectionBgStyle = {
  background: "var(--gris-claro)",
  padding: "10px 1rem",
};

const h2Style = {
  textAlign: "center",
  fontFamily: "'Playfair Display', serif",
  fontSize: "2.3rem",
  color: "var(--verde-fime)",
  marginBottom: "1rem",
  marginTop: "3rem",
  fontWeight: 700,
};

const descStyle = {
  textAlign: "center",
  fontSize: "1.3rem",
  color: "rgba(0, 0, 0, 0.802)",
  marginTop: "3rem",
  marginBottom: "4rem",
  maxWidth: 1400,
  marginLeft: "auto",
  marginRight: "auto",
  lineHeight: 1.8,
};

/**
 * EventoSection - Sección completa de un evento: título, descripción e imágenes.
 *
 * @param {string} title
 * @param {string} description
 * @param {string} [credit]
 * @param {Object[]} images - Array de { src, alt }
 * @param {'scroll'|'grid'} [imageLayout='grid']
 */
export default function EventoSection({ title, description, credit, images, imageLayout = "grid" }) {
  return (
    <>
      <section style={sectionBgStyle}>
        <div style={{ maxWidth: 1500, margin: "auto" }}>
          <h2 style={h2Style}>{title}</h2>
          <p style={descStyle}>{description}</p>
          {credit && <p style={descStyle}>{credit}</p>}
        </div>
      </section>

      {imageLayout === "scroll" ? (
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
            {[0, 1].map((slideIdx) => (
              <div key={slideIdx} className="eventos-img-slide">
                {images.map((img, i) => (
                  <img key={i} src={img.src} alt={img.alt} loading="lazy" decoding="async" />
                ))}
              </div>
            ))}
          </div>
        </section>
      ) : (
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
            {images.map((img, i) => (
              <img key={i} src={img.src} alt={img.alt} loading="lazy" decoding="async" />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
