# Projekt semestralny: MERITOOLS

## 1. Cel projektu

Celem projektu jest stworzenie sklepu internetowego **MERITOOLS** z narzędziami
codziennego użytku. Aplikacja umożliwia rejestrację i logowanie użytkowników oraz
zapewnia dostęp do panelu użytkownika (koszyk) i panelu administratora.

## 2. Uwierzytelnianie – logowanie i rejestracja

- Stworzenie formularza rejestracji z podstawową walidacją danych
  (np. format e-mail, zgodność haseł, bez szyfrowania haseł).
- Logowanie na podstawie danych podanych podczas rejestracji.
- Dane logowania przechowywane w pliku JSON w postaci czystego tekstu.

## 3. Panel użytkownika

Aplikacja zawiera sekcje publiczne: Produkty, O nas, Kontakt oraz:

- **Katalog produktów** – lista produktów ze zdjęciem, opisem i ceną oraz
  możliwością dodania do koszyka.
- **Koszyk (tylko dla zalogowanych)** – lista produktów i łączna kwota do zapłaty.
- **Sesja** – możliwość wylogowania użytkownika.

## 4. Panel administratora

Administrator ma dostęp do dedykowanej sekcji zarządzania sklepem.
Istnieje jedno konto administratora zapisane w pliku JSON.

- **Zarządzanie produktami** – dodawanie i usuwanie produktów.
- **Przegląd użytkowników** – lista wszystkich kont w systemie.

## 5. Stos technologiczny i baza danych

- **Frontend** – HTML, CSS, JavaScript (Vanilla JS).
- **Baza danych** – pliki JSON:
  - `user-credentials.json` – dane logowania.
  - `items.json` – dane produktów.

## 6. Zarządzanie projektem i narzędzia

- **Kontrola wersji** – GitHub.
- **Zarządzanie zadaniami** – Jira.
- **Design** – Figma.

## 7. Role i odpowiedzialność w zespole

- **Wiktor**
  - Zarządzanie zadaniami w Jira.
  - Code Review.
  - Projekt architektury aplikacji.
  - Implementacja złożonych funkcjonalności JavaScript.
- **Michał**
  - Projektowanie designu w Figma.
  - Implementacja HTML, CSS, JavaScript.
- **Filip, Julian**
  - Implementacja HTML, CSS, JavaScript.
- **Kacper**
  - Projekt architektury baz danych.

[Link do repozytorium](https://github.com/wcholewa-wsb/meritools)
