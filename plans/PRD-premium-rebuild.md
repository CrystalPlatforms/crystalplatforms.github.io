# PRD — Premium rebuild strony Crystal Studio

## Problem Statement

Strona crystal-studio.dev wygląda jak typowa, wygenerowana strona „gamingowy neon" (glitch, scanline, glow, pixelate). Odbiorcy — developerzy, programiści, CTO — nie odczytują jej jako profesjonalnej, co obniża zaufanie i konwersję. Dodatkowo strona jest technicznie słabo widoczna: routing hash (`/#/ścieżka`), renderowanie wyłącznie client-side, brak meta tagów per strona, braku sitemap, schema.org i plików dla AI-search. Wyszukiwarki i AI-silniki (Perplexity, Google AI Overview, ChatGPT) mają bardzo ograniczony materiał do zaindeksowania i zacytowania.

## Solution

Pełna przebudowa strony na **premium**: spokojny, ciemny (dark-first) design z subtelnym „kryształowym" akcentem, sprężynowymi animacjami, szkłem i dopracowaną typografią — według briefu DESIGN.md i zasad apple-design. Równolegle: prawdziwe SEO (prerender statycznego HTML per trasa + BrowserRouter + schema.org + sitemap + llms.txt), przy zachowaniu architektury treści sterowanej JSON i budżetu 0 zł na GitHub Pages.

## User Stories

