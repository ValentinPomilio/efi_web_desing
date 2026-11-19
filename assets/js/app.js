/**
 * SaludBarrial — Orquestador Principal de la Aplicación
 */
import { initTheme } from './modules/theme.js';
import { initNavigation, closeMobileMenu } from './modules/navigation.js';
import { initDoctorsDirectory, filterDoctors, resetDoctorFilters } from './modules/doctors.js';
import { initGeolocation, locateNearestCenterGps } from './modules/geolocation.js';
import { 
  initEmergency, 
  openFloatingEmergencyModal, 
  closeFloatingEmergencyModal, 
  selectTriageScenario 
} from './modules/emergency.js';
import { 
  initSuggestions, 
  openFloatingSuggestionModal, 
  closeFloatingSuggestionModal, 
  handleFloatingSuggestion 
} from './modules/suggestions.js';
import { 
  initDonations, 
  openDonationModal, 
  closeDonationModal, 
  handleDonationSubmit 
} from './modules/donations.js';
import { showToast } from './modules/toast.js';

// Exponer funciones en window para compatibilidad estricta con atributos HTML inline (onclick, onsubmit)
window.openFloatingSuggestionModal = openFloatingSuggestionModal;
window.closeFloatingSuggestionModal = closeFloatingSuggestionModal;
window.handleFloatingSuggestion = handleFloatingSuggestion;

window.openFloatingEmergencyModal = openFloatingEmergencyModal;
window.closeFloatingEmergencyModal = closeFloatingEmergencyModal;
window.selectTriageScenario = selectTriageScenario;

window.openDonationModal = openDonationModal;
window.closeDonationModal = closeDonationModal;
window.handleDonationSubmit = handleDonationSubmit;

window.locateNearestCenterGps = locateNearestCenterGps;
window.filterDoctors = filterDoctors;
window.resetDoctorFilters = resetDoctorFilters;
window.showToast = showToast;

// Manejo accesible de teclado: tecla Escape cierra cualquier modal abierto o menú
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeFloatingEmergencyModal();
    closeFloatingSuggestionModal();
    closeDonationModal();
    closeMobileMenu();
  }
});

// Inicialización de la aplicación al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initDoctorsDirectory();
  initGeolocation();
  initEmergency();
  initSuggestions();
  initDonations();
});
