(() => {
  const mobileMenu = document.querySelector('.mobile-menu-div');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const openMobileMenu = () => {
    mobileMenu.classList.toggle('is-close');
    openMenuBtn.classList.toggle('is-hidden');
    closeMenuBtn.classList.toggle('is-hidden');
  };

  const closeModileMenu = () => {
    mobileMenu.classList.toggle('is-close');
    openMenuBtn.classList.toggle('is-hidden');
    closeMenuBtn.classList.toggle('is-hidden');
  };

  openMenuBtn.addEventListener('click', openMobileMenu);

  closeMenuBtn.addEventListener('click', closeModileMenu);
})();
