function moveUnderlineToActive() {
  const underline = document.getElementById('nav-underline');
  const activeBtn = document.querySelector('.nav-link.active');
  const navbar = document.getElementById('navbar');
  if (activeBtn && underline && navbar) {
    const btnRect = activeBtn.getBoundingClientRect();
    const navRect = navbar.getBoundingClientRect();
    underline.style.width = btnRect.width + "px";
    underline.style.transform = `translateX(${btnRect.left - navRect.left}px)`;
  }
}

function showPage(pageId, btn) {
  document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
  btn.classList.add('active');
  moveUnderlineToActive();
}

window.addEventListener('DOMContentLoaded', moveUnderlineToActive);

// Planet scaling effect on scroll - optimized
let ticking = false;

function updatePlanet() {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const scrollProgress = Math.min(scrollY / (document.body.scrollHeight - windowHeight), 1);
  
  // Scale planet from 400px to 800px based on scroll
  const planetSize = 400 + (scrollProgress * 400);
  document.body.style.setProperty('--planet-size', `${planetSize}px`);
  
  ticking = false;
}

function requestPlanetUpdate() {
  if (!ticking) {
    requestAnimationFrame(updatePlanet);
    ticking = true;
  }
}

window.addEventListener('scroll', requestPlanetUpdate, { passive: true });