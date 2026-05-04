import { useState, useEffect } from 'react';

const SLIDES = [
  {
    image: '/images/slide/slide_1.png',
    title: 'Desayuno de la Fraternidad',
    subtitle: 'Cartas de agradecimiento a las generaciones que realizaron a la FUNDACION PROFIME | 18 de octubre 2025',
  },
  {
    image: '/images/slide/slide_2.png',
    title: 'Cumplimos 21 años',
    subtitle: 'Fundación PROFIME 2025',
  },
  {
    image: '/images/slide/slide_3.png',
    title: 'Carta de Agradecimiento',
    subtitle: 'Generaciones donadoras a la Fundación PROFIME | 29 de octubre 2025',
  },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="inicio">
      <div className="hero-slider">
        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <div
              className="hero-image"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
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
        {SLIDES.map((_, index) => (
          <span
            key={index}
            role="button"
            tabIndex={0}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            onKeyDown={(e) => e.key === 'Enter' && setCurrentIndex(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
