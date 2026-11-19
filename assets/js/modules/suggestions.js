/**
 * SaludBarrial — Buzón Modal Flotante de Sugerencias y Reportes
 */
import { showToast } from './toast.js';

export function openFloatingSuggestionModal() {
  const suggestionsFloatingModal = document.getElementById('suggestionsFloatingModal');
  if (!suggestionsFloatingModal) return;

  suggestionsFloatingModal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

export function closeFloatingSuggestionModal() {
  const suggestionsFloatingModal = document.getElementById('suggestionsFloatingModal');
  if (!suggestionsFloatingModal) return;

  suggestionsFloatingModal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

export function handleFloatingSuggestion(e) {
  e.preventDefault();
  const nameInput = document.getElementById('sugName');
  const name = nameInput ? nameInput.value : 'vecino';
  closeFloatingSuggestionModal();
  const form = document.getElementById('floatingSuggestionForm');
  if (form) form.reset();
  showToast("¡Sugerencia recibida!", `Gracias ${name}, tu mensaje ha sido enviado a SaludPrimero.`);
}

export function initSuggestions() {
  const form = document.getElementById('floatingSuggestionForm');
  if (form) {
    form.addEventListener('submit', handleFloatingSuggestion);
  }
}
