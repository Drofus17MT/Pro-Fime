"use strict";

import { mountComponents } from "./components.js";

/* =========================================================
   Utilidades
   ========================================================= */
function debounce(fn, wait = 100) {
  let timeoutId;
  return function debounced(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), wait);
  };
}

/* =========================================================
   Hero Slider
   ========================================================= */
let currentSlideIndex = 0;
let slides = [];
let dots = [];
let slideInterval = null;
const SLIDE_DELAY_MS = 5000;

function showSlide(index) {
  if (slides.length === 0) return;
  slides.forEach((slide) => slide.classList.remove("active"));
  if (dots.length > 0) {
    dots.forEach((dot) => dot.classList.remove("active"));
  }

  slides[index]?.classList.add("active");
  dots[index]?.classList.add("active");
}

function moveSlide(direction) {
  if (slides.length === 0) return;
  currentSlideIndex += direction;

  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }

  showSlide(currentSlideIndex);
  resetInterval();
}

function currentSlide(index) {
  if (slides.length === 0) return;
  currentSlideIndex = index;
  showSlide(currentSlideIndex);
  resetInterval();
}

function autoSlide() {
  if (slides.length === 0) return;
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

function stopInterval() {
  if (slideInterval) {
    clearInterval(slideInterval);
    slideInterval = null;
  }
}

function resetInterval() {
  stopInterval();
  if (slides.length > 0 && document.visibilityState === "visible") {
    slideInterval = setInterval(autoSlide, SLIDE_DELAY_MS);
  }
}

function initSlider() {
  slides = Array.from(document.querySelectorAll(".hero-slide"));
  dots = Array.from(document.querySelectorAll(".dot"));

  if (slides.length === 0) return;

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => currentSlide(index));
  });

  showSlide(0);
  resetInterval();

  // Pausa el auto-avance cuando el usuario interactúa con el carrusel,
  // y lo detiene por completo si la pestaña no está visible (ahorra recursos).
  const heroSlider = document.querySelector(".hero-slider");
  if (heroSlider) {
    heroSlider.addEventListener("mouseenter", stopInterval);
    heroSlider.addEventListener("mouseleave", resetInterval);
    heroSlider.addEventListener("focusin", stopInterval);
    heroSlider.addEventListener("focusout", resetInterval);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      stopInterval();
    } else {
      resetInterval();
    }
  });
}

/* =========================================================
   Header con efecto de scroll (con debounce para rendimiento)
   ========================================================= */
function initHeaderScroll() {
  const header = document.getElementById("header");
  if (!header) return;

  const updateHeader = () => {
    header.classList.toggle("scrolled", window.pageYOffset > 30);
  };

  updateHeader();
  window.addEventListener("scroll", debounce(updateHeader, 50), { passive: true });
}

/* =========================================================
   Menús desplegables (dropdown): accesibles con teclado y táctil,
   no solo con :hover (que no funciona en móvil).
   ========================================================= */
function initDropdowns() {
  const dropdowns = Array.from(document.querySelectorAll(".nav-links .dropdown"));
  if (dropdowns.length === 0) return;

  function closeAll(except) {
    dropdowns.forEach((dd) => {
      if (dd !== except) dd.classList.remove("open");
    });
  }

  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector(":scope > a");
    if (!trigger) return;

    trigger.addEventListener("click", (e) => {
      // Solo interceptamos los disparadores que no apuntan a una sección real
      // de esta misma página; los enlaces reales (ej. DONATIVO) navegan normal.
      const href = trigger.getAttribute("href") || "";
      const isInPageAnchor = href.startsWith("#");
      const targetExists = isInPageAnchor && href.length > 1 && document.querySelector(href);

      if (isInPageAnchor && !targetExists) {
        e.preventDefault();
        const willOpen = !dropdown.classList.contains("open");
        closeAll(dropdown);
        dropdown.classList.toggle("open", willOpen);
      }
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) closeAll();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });
}

/* =========================================================
   Scroll suave para anclas internas
   ========================================================= */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;

      let target;
      try {
        target = document.querySelector(href);
      } catch {
        // Selector inválido (ej. href="#123" o caracteres especiales): lo ignoramos
        // en vez de dejar que se propague un error.
        return;
      }

      if (!target) return;

      e.preventDefault();
      const headerOffset = 126;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });
}

/* =========================================================
   Búsqueda (solo se activa si el markup existe en la página)
   ========================================================= */
function initSearch() {
  const searchButton = document.querySelector(".search-button");
  const searchInput = document.querySelector(".search-input");
  if (!searchButton || !searchInput) return;

  const runSearch = () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
      // Placeholder: aquí se debe conectar la búsqueda real cuando exista backend/índice.
      console.log("Buscando:", searchTerm);
    }
  };

  searchButton.addEventListener("click", runSearch);
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") runSearch();
  });
}

/* =========================================================
   Fallback del logo si la imagen no carga (antes iba inline
   como onerror="..." en el HTML; se movió aquí para poder
   aplicar una Content-Security-Policy sin 'unsafe-inline' en script-src)
   ========================================================= */
function initLogoFallback() {
  document.querySelectorAll(".logo-img").forEach((img) => {
    img.addEventListener("error", () => {
      img.style.display = "none";
    });
  });
}

