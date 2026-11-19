/**
 * SaludBarrial — Sistema de Notificaciones Accesible (Toast)
 */
export function showToast(title, message) {
  const successToast = document.getElementById('successToast');
  const toastTitle = document.getElementById('toastTitle');
  const toastMessage = document.getElementById('toastMessage');

  if (!successToast || !toastTitle || !toastMessage) return;

  toastTitle.textContent = title;
  toastMessage.textContent = message;

  successToast.classList.remove('translate-y-[-150%]', 'opacity-0');
  successToast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    successToast.classList.add('translate-y-[-150%]', 'opacity-0');
    successToast.classList.remove('translate-y-0', 'opacity-100');
  }, 4000);
}
