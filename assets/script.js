document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.product-card');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;
      cards.forEach((card) => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hide', !show);
      });
    });
  });

  document.querySelectorAll('.product-gallery').forEach((gallery) => {
    const main = gallery.querySelector('.main-img');
    gallery.querySelectorAll('.thumbs button').forEach((button) => {
      button.addEventListener('click', () => {
        const img = button.querySelector('img');
        main.src = img.src;
        main.alt = img.alt;
      });
    });
  });
});
