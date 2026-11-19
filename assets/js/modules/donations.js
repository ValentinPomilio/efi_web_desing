/**
 * SaludBarrial — Modal de Donaciones Comunitarias
 */
import { showToast } from './toast.js';

export function openDonationModal() {
  const donationModal = document.getElementById('donationModal');
  if (!donationModal) return;

  donationModal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

export function closeDonationModal() {
  const donationModal = document.getElementById('donationModal');
  if (!donationModal) return;

  donationModal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

export function handleDonationSubmit(e) {
  e.preventDefault();
  closeDonationModal();
  const form = document.getElementById('donationForm');
  if (form) form.reset();
  showToast("¡Donación registrada con éxito!", "El equipo de SaludBarrial se comunicará para coordinar la entrega o recepción.");
}

export function initDonations() {
  const donationForm = document.getElementById('donationForm');
  if (donationForm) {
    donationForm.addEventListener('submit', handleDonationSubmit);
  }
}
