import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactoPage from "./pages/ContactoPage";
import EventosPage from "./pages/EventosPage";
import DonarPage from "./pages/DonarPage";
import BecadosPage from "./pages/BecadosPage";
import BoletinesPage from "./pages/BoletinesPage";
import ConsejoDirectivoPage from "./pages/ConsejoDirectivoPage";
import DiplomadoPage from "./pages/DiplomadoPage";
import GeneracionesPage from "./pages/GeneracionesPage";
import HistorialDonacionesPage from "./pages/HistorialDonacionesPage";
import HistorialPresidentesPage from "./pages/HistorialPresidentesPage";
import LogrosPage from "./pages/LogrosPage";
import AlumnosBeneficiadosPage from "./pages/AlumnosBeneficiadosPage";
import JuntasPage from "./pages/JuntasPage";
import "./App.css";

function Layout({ children }) {
  return (
    <>
      <TopBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/eventos" element={<EventosPage />} />
          <Route path="/donar" element={<DonarPage />} />
          <Route path="/becados" element={<BecadosPage />} />
          <Route path="/boletines" element={<BoletinesPage />} />
          <Route path="/consejo-directivo" element={<ConsejoDirectivoPage />} />
          <Route path="/diplomado/:id" element={<DiplomadoPage />} />
          <Route path="/generaciones" element={<GeneracionesPage />} />
          <Route path="/historial-de-donaciones" element={<HistorialDonacionesPage />} />
          <Route path="/historial-de-presidentes" element={<HistorialPresidentesPage />} />
          <Route path="/logros" element={<LogrosPage />} />
          <Route path="/alumnos-beneficiados" element={<AlumnosBeneficiadosPage />} />
          <Route path="/juntas" element={<JuntasPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
