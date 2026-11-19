/**
 * SaludBarrial — Directorio Médico y Filtrado Reactivo
 */
import { directorioMedicos } from '../data/doctors.data.js';

export function renderDoctorsList(doctors) {
  const doctorsListContainer = document.getElementById('doctorsListContainer');
  const noDoctorsEmptyState = document.getElementById('noDoctorsEmptyState');
  const doctorsCountBadge = document.getElementById('doctorsCountBadge');

  if (!doctorsListContainer || !noDoctorsEmptyState || !doctorsCountBadge) return;

  doctorsListContainer.innerHTML = '';

  if (doctors.length === 0) {
    doctorsListContainer.classList.add('hidden');
    noDoctorsEmptyState.classList.remove('hidden');
    doctorsCountBadge.textContent = '0 médicos encontrados';
    return;
  }

  doctorsListContainer.classList.remove('hidden');
  noDoctorsEmptyState.classList.add('hidden');
  doctorsCountBadge.textContent = `${doctors.length} profesional${doctors.length > 1 ? 'es' : ''} registrado${doctors.length > 1 ? 's' : ''}`;

  doctors.forEach(med => {
    const item = document.createElement('div');
    item.className = "py-4 px-3 sm:px-4 rounded-2xl bg-slate-50 dark:bg-[#162035] hover:bg-blue-50/50 dark:hover:bg-[#1C2842] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 border border-[#EAEEF4] dark:border-[#172138] shadow-xs";

    const badgeGratis = med.esGratuito 
      ? `<span class="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
           <i class="fa-solid fa-check"></i> Gratuito
         </span>`
      : `<span class="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
           <i class="fa-solid fa-file-medical"></i> Obras Sociales
         </span>`;

    const telLink = med.telefono === '107' ? 'tel:107' : `tel:${med.telefono}`;

    item.innerHTML = `
      <!-- Datos del Profesional -->
      <div class="flex items-start gap-3.5 flex-1">
        <div class="w-11 h-11 rounded-2xl bg-[#2563EB] dark:bg-[#4D8EFF] text-white flex items-center justify-center text-lg flex-shrink-0 shadow-xs mt-0.5">
          <i class="fa-solid fa-stethoscope"></i>
        </div>
        
        <div class="space-y-1 flex-1">
          <div class="flex items-center gap-2 flex-wrap">
            <h4 class="text-base font-black text-[#0F172A] dark:text-white leading-tight">
              ${med.nombre}
            </h4>
            <span class="inline-block text-[11px] font-extrabold px-2 py-0.5 bg-slate-200 dark:bg-[#222A3D] text-slate-700 dark:text-slate-300 rounded-md">
              ${med.matricula}
            </span>
            ${badgeGratis}
          </div>

          <div class="text-xs font-bold text-[#2563EB] dark:text-[#89C7FD]">
            ${med.especialidad}
          </div>

          <!-- Dónde Atiende -->
          <div class="text-xs text-slate-500 dark:text-[#94A3B8] pt-1 space-y-0.5">
            <div class="flex items-center gap-1.5 flex-wrap">
              <i class="fa-solid fa-hospital text-[#2563EB] dark:text-[#89C7FD] w-3.5"></i>
              <span><strong>Dónde atiende:</strong> ${med.centro}</span>
              <span class="text-slate-400">•</span>
              <span>${med.direccion}</span>
            </div>
            <div class="flex items-center gap-1.5 font-medium text-slate-500 dark:text-[#94A3B8]">
              <i class="fa-regular fa-clock text-amber-500 w-3.5"></i>
              <span>${med.diasHorarios}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Acciones Rápidas -->
      <div class="flex items-center gap-2 self-end md:self-center flex-shrink-0 w-full sm:w-auto pt-2 md:pt-0">
        <a 
          href="https://www.google.com/maps/dir/?api=1&destination=${med.lat},${med.lng}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="flex-1 sm:flex-initial py-2 px-3 text-xs font-bold rounded-xl border-2 border-[#2563EB] text-[#2563EB] dark:border-[#89C7FD] dark:text-[#89C7FD] hover:bg-[#2563EB] hover:text-white dark:hover:bg-[#4D8EFF] dark:hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <i class="fa-solid fa-location-dot"></i> Cómo llegar
        </a>
        <a 
          href="${telLink}" 
          class="flex-1 sm:flex-initial py-2 px-3.5 text-xs font-bold rounded-xl bg-[#DC2626] dark:bg-[#FF5451] hover:opacity-90 text-white transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
        >
          <i class="fa-solid fa-phone"></i> Consultar Turno
        </a>
      </div>
    `;

    doctorsListContainer.appendChild(item);
  });
}

export function filterDoctors() {
  const doctorSearchInput = document.getElementById('doctorSearchInput');
  const specialtyFilterSelect = document.getElementById('specialtyFilterSelect');
  const locationFilterSelect = document.getElementById('locationFilterSelect');
  const resetDoctorFiltersBtn = document.getElementById('resetDoctorFiltersBtn');

  if (!doctorSearchInput || !specialtyFilterSelect || !locationFilterSelect) return;

  const q = doctorSearchInput.value.toLowerCase().trim();
  const spec = specialtyFilterSelect.value;
  const loc = locationFilterSelect.value;

  const hasFilters = (q !== '' || spec !== 'todas' || loc !== 'todos');

  const filtered = directorioMedicos.filter(m => {
    const matchQ = q === '' ||
      m.nombre.toLowerCase().includes(q) ||
      m.matricula.toLowerCase().includes(q) ||
      m.especialidad.toLowerCase().includes(q) ||
      m.centro.toLowerCase().includes(q);

    const matchSpec = spec === 'todas' || m.especialidad === spec;
    const matchLoc = loc === 'todos' || m.barrio === loc;

    return matchQ && matchSpec && matchLoc;
  });

  if (resetDoctorFiltersBtn) {
    if (hasFilters) {
      resetDoctorFiltersBtn.classList.remove('hidden');
    } else {
      resetDoctorFiltersBtn.classList.add('hidden');
    }
  }

  renderDoctorsList(filtered);
}

export function resetDoctorFilters() {
  const doctorSearchInput = document.getElementById('doctorSearchInput');
  const specialtyFilterSelect = document.getElementById('specialtyFilterSelect');
  const locationFilterSelect = document.getElementById('locationFilterSelect');

  if (doctorSearchInput) doctorSearchInput.value = '';
  if (specialtyFilterSelect) specialtyFilterSelect.value = 'todas';
  if (locationFilterSelect) locationFilterSelect.value = 'todos';
  filterDoctors();
}

export function initDoctorsDirectory() {
  const doctorSearchInput = document.getElementById('doctorSearchInput');
  const specialtyFilterSelect = document.getElementById('specialtyFilterSelect');
  const locationFilterSelect = document.getElementById('locationFilterSelect');
  const resetDoctorFiltersBtn = document.getElementById('resetDoctorFiltersBtn');

  if (doctorSearchInput) doctorSearchInput.addEventListener('input', filterDoctors);
  if (specialtyFilterSelect) specialtyFilterSelect.addEventListener('change', filterDoctors);
  if (locationFilterSelect) locationFilterSelect.addEventListener('change', filterDoctors);
  if (resetDoctorFiltersBtn) resetDoctorFiltersBtn.addEventListener('click', resetDoctorFilters);

  renderDoctorsList(directorioMedicos);
}