1. Jako odwiedzający pierwszy raz, chcę w ~5 sekund zrozumieć, czym jest Crystal Studio (hero: hasło, podtytuł, dwa duże CTA), abym szybko ocenił trafność strony.
2. Jako developer/CTO, chcę spójnej typografii i siatki o dużej ilości światła, abym postrzegał studio jako profesjonalne i technicznie kompetentne.
3. Jako użytkownik pracujący nocą, chcę domyślnego trybu dark z przełącznikiem na light (wybór zapamiętywany), abym czytał komfortowo.
4. Jako użytkownik mobilny, chcę pełnej responsywności i celów dotykowych min. 48×48 px, abym miał tę samą jakość doświadczenia co na desktopie.
5. Jako potencjalny klient, chcę na stronie głównej wyróżnionej triady produktów (umux → ExSize → ADM-CLI) z krótkimi wartościowymi opisami, abym wiedział, co dalej zbadać.
6. Jako odwiedzający zainteresowany umux, chcę przycisku „Meet umux" prowadzącego do umux.pages.dev (nowa karta), abym szybko wszedł do produktu.
7. Jako gracz, chcę wszystkich gier zebranych na stronie Products z prostym wejściem „Play", abym grał bez szukania.
8. Jako gracz na stronie gry, chcę gry widocznej od razu (bez scrollowania) i sekcji „How to play", „Features" i screenshotów pod nią, abym grał i uczył się w jednym miejscu.
9. Jako gracz porównujący tytuły, chcę by strony obu gier (School's Out!, Coin Collector) miały identyczny układ i wygląd, abym czuł jeden spójny produkt.
10. Jako sceptyczny odwiedzający, chcę prawdziwych opinii z podpisami autorów, abym miał wiarygodny dowód społeczny.
11. Jako ciekawy, chcę FAQ z rozwijanymi pytaniami pogrupowanymi w kategoriach, abym szybko znalazł odpowiedź.
12. Jako robot Google, chcę statycznego HTML dla każdej trasy, unikalnych meta title/description, canonical, tagów OG i sitemap.xml, abym poprawnie zaindeksował całą stronę.
13. Jako silnik AI-search (PerplexityBot, GPTBot, OAI-SearchBot), chcę dostępu w robots.txt, pliku llms.txt i treści fact-dense ze schema (Organization, SoftwareApplication, FAQPage), abym cytował stronę w swoich odpowiedziach.
14. Jako użytkownik wolnego łącza, chcę lekkiego bundla, lazy-loadingu obrazów i code-splittingu, abym zobaczył stronę szybko.
15. Jako użytkownik z „reduced motion", chcę łagodnych wariantów animacji (cross-fade zamiast sprężyn/parallax), abym nie odczuwał dyskomfortu.
16. Jako użytkownik klawiatury i czytnika ekranu, chcę semantycznego HTML, widocznych focusów i pominięcia nawigacji (skip link), abym mógł korzystać z wszystkiego (WCAG AA).
17. Jako odwiedzający, chcę subtelnych animacji sprężynowych (reveal przy scrollu, kaskada kart, kryształ reagujący na kursor/scroll), abym poczuł klasę „premium" bez rozpraszania.
18. Jako właściciel studia, chcę edytować treść w jednym pliku JSON (import build-time, synchroniczny w aplikacji), abym zmieniał copy bez dotykania komponentów.
19. Jako maintainer, chcę wspólnych szablonów strony gry i strony produktu sterowanych konfiguracją, abym dodawał kolejne produkty bez pisania nowych stron.
20. Jako maintainer, chcę rozszerzonego testu pilnującego marki („umux" małą literą, kluczowe linki produktów), abym przypadkiem nie zepsuł brandingu.
21. Jako odwiedzający potrzebujący pomocy, chcę działającego formularza kontaktowego (Formspree) w nowym designie z walidacją inline i jasnymi statusami, abym skutecznie wysłał wiadomość.
22. Jako odwiedzający, chcę przyklejonego, przezroczystego (glass) nagłówka z czytelną nawigacją, abym zawsze wiedział, gdzie jestem i jak wrócić.
23. Jako odwiedzający, chcę braku paska promocyjnego nad menu, abym nie był rozpraszany od treści.
24. Jako użytkownik trybu light, chcę dopracowanego jasnego motywu (kontrasty AA), abym nie dostawał po prostu „wyblakłej" wersji dark.

## Implementation Decisions

- **Stack:** React 19 + Vite 6 + TypeScript; migracja Tailwind v3 → **v4**; **Motion** (animacje sprężynowe); **shadcn/ui**. React 19 wbudowane wsparcie meta zamiast react-helmet-async.
- **Design tokens:** paleta z briefu (primary niebieski #3B82F6, secondary zielony #10B981, neutralne gray) jako zmienne CSS shadcn; dark domyślny, light włączany przełącznikiem (zapamiętywany). Punkt kontrolny po pierwszym podglądzie: jeśli paleta nie zagra, instalowany motyw CRS-Theme z tweakcn.
- **Typografia:** font systemowy (system-ui); hierarchy z weight + size + leading; tracking zależny od rozmiaru (ujemny dla nagłówków).
- **Treść:** content.json przechodzi z fetch-runtime na import build-time; hook treści synchroniczny (znika logika stanów ładowania); typy nadal opisują kształt; test rebrand-guard rozszerzony.
- **Routing:** BrowserRouter (koniec hash); reguła wewnętrznych vs zewnętrznych linków zachowana; ScrollToTop zachowany.
- **Prerender:** własny lekki skrypt uruchamiany w buildzie renderujący statyczny HTML per trasa (React SSR), generujący fallback 404.html (BrowserRouter na GitHub Pages) i sitemap.xml; brak zewnętrznych frameworków SSG.
- **SEO/AI kit:** komponent Seo (title, description, canonical, OG, JSON-LD: Organization, SoftwareApplication per produkt, FAQPage); robots.txt z jawną listą dozwolonych botów AI; porządny plik llms.txt (markdown opisujący studio i produkty).
- **Komponenty (deep modules):** Design tokens · Motion kit (Reveal + presety sprężyn, obsługa reduced-motion centralnie) · Pipeline treści · Seo kit · Layout shell (translucent header, footer, ThemeToggle) · sekcje home · szablon strony gry · szablon strony produktu.
- **Hero:** hasło „Development, Knowledge, Power."; podtytuł „Sharp and refined software, Playful and crafted games."; CTA „Explore Products" (wewnętrzny) + „Meet umux" (zewnętrzny, nowa karta). Sygnaturowe momenty: kryształ reagujący na kursor/scroll + kaskadowe wchodzenie kart produktów.
- **Lineup home:** umux → ExSize → ADM-CLI; gry wyłącznie na Products; StickyBar usunięty.
- **Branding:** nazwa „umux" pisana małą literą w UI; logo bez zmian; OG-image dostarcza właściciel (1200×630).
- **Strony gier:** wspólny szablon (gra widoczna nad zagięciem + How to play / Features / screenshoty / related) — wygląd ujednolicony, mechaniki gier bez zmian.
- **Strony produktów:** wspólny szablon sterowany konfiguracją (hero+CTA, opis, features, screenshoty, how to use, related) dla umux, ExSize, ADM-CLI, Wspolniak.
- **Formularz kontaktowy:** Formspree (istniejący endpoint), reskin + walidacja inline + statusy.
- **Język treści:** angielski. **Analytics:** brak. **Egrator:** bez zmian (strona istnieje, niewidoczna w nawigacji).

## Assumptions

- GitHub Pages pozostaje hostem; strona jest w 100% statyczna (bez API), więc prerender pełnego HTML per trasa w pełni pokrywa potrzeby SEO.
- Formspree (darmowy plan) pozostaje dostępny i wystarcza na rzeczywisty wolumen wiadomości.
- Wbudowane w React 19 wsparcie meta/OG/JSON-LD jest wystarczające — nie potrzebujemy osobnej biblioteki.
- Paleta z briefu zostanie zaakceptowana po pierwszym podglądzie; w przeciwnym razie w ramach zakresu wchodzi CRS-Theme z tweakcn.
- Właściciel dostarczy przed shipem: screenshoty gier/aplikacji, prawdziwe opinie z atrybucją autorów, OG-image 1200×630. Do tego czasu sekcje działają na placeholderach.
- Progi Lighthouse (Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95, mobile) są osiągalne na statycznym hostingu po optymalizacji bundla.
- Tailwind v4 + shadcn/ui + Motion są kompatybilne z React 19 + Vite 6 (weryfikowane na starcie prac — migracja stacka jest pierwszym etapem).
- Strona pozostaje EN-only (bez i18n) — rosnący zasięg PL/EN to osobna decyzja na przyszłość.

## Tradeoffs Considered

- **Next.js** — odrzucony: zabroniony przez brief; hosting statyczny GitHub Pages.
- **Gotowe SSG dla Vite (np. vite-react-ssg)** — odrzucone: nowa zależność-framework i ryzyko kompatybilności z React 19/Vite 6 vs ~100 linii własnego, w pełni kontrolowanego skryptu.
- **Pozostanie przy HashRouter** — odrzucone: fragment URL nie trafia do serwera/krawlera, co niweczy cel SEO.
- **react-helmet-async** — odrzucony: React 19 ma natywne wsparcie metadata; mniej zależności.
- **Analytics (GoatCounter/GA4/Umami)** — odrzucone: decyzja właściciela — strona bez śledzenia.
- **Indywidualne strony produktów** — odrzucone na rzecz wspólnego szablonu: spójność wizualna i niski koszt dodawania produktów.
- **Zostanie przy Tailwind v3 bez migracji** — odrzucone: brief wymaga v4; shadcn/ui i design tokens są v4-first.
- **Zdjęcia stockowe (Unsplash/Pexels) w sekcjach produktowych** — ograniczone: w miejscach produktowych tylko prawdziwe screenshoty (wiarygodność); AI-images zakazane briefem.

## Validation Strategy

Polecenia bazowe: `yarn build`, `yarn test`, `yarn lint` — wszystkie zielone (command).

| Historie | Mechanizm weryfikacji |
|---|---|
| 1, 5, 6, 17, 22, 23 | Test scenario (manualny, desktop 1366px + mobile 390px): hero z hasłem i 2 CTA nad zagięciem; kolejność kart umux → ExSize → ADM-CLI; „Meet umux" otwiera umux.pages.dev w nowej karcie; brak StickyBara; glass header przykleja się przy scrollu |
| 2, 24 | Observable artifact: spójny zestaw tokenów (jedno źródło); przełączenie light utrzymuje kontrast AA na kluczowych sekcjach (kontrolka kontrastem) |
| 3 | Test scenario: toggle dark↔light; wybór zapamiętany po odświeżeniu; domyślne dark przy pierwszej wizycie |
| 4, 15, 16 | Test scenario: nawigacja klawiaturą przez home + formularz (widoczne focusy, skip link); emulacja „prefers-reduced-motion" w DevTools = brak sprężyn/parallax (cross-fade); targety dotykowe ≥48px na mobile |
| 7 | Test scenario: /products zawiera wszystkie gry z działającym „Play" |
| 8, 9 | Test scenario: obie strony gier mają identyczny szablon; gra widoczna bez scrollowania na 1366×768 i 390×844; pod grą sekcje How to play / Features / screeny; mechaniki gier niezmienione |
| 10 | Test scenario: sekcja opinii renderuje podane przez właściciela cytaty z autorami (placeholder zabraniony do shipu) |
| 11 | Test scenario: FAQ rozwija/zwija; kategorie zgodne z treścią; JSON-LD FAQPage bez błędów walidatora |
| 12 | Observable artifact po `yarn build`: plik HTML per trasa z unikalnym `<title>`/description/canonical; istnieje 404.html; sitemap.xml zawiera wszystkie trasy; curl źródła strony pokazuje meta bez uruchamiania JS |
| 13 | Observable artifact: robots.txt zawiera PerplexityBot/GPTBot/OAI-SearchBot Allow; llms.txt obecny i zgodny z formatem; JSON-LD Organization/SoftwareApplication/FAQPage waliduje się bez błędów |
| 14 | Jakościowe: Lighthouse mobile Performance ≥ 90 (home + strona produktu), obrazy lazy, brak niepotrzebnych zależności |
| 18 | Test scenario: zmiana copy w content.json + `yarn build` → zmiana widoczna na stronie bez edycji komponentów; niezgodny kształt JSON łapie typecheck |
| 19 | Test scenario: dodanie nowego produktu = nowy wpis konfiguracji (bez nowego komponentu strony) |
| 20 | Automated: rozszerzony test rebrand-guard („umux" małą literą, umux.pages.dev, kluczowe linki) — `yarn test` zielony |
| 21 | Test scenario: puste pola → walidacja inline; poprawny submit → status sukcesu; błąd sieci → komunikat błędu |
| — | Progi jakości: Lighthouse Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95 (mobile, home + strona produktu); `yarn build` przerywa deploy przy błędach typów |

**Definition of Done (komponenty):** design tokens (dark+light, AA) · Motion kit (sprężyny + reduced-motion) · pipeline treści (synchroniczny) · Seo kit (meta+JSON-LD) · prerender (HTML per trasa + 404 + sitemap) · layout shell · home (hero+kryształ+kaskada+lineup) · szablon gry ×2 · szablon produktu ×4 · contact · FAQ · legal/support reskin · rebrand-guard rozszerzony.

## Out of Scope

- Next.js / serwer aplikacyjny / własny backend (poza Formspree)
- Analytics i monitoring (GoatCounter, GA4, Umami)
- i18n / polska wersja strony
- Nowe produkty i merytoryczne treści (osobne decyzje)
- Zmiany mechanik gier i samego embeddingu (poza oprawą szablonu)
- Egrator — pozostaje bez zmian
- CMS — treść ręcznie w content.json

## Further Notes

- Proponowana kolejność prac: (1) migracja stacka (Tailwind v4 + shadcn/ui + Motion) → (2) pipeline treści build-time → (3) design tokens + layout shell → (4) sekcje home → (5) szablony gry/produktu → (6) SEO kit + prerender + robots/llms/sitemap → (7) light theme + a11y pass → (8) Lighthouse pass + dostarczenie assetów przez właściciela → ship.
- Zasady animacji wg apple-design: sprężyny krytycznie tłumione domyślnie (bounce tylko przy momentum), animacje przerywalne, feedback na pointer-down, szkło z backdrop-blur dla chrome, „materialize" zamiast zwykłego fade.
- Wszystkie prace na branchu `landing-upgrade-dev`; owner testuje na `yarn dev`/`yarn preview` po każdym etapie.
