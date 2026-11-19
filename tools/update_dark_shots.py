import os
import subprocess

with open("index.html", "r", encoding="utf-8") as f:
    text = f.read()

# Force dark class and override inline script
script_dark = """
<script>
document.documentElement.classList.add('dark');
</script>
"""
text_dark = text.replace('class="scroll-smooth"', 'class="scroll-smooth dark"')
text_dark = text_dark.replace("localStorage.getItem('theme') === 'dark'", "true")

custom_css = """
<style>
#lineas-urgencia, #mapa-section, #profesionales-section, #donaciones, footer, .ad-skyscraper, .ad-sticky-bottom { display: none !important; }
</style>
"""
text_dark = text_dark.replace("</head>", custom_css + "</head>")

tmp_file = os.path.abspath("tmp_dark_hero.html")
with open(tmp_file, "w", encoding="utf-8") as f:
    f.write(text_dark)

cmd1 = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    "--headless=old",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1440,850",
    "--screenshot=" + os.path.abspath("tools/assets/shot_hero_desktop_dark.png"),
    "file:///" + tmp_file.replace("\\", "/")
]
subprocess.run(cmd1, capture_output=True)

cmd2 = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    "--headless=old",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=390,844",
    "--screenshot=" + os.path.abspath("tools/assets/shot_hero_mobile_dark.png"),
    "file:///" + tmp_file.replace("\\", "/")
]
subprocess.run(cmd2, capture_output=True)

print("Updated dark shots successfully!")
if os.path.exists(tmp_file):
    os.remove(tmp_file)
