/**
 * ImageGrid - Cuadrícula responsive de imágenes.
 *
 * @param {Object[]} images - Array de { src, alt?, style? }
 * @param {number} columns - Columnas por defecto (4)
 * @param {string} gap - Espacio entre imágenes
 * @param {string} className - Clase CSS adicional
 */
export default function ImageGrid({
  images,
  columns = 4,
  gap = "15px",
  className = "imgdiplomados",
}) {
  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap,
      }}
    >
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt || ""}
          loading="lazy"
          decoding="async"
          style={img.style}
        />
      ))}
    </div>
  );
}
