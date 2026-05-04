function HeroContact({ title, subtitle }) {
  return (
    <section className="hero-contact">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}

export default HeroContact;
