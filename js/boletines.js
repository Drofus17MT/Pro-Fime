"use strict";

/* =========================================================
   boletines.js
   ---------------------------------------------------------
   Carga la lista de boletines (título + PDF) desde un JSON y
   arma las secciones con el <embed> del PDF. Antes cada mes
   nuevo significaba copiar/pegar un bloque de HTML completo;
   ahora es agregar un objeto al JSON.
   ========================================================= */

import { fetchJSON } from "./gallery.js";

export async function loadBoletines(containerId, jsonPath) {
  const container = document.getElementById(containerId);
  if (!container) return;

  try {
    const items = await fetchJSON(jsonPath);
    const fragment = document.createDocumentFragment();

    items.forEach(({ titulo, archivo }) => {
      const section = document.createElement("section");
      section.style.padding = "30px 1rem";

      const titleWrap = document.createElement("div");
      const h2 = document.createElement("h2");
      h2.style.cssText =
        "text-align:center;font-family:'Playfair Display', serif;font-size:2rem;color:var(--verde-fime);margin-bottom:1rem;font-weight:700;";
      h2.textContent = `Boletín PROFIME - ${titulo}`;
      titleWrap.appendChild(h2);

      const embed = document.createElement("embed");
      embed.src = archivo;
      embed.type = "application/pdf";
      embed.width = "100%";
      embed.height = "800px";

      section.append(titleWrap, embed);
      fragment.appendChild(section);
    });

    container.replaceWith(fragment);
  } catch (err) {
    console.error("Error al cargar los boletines:", err);
    container.innerHTML =
      '<p style="text-align:center;color:#a5341a;">No se pudieron cargar los boletines.</p>';
  }
}
