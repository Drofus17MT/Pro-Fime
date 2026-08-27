import PageHero from "../components/PageHero";
import ImageGrid from "../components/ImageGrid";
import data from "../data/becados.json";

export default function BecadosPage() {
  const rows = [];
  for (let i = 0; i < data.images.length; i += data.gridColumns) {
    rows.push(data.images.slice(i, i + data.gridColumns));
  }

  return (
    <>
      <PageHero
        title="Galería | Becados"
        subtitle="¡Conoce a los estudiantes que hemos apoyado con becas al extranjero!"
      />
      <hr className="separator" />

      {rows.map((row, ri) => (
        <section key={ri} style={{ padding: "15px 1rem" }}>
          <ImageGrid images={row} columns={data.gridColumns} />
        </section>
      ))}

      <hr className="separator" />
    </>
  );
}
