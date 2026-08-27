const h2Style = {
  textAlign: "center",
  fontFamily: "'Playfair Display', serif",
  fontSize: "2rem",
  color: "var(--verde-fime)",
  marginBottom: "1rem",
  fontWeight: 700,
};

/**
 * GeneracionCard - Sección con título + galería de imágenes de una generación donadora.
 *
 * @param {string} title - Nombre de la generación
 * @param {Object[]} images - Array de { src, alt }
 */
export default function GeneracionCard({ title, images }) {
  return (
    <section style={{ padding: "30px 1rem" }}>
      <div>
        <h2 style={h2Style}>{title}</h2>
      </div>
      <div className="contenedor-imagenes">
        {images.map((img, i) => (
          <img key={i} src={img.src} alt={img.alt} loading="lazy" decoding="async" />
        ))}
      </div>
    </section>
  );
}
