import PageHero from "../components/PageHero";
import ImageGrid from "../components/ImageGrid";
import data from "../data/generaciones.json";

export default function GeneracionesPage() {
  const rows = [];
  for (let i = 0; i < data.images.length; i += data.gridColumns) {
    rows.push(data.images.slice(i, i + data.gridColumns));
  }

  return (
    <>
      <PageHero
        title="Galería | Generaciones"
        subtitle="Revivamos los momentos más memorables de generaciones egresadas con fotografías de la Facultad y los ingenieros que ha formado a lo largo del tiempo."
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
