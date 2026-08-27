import PageHero from "../components/PageHero";
import data from "../data/boletines.json";

export default function BoletinesPage() {
  return (
    <>
      <PageHero
        title="Boletines | Fundación PROFIME"
        subtitle="Infórmate sobre las actividades mensuales de nuestra Fundación"
      />
      <hr className="separator" />

      {data.boletines.map((b) => (
        <section key={b.file} style={{ padding: "30px 1rem" }}>
          <div>
            <h2
              style={{
                textAlign: "center",
                fontFamily: "'Playfair Display', serif",
                fontSize: "2rem",
                color: "var(--verde-fime)",
                marginBottom: "1rem",
                fontWeight: 700,
              }}
            >
              Boletín PROFIME - {b.month}
            </h2>
          </div>
          <iframe
            src={`/Boletinespdf/${b.file}`}
            className="boletin-embed"
            title={`Boletín ${b.month}`}
          />
        </section>
      ))}

      <hr className="separator" />
    </>
  );
}
