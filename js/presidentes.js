"use strict";

/* =========================================================
   presidentes.js
   ---------------------------------------------------------
   Carga el historial de presidentes (foto, nombre, periodo)
   desde JSON y arma las "president-card". Igual que con las
   galerías: agregar un presidente nuevo es agregar un objeto
   al JSON, no copiar el bloque de HTML de una tarjeta.
   ========================================================= */

import { fetchJSON, createImg } from "./gallery.js";

export async function loadPresidentes(containerId, jsonPath) {
  const container = document.getElementById(containerId);
  if (!container) return;

  try {
    const items = await fetchJSON(jsonPath);
    const fragment = document.createDocumentFragment();

    items.forEach(({ img, nombre, periodo }) => {
      const card = document.createElement("div");
      card.className = "president-card";

      const iconWrap = document.createElement("div");
      iconWrap.className = "president-icon";
      iconWrap.appendChild(createImg({ src: img, alt: "" }));

      const h3 = document.createElement("h3");
      h3.textContent = nombre;

      const p = document.createElement("p");
      p.append("Periodo: ");
      const strong = document.createElement("strong");
      strong.textContent = periodo;
      p.appendChild(strong);

      card.append(iconWrap, h3, p);
      fragment.appendChild(card);
    });

    container.appendChild(fragment);
  } catch (err) {
    console.error("Error al cargar el historial de presidentes:", err);
    container.innerHTML =
      '<p style="text-align:center;color:#a5341a;">No se pudo cargar el historial de presidentes.</p>';
  }
}
