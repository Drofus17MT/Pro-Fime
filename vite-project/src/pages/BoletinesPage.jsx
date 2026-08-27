import PageHero from "../components/PageHero";

const BOLETINES = [
  { month: "Julio 2026", file: "Boletin-PROFIME-Julio-2026.pdf" },
  { month: "Junio 2026", file: "Boletin-PROFIME-Junio-2026.pdf" },
  { month: "Mayo 2026", file: "Boletin-PROFIME-Mayo-2026.pdf" },
  { month: "Abril 2026", file: "Boletin-PROFIME-Abril-2026.pdf" },
  { month: "Marzo 2026", file: "Boletin-PROFIME-Marzo-2026.pdf" },
  { month: "Febrero 2026", file: "Boletin-PROFIME-Febrero-2026.pdf" },
  { month: "Enero 2026", file: "Boletin-PROFIME-Enero-2026.pdf" },
];

export default function BoletinesPage() {
  return (
    <>
      <PageHero
        title="Boletines | Fundación PROFIME"
        subtitle="📑 Infórmate sobre las actividades mensuales de nuestra Fundación"
      />
      <hr className="separator" />

      {BOLETINES.map((b) => (
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
          <embed
            src={`/Boletinespdf/${b.file}`}
            type="application/pdf"
            width="100%"
            height="800px"
          />
        </section>
      ))}

      <hr className="separator" />
    </>
  );
}
