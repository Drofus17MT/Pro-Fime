import PageHero from "../components/PageHero";

export default function AlumnosBeneficiadosPage() {
  return (
    <>
      <PageHero
        title="Alumnos Beneficiados"
        subtitle="Estudiantes apoyados con becas de movilidad académica"
      />
      <hr className="separator" />

      <section className="part">
        <p className="section-subtitle" style={{ maxWidth: 1000 }}>
          Gracias a los esfuerzos de la fundación PROFIME y de los donadores, hemos apoyado a estudiantes
          mediante movilidad académica y programas de formación. Abajo encuentras un resumen visual
          (2010–2024) y la distribución por género.
        </p>

        <section className="card">
          <div className="bars-wrapper">
            <div className="bars-top">
              <div>
                <div style={{ fontSize: "1.2rem", color: "var(--gris-medio)", fontWeight: 600 }}>
                  Total de alumnos Beneficiados
                </div>
                <div style={{ fontSize: "1.1rem", color: "var(--gris-oscuro)", fontWeight: 700 }}>
                  Año 2010 - 2024
                </div>
              </div>
              <div style={{ fontSize: "1.2rem", textAlign: "right", color: "var(--gris-medio)", fontWeight: 600 }}>
                <span id="total-count" aria-hidden="true">109</span> alumnos
              </div>
            </div>

            <div className="bars-stage">
              <div className="bar-chat">
                <div className="bar-grid" id="bar-grid" role="img" aria-label="Gráfica de barras: Alumnos por región" />
              </div>

              <div className="bar-chat" style={{ display: "flex" }}>
                <svg id="donut" width="240" height="240" viewBox="0 0 240 240" aria-hidden="false" role="img" aria-label="Gráfica dona: distribución por género">
                  <defs>
                    <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="6" stdDeviation="10" floodOpacity="0.12" floodColor="#000" />
                    </filter>
                  </defs>
                  <g transform="translate(120,120)" />
                </svg>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: 700, color: "var(--gris-oscuro)", fontSize: "1.05rem" }}>
                    Distribución por género
                  </div>
                  <div style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--gris-medio)" }}>
                    Mujeres vs Hombres
                  </div>
                </div>

                <div className="donut-legend">
                  <div className="legend-item">
                    <span className="swatch" style={{ background: "rgba(255,140,220,0.9)" }} /> Mujeres <strong>23</strong>
                  </div>
                  <div className="legend-item">
                    <span className="swatch" style={{ background: "rgba(100,220,220,0.9)" }} /> Hombres <strong>86</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <div id="tooltip" className="tooltip" role="tooltip" aria-hidden="true" />
    </>
  );
}
