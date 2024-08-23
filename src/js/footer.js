const footerItems = document.querySelectorAll('.footer-nav-item');

footerItems.forEach(item => {
  item.addEventListener('click', () => {
    console.log('hi');
    item.classList.toggle('accent-color');
  });
});
