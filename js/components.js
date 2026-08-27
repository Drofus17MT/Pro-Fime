"use strict";

/* =========================================================
   Componentes reutilizables para Fundación PROFIME
   ---------------------------------------------------------
   Cada función devuelve un string HTML que se inyecta en
   un placeholder del DOM (div#app-topbar, header#header,
   footer#contacto).
   ========================================================= */

/* ---------------------------------------------------------
   Detecta la ruta base según la página actual:
   - index.html (raíz)       → base = ""
   - pages/*.html             → base = "../"
   --------------------------------------------------------- */
function getBasePath() {
  const path = window.location.pathname;
  return path.includes("/pages/") ? "../" : "";
}

/* ---------------------------------------------------------
   Top Bar: teléfono + redes sociales
   --------------------------------------------------------- */
export function renderTopBar() {
  return `
    <div class="top-bar">
      <div class="top-bar-content">
        <span style="font-weight: 500;">Línea de Contacto PROFIME: <a href="tel:+528132460363" class="contact-link" style="color: white;">81-3246-0363</a></span>
        <div class="social-links">
          <a href="https://www.linkedin.com/company/fundacion-profimeuanl/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/fundacionprofime1" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 25" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://www.youtube.com/@fundacionprofime9828" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>`;
}

/* ---------------------------------------------------------
   Header / Navegación principal
   --------------------------------------------------------- */
export function renderHeader() {
  const b = getBasePath();

  return `
    <header id="header">
      <nav>
        <div class="logo-container">
          <a href="${b}index.html" class="logo-link" aria-label="Ir a la página de inicio de Fundación PROFIME">
            <img src="${b}images/logos/logo_profime_claro.png" alt="Logo PROFIME" class="logo-img" data-logo-claro="${b}images/logos/logo_profime_claro.png" data-logo-oscuro="${b}images/logos/logo_profime_oscuro.png" width="797" height="378">
          </a>
        </div>
        <button class="hamburger" aria-label="Abrir menú" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="nav-right">
          <ul class="nav-links">
            <li class="dropdown">
              <a href="#nosotros">ACERCA DE<span class="arrow">▾</span></a>
              <ul class="dropdown-menu">
                <li><a href="${b}pages/consejo-directivo.html">Consejo Directivo</a></li>
                <li><a href="${b}pages/historial-de-presidentes.html">Historial de Presidentes</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#logros">LOGROS<span class="arrow">▾</span></a>
              <ul class="dropdown-menu">
                <li><a href="${b}pages/logros-de-fundacion.html">Logros de la Fundación</a></li>
                <li><a href="${b}pages/alumnos-beneficiados.html">Alumnos Beneficiados</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#diplomados">DIPLOMADOS<span class="arrow">▾</span></a>
              <ul class="dropdown-menu">
                <li><a href="${b}pages/4-diplomado.html">4° Diplomado PROFIME</a></li>
                <li><a href="${b}pages/17-diplomado.html">17° Diplomado PROFIME</a></li>
                <li><a href="${b}pages/18-diplomado-en-uso-eficiente-de-energia.html">18° Diplomado PROFIME</a></li>
              </ul>
            </li>
            <li>
              <a href="${b}pages/eventos.html">EVENTOS</a>
            </li>
            <!--
            <li class="dropdown">
              <a href="#eventos">EVENTOS<span class="arrow">▾</span></a>
              <ul class="dropdown-menu">
                <li><a href="${b}pages/eventos.html">Eventos</a></li>
                <li><a href="${b}pages/juntas.html">Juntas</a></li>
              </ul>
            </li>
            -->
            <li><a href="${b}pages/boletines.html">BOLETINES</a></li>
            <li class="dropdown">
              <a href="#galeria">GALERÍA<span class="arrow">▾</span></a>
              <ul class="dropdown-menu">
                <li><a href="${b}pages/generaciones.html">Generaciones</a></li>
                <li><a href="${b}pages/becados.html">Becados</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#donativos">DONATIVO<span class="arrow">▾</span></a>
              <ul class="dropdown-menu">
                <li><a href="${b}pages/donar.html">Realizar Donativo</a></li>
                <li><a href="${b}pages/historial-de-donaciones.html">HISTORIAL DE DONACIONES</a></li>
              </ul>
            </li>
            <li><a href="${b}pages/contacto.html">CONTACTO</a></li>
          </ul>
        </div>
      </nav>
    </header>`;
}

/* ---------------------------------------------------------
   Footer: info de fundación + contacto + logos
   --------------------------------------------------------- */
