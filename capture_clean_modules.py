import os
import subprocess

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
ASSETS_DIR = os.path.abspath("slides_assets")
os.makedirs(ASSETS_DIR, exist_ok=True)

with open("index.html", "r", encoding="utf-8") as f:
    base_html = f.read()

# Define modules to capture
# (name, css_isolation, w, h, is_dark)
modules = [
    # 1. Header + Hero Desktop (Light)
    (
        "shot_hero_desktop_light.png",
        """
        #lineas-urgencia, #mapa-section, #profesionales-section, #donaciones, footer, .ad-skyscraper, .ad-sticky-bottom { display: none !important; }
        """,
        1440, 850, False
    ),
    # 2. Header + Hero Mobile (Light)
    (
        "shot_hero_mobile_light.png",
        """
        #lineas-urgencia, #mapa-section, #profesionales-section, #donaciones, footer, .ad-skyscraper, .ad-sticky-bottom { display: none !important; }
        """,
        390, 844, False
    ),
    # 3. Header + Hero Desktop (Dark)
    (
        "shot_hero_desktop_dark.png",
        """
        #lineas-urgencia, #mapa-section, #profesionales-section, #donaciones, footer, .ad-skyscraper, .ad-sticky-bottom { display: none !important; }
        """,
        1440, 850, True
    ),
    # 4. Header + Hero Mobile (Dark)
    (
        "shot_hero_mobile_dark.png",
        """
        #lineas-urgencia, #mapa-section, #profesionales-section, #donaciones, footer, .ad-skyscraper, .ad-sticky-bottom { display: none !important; }
        """,
        390, 844, True
    ),
    # 5. Líneas Rápidas Desktop
    (
        "shot_lineas_desktop.png",
        """
        #mainHeader, #hero-section, #mapa-section, #profesionales-section, #donaciones, footer, .ad-skyscraper, .ad-sticky-bottom { display: none !important; }
        #lineas-urgencia { margin-top: 30px !important; }
        """,
        1200, 520, False
    ),
    # 6. Líneas Rápidas Mobile
    (
        "shot_lineas_mobile.png",
        """
        #mainHeader, #hero-section, #mapa-section, #profesionales-section, #donaciones, footer, .ad-skyscraper, .ad-sticky-bottom { display: none !important; }
        #lineas-urgencia { margin-top: 20px !important; }
        """,
        390, 800, False
    ),
    # 7. Mapa Desktop
    (
        "shot_mapa_desktop.png",
        """
        #mainHeader, #hero-section, #lineas-urgencia, #profesionales-section, #donaciones, footer, .ad-skyscraper, .ad-sticky-bottom { display: none !important; }
        #mapa-section { margin-top: 30px !important; }
        """,
        1200, 720, False
    ),
    # 8. Mapa Mobile
    (
        "shot_mapa_mobile.png",
        """
        #mainHeader, #hero-section, #lineas-urgencia, #profesionales-section, #donaciones, footer, .ad-skyscraper, .ad-sticky-bottom { display: none !important; }
        #mapa-section { margin-top: 20px !important; }
        """,
        390, 844, False
    ),
    # 9. Profesionales Desktop
    (
        "shot_profesionales_desktop.png",
        """
        #mainHeader, #hero-section, #lineas-urgencia, #mapa-section, #donaciones, footer, .ad-skyscraper, .ad-sticky-bottom { display: none !important; }
        #profesionales-section { margin-top: 30px !important; }
        """,
        1200, 760, False
    ),
    # 10. Profesionales Mobile
    (
        "shot_profesionales_mobile.png",
        """
        #mainHeader, #hero-section, #lineas-urgencia, #mapa-section, #donaciones, footer, .ad-skyscraper, .ad-sticky-bottom { display: none !important; }
        #profesionales-section { margin-top: 20px !important; }
        """,
        390, 844, False
    ),
    # 11. Donaciones Desktop
    (
        "shot_donaciones_desktop.png",
        """
        #mainHeader, #hero-section, #lineas-urgencia, #mapa-section, #profesionales-section, footer, .ad-skyscraper, .ad-sticky-bottom { display: none !important; }
        #donaciones { margin-top: 30px !important; }
        """,
        1200, 520, False
    ),
    # 12. Donaciones Mobile
    (
        "shot_donaciones_mobile.png",
        """
        #mainHeader, #hero-section, #lineas-urgencia, #mapa-section, #profesionales-section, footer, .ad-skyscraper, .ad-sticky-bottom { display: none !important; }
        #donaciones { margin-top: 20px !important; }
        """,
        390, 750, False
    ),
    # 13. Modal Sugerencias Desktop
    (
        "shot_sugerencias_desktop.png",
        """
        #mainHeader, main, footer, .ad-skyscraper, .ad-sticky-bottom, #floatingEmergencyModal, #donationModal { display: none !important; }
        #suggestionsFloatingModal { display: flex !important; position: static !important; justify-content: center !important; align-items: center !important; min-height: 100vh !important; background: transparent !important; }
        #suggestionsFloatingModal > div:first-child { display: none !important; }
        #suggestionsFloatingModal > div:last-child { margin: 20px auto !important; width: 100% !important; max-width: 580px !important; }
        """,
        1200, 780, False
    ),
    # 14. Modal Sugerencias Mobile
    (
        "shot_sugerencias_mobile.png",
        """
        #mainHeader, main, footer, .ad-skyscraper, .ad-sticky-bottom, #floatingEmergencyModal, #donationModal { display: none !important; }
        #suggestionsFloatingModal { display: flex !important; position: static !important; justify-content: center !important; align-items: center !important; min-height: 100vh !important; background: transparent !important; }
        #suggestionsFloatingModal > div:first-child { display: none !important; }
        #suggestionsFloatingModal > div:last-child { margin: 10px auto !important; width: 95% !important; }
        """,
        390, 844, False
    ),
    # 15. Modal Emergencia Desktop
    (
        "shot_emergencia_desktop.png",
        """
        #mainHeader, main, footer, .ad-skyscraper, .ad-sticky-bottom, #suggestionsFloatingModal, #donationModal { display: none !important; }
        #floatingEmergencyModal { display: flex !important; position: static !important; justify-content: center !important; align-items: center !important; min-height: 100vh !important; background: transparent !important; }
        #floatingEmergencyModal > div:first-child { display: none !important; }
        #floatingEmergencyModal > div:last-child { margin: 20px auto !important; width: 100% !important; max-width: 620px !important; }
        """,
        1200, 800, False
    ),
    # 16. Modal Emergencia Mobile
    (
        "shot_emergencia_mobile.png",
        """
        #mainHeader, main, footer, .ad-skyscraper, .ad-sticky-bottom, #suggestionsFloatingModal, #donationModal { display: none !important; }
        #floatingEmergencyModal { display: flex !important; position: static !important; justify-content: center !important; align-items: center !important; min-height: 100vh !important; background: transparent !important; }
        #floatingEmergencyModal > div:first-child { display: none !important; }
        #floatingEmergencyModal > div:last-child { margin: 10px auto !important; width: 95% !important; }
        """,
        390, 844, False
    ),
    # 17. Footer Desktop
    (
        "shot_footer_desktop.png",
        """
        #mainHeader, #hero-section, #lineas-urgencia, #mapa-section, #profesionales-section, #donaciones, .ad-skyscraper, .ad-sticky-bottom { display: none !important; }
        footer { margin-top: 100px !important; }
        """,
        1200, 400, False
    ),
    # 18. Footer Mobile
    (
        "shot_footer_mobile.png",
        """
        #mainHeader, #hero-section, #lineas-urgencia, #mapa-section, #profesionales-section, #donaciones, .ad-skyscraper, .ad-sticky-bottom { display: none !important; }
        footer { margin-top: 80px !important; }
        """,
        390, 550, False
    )
]

for filename, css, w, h, is_dark in modules:
    target_path = os.path.join(ASSETS_DIR, filename)
    
    dark_class = ' class="dark"' if is_dark else ''
    mod_html = base_html.replace('<html lang="es">', f'<html lang="es"{dark_class}>')
    
    custom_style = f"<style>{css}</style>"
    mod_html = mod_html.replace("</head>", custom_style + "</head>")
    
    tmp_path = os.path.abspath(f"tmp_{filename}.html")
    with open(tmp_path, "w", encoding="utf-8") as tf:
        tf.write(mod_html)
        
    cmd = [
        CHROME,
        "--headless=old",
        "--disable-gpu",
        "--no-sandbox",
        f"--window-size={w},{h}",
        f"--screenshot={target_path}",
        "file:///" + tmp_path.replace("\\", "/")
    ]
    subprocess.run(cmd, capture_output=True)
    if os.path.exists(tmp_path):
        os.remove(tmp_path)
        
    size = os.path.getsize(target_path) if os.path.exists(target_path) else 0
    print(f"Captured {filename}: {size} bytes")

print("All screenshots generated successfully!")