/* =========================================================
   Copiar CLABE al portapapeles
   ========================================================= */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll(".copy-button");
  if (copyButtons.length === 0) return;

  copyButtons.forEach((button) => {
    button.addEventListener("click", async function () {
      const textToCopy = this.getAttribute("data-clipboard-text");
      if (!textToCopy) return;

      const span = this.querySelector("span");
      const originalText = span ? span.textContent : "";

      try {
        await navigator.clipboard.writeText(textToCopy);
        if (span) span.textContent = "¡Copiado!";
        this.style.background = "var(--verde-fime)";
      } catch (err) {
        console.error("No se pudo copiar al portapapeles:", err);
        if (span) span.textContent = "No se pudo copiar";
        this.style.background = "#a5341a";
      } finally {
        setTimeout(() => {
          if (span) span.textContent = originalText;
          this.style.background = "";
        }, 2000);
      }
    });
  });
}

/* =========================================================
   Formulario de contacto: validación en el cliente + protección
   anti-spam básica (honeypot). No hay backend configurado en este
   proyecto, así que el envío final se prepara como correo (mailto)
   con los datos ya validados. Cuando exista un endpoint real
   (formulario propio, Formspree, etc.), sustituir el bloque
   "envío" por una petición fetch() a ese servicio.
   ========================================================= */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const statusBox = document.getElementById("formStatus");

  const validators = {
    nombre: (v) => v.trim().length >= 2,
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    telefono: (v) => v.trim() === "" || /^[0-9+\-\s()]{7,20}$/.test(v.trim()),
    asunto: (v) => v.trim() !== "",
    mensaje: (v) => v.trim().length >= 10,
  };

  function setFieldValid(field, isValid) {
    const group = field.closest(".form-group");
    if (group) group.classList.toggle("invalid", !isValid);
    field.setAttribute("aria-invalid", isValid ? "false" : "true");
  }

  function validateField(field) {
    const validate = validators[field.name];
    if (!validate) return true;
    const isValid = validate(field.value);
    setFieldValid(field, isValid);
    return isValid;
  }

  ["nombre", "email", "telefono", "asunto", "mensaje"].forEach((name) => {
    const field = form.elements.namedItem(name);
    if (field) {
      field.addEventListener("blur", () => validateField(field));
    }
  });

  function showStatus(message, type) {
    if (!statusBox) return;
    statusBox.textContent = message;
    statusBox.classList.remove("success", "error");
    statusBox.classList.add("visible", type);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Honeypot: si el campo trampa viene relleno, es casi seguro un bot.
    // No mostramos error para no delatar la técnica; simplemente no enviamos.
    const honeypot = form.elements.namedItem("empresa");
    if (honeypot && honeypot.value.trim() !== "") {
      return;
    }

    const fields = ["nombre", "email", "telefono", "asunto", "mensaje"]
      .map((name) => form.elements.namedItem(name))
      .filter(Boolean);

    const allValid = fields
      .map((field) => validateField(field))
      .every(Boolean);

    if (!allValid) {
      showStatus("Revisa los campos marcados antes de enviar.", "error");
      const firstInvalid = form.querySelector(".form-group.invalid input, .form-group.invalid select, .form-group.invalid textarea");
      firstInvalid?.focus();
      return;
    }

    const submitBtn = form.querySelector(".submit-btn");
    if (submitBtn) submitBtn.disabled = true;

    const data = Object.fromEntries(fields.map((f) => [f.name, f.value.trim()]));

    const subject = encodeURIComponent(`[Sitio web] ${data.asunto} - ${data.nombre}`);
    const body = encodeURIComponent(
      `Nombre: ${data.nombre}\n` +
      `Correo: ${data.email}\n` +
      `Teléfono: ${data.telefono || "No proporcionado"}\n\n` +
      `Mensaje:\n${data.mensaje}`
    );

    window.location.href = `mailto:contacto@profime.org?subject=${subject}&body=${body}`;

    showStatus("Tu cliente de correo se abrirá para enviar el mensaje a contacto@profime.org.", "success");
    if (submitBtn) submitBtn.disabled = false;
  });
}

/* =========================================================
   Menú hamburguesa (móvil)
   ========================================================= */
function initHamburger() {
  const hamburger = document.querySelector(".hamburger");
  const navRight = document.querySelector(".nav-right");
  if (!hamburger || !navRight) return;

  // Crear overlay
  let overlay = document.querySelector(".nav-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "nav-overlay";
    document.body.appendChild(overlay);
  }

  function toggleMenu() {
    const isOpen = navRight.classList.toggle("open");
    hamburger.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
    overlay.classList.toggle("visible", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  }

  function closeMenu() {
    navRight.classList.remove("open");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    overlay.classList.remove("visible");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeMenu);

  // Cerrar con Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Cerrar al hacer clic en un enlace del menú
  navRight.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) closeMenu();
    });
  });

  // Cerrar si se agranda la ventana
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) closeMenu();
  });
}

/* =========================================================
   Inicialización
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  // Inyectar componentes reutilizables antes de inicializar comportamientos
  mountComponents();

  initSlider();
  initHeaderScroll();
  initDropdowns();
  initHamburger();
  initSmoothScroll();
  initSearch();
  initLogoFallback();
  initCopyButtons();
  initContactForm();
});
