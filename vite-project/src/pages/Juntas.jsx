import PageHero from "../components/PageHero";
import EventoSection from "../components/EventoSection";
import data from "../data/eventos.json";

export default function EventosPage() {
  return (
    <>
      <PageHero
        title="Eventos | Fundación PROFIME"
        subtitle="¡Revive los eventos donde participamos o que organizamos como fundación!"
      />
      <hr className="separator" />

      {data.eventos.map((evento) => (
        <EventoSection
          key={evento.id}
          title={evento.title}
          description={evento.description}
          credit={evento.credit}
          images={evento.images}
          imageLayout={evento.imageLayout}
        />
      ))}

      <hr className="separator" />
    </>
  );
}
