import PageHero from "../components/PageHero";

const BECADOS_IMAGES = [
  "/images/fotos becados/becados 1.jpg",
  "/images/fotos becados/becados 9.jpg",
  "/images/fotos becados/becados 3.jpg",
  "/images/fotos becados/becados 10.jpg",
  "/images/fotos becados/ecados 5.jpg",
  "/images/fotos becados/becados 6.jpg",
  "/images/fotos becados/becados 7.jpg",
  "/images/fotos becados/becados 8.jpg",
  "/images/fotos becados/becados 2.jpg",
  "/images/fotos becados/becados 4.jpg",
];

export default function BecadosPage() {
  return (
    <>
      <PageHero
        title="Galería | Becados"
        subtitle="👩‍🎓 ¡Conoce a los estudiantes que hemos apoyado con becas al extranjero!"
      />
      <hr className="separator" />

      <section style={{ padding: "15px 1rem" }}>
        <div className="imgdiplomados">
          {BECADOS_IMAGES.slice(0, 4).map((src, i) => (
            <img key={i} src={src} alt="" loading="lazy" decoding="async" />
          ))}
        </div>
      </section>

      <section style={{ padding: "15px 1rem" }}>
        <div className="imgdiplomados">
          {BECADOS_IMAGES.slice(4, 8).map((src, i) => (
            <img key={i} src={src} alt="" loading="lazy" decoding="async" />
          ))}
        </div>
      </section>

      <section style={{ padding: "15px 1rem" }}>
        <div className="imgdiplomados">
          <img style={{ maxWidth: 400 }} src={BECADOS_IMAGES[8]} alt="" loading="lazy" decoding="async" />
          <img src={BECADOS_IMAGES[9]} alt="" loading="lazy" decoding="async" />
        </div>
      </section>

      <hr className="separator" />
    </>
  );
}
