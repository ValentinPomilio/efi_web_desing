/**
 * SaludBarrial — Menú de Navegación Móvil Desplegable
 */
let isMenuExpanded = false;

export function closeMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');

  if (mobileMenu) mobileMenu.classList.add('hidden');
  if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
  if (menuIcon) menuIcon.className = 'fa-solid fa-bars text-sm pointer-events-none';
  isMenuExpanded = false;
}

export function openMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');

  if (mobileMenu) mobileMenu.classList.remove('hidden');
  if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'true');
  if (menuIcon) menuIcon.className = 'fa-solid fa-xmark text-sm pointer-events-none';
  isMenuExpanded = true;
}

export function initNavigation() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  // Cerrar menú al hacer clic en cualquier link del menú móvil
  const mobileLinks = document.querySelectorAll('#mobileMenu a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });
}