export function renderFooter() {
  const b = getBasePath();

  return `
    <footer id="contacto">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Fundación PROFIME</h3>
          <p>Facultad de Ingeniería Mecánica y Eléctrica</p>
          <p>Universidad Autónoma de Nuevo León</p>
          <p style="margin-top: 1.5rem; font-weight: 500;">FUNDACIÓN PROFIME U.A.N.L. A.C.</p>
        </div>
        <div class="footer-section">
          <h3>Contacto</h3>
          <p>Pedro de Alba SN, Niños Héroes</p>
          <p>Ciudad Universitaria, 66455</p>
          <p>San Nicolás de los Garza, N.L.</p>
          <p style="margin-top: 1rem;">Teléfono: <a href="tel:+528132460363" class="contact-link">81 3246-0363</a></p>
          <p><a href="https://wa.me/528132460363" class="whatsapp-link">Escríbenos por WhatsApp</a></p>
          <p>Correo: <a href="mailto:contacto@profime.org" class="contact-link">contacto@profime.org</a></p>
        </div>
        <div class="footer-section">
          <h3>Institucional</h3>
          <a href="https://www.uanl.mx/" target="_blank" rel="noopener noreferrer">
            <img src="${b}images/logos/logo-uanl.png" class="footer-logo" alt="UANL" loading="lazy" decoding="async">
          </a>
          <a href="https://www.fime.uanl.mx/" target="_blank" rel="noopener noreferrer">
            <img src="${b}images/logos/logo-fime.png" class="footer-logo" alt="FIME" loading="lazy" decoding="async">
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Fundación PROFIME. Todos los derechos reservados.</p>
      </div>
    </footer>`;
}

/* ---------------------------------------------------------
   Monta los componentes en los placeholders del DOM.
   Llamar en DOMContentLoaded.
   --------------------------------------------------------- */
