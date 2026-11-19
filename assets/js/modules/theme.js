/**
 * SaludBarrial — Conmutador y Persistencia de Tema Claro / Oscuro
 */
export function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');

  function updateThemeIcon() {
    if (!themeIcon || !themeToggleBtn) return;
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      themeIcon.className = "fa-solid fa-sun text-amber-300 text-xs sm:text-sm pointer-events-none";
      themeToggleBtn.setAttribute('aria-label', 'Cambiar a modo claro');
    } else {
      themeIcon.className = "fa-solid fa-moon text-slate-600 text-xs sm:text-sm pointer-events-none";
      themeToggleBtn.setAttribute('aria-label', 'Cambiar a modo oscuro');
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
      updateThemeIcon();
    });
  }

  updateThemeIcon();
}
