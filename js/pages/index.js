"use strict";

/* =========================================================
   pages/index.js
   ---------------------------------------------------------
   Arma el contenido dinámico exclusivo de la página de inicio:
   - Hero slider (antes 3 bloques de HTML pegados a mano)
   - Carrusel de aliados estratégicos
   - Cuadrícula de países con movilidad estudiantil

   Todo sale de JSON en /data. Una vez insertado el slider en
   el DOM, se llama a initSlider() (importado de main.js) para
   que arranque el auto-avance, los dots y los listeners.
   ========================================================= */

import { initSlider } from "../main.js";
import { fetchJSON, loadMarquee, loadCountryGrid } from "../gallery.js";

async function loadHeroSlider() {
  const slider = document.getElementById("hero-slider");
  const dotsContainer = document.getElementById("slider-dots");
  if (!slider || !dotsContainer) return;

  try {
    const slides = await fetchJSON("data/hero-slides.json");
    const slidesFragment = document.createDocumentFragment();
    const dotsFragment = document.createDocumentFragment();

    slides.forEach((slide, index) => {
      const slideEl = document.createElement("div");
      slideEl.className = index === 0 ? "hero-slide active" : "hero-slide";

      const imageEl = document.createElement("div");
      imageEl.className = "hero-image";
      imageEl.style.backgroundImage = `url('${slide.imagen}')`;

      const overlay = document.createElement("div");
      overlay.className = "hero-overlay";
      imageEl.appendChild(overlay);

      const content = document.createElement("div");
      content.className = "hero-content";

      const title = document.createElement("h1");
      title.className = "hero-title";
      title.textContent = slide.titulo;

      const subtitle = document.createElement("p");
      subtitle.className = "hero-subtitle";
      subtitle.textContent = slide.subtitulo;

      content.append(title, subtitle);
      slideEl.append(imageEl, content);
      slidesFragment.appendChild(slideEl);

      const dot = document.createElement("span");
      dot.className = index === 0 ? "dot active" : "dot";
      dot.dataset.slide = String(index);
      dotsFragment.appendChild(dot);
    });

    slider.appendChild(slidesFragment);
    dotsContainer.appendChild(dotsFragment);
  } catch (err) {
    console.error("Error al cargar el hero slider:", err);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadHeroSlider();
  initSlider();

  loadMarquee("gallery-aliados", "data/aliados.json", "allies-logos-slide");
  loadCountryGrid("gallery-paises", "data/paises.json");
});
