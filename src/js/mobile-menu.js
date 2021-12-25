(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  // refs.backdrop.addEventListener('click', backdropClick);

  // function toggleModal() {
  //   refs.modal.classList.toggle('is-hidden');
  //   window.addEventListener('keydown', handle);
  // }

  // function handle(e) {
  //   if (e.code === 'Escape') {
  //     refs.modal.classList.toggle('is-hidden');
  //     window.removeEventListener('keydown', handle);
  //   }
  // }

  function backdropClick(e) {
    if (e.target !== e.currentTarget) return;
    refs.modal.classList.toggle('is-hidden');
  }

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
