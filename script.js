document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelectorAll('.category-slider').forEach((slider) => {
  const track = slider.querySelector('.category-track');
  slider.querySelector('.left').addEventListener('click', () => track.scrollBy({ left: -300, behavior: 'smooth' }));
  slider.querySelector('.right').addEventListener('click', () => track.scrollBy({ left: 300, behavior: 'smooth' }));
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
