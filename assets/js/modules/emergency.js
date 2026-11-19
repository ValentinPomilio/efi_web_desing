/**
 * SaludBarrial — Asistente de Triaje y Modal de Emergencias (FAB 107)
 */
export const triageScenarios = {
  rcp: {
    image: "img/guias-emergencia/rcp.png",
    imageAlt: "Guía rápida de RCP con cinco pasos ilustrados."
  },
  heimlich: {
    image: "img/guias-emergencia/atragantamiento.png",
    imageAlt: "Guía rápida de la maniobra de Heimlich para atragantamiento."
  },
  hemorragia: {
    image: "img/guias-emergencia/hemorragia.png",
    imageAlt: "Guía rápida para detener una hemorragia con pasos ilustrados."
  },
  desmayo: {
    image: "img/guias-emergencia/desmayo-caida.png",
    imageAlt: "Guía rápida ante pérdida de conocimiento por desmayo o caída."
  }
};

export function selectTriageScenario(key) {
  const triageContent = document.getElementById('triageContent');
  if (!triageContent) return;

  const scenarioKey = Object.hasOwn(triageScenarios, key) ? key : 'rcp';
  const tabs = document.querySelectorAll('.triage-tab');
  tabs.forEach(tab => {
    const isSelected = tab.dataset.scenario === scenarioKey;
    tab.classList.toggle('active', isSelected);
    tab.setAttribute('aria-pressed', String(isSelected));
  });

  const data = triageScenarios[scenarioKey];
  triageContent.innerHTML = `
    <img class="emergency-guide-image" src="${data.image}" alt="${data.imageAlt}" width="600" height="327" decoding="async">
  `;
}

export function openFloatingEmergencyModal() {
  const floatingEmergencyModal = document.getElementById('floatingEmergencyModal');
  if (!floatingEmergencyModal) return;

  selectTriageScenario('rcp');
  floatingEmergencyModal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

export function closeFloatingEmergencyModal() {
  const floatingEmergencyModal = document.getElementById('floatingEmergencyModal');
  if (!floatingEmergencyModal) return;

  floatingEmergencyModal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

export function initEmergency() {
  const floatingEmergencyBtn = document.getElementById('floatingEmergencyBtn');
  if (floatingEmergencyBtn) {
    floatingEmergencyBtn.addEventListener('click', openFloatingEmergencyModal);
  }
}
