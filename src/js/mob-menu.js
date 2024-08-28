(() => {
  const mobileMenu = document.querySelector('.mobile-menu-div');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const list = document.querySelector('.mobile-menu-nav');
  const overlay = document.querySelector('.overlay');
  const body = document.querySelector('body');

  const openMobileMenu = () => {
    mobileMenu.classList.toggle('is-close');
    openMenuBtn.classList.toggle('is-hidden');
    closeMenuBtn.classList.toggle('is-hidden');
    overlay.style.display = 'block';
    body.classList.toggle('scroll');
    console.log(body);
  };

  const closeModileMenu = () => {
    mobileMenu.classList.toggle('is-close');
    openMenuBtn.classList.toggle('is-hidden');
    closeMenuBtn.classList.toggle('is-hidden');
    overlay.style.display = 'none';
    body.classList.toggle('scroll');
  };

  list.addEventListener('click', closeModileMenu);

  openMenuBtn.addEventListener('click', openMobileMenu);

  closeMenuBtn.addEventListener('click', closeModileMenu);
  overlay.addEventListener('click', closeModileMenu);
})();
