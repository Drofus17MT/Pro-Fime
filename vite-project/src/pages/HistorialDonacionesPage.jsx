import GeneracionCard from "../components/GeneracionCard";
import data from "../data/historialDonaciones.json";

const h2Style = {
  textAlign: "center",
  fontFamily: "'Playfair Display', serif",
  fontSize: "2.8rem",
  color: "var(--verde-fime)",
  marginBottom: "1rem",
  marginTop: "6rem",
  fontWeight: 700,
};

export default function HistorialDonacionesPage() {
  return (
    <>
      <section style={{ background: "var(--gris-claro)", padding: "50px 1rem" }}>
        <div style={{ maxWidth: 1200, margin: "auto" }}>
          <h2 style={h2Style}>Historial de Donaciones</h2>
          <p className="section-subtitle">{data.intro}</p>
          <hr className="separator-line" />
        </div>
      </section>

      {data.generaciones.map((gen, i) => (
        <GeneracionCard key={i} title={gen.title} images={gen.images} />
      ))}

      <hr className="separator-line" />
      <hr className="separator" />
    </>
  );
}
