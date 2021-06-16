# Markdown to HTML Converter

Dieses Projekt konvertiert Code, der in Markdown geschrieben wurde in HTML. Der Converter ist in der `index.html` als WYSIWYG-Fenster dargestellt. in den dazugehörigen Dateien findet man dann die JS und SASS-Sheets wieder in denen auch Syntax-Highlightings hinterlegt sind.

Der Konverter basiert auf [diesem YouTube-Video](https://youtu.be/Ypy4stWX1EE) von Unleashed Design. Das Repository ist außerdem im Moment noch generiert aus der UD-Entwicklungsumgebung.

## Was noch gehen würde
 Man könnte allen Text der im Input steht wie normalen Code stylen weil er in dem Output-Container als normaler Code ausgegeben wird.

Highlight.js gibt dem Text der als Code geschrieben wird verschiedene Klassen, sodass mann in SASS jede einzelne Klasse stylen und so ein eigenes Syntax Highlighting erstellen könnte.

[Markdown Guide Website](https://www.markdownguide.org)

[Markdown Official Website](https://daringfireball.net/projects/markdown/)

[![Deploy-Page](https://github.com/Johannes-Schiel/ud-basic-webdev-setup/actions/workflows/pages.yml/badge.svg?branch=master)](https://github.com/Johannes-Schiel/ud-basic-webdev-setup/actions/workflows/pages.yml)
[![Unit-Testing](https://github.com/Johannes-Schiel/ud-basic-webdev-setup/actions/workflows/unittest.yml/badge.svg?branch=master)](https://github.com/Johannes-Schiel/ud-basic-webdev-setup/actions/workflows/unittest.yml)

## Befehle

`npm i` installiert npm beim ersten Start des Projekts nach dem Klonen in dem Projekt-Ordner

`npm run dev` ist der Befehl, der für das Starten der Umgebung erforderlich ist, alles auf einmal baut und auf Änderungen wartet. Hierbei wird ein Liveserver inkl. Browser-Refresh gestartet.

`npm run build` ist der Build-Befehl, hierbei wird alles gebaut und im `dist/` Verzeichnis hinterlegt. Es wird nicht auf Änderungen an Dateien gewartet.
