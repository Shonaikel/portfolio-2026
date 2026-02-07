document.addEventListener('DOMContentLoaded', () => {

  /* ===== TYPING EFFECT ===== */
  const text = "Jonaikel Quesada";
  const typingElement = document.getElementById("typing");

  let index = 0;
  let isDeleting = false;
  let delay = 100;

  function typeEffect() {
    if (!isDeleting) {
      typingElement.textContent = text.slice(0, index + 1); //substring
      index++;

      if (index === text.length) {
        delay = 1200; // pausa al terminar de escribir
        isDeleting = true;
      } else {
        delay = 100;
      }
    } else {
      typingElement.textContent = text.slice(0, index - 1);
      index--;

      if (index === 0) {
        delay = 600; // pausa cuando queda vacío
        isDeleting = false;
      } else {
        delay = 60;
      }
    }

    setTimeout(typeEffect, delay);
  }

  typeEffect();
  
// =========================
  // ===== FLIP CARDS ========
  // =========================
  function initFlipCards() {
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
      });
    });
  }

  // =========================
  // ===== BUTTON GLOW =======
  // =========================
  function initButtonGlow() {
    document.querySelectorAll('.btn-contact').forEach(btn => {
      btn.addEventListener('mouseenter', () => btn.classList.add('glow'));
      btn.addEventListener('mouseleave', () => btn.classList.remove('glow'));
    });
  }

  /* INIT */
  initFlipCards();
  initButtonGlow();

});