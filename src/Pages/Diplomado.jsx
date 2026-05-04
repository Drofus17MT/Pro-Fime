import { useParams } from 'react-router-dom';
import { HeroContact, Separator } from '../components';

function Diplomado() {
  const { id } = useParams();
  return (
    <>
      <HeroContact
        title={`${id || '?'}° Diplomado | Fundación PROFIME`}
        subtitle="✍ Revive el curso impartido por nuestros expertos colaboradores"
      />
      <Separator />
    </>
  );
}

export default Diplomado;
