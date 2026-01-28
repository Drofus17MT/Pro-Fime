// Hero Slider
let currentSlideIndex = 0;
let slides = [];
let dots = [];
let slideInterval;

function showSlide(index) {
  if (slides.length === 0) return;
  slides.forEach((slide) => slide.classList.remove("active"));
  if (dots && dots.length > 0) {
    dots.forEach((dot) => dot.classList.remove("active"));
  }

  slides[index].classList.add("active");
  if (dots && dots[index]) {
    dots[index].classList.add("active");
  }
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
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  showSlide(currentSlideIndex);
}

function resetInterval() {
  clearInterval(slideInterval);
  if (slides.length > 0) {
    slideInterval = setInterval(autoSlide, 5000);
  }
}

// Initialize slider and dots
document.addEventListener("DOMContentLoaded", function() {
  slides = document.querySelectorAll(".hero-slide");
  dots = document.querySelectorAll(".dot");
  
  // Add click event listeners to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function() {
      currentSlide(index);
    });
  });
  
  // Initialize slider
  if (slides.length > 0) {
    showSlide(0);
    slideInterval = setInterval(autoSlide, 5000);
  }
});

// Header scroll effect
let lastScroll = 0;
const header = document.getElementById("header");
if (header) {
  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    lastScroll = currentScroll;
  });
}

// Search functionality
const searchButton = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-input");

if (searchButton && searchInput) {
  searchButton.addEventListener("click", function () {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
      console.log("Buscando:", searchTerm);
      // Aquí puedes implementar la lógica de búsqueda
      alert("Función de búsqueda: " + searchTerm);
    }
  });

  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchButton.click();
    }
  });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = 126;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// 
document.addEventListener("DOMContentLoaded", function() {
  const fundacionProFimeLogo = document.querySelector(".logo-img");

  if (fundacionProFimeLogo) {
    fundacionProFimeLogo.addEventListener("click", function() {
      window.location.href = "/";
    });
  }
});