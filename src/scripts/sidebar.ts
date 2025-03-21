const sidebarTrigger = document.querySelector('[data-glass][data-sidebar]');

if (sidebarTrigger) {
  const sidebar = document.querySelector(sidebarTrigger.getAttribute('data-sidebar')!);
  const glass = document.querySelector(sidebarTrigger.getAttribute('data-glass')!);

  sidebarTrigger.addEventListener('click', () => {
    sidebar?.classList.toggle('show');
    glass?.classList.toggle('show');
  });

  glass?.addEventListener('click', () => {
    sidebar?.classList.remove('show');
    glass?.classList.remove('show');
  });
}
