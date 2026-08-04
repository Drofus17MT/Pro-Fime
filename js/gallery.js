"use strict";

/* =========================================================
   gallery.js
   ---------------------------------------------------------
   Módulo reutilizable para cargar contenido (imágenes, logos)
   desde archivos JSON en vez de tenerlo repetido a mano en el
   HTML. Misma idea que usan proyectos como jscamp: los datos
   viven en JSON y una sola función se encarga de "pintarlos".

   Ventajas frente al HTML estático repetido:
   - Agregar/quitar una foto es editar un JSON, no tocar 20
     líneas de HTML duplicado.
   - Se arma todo en un DocumentFragment y se inserta una sola
     vez al DOM (un solo reflow en vez de uno por imagen).
   - Si el JSON falla o no existe, no rompe la página: se
     muestra un aviso en vez de dejar la sección en blanco.
   ========================================================= */

async function fetchJSON(path) {
  const res = await fetch(path);
  if (!res.ok) {
    throw new Error(`No se pudo cargar ${path} (HTTP ${res.status})`);
  }
  return res.json();
}

function createImg({ src, alt = "", style }) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.loading = "lazy";
  img.decoding = "async";
  if (style) img.setAttribute("style", style);
  return img;
}

function showError(container, mensaje) {
  container.innerHTML = `<p style="text-align:center;color:#a5341a;">${mensaje}</p>`;
}

/**
 * Renderiza una galería de imágenes agrupada en secciones de
 * `chunkSize` fotos (mismo patrón visual que ya usaba la página:
 * <section><div class="imgdiplomados">img,img,img,img</div></section>).
 */
export async function loadGallery(containerId, jsonPath, chunkSize = 4) {
  const container = document.getElementById(containerId);
  if (!container) return;

  try {
    const items = await fetchJSON(jsonPath);
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < items.length; i += chunkSize) {
      const chunk = items.slice(i, i + chunkSize);
      const section = document.createElement("section");
      section.style.padding = "15px 1rem";

      const wrap = document.createElement("div");
      wrap.className = "imgdiplomados";
      chunk.forEach((item) => wrap.appendChild(createImg(item)));

      section.appendChild(wrap);
      fragment.appendChild(section);
    }

    container.replaceWith(fragment);
  } catch (err) {
    console.error("Error al cargar la galería:", err);
    showError(container, "No se pudieron cargar las imágenes de esta sección.");
  }
}

/**
 * Renderiza un "marquee" infinito: dos pistas idénticas de
 * imágenes (una al lado de la otra) para que la animación CSS
 * de scroll continuo no muestre saltos. El JSON solo guarda la
 * lista una vez; aquí se duplica en el DOM.
 */
export async function loadMarquee(containerId, jsonPath, trackClass) {
  const container = document.getElementById(containerId);
  if (!container) return;

  try {
    const items = await fetchJSON(jsonPath);
    const fragment = document.createDocumentFragment();

    for (let t = 0; t < 2; t++) {
      const track = document.createElement("div");
      track.className = trackClass;
      items.forEach((item) => track.appendChild(createImg(item)));
      fragment.appendChild(track);
    }

    container.appendChild(fragment);
  } catch (err) {
    console.error("Error al cargar el carrusel:", err);
    showError(container, "No se pudo cargar el contenido.");
  }
}

/**
 * Renderiza la cuadrícula de países/banderas (imagen + nombre).
 */
export async function loadCountryGrid(containerId, jsonPath) {
  const container = document.getElementById(containerId);
  if (!container) return;

  try {
    const items = await fetchJSON(jsonPath);
    const fragment = document.createDocumentFragment();

    items.forEach(({ src, alt = "", nombre }) => {
      const card = document.createElement("div");
      card.className = "country-card";

      const img = createImg({ src, alt });
      img.className = "country-flag";

      const h4 = document.createElement("h4");
      h4.className = "country-name";
      h4.textContent = nombre;

      card.append(img, h4);
      fragment.appendChild(card);
    });

    container.appendChild(fragment);
  } catch (err) {
    console.error("Error al cargar los países:", err);
    showError(container, "No se pudo cargar la sección de movilidad estudiantil.");
  }
}

export { fetchJSON, createImg };
