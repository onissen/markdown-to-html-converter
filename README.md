# Markup to HTML Converter

Dieses Projekt konvertiert Code, der in Markup geschrieben wurde in HTML. Der Converter ist in der `index.html` als WYSIWYG-Fenster dargestellt. in den Dazugehörigen Dateien findet man dann die JS und SASS-Sheets wieder in denen auch Syntax-Highlightings hinterlegt sind.

Der Konverter basiert auf [diesem YouTube-Video](#) von Unleashed Design. Das Repository ist außerdem im Moment noch generiert aus der UD-Entwicklungsumgebung

[![Deploy-Page](https://github.com/Johannes-Schiel/ud-basic-webdev-setup/actions/workflows/pages.yml/badge.svg?branch=master)](https://github.com/Johannes-Schiel/ud-basic-webdev-setup/actions/workflows/pages.yml)
[![Unit-Testing](https://github.com/Johannes-Schiel/ud-basic-webdev-setup/actions/workflows/unittest.yml/badge.svg?branch=master)](https://github.com/Johannes-Schiel/ud-basic-webdev-setup/actions/workflows/unittest.yml)

## Befehle

`npm run dev` ist der Befehl, der für das Starten der Umgebung erforderlich ist, alles auf einmal baut und auf Änderungen wartet. Hierbei wird ein Liveserver inkl. Browser-Refresh gestartet.

`npm run build` ist der Build-Befehl, hierbei wird alles gebaut und im `dist/` Verzeichnis hinterlegt. Es wird nicht auf Änderungen an Dateien gewartet.
