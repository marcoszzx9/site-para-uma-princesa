document.addEventListener('DOMContentLoaded', function() {
    alert("MEU AMOR, CLICA NAS PALAVRAS DO MEIO, TE AMO");
});
// Inicializar animaciones AOS
AOS.init({
  duration: 1000,
  once: true
});


// === Modal de tarjetas ===
const cards = document.querySelectorAll('.gift-card');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const closeBtn = document.getElementById('closeBtn');

cards.forEach(card => {
  card.addEventListener('click', () => {
    modalImg.src = card.dataset.img;       // imagen estática
    modalTitle.textContent = card.dataset.title;
    modalText.textContent = card.dataset.desc;
    modal.classList.add('active');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});


closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

window.changeSong = changeSong;

 // Small: load TikTok embed script (if there are TikTok blockquotes on the page)
    (function(){
      var s = document.createElement('script'); s.src = 'https://www.tiktok.com/embed.js'; s.async=true; document.body.appendChild(s);
    })();


