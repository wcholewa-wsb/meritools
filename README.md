# Projekt semestralny: MERITOOLS

**1. Cel projektu**

Celem projektu jest stworzenie sklepu internetowego **MERITOOLS** z narzędziami codziennego użytku. Aplikacja ma umożliwiać rejestrację i logowanie użytkowników oraz zapewniać dostęp do dwóch głównych modułów: panelu użytkownika (z koszykiem) oraz panelu administratora do zarządzania treścią.

**2. Uwierzytelnianie - logowanie i rejestracja**

* Stworzenie formularza rejestracji z podstawową walidacją danych (np. format e-mail, zgodność haseł, bez szyfrowania haseł).
* Umożliwienie logowania na podstawie danych podanych podczas rejestracji.
* Dane logowania, będą przechowywane w pliku JSON w formie czystego tekstu.

**3. Panel użytkownika**

Aplikacja będzie zawierać standardowe sekcje publiczne typu: Produkty, O nas, Kontakt oraz ważniejsze sekcje takie jak:

* **Katalog Produktów** - każdy produkt będzie posiadał zdjęcie, opis oraz cenę. Z tego poziomu użytkownik będzie mógł dodawać produkty do koszyka.
* **Koszyk (tylko dla zalogowanych)** - zakładka wyświetlająca listę produktów użytkownika oraz łączną kwotę do zapłaty.
* **Sesja** - dostępna będzie funkcja wylogowania użytkownika.

**4. Panel administratora**

Użytkownik z uprawnieniami administratora otrzyma dostęp do dedykowanej sekcji zarządzania sklepem. Będzie tylko jedno konto administratora które będzie wcześniej zapisane w pliku JSON z danymi logowania.

* **Zarządzanie produktami** - możliwość dodawania nowych produktów oraz ich usuwania.
* **Przegląd użytkowników** - wgląd w listę wszystkich zarejestrowanych kont w systemie.

**5. Stos technologiczny i baza danych**

* **Frontend** - aplikacja zostanie zbudowana w oparciu o czysty HTML, CSS oraz JavaScript (Vanilla JS), wybrane ze względu na poziom doświadczenia w zespole.
* **Baza danych** - funkcję bazy danych pełnić będą pliki JSON, przykładowo:
    * `user-credentials.json` - przechowywanie danych logowania.
    * `items.json` - przechowywanie produktów.

**6. Zarządzanie projektem i narzędzia**

* **Kontrola wersji** - repozytorium projektu jest prowadzone na platformie **GitHub**.
* **Zarządzanie zadaniami** - Śledzenie postępów i przydział zadań (ticketing) odbywa się w **Jira**.
* **Design** - wygląd strony tworzony jest w programie Figma.

**7. Role i odpowiedzialność w zespole**

* **Wiktor:**
    * Zarządzanie zadaniami w Jira (tworzenie, przydział).
    * Przeprowadzanie Code Review.
    * Projektowanie architektury aplikacji i wsparcie merytoryczne.
    * Implementacja bardziej złożonych funkcjonalności JavaScript.
* **Michał:**
    * W fazie początkowej projektowanie designu w programie Figma.
    * Realizacja zadań przydzielonych w Jira.
    * Prace programistyczne (HTML, CSS, JavaScript).
* **Filip, Julian:**
    * Realizacja zadań przydzielonych w Jira.
    * Prace programistyczne (HTML, CSS, JavaScript).
* **Kacper:**
    * Stworzenie kompletnej architektury baz danych.

[Link do repozytorium](https://github.com/wcholewa-wsb/meritools)