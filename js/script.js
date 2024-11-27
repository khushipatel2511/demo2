const sliderContainer = document.querySelector('.slider-container');
const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Calculate the number of visible cards based on screen width
function getVisibleCards() {
  if (window.innerWidth <= 480) {
    return 1;
  } else if (window.innerWidth <= 768) {
    return 2;
  } else {
    return 3;
  }
}

function updateSlider() {
  const visibleCards = getVisibleCards();
  const offset = -(currentIndex * (100 / visibleCards));
  sliderContainer.style.transform = `translateX(${offset}%)`;
}

// Add event listeners for navigation
prevButton.addEventListener('click', () => {
  const visibleCards = getVisibleCards();
  currentIndex = Math.max(currentIndex - 1, 0);
  updateSlider();
});

nextButton.addEventListener('click', () => {
  const visibleCards = getVisibleCards();
  const maxIndex = cards.length - visibleCards;
  currentIndex = Math.min(currentIndex + 1, maxIndex);
  updateSlider();
});

// Adjust slider on window resize
window.addEventListener('resize', updateSlider);

// Initial slider update
updateSlider();
