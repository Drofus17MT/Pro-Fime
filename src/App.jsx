import { Routes, Route } from 'react-router-dom';
import { TopBar, Header, Footer } from './components';
import {
  Index,
  Contacto,
  ConsejoDirectivo,
  HistorialDePresidentes,
  Donar,
  HistorialDonaciones,
  LogrosFundacion,
  AlumnosBeneficiados,
  Generaciones,
  Becados,
  Galerias,
  ComiteAsesores,
  Diplomado,
} from './Pages';

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/consejo-directivo" element={<ConsejoDirectivo />} />
          <Route path="/historial-de-presidentes" element={<HistorialDePresidentes />} />
          <Route path="/donar" element={<Donar />} />
          <Route path="/historial-donaciones" element={<HistorialDonaciones />} />
          <Route path="/logros-fundacion" element={<LogrosFundacion />} />
          <Route path="/alumnos-beneficiados" element={<AlumnosBeneficiados />} />
          <Route path="/generaciones" element={<Generaciones />} />
          <Route path="/becados" element={<Becados />} />
          <Route path="/galerias" element={<Galerias />} />
          <Route path="/comite-asesores" element={<ComiteAsesores />} />
          <Route path="/diplomado/:id" element={<Diplomado />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
