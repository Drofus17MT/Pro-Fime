import { useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import ImageGrid from "../components/ImageGrid";
import diplomadosData from "../data/diplomados.json";

export default function DiplomadoPage() {
  const { id } = useParams();
  const data = diplomadosData.diplomados[id];

  if (!data) {
    return <div style={{ padding: "2rem", textAlign: "center" }}>Diplomado no encontrado</div>;
  }

  const images = Array.from({ length: data.count }, (_, i) => ({
    src: `${diplomadosData.imageBasePath}/${data.folder}/${data.folder}_${i + 1}.JPG`,
    alt: `${data.title} ${i + 1}`,
  }));

  const rows = [];
  for (let i = 0; i < images.length; i += diplomadosData.imagesPerRow) {
    rows.push(images.slice(i, i + diplomadosData.imagesPerRow));
  }

  return (
    <>
      <PageHero title={data.title} subtitle={data.subtitle} />
      <hr className="separator" />

      {rows.map((row, ri) => (
        <section key={ri} style={{ padding: "15px 1rem" }}>
          <ImageGrid images={row} columns={diplomadosData.imagesPerRow} />
        </section>
      ))}

      <hr className="separator" />
    </>
  );
}
