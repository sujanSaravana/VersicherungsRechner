
# Schulprojekt Versicherungsrechner

Dieser Projekt wurde in der BBW in zwei Monaten erstellt.
Dies ist eine React-App, die den Benutzern ermöglicht, den Betrag der Entschädigun, Slebstbehaltes und des Versicherungswertes zu berechnen. 


## List of contents

* [Loslegen](#loslegen)
* [Verwendung](#verwendung)
* [Home](#home)
* [Schadensrechner](#schadensrechner)
* [Hausratsrechner](#hausratsrechner)
* [Komponenten](#komponenten)
* [Autor](#Autor)

## Loslegen
### Voraussetzungen

- Node.js

### Installation

1. Klonen Sie die Repository (https://github.com/sujanSaravana/VersicherungsRechner.git)

2. Installieren Sie die Abhängigkeiten mit "npm install".

3. Starten Sie die Application mit "npm Start".

Die Application sollte nun auf "http://localhost:3000" erreichbar sein.

## Verwendung
### Verwendung Schadensrechner

1. Geben Sie den Wert ihres Hauses, die Versicherungssumme und die Schaden des Hauses in das Formular ein.
2. Klicken Sie auf den "Enter button", um die Berechnung durchzuführen.
3. Die Entschädigung, Selbsbehalt und die prozentuale Absicherung wird in das Formular Zusammenfassung angezeigt.
4. Klicken Sie auf den "Clear button", um alles zu löschen und eine neue Berechnung durchzuführen.

### Verwendung Hausratsrechner

1. Geben Sie die Fläche ihres Hauses und einen Basiswert, der vorgeschlagene Basiswert ist 200.
2. Klicken Sie auf den "Enter button", um die Berechnung durchzuführen.
3. Der Versicherungswert wird in das untere Formular angezeigt.
4. Klicken Sie auf den "Clear button", um alles zu löschen und eine neue Berechnung durchzuführen.

## Home

Die Home-Seite enthält drei Karten, die jeweils eine kurze Erklärung über eine Hausratsversicherung, einen Schadensrechner und eine Einleitung zur Website selber. Die Karten verwenden diverse CSS Stile, um das Layout der Seite zu gestalten und eine visuelle Darstellung zu gewährleisten. Die Home-Seite enthält keine Funktion, da es sich um eine statische Seite handelt.

Die Home-Seite ist einfach gestaltet und soll den Nutzer eine schnelle Einführung in das Thema führen. Durch die verwendung von Karten und kurzen Erklärungen soll der Benutzer ein Überblick über die verschiedenen Funktionen der Website bekommen.
## Schadensrechner

Der Schadensrechner ist ein Rechner, das verwendet wird, um die Entschädigung, Selbstbehalt und die Prozentuale Absicherung nach einem Schaden zu berechnen. Der Nutzer gibt zuerst den Wert seines Haus, die versicherte Summe und den Wert des Schadens in das entsprechende Input-Feld. Der Rechner berechnet dann die die Entschädigung, den Selbstbehalt und die Prozentuale Absicherung.  

Der Schadensrechner ist in zwei Teilen aufgeteilt, nämlich eine Eingabebereich und eine Zusammanfassung. Im Eingabebereich gibt der Nutzer die gefragten Werte ein. Mit einem Klick auf dem "Enter button" werden die Werte berechnet. Im Bereich Zusammanfassung werden die errechnete Werte als Ergebniss dargestellt. Dazu hat es noch eine "Clear button" mit welchen man die Eingegebene Werte löschen kann.

## Hausratsrechner

Der Hausratsrechner ist ein Rechner, das verwendet wird, um die Versicherungswert anhand der Basiswert und eine Quadratmeterzahl zu berechnen. Der Nutzer gibt zuerst die Grösse seines Hauses in Quadratmetern und gibt eine belibige Basiswert in das entsprechende Input-Feld.Der vorgeschlagene Basiswert ist 200 CHF. Der Rechner berechnet dann den Versicherungswert. 

Der Hausratsrechner ist in zwei Teilen aufgeteilt, nämlich der Rechner selber und ein Teil mit der Versicherungswert. Im Rechner gibt der Nutzer die gefragten Werte ein. Mit einem Klick auf dem "Enter button" werden die Werte berechnet. Im unteren Bereich wird dann der berechnete Versicherungswert in Schweizer Franken angegeben. Dazu hat es noch eine "Clear button" mit welchen man die Eingegebene Werte löschen kann.

## Komponenten
### Clear button

Der Clear Button ist eine wiederverwendbare React-Komponente, die einen Button zum Löschen von Daten oder Eingaben bereitstellt. Um die Komponente zu verwenden, kann sie einfach in das React-Projekt eingefügt werden und die Funktion für das Löschen angegeben werden.

### Navbar

Dieses React-Komponenten enthält eine Navbar und ein Footer mit drei Links zu verschiedenen Seiten. Die Links sind mit React Router implementiert und ermöglichen eine nahtlose Navigation zwischen den Seiten.

## Persönliche Auswertung

Der Versicherungsrechner-Code ist eine Implementierung einer React-Application, die zwei Rechner enthält: Schadensrechner und Hausratsrechner. Der Code nutzt React Router, um die Navigation zwischen diesen Rechnern zu ermöglichen. Die Schadensrechner- und Hausratsrechner-Komponenten enthalten jeweils Formulare, die die Eingabe von Informationen ermöglichen. 

Während dieser Projekt habe ich viele verschiedene Schwierigkeiten begegnet. Einer dieser Schwierigkeit für mich war es das die Aufgabenstellung,am Anfang, nicht sehr klar. war. Deswegen dauert es eine Weile bis ich die Aufgabe verstah, nämlich während dem gestalten des Keyscreens, bekam ich eine bessere Idee von der Aufgabe. Bei der erstellung der Projektes fiel mir auch schwer die verschiedenen Funktionen zu erstellen und mit CSS habe ich eine lange Zeit verbracht.Aber schlussendlich kann man sagen das dies eine nutzliche Aufgabe war, denn während dieser Projekt habe ich sehr viele neues gelernt.

## Autor

- Sujan Saravana
- sujan.saravna@lernende.bbw.ch






