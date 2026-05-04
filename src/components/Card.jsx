/**
 * Tarjeta reutilizable. Variantes:
 * - value-card: icono + título + texto (misión, valores, beneficios)
 * - president-card: imagen + nombre + descripción (consejo, presidentes)
 * - contact-card: usa value-card con datos de contacto
 */
function Card({ variant = 'value-card', icon, image, title, children, className = '' }) {
  const cardClass = className ? `${variant} ${className}`.trim() : variant;

  return (
    <div className={cardClass}>
      {image && (
        <div className="president-icon">
          <img src={image} alt={title || ''} />
        </div>
      )}
      {icon && (
        <div className="value-icon">
          {icon}
        </div>
      )}
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}

export default Card;
