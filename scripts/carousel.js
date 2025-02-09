const wrapper = document.querySelector('.carousel-wrapper');
const dots = document.querySelectorAll('.dot');
const cards = document.querySelectorAll('.project-card');
let currentIndex = 0;

function updateCarousel(index) {
  const cardWidth = cards[0].offsetWidth; // Width of one card
  const gap = 10;
  wrapper.style.transform = `translateX(-${index * cardWidth}px)`; // Slide to the correct position
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

document.querySelector('.left-arrow').addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length - 1;
  updateCarousel(currentIndex);
});

document.querySelector('.right-arrow').addEventListener('click', () => {
  currentIndex = (currentIndex < cards.length - 1) ? currentIndex + 1 : 0;
  updateCarousel(currentIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel(currentIndex);
  });
});
