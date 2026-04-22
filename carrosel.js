const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(${-index * 600}px)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
});
