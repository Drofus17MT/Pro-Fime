const PRESIDENTES = [
  { name: "Rogelio Ortiz Zuñiga", periodo: "2025-2027", img: "/images/preidentes/rogelio_ortiz_zuniga.png" },
  { name: "Humberto Salinas Barrera", periodo: "2021-2025", img: "/images/preidentes/humberto_salinas_barrera.jpg" },
  { name: "Antonio Cayetano Garza Garza", periodo: "2019-2021", img: "/images/preidentes/antonio_cayetano_garza_garza.jpg" },
  { name: "Luis Francisco Villarreal Galván", periodo: "2017-2018", img: "/images/preidentes/luis_francisco_villarreal_galvan.png" },
  { name: "José Dionisio Rebollo Nieto", periodo: "2015-2017", img: "/images/preidentes/jose_dionisio_rebollo_nieto.png" },
  { name: "Raúl Mario Montemayor Martínez", periodo: "2013-2015", img: "/images/preidentes/raul_mario_montemayor_martinez.png" },
  { name: "Francisco Javier Guerrero Chávez", periodo: "2011-2013", img: "/images/preidentes/francisco_javier_guerrero_chavez.png" },
  { name: "Rogelio Ortiz Zuñiga", periodo: "2008-2010", img: "/images/preidentes/rogelio_ortiz_zuniga.png" },
  { name: "Roberto Ángel González Treviño", periodo: "2006-2008", img: "/images/preidentes/roberto_angel_gonzalez_trevino.png" },
  { name: "Alfonso Morcos Flores", periodo: "2004-2006", img: "/images/preidentes/alfonso_morcos_flores.png" },
];

export default function HistorialPresidentesPage() {
  return (
    <>
      <section className="part" id="presidentes">
        <div className="president-container">
          <h2 className="section-title">Historial de Presidentes</h2>
          <p className="section-subtitle">
            Agradecemos a todos los presidentes de la Fundación PROFIME por haber dedicado tiempo y esfuerzo
            al desarrollo integral de jóvenes estudiantes de la Facultad de Ingeniería Mecánica y Eléctrica,
            siendo los máximos responsables y líderes de la fundación, siguiendo la misión y visión por las
            que fue fundada.
          </p>
          <div className="values-grid">
            {PRESIDENTES.map((p, i) => (
              <div key={i} className="president-card">
                <div className="president-icon">
                  <img src={p.img} loading="lazy" decoding="async" alt={p.name} />
                </div>
                <h3>{p.name}</h3>
                <p>
                  Periodo: <strong>{p.periodo}</strong>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className="separator" />
    </>
  );
}
