/**
 * Grid de imágenes. Recibe array de objetos { src, alt } o strings (src).
 */
function ImageGallery({ images = [], className = 'imgdiplomados' }) {
  const items = images.map((img) =>
    typeof img === 'string' ? { src: img, alt: '' } : img
  );

  return (
    <div className={className}>
      {items.map((item, index) => (
        <img
          key={index}
          src={item.src}
          alt={item.alt || `Imagen ${index + 1}`}
        />
      ))}
    </div>
  );
}

export default ImageGallery;
