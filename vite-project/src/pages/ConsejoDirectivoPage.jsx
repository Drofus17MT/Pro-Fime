import PageHero from "../components/PageHero";

const MIEMBROS = [
  {
    name: "Rogelio Ortiz Zuñiga",
    role: "Presidente de la Fundación PROFIME",
    periodo: "2025-2027",
    detail: "Egresado en 1978 como Ingeniero Mecánico Electricista",
    img: "/images/preidentes/rogelio_ortiz_zuniga.png",
  },
  {
    name: "Humberto Salinas Barrera",
    role: "Ex-Presidente y consejero de la Fundación PROFIME",
    periodo: "2021-2025",
    detail: "Egresado en 1974 como Ingeniero Mecánico Electricista",
    img: "/images/preidentes/humberto_salinas_barrera.jpg",
  },
  {
    name: "César Villafuerte González",
    role: "Secretario de la Fundación PROFIME",
    periodo: "2025-2027",
    detail: "Egresado en 1974 como Ingeniero Mecánico Electricista",
    img: "/images/preidentes/cesarvillafuerte.jpg",
  },
];

export default function ConsejoDirectivoPage() {
  return (
    <>
      <PageHero
        title="Consejo Directivo"
        subtitle="¡Conoce a los directivos que hacen posible la fundación PROFIME!"
      />

      <div className="president-grid">
        {MIEMBROS.map((m) => (
          <div key={m.name} className="president-card">
            <div className="president-icon">
              <img src={m.img} loading="lazy" decoding="async" alt={m.name} />
            </div>
            <h3>{m.name}</h3>
            <p>
              {m.role}
            </p>
            <p>
              Periodo: <strong>{m.periodo}</strong>
            </p>
            <p>
              <strong>{m.detail}</strong>
            </p>
          </div>
        ))}
      </div>

      <hr
        style={{
          border: 0,
          height: 80,
          background: "linear-gradient(90deg, transparent, #e8eaec 20%, #e8eaec 80%, transparent)",
          margin: "0 auto",
          maxWidth: "90%",
        }}
      />
    </>
  );
}
