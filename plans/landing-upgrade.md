# Plan: Landing premium rebuild (crystal-studio.dev)

> Source PRD: `plans/PRD-premium-rebuild.md` · Branch roboczy: `landing-upgrade-dev`

## Architectural decisions

Durable decisions that apply across all phases:

- **Architecture style**: 100% statyczna SPA — React 19 + Vite 6 + TypeScript na GitHub Pages; BrowserRouter + prerender własnym skryptem w buildzie (statyczny HTML per trasa + `404.html`); zero backendu (formularz przez Formspree).
- **Data model**: cała treść w jednym pliku JSON (`content.json`), import **build-time** i synchroniczny dostęp w aplikacji (bez stanów ładowania); kształt pilnowany typami TS; strony gier i produktów **sterowane konfiguracją** (jeden szablon + wpis konfiguracyjny na encję).
- **Key entities**: Product (umux, ExSize, ADM-CLI, Wspolniak) · Game (schools-out, coin-collector) · Testimonial (cytat + autor) · FAQCategory/FAQItem · copy sekcji home.
- **Design system**: Tailwind v4 + tokeny shadcn/ui (zmienne CSS); paleta briefu (blue `#3B82F6`, green `#10B981`, neutralne); **dark domyślny**, light przez przełącznik; typografia system-ui; Motion (sprężyny: damping 1.0 domyślnie, bounce tylko przy momentum; `prefers-reduced-motion` obsługiwane centralnie w Motion kit). Fallback po podglądzie: motyw CRS-Theme z tweakcn.
- **Integrations**: Formspree (kontakt — istniejący endpoint) · GitHub Actions deploy (bez zmian w workflow) · umux.pages.dev (link zewnętrzny, nowa karta).
- **Quality gates**: `yarn build` / `yarn test` / `yarn lint` zielone po każdej fazie; Lighthouse mobile docelowo: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95; rebrand-guard rozszerzony („umux" małą literą, umux.pages.dev, kluczowe linki).
- **Zasady stałe**: język treści EN · bez analytics · Egrator bez zmian · logo bez zmian · glitch/neon/pixelate usunięte najpóźniej w fazach wizualnych · wewnętrzne linki `/...` = router, zewnętrzne = `<a target="_blank" rel="noopener noreferrer">`.

---

## Phase 1: Fundament stacku

**User stories**: enabler dla 2, 17 (realizuje decyzje stackowe PRD)

### What to build

Migracja Tailwind v3 → v4, doinstalowanie shadcn/ui i Motion. Aplikacja działa na nowym stacku bez zmian funkcjonalnych i wizualnych (drobne różnice renderowania klas v3→v4 do zaakceptowania, bez poprawiania designu — to nie ta faza). Wszystkie istniejące trasy i testy przechodzą.

### Assumptions carried in

- Brak (faza pierwsza); deploy na GH Pages działa jak dotychczas.

### Out of scope for this phase

- Jakiekolwiek zmiany designu, treści, routingu (zostaje hash), SEO.

### Acceptance criteria

- [ ] `yarn build` kończy się sukcesem — [command: `yarn build`]
- [ ] `yarn test` i `yarn lint` zielone — [command: `yarn test && yarn lint`]
- [ ] Wszystkie istniejące trasy renderują się w `yarn dev` bez błędów w konsoli — [observable: przegląd tras w dev]
- [ ] shadcn/ui i Motion są używalne (przykładowy import kompiluje się) — [observable: build z importem przechodzi typecheck]

---

## Phase 2: Treść + routing + prerender

**User stories**: 12 (część: statyczny HTML per trasa), 18

### What to build

Przejście na treść importowaną build-time (synchroniczny dostęp — znika logika ładowania i null-guardy). Zmiana routingu z hash na BrowserRouter (wewnętrzne linki bez `#`). Własny lekki skrypt w buildzie: renderuje statyczny HTML **każdej** trasy z pełną treścią, generuje `404.html` (fallback deep-linków na GH Pages) i szkielet `sitemap.xml`. Efekt: „view-source" dowolnej trasy pokazuje treść bez uruchamiania JS.

### Assumptions carried in

- Stack z Fazy 1 działa; lista tras jest zamknięta i wyliczalna w buildzie.

### Out of scope for this phase

- Meta/OG/JSON-LD per strona (Faza 8) · zmiany wizualne · strojenie wydajności.

### Acceptance criteria

- [ ] Źródło zbudowanego HTML dowolnej trasy zawiera treść (np. hero) bez wykonywania JS — [observable: view-source z `dist/`]
- [ ] `dist/` zawiera HTML per trasa + `404.html` + `sitemap.xml` — [observable: zawartość katalogu build]
- [ ] Nawigacja między trasami bez pełnego przeładowania, URL bez `#` — [observable: test ręczny w dev/preview]
- [ ] Istniejący test suite i build zielone — [command: `yarn build && yarn test`]

---

## Phase 3: Design tokens + layout shell

**User stories**: 3, 22, 23, część 2

### What to build

Tokeny kolorów shadcn wg palety briefu (dark jako domyślny), przełącznik dark/light z zapamiętywaniem wyboru. Nowy layout shell: przyklejony, półprzezroczysty header (glass — treść przewija się pod nim), przebudowany footer, **usunięty StickyBar**. Istniejące sekcje działają w nowej obudowie (rebuild sekcji to kolejne fazy). **Punkt kontrolny ownera**: podgląd palety — decyzja o ewentualnym CRS-Theme z tweakcn.

### Assumptions carried in

- Tokeny/infra z Fazy 1; routing z Fazy 2.

### Out of scope for this phase

- Pełne strojenie kontrastów light (Faza 10) · przebudowa sekcji home · animacje sygnaturowe.

### Acceptance criteria

- [ ] Pierwsza wizyta = dark; toggle przełącza motyw; wybór przetrwa odświeżenie — [observable: test ręczny + zapis wyboru]
- [ ] Header półprzezroczysty, treść widoczna pod nim przy scrollu; StickyBar nie istnieje — [observable: test ręczny + brak w DOM]
- [ ] Kontrast tekstu w dark na kluczowych powierzchniach ≥ AA — [observable: kontrolka kontrastem]
- [ ] Build/test/lint zielone — [command: `yarn build && yarn test && yarn lint`]

---

## Phase 4: Home — hero + sygnaturowe momenty

**User stories**: 1, 6, 17

### What to build

Nowy hero: hasło „Development, Knowledge, Power.", podtytuł „Sharp and refined software, Playful and crafted games.", dwa duże CTA — „Explore Products" (wewnętrzny) i „Meet umux" (zewnętrzny, nowa karta). Sygnatura 1: subtelny kryształ reagujący na kursor/scroll (refrakcja światła, bez glitchu). Sygnatura 2: kaskadowe wchodzenie elementów (sprężyny z velocity handoffem). Warianty reduced-motion (cross-fade) obsługiwane centralnie.

### Assumptions carried in

- Tokeny i Motion kit z Faz 1/3; treść z Fazy 2.

### Out of scope for this phase

- Sekcje pod hero (Faza 5) · optymalizacja wydajności animacji pod Lighthouse (Faza 10).

### Acceptance criteria

- [ ] Hero z hasłem, podtytułem i 2 CTA widoczne nad zagięciem (1366×768) — [observable: test ręczny]
- [ ] „Meet umux" otwiera `umux.pages.dev` w nowej karcie z `rel="noopener noreferrer"` — [observable: inspekcja linku]
- [ ] Kryształ reaguje na kursor/scroll (subtelnie, bez glitchu); elementy wchodzą kaskadowo — [observable: test ręczny]
- [ ] Przy emulacji `prefers-reduced-motion` — brak sprężyn/parallax, tylko cross-fade — [observable: emulacja w DevTools]
- [ ] Build/test/lint zielone — [command: `yarn build && yarn test && yarn lint`]

---

## Phase 5: Home — sekcje treści

**User stories**: 5, 7 (część: gry tylko na Products), 10 (struktura), 11

### What to build

Przebudowa sekcji: Products showcase z lineupem **umux → ExSize → ADM-CLI** (gry znikają z home); Features w nowej oprawie; Social proof jako struktura „cytat + autor" (na razie placeholdery — prawdziwe opinie w Faza 10); FAQ accordion napędzany tą samą treścią co strona /faq; końcowy CTA. Rozszerzenie kształtu treści w JSON + typy (jedno źródło prawdy).

### Assumptions carried in

- Hero z Fazy 4; pipeline treści z Fazy 2.

### Out of scope for this phase

- Schema.org FAQPage (Faza 8) · prawdziwe testimoniale i screenshoty (Faza 10).

### Acceptance criteria

- [ ] Karty produktów w kolejności umux, ExSize, ADM-CLI; żadnych gier na home — [observable: test ręczny]
- [ ] FAQ rozwija/zwija, kategorie zgodne z treścią — [observable: test ręczny]
- [ ] Social proof renderuje cytat + autora (placeholder do czasu assetów) — [observable: DOM]
- [ ] Zmiana copy w JSON bez edycji komponentów zmienia stronę po buildzie — [observable: test scenariusza]
- [ ] Build/test/lint zielone — [command: `yarn build && yarn test && yarn lint`]

---

## Phase 6: Szablon strony gry ×2

**User stories**: 7, 8, 9

### What to build

Jeden wspólny szablon strony gry sterowany konfiguracją (School's Out! i Coin Collector korzystają z tej samej oprawy — identyczny wygląd, inna konfiguracja). Gra (istniejący embed) widoczna **nad zagięciem**; pod nią sekcje: How to play, Features, screenshoty (placeholdery), link do drugiej gry. Mechaniki i działanie gier bez zmian.

### Assumptions carried in

- Embed gier działa jak dotychczas; layout shell z Fazy 3.

### Out of scope for this phase

- Jakiekolwiek zmiany w samych grach · prawdziwe screenshoty (Faza 10).

### Acceptance criteria

- [ ] Obie strony gier mają identyczny układ (różni się wyłącznie konfiguracja) — [observable: porównanie stron]
- [ ] Gra widoczna bez scrollowania na 1366×768 i 390×844 — [observable: test ręczny]
- [ ] Sekcje How to play / Features / screenshoty obecne pod grą; grywalność nietknięta — [observable: ręczne zagranie w obie gry]
- [ ] Build/test/lint zielone — [command: `yarn build && yarn test && yarn lint`]

---

## Phase 7: Szablon strony produktu ×4

**User stories**: 19 (+ strony produktowe pod historią 5)

### What to build

Wspólny szablon strony produktu sterowany konfiguracją: hero + CTA, opis, features, screenshoty (placeholdery), how to use, related products. Migracja umux, ExSize, ADM-CLI i Wspolniak na szablon; indywidualne strony wycofane. Nazwa „umux" małą literą w UI; link do repo umux zachowany.

### Assumptions carried in

- Szablonowe wzorce z Fazy 6; treść z Fazy 2.

### Out of scope for this phase

- Prawdziwe screenshoty produktów (Faza 10) · schema SoftwareApplication (Faza 8).

### Acceptance criteria

- [ ] 4 strony produktów na wspólnym szablonie ze spójnymi sekcjami — [observable: przegląd stron]
- [ ] „Related products" linkuje między produktami — [observable: test ręczny]
- [ ] Test rebrand-guard (link repo umux) dalej zielony — [command: `yarn test`]
- [ ] Build/test/lint zielone — [command: `yarn build && yarn test && yarn lint`]

---

## Phase 8: SEO kit + AI-search

**User stories**: 12, 13

### What to build

Komponent Seo per strona: unikalne title/description/canonical/OG (OG-image: meta gotowa, plik podpiąć w Faza 10). JSON-LD: Organization (globalnie), SoftwareApplication per produkt, FAQPage na FAQ. Pliki: `robots.txt` z jawnym Allow dla PerplexityBot/GPTBot/OAI-SearchBot, porządny `llms.txt` (markdown: studio, produkty, linki), finalny `sitemap.xml` z pełną listą tras. Wszystko to musi lądować w **statycznym** HTML z prerenderu.

### Assumptions carried in

- Prerender z Fazy 2; struktura stron stabilna po Fazach 5–7.

### Out of scope for this phase

- Weryfikacja progów Lighthouse (Faza 10) · wersje językowe.

### Acceptance criteria

- [ ] Każda trasa w `dist/` ma unikalny title + description + canonical w statycznym HTML — [observable: view-source per trasa]
- [ ] `robots.txt` zawiera Allow dla 3 botów AI; `llms.txt` obecny i zgodny z formatem — [observable: zawartość plików]
- [ ] JSON-LD (Organization, SoftwareApplication, FAQPage) waliduje się bez błędów — [observable: walidator rich results]
- [ ] `sitemap.xml` zawiera wszystkie trasy — [observable: zawartość pliku]

---

## Phase 9: Contact + podstrony reskin

**User stories**: 21

### What to build

Reskin formularza kontaktowego (Formspree): walidacja inline (nie na submit), statusy sukcesu/błędu/ładowania, całość w nowych tokenach. Reskin podstron: About, Privacy, Terms, Game Guide — spójna typografia i oprawa, treści zachowane.

### Assumptions carried in

- Tokeny z Fazy 3; endpoint Formspree działa.

### Out of scope for this phase

- Nowe treści merytoryczne podstron.

### Acceptance criteria

- [ ] Puste pola → walidacja inline; poprawny submit → status sukcesu; błąd sieci → komunikat błędu — [observable: test scenariuszy]
- [ ] Podstrony spójne wizualnie z resztą (tokeny), treści zachowane — [observable: przegląd stron]
- [ ] Build/test/lint zielone — [command: `yarn build && yarn test && yarn lint`]

---

## Phase 10: A11y + light theme + wydajność + guard + assety

**User stories**: 4, 10 (final), 14, 15, 16, 20, 24

### What to build

Domknięcie jakości: pełny pass dostępności (skip link, widoczne focusy, semantyka, targety ≥48px), strojenie light theme do AA, globalna obsługa reduced-motion, wydajność (lazy loading obrazów, code splitting, odchudzenie bundla). Rozszerzenie rebrand-guard: „umux" małą literą, umux.pages.dev, kluczowe linki. Podpięcie assetów ownera: prawdziwe screenshoty (gry + produkty), opinie z autorami, OG-image 1200×630. Weryfikacja progów Lighthouse.

### Assumptions carried in

- Wszystkie poprzednie fazy ukończone; owner dostarcza screenshoty/opinie/OG-image.

### Out of scope for this phase

- Analytics (brak) · i18n · nowe produkty.

### Acceptance criteria

- [ ] Rozszerzony rebrand-guard przechodzi — [command: `yarn test`]
- [ ] Nawigacja klawiaturą przez home + formularz; skip link działa; focusy widoczne — [observable: test ręczny]
- [ ] Reduced-motion: brak sprężyn/parallax na całej stronie — [observable: emulacja DevTools]
- [ ] Targety dotykowe ≥48px na mobile — [observable: inspekcja]
- [ ] Light theme: kontrasty AA na kluczowych sekcjach — [observable: kontrolka kontrastem]
- [ ] Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95 (home + strona produktu) — [command: Lighthouse]
- [ ] Sekcja opinii pokazuje prawdziwe cytaty z autorami; OG-image podpięty — [observable: DOM + meta]
- [ ] Finalne `yarn build && yarn test && yarn lint` zielone — [command]
