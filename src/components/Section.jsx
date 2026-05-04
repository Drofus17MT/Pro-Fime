function Section({
  id,
  title,
  subtitle,
  children,
  gray = false,
  className = '',
}) {
  const sectionClass = gray ? 'part-gris' : 'part';
  const combinedClass = className ? `${sectionClass} ${className}`.trim() : sectionClass;

  return (
    <section id={id} className={combinedClass}>
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      {children}
    </section>
  );
}

export default Section;
