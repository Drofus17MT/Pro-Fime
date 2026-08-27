import PageHero from "../components/PageHero";

export default function JuntasPage() {
  return (
    <>
      <PageHero
        title="Juntas | Fundación PROFIME"
        subtitle="🤝 Reuniones y juntas de trabajo de la fundación"
      />
      <hr className="separator" />

      <section className="part">
        <div style={{ maxWidth: 1200, margin: "auto", padding: "2rem 1rem" }}>
          <h2
            style={{
              textAlign: "center",
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.3rem",
              color: "var(--verde-fime)",
              marginBottom: "1rem",
              fontWeight: 700,
            }}
          >
            Juntas de Trabajo
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "rgba(0, 0, 0, 0.7)",
              lineHeight: 1.8,
              maxWidth: 900,
              margin: "0 auto 3rem",
            }}
          >
            La fundación PROFIME realiza juntas periódicas de trabajo donde los consejeros y la directiva
            discuten y planifican las actividades, proyectos y estrategias para seguir apoyando a los
            estudiantes de la Facultad de Ingeniería Mecánica y Eléctrica.
          </p>
        </div>
      </section>

      <hr className="separator" />
    </>
  );
}
