/**
 * SaludBarrial — Módulo de Geolocalización GPS
 */
import { directorioMedicos } from '../data/doctors.data.js';

export function locateNearestCenterGps() {
  const gpsStatusMessage = document.getElementById('gpsStatusMessage');
  if (!gpsStatusMessage) return;

  gpsStatusMessage.textContent = "Calculando coordenadas GPS de tu ubicación actual...";

  if (!navigator.geolocation) {
    window.open('https://maps.google.com/?q=hospitales+y+dispensarios+en+Rio+Cuarto+Cordoba', '_blank');
    gpsStatusMessage.textContent = "Abriendo Google Maps con hospitales en Río Cuarto...";
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const userLat = pos.coords.latitude;
      const userLng = pos.coords.longitude;

      let nearest = null;
      let minDistance = Infinity;

      directorioMedicos.forEach(m => {
        const d = Math.sqrt(Math.pow(m.lat - userLat, 2) + Math.pow(m.lng - userLng, 2));
        if (d < minDistance) {
          minDistance = d;
          nearest = m;
        }
      });

      if (nearest) {
        gpsStatusMessage.innerHTML = `El centro de salud más cercano es: <strong class="text-white font-bold underline">${nearest.centro}</strong> (${nearest.barrio}).`;
        setTimeout(() => {
          window.open(`https://www.google.com/maps/dir/?api=1&destination=${nearest.lat},${nearest.lng}`, '_blank');
        }, 800);
      }
    },
    (err) => {
      gpsStatusMessage.innerHTML = `GPS no autorizado. Abriendo ruta hacia <strong>Hospital S24 (Guardia 24hs Río Cuarto)</strong>...`;
      setTimeout(() => {
        window.open('https://maps.google.com/?q=Hospital+Central+Rio+Cuarto', '_blank');
      }, 800);
    },
    { timeout: 7000 }
  );
}

export function initGeolocation() {
  const locateNearestBtn = document.getElementById('locateNearestBtn');
  if (locateNearestBtn) {
    locateNearestBtn.addEventListener('click', locateNearestCenterGps);
  }
}
