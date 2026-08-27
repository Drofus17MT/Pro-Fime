import { useParams } from "react-router-dom";
import PageHero from "../components/PageHero";

const DIPLOMADOS = {
  "4": {
    title: "4° Diplomado | Fundación PROFIME",
    subtitle: "✍ Revive el curso impartido por nuestros expertos colaboradores",
    folder: "4D",
    count: 20,
  },
  "17": {
    title: "17° Diplomado | Fundación PROFIME",
    subtitle: "✍ Revive el curso impartido por nuestros expertos colaboradores",
    folder: "17D",
    count: 14,
  },
  "18": {
    title: "18° Diplomado | Uso Eficiente de la Energía",
    subtitle: "✍ Revive el curso impartido por nuestros expertos colaboradores",
    folder: "18D",
    count: 20,
  },
};

export default function DiplomadoPage() {
  const { id } = useParams();
  const data = DIPLOMADOS[id];

  if (!data) {
    return <div style={{ padding: "2rem", textAlign: "center" }}>Diplomado no encontrado</div>;
  }

  const images = Array.from({ length: data.count }, (_, i) => ({
    src: `/images/Fotos_diplomados/${data.folder}/${data.folder}_${i + 1}.JPG`,
    alt: "",
  }));

  const rows = [];
  for (let i = 0; i < images.length; i += 4) {
    rows.push(images.slice(i, i + 4));
  }

  return (
    <>
      <PageHero title={data.title} subtitle={data.subtitle} />
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
