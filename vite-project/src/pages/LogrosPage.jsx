const LOGROS = [
  "Oficina PROFIME equipada con: Coordinador Administrativo de tiempo completo, Computadoras, Impresora, Scanner, Computadora Portátil, Proyector, Cámara Digital.",
  "Diseño y arranque de la Página Web Oficial de la Fundación PROFIME con actualización mensual.",
  "Formación e inicio de 8 Comités de Trabajo.",
  "238 Juntas quincenales de trabajo de los Consejeros y la Directiva.",
  "8 Sesiones Cena de EXAFIMES.",
  "Participación de 2 Consejeros PROFIME en el Comité Pro Construcción del Gimnasio de FIME.",
  "Depuración y Actualización de la Base de Datos de Empresas y EXAFIMES continuamente.",
  "Copatrocinio con la FIME en el equipamiento de Neo Aulas.",
  "Organización de Desayunos, mensuales, con EXAFIMES para exponerles lo que es PROFIME, e invitarlos a afiliarse.",
  "Organización de 6 Diplomados Uso Eficiente de Energía Eléctrica.",
  "Alumnos Becados para Estudio en el Extranjero.",
  "Participación activa de Miembros de PROFIME en el Proyecto Ingeniero Emprendedor.",
  "Envío mensual del Boletín Informativo a los Exafimes aprox. 28,000.",
  "Organización de 4 Expos en Cintermex de Uso Eficiente de Energía Eléctrica.",
  "Organización de 6 Eventos anuales de EXAFIMES EN EL CPH.",
  "Hasta el año 2024 se han apoyado a mas de 109 alumnos para el estudio en el extranjero.",
  "Donación de 30 computadoras a la facultad de Ingeniería Mecánica y Eléctrica.",
];

export default function LogrosPage() {
  return (
    <>
      <section className="part" id="nosotros">
        <h2 className="section-title">Principales Logros de PROFIME</h2>
        <div className="logros-grid">
          {LOGROS.map((logro, i) => (
            <div key={i} className="logro-item">
              <div className="logro-number">{i + 1}</div>
              <div className="logro-text">{logro}</div>
            </div>
          ))}
        </div>
      </section>
      <hr className="separator" />
    </>
  );
}
