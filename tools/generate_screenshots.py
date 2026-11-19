import os
import subprocess
import time

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
ASSETS_DIR = os.path.abspath("tools/assets")
os.makedirs(ASSETS_DIR, exist_ok=True)

with open("index.html", "r", encoding="utf-8") as f:
    base_html = f.read()

# Configs: (name, width, height, dark_mode, js_actions)
targets = [
    # 1. Header + Hero Desktop (Light)
    (
        "desktop_hero_light.png",
        1440, 900, False,
        "window.scrollTo(0, 0);"
    ),
    # 2. Header + Hero Mobile (Light)
    (
        "mobile_hero_light.png",
        390, 844, False,
        "window.scrollTo(0, 0);"
    ),
    # 3. Header + Hero Desktop (Dark)
    (
        "desktop_hero_dark.png",
        1440, 900, True,
        "window.scrollTo(0, 0);"
    ),
    # 4. Header + Hero Mobile (Dark)
    (
        "mobile_hero_dark.png",
        390, 844, True,
        "window.scrollTo(0, 0);"
    ),
    # 5. Líneas Rápidas Desktop
    (
        "desktop_lineas.png",
        1440, 850, False,
        "const el = document.getElementById('lineas-urgencia'); if(el) { el.scrollIntoView(); window.scrollBy(0, -70); }"
    ),
    # 6. Líneas Rápidas Mobile
    (
        "mobile_lineas.png",
        390, 844, False,
        "const el = document.getElementById('lineas-urgencia'); if(el) { el.scrollIntoView(); window.scrollBy(0, -60); }"
    ),
    # 7. Mapa Desktop
    (
        "desktop_mapa.png",
        1440, 900, False,
        "const el = document.getElementById('mapa-section'); if(el) { el.scrollIntoView(); window.scrollBy(0, -70); }"
    ),
    # 8. Mapa Mobile
    (
        "mobile_mapa.png",
        390, 844, False,
        "const el = document.getElementById('mapa-section'); if(el) { el.scrollIntoView(); window.scrollBy(0, -60); }"
    ),
    # 9. Profesionales Desktop
    (
        "desktop_profesionales.png",
        1440, 950, False,
        "const el = document.getElementById('profesionales-section'); if(el) { el.scrollIntoView(); window.scrollBy(0, -70); }"
    ),
    # 10. Profesionales Mobile
    (
        "mobile_profesionales.png",
        390, 844, False,
        "const el = document.getElementById('profesionales-section'); if(el) { el.scrollIntoView(); window.scrollBy(0, -60); }"
    ),
    # 11. Donaciones Desktop
    (
        "desktop_donaciones.png",
        1440, 850, False,
        "const el = document.getElementById('donaciones'); if(el) { el.scrollIntoView(); window.scrollBy(0, -70); }"
    ),
    # 12. Donaciones Mobile
    (
        "mobile_donaciones.png",
        390, 844, False,
        "const el = document.getElementById('donaciones'); if(el) { el.scrollIntoView(); window.scrollBy(0, -60); }"
    ),
    # 13. Modal Sugerencias Desktop
    (
        "desktop_sugerencias.png",
        1440, 900, False,
        "if(typeof openFloatingSuggestionModal === 'function') openFloatingSuggestionModal(); else { document.getElementById('suggestionsFloatingModal')?.classList.remove('hidden'); }"
    ),
    # 14. Modal Sugerencias Mobile
    (
        "mobile_sugerencias.png",
        390, 844, False,
        "if(typeof openFloatingSuggestionModal === 'function') openFloatingSuggestionModal(); else { document.getElementById('suggestionsFloatingModal')?.classList.remove('hidden'); }"
    ),
    # 15. Modal Emergencia / Triaje Desktop
    (
        "desktop_emergencia.png",
        1440, 900, False,
        "if(typeof openFloatingEmergencyModal === 'function') openFloatingEmergencyModal(); else { document.getElementById('floatingEmergencyModal')?.classList.remove('hidden'); }"
    ),
    # 16. Modal Emergencia / Triaje Mobile
    (
        "mobile_emergencia.png",
        390, 844, False,
        "if(typeof openFloatingEmergencyModal === 'function') openFloatingEmergencyModal(); else { document.getElementById('floatingEmergencyModal')?.classList.remove('hidden'); }"
    ),
    # 17. Footer Desktop
    (
        "desktop_footer.png",
        1440, 650, False,
        "const el = document.querySelector('footer'); if(el) { el.scrollIntoView(); window.scrollBy(0, -100); }"
    ),
    # 18. Footer Mobile
    (
        "mobile_footer.png",
        390, 844, False,
        "const el = document.querySelector('footer'); if(el) { el.scrollIntoView(); window.scrollBy(0, -100); }"
    )
]

print(f"Starting capture of {len(targets)} screens...")

for filename, w, h, is_dark, js in targets:
    out_path = os.path.join(ASSETS_DIR, filename)
    
    # Prepara HTML modificado
    dark_class = ' class="dark"' if is_dark else ''
    html_mod = base_html.replace("<html lang=\"es\">", f"<html lang=\"es\"{dark_class}>")
    
    # Inyectar script de captura
    inject_script = f"""
    <script>
    document.addEventListener("DOMContentLoaded", function() {{
        setTimeout(function() {{
            {js}
        }}, 300);
    }});
    </script>
    """
    html_mod = html_mod.replace("</body>", inject_script + "</body>")
    
    temp_file = os.path.abspath(f"tmp_{filename}.html")
    with open(temp_file, "w", encoding="utf-8") as tf:
        tf.write(html_mod)
        
    cmd = [
        CHROME,
        "--headless=old",
        "--disable-gpu",
        "--no-sandbox",
        f"--window-size={w},{h}",
        f"--screenshot={out_path}",
        "file:///" + temp_file.replace("\\", "/")
    ]
    
    res = subprocess.run(cmd, capture_output=True)
    if os.path.exists(temp_file):
        os.remove(temp_file)
        
    exists = os.path.exists(out_path)
    size = os.path.getsize(out_path) if exists else 0
    print(f"[{exists}] {filename} -> {size} bytes")

print("Finished capture!")
