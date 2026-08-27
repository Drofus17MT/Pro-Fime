import PageHero from "../components/PageHero";

const GENERACIONES_IMAGES = [
  { src: "/images/galerias_generaciones/edificio_fime.jpg", alt: "" },
  { src: "/images/galerias_generaciones/gen_1.jpg", alt: "" },
  { src: "/images/galerias_generaciones/gen_2.jpg", alt: "" },
  { src: "/images/galerias_generaciones/gen_3.jpg", alt: "" },
  { src: "/images/galerias_generaciones/gen_4.jpg", alt: "" },
  { src: "/images/galerias_generaciones/gen_5.jpg", alt: "" },
  { src: "/images/galerias_generaciones/gen_6.jpg", alt: "" },
  { src: "/images/galerias_generaciones/gen_7.jpg", alt: "" },
  { src: "/images/galerias_generaciones/gen_8.jpg", alt: "" },
  { src: "/images/galerias_generaciones/gen_9.jpg", alt: "" },
];

export default function GeneracionesPage() {
  const rows = [];
  for (let i = 0; i < GENERACIONES_IMAGES.length; i += 4) {
    rows.push(GENERACIONES_IMAGES.slice(i, i + 4));
  }

  return (
    <>
      <PageHero
        title="Galería | Generaciones"
        subtitle="📖 Revivamos los momentos más memorables de generaciones egresadas con fotografías de la Facultad y los ingenieros que ha formado a lo largo del tiempo."
      />
      <hr className="separator" />

      {rows.map((row, ri) => (
        <section key={ri} style={{ padding: "15px 1rem" }}>
          <div className="imgdiplomados">
            {row.map((img, i) => (
              <img key={i} src={img.src} alt={img.alt} loading="lazy" decoding="async" />
            ))}
          </div>
        </section>
      ))}

      <hr className="separator" />
    </>
  );
}
