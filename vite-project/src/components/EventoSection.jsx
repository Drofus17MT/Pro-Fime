/**
 * EventoSection - Sección completa de un evento: título, descripción e imágenes.
 * Matches the vanilla HTML eventos.html structure exactly.
 */
export default function EventoSection({ title, description, credit, images, imageLayout = "grid" }) {
  return (
    <>
      <section style={{ background: "var(--gris-claro)", padding: "10px 1rem", transition: "background 0.5s ease" }}>
        <div style={{ maxWidth: 1500, margin: "auto" }}>
          <h2 style={{
            textAlign: "center",
            fontFamily: "'Playfair Display', serif",
            fontSize: "2.3rem",
            color: "var(--verde-fime)",
            marginBottom: "1rem",
            marginTop: "3rem",
            fontWeight: 700,
          }}>{title}</h2>

          <p style={{
            textAlign: "center",
            fontSize: "1.3rem",
            color: "var(--gris-medio)",
            marginTop: "3rem",
            marginBottom: "4rem",
            maxWidth: 1400,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.8,
            transition: "color 0.5s ease",
          }}>
            {description}
          </p>

          {credit && (
            <p style={{
              textAlign: "center",
              fontSize: "1.3rem",
              color: "var(--gris-medio)",
              marginTop: "3rem",
              marginBottom: "4rem",
              maxWidth: 1400,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.8,
              transition: "color 0.5s ease",
            }}>
              {credit}
            </p>
          )}
        </div>
      </section>

      {imageLayout === "scroll" ? (
        <section style={{
          maxWidth: 1800,
          width: "100%",
          margin: "10px auto 0",
          padding: "0 1rem",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <div className="allies-logos" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            width: "fit-content",
            maxWidth: "100%",
            marginBottom: "2rem",
          }}>
            <div className="eventos-img-slide">
              {images.map((img, i) => (
                <img key={i} src={img.src} alt={img.alt} loading="lazy" decoding="async" />
              ))}
            </div>
            <div className="eventos-img-slide">
              {images.map((img, i) => (
                <img key={`dup-${i}`} src={img.src} alt={img.alt} loading="lazy" decoding="async" />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section style={{ padding: "15px 16px" }}>
          <div className="imgeventos" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            marginBottom: "2rem",
          }}>
            {images.map((img, i) => (
              <img key={i} src={img.src} alt={img.alt} loading="lazy" decoding="async" />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