export function mountComponents() {
  const topbar = document.getElementById("app-topbar");
  if (topbar) topbar.innerHTML = renderTopBar();

  const header = document.getElementById("app-header");
  if (header) header.outerHTML = renderHeader();

  const footer = document.getElementById("app-footer");
  if (footer) footer.outerHTML = renderFooter();

  const sunSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50"><path fill="currentColor" d="M 24.90625 3.96875 C 24.863281 3.976563 24.820313 3.988281 24.78125 4 C 24.316406 4.105469 23.988281 4.523438 24 5 L 24 11 C 23.996094 11.359375 24.183594 11.695313 24.496094 11.878906 C 24.808594 12.058594 25.191406 12.058594 25.503906 11.878906 C 25.816406 11.695313 26.003906 11.359375 26 11 L 26 5 C 26.011719 4.710938 25.894531 4.433594 25.6875 4.238281 C 25.476563 4.039063 25.191406 3.941406 24.90625 3.96875 Z M 10.65625 9.84375 C 10.28125 9.910156 9.980469 10.183594 9.875 10.546875 C 9.769531 10.914063 9.878906 11.304688 10.15625 11.5625 L 14.40625 15.8125 C 14.648438 16.109375 15.035156 16.246094 15.410156 16.160156 C 15.78125 16.074219 16.074219 15.78125 16.160156 15.410156 C 16.246094 15.035156 16.109375 14.648438 15.8125 14.40625 L 11.5625 10.15625 C 11.355469 9.933594 11.054688 9.820313 10.75 9.84375 C 10.71875 9.84375 10.6875 9.84375 10.65625 9.84375 Z M 39.03125 9.84375 C 38.804688 9.875 38.59375 9.988281 38.4375 10.15625 L 34.1875 14.40625 C 33.890625 14.648438 33.753906 15.035156 33.839844 15.410156 C 33.925781 15.78125 34.21875 16.074219 34.589844 16.160156 C 34.964844 16.246094 35.351563 16.109375 35.59375 15.8125 L 39.84375 11.5625 C 40.15625 11.265625 40.246094 10.800781 40.0625 10.410156 C 39.875 10.015625 39.460938 9.789063 39.03125 9.84375 Z M 24.90625 15 C 24.875 15.007813 24.84375 15.019531 24.8125 15.03125 C 24.75 15.035156 24.6875 15.046875 24.625 15.0625 C 24.613281 15.074219 24.605469 15.082031 24.59375 15.09375 C 19.289063 15.320313 15 19.640625 15 25 C 15 30.503906 19.496094 35 25 35 C 30.503906 35 35 30.503906 35 25 C 35 19.660156 30.746094 15.355469 25.46875 15.09375 C 25.433594 15.09375 25.410156 15.0625 25.375 15.0625 C 25.273438 15.023438 25.167969 15.003906 25.0625 15 C 25.042969 15 25.019531 15 25 15 C 24.96875 15 24.9375 15 24.90625 15 Z M 24.9375 17 C 24.957031 17 24.980469 17 25 17 C 25.03125 17 25.0625 17 25.09375 17 C 29.46875 17.050781 33 20.613281 33 25 C 33 29.421875 29.421875 33 25 33 C 20.582031 33 17 29.421875 17 25 C 17 20.601563 20.546875 17.035156 24.9375 17 Z M 4.71875 24 C 4.167969 24.078125 3.78125 24.589844 3.859375 25.140625 C 3.9375 25.691406 4.449219 26.078125 5 26 L 11 26 C 11.359375 26.003906 11.695313 25.816406 11.878906 25.503906 C 12.058594 25.191406 12.058594 24.808594 11.878906 24.496094 C 11.695313 24.183594 11.359375 23.996094 11 24 L 5 24 C 4.96875 24 4.9375 24 4.90625 24 C 4.875 24 4.84375 24 4.8125 24 C 4.78125 24 4.75 24 4.71875 24 Z M 38.71875 24 C 38.167969 24.078125 37.78125 24.589844 37.859375 25.140625 C 37.9375 25.691406 38.449219 26.078125 39 26 L 45 26 C 45.359375 26.003906 45.695313 25.816406 45.878906 25.503906 C 46.058594 25.191406 46.058594 24.808594 45.878906 24.496094 C 45.695313 24.183594 45.359375 23.996094 45 24 L 39 24 C 38.96875 24 38.9375 24 38.90625 24 C 38.875 24 38.84375 24 38.8125 24 C 38.78125 24 38.75 24 38.71875 24 Z M 15 33.875 C 14.773438 33.90625 14.5625 34.019531 14.40625 34.1875 L 10.15625 38.4375 C 9.859375 38.679688 9.722656 39.066406 9.808594 39.441406 C 9.894531 39.8125 10.1875 40.105469 10.558594 40.191406 C 10.933594 40.277344 11.320313 40.140625 11.5625 39.84375 L 15.8125 35.59375 C 16.109375 35.308594 16.199219 34.867188 16.039063 34.488281 C 15.882813 34.109375 15.503906 33.867188 15.09375 33.875 C 15.0625 33.875 15.03125 33.875 15 33.875 Z M 34.6875 33.875 C 34.3125 33.941406 34.011719 34.214844 33.90625 34.578125 C 33.800781 34.945313 33.910156 35.335938 34.1875 35.59375 L 38.4375 39.84375 C 38.679688 40.140625 39.066406 40.277344 39.441406 40.191406 C 39.8125 40.105469 40.105469 39.8125 40.191406 39.441406 C 40.277344 39.066406 40.140625 38.679688 39.84375 38.4375 L 35.59375 34.1875 C 35.40625 33.988281 35.148438 33.878906 34.875 33.875 C 34.84375 33.875 34.8125 33.875 34.78125 33.875 C 34.75 33.875 34.71875 33.875 34.6875 33.875 Z M 24.90625 37.96875 C 24.863281 37.976563 24.820313 37.988281 24.78125 38 C 24.316406 38.105469 23.988281 38.523438 24 39 L 24 45 C 23.996094 45.359375 24.183594 45.695313 24.496094 45.878906 C 24.808594 46.058594 25.191406 46.058594 25.503906 45.878906 C 25.816406 45.695313 26.003906 45.359375 26 45 L 26 39 C 26.011719 38.710938 25.894531 38.433594 25.6875 38.238281 C 25.476563 38.039063 25.191406 37.941406 24.90625 37.96875 Z"/></svg>';
  const moonSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/></svg>';

  // Dark mode toggle button
  if (!document.getElementById('dark-mode-toggle')) {
    const btn = document.createElement('button');
    btn.id = 'dark-mode-toggle';
    btn.className = 'dark-mode-toggle';
    btn.setAttribute('aria-label', 'Cambiar modo oscuro/claro');
    btn.innerHTML = document.documentElement.classList.contains('dark-mode') ? sunSvg : moonSvg;
    btn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark-mode');
      const isDark = document.documentElement.classList.contains('dark-mode');
      btn.innerHTML = isDark ? sunSvg : moonSvg;
      localStorage.setItem('dark-mode', isDark);
      swapLogos(isDark);
    });
    document.body.appendChild(btn);
  }

  // Restore dark mode preference
  if (localStorage.getItem('dark-mode') === 'true') {
    document.documentElement.classList.add('dark-mode');
    const btn = document.getElementById('dark-mode-toggle');
    if (btn) btn.innerHTML = sunSvg;
    swapLogos(true);
  }
}

/* ---------------------------------------------------------
   Swap logo images based on dark/light mode
   --------------------------------------------------------- */
function swapLogos(isDark) {
  document.querySelectorAll('.logo-img').forEach((img) => {
    const claro = img.getAttribute('data-logo-claro');
    const oscuro = img.getAttribute('data-logo-oscuro');
    if (claro && oscuro) {
      // Fade out, swap, fade in
      img.style.opacity = '0';
      setTimeout(() => {
        img.src = isDark ? oscuro : claro;
        img.style.opacity = '1';
      }, 200);
    }
  });
}
