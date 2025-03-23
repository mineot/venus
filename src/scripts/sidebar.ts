const triggerSidebar = document.querySelector('[data-trigger-sidebar]');

if (triggerSidebar) {
  const sidebar = document.querySelector('.sidebar');
  const backdropGlass = document.querySelector('.backdrop-glass');

  if (sidebar && backdropGlass) {
    triggerSidebar.addEventListener('click', () => {
      sidebar.classList.toggle('show');
      backdropGlass.classList.toggle('show');
    });

    backdropGlass.addEventListener('click', () => {
      sidebar.classList.remove('show');
      backdropGlass.classList.remove('show');
    });
  }
}
