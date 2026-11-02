import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import content from '../public/content.json'

// Products guard — ochrona zmian z sesji „crs-lp 66,67":
//  1. Coin Collector został usunięty z showcase na stronie głównej (/),
//     ale GRA nadal istnieje: route /coin-collector, wpis w games.items
//     i karta na /products pozostają.
//  2. Kafelki umux i klepai na /products mają TRZY przyciski:
//     Website (strona pages.dev) / GitHub (repo) / More (strona produktu).

const showcase = content.productsShowcase.items
const products = readFileSync('src/pages/Products.tsx', 'utf-8')

describe('Showcase na stronie głównej (issue: usunięcie Coin Collector)', () => {
  it('Coin Collector NIE ma już w showcase na /', () => {
    expect(showcase.find((i) => i.title === 'Coin Collector')).toBeUndefined()
  })

  it('pozostałe karty showcase zostały na miejscu', () => {
    const titles = showcase.map((i) => i.title)
    expect(titles).toContain("School's Out!")
    expect(titles).toContain("Sprint'n Survive!")
    expect(titles).toContain('ExSize')
    expect(titles).toContain('More Coming Soon')
  })

  it('Coin Collector jako GRA nadal istnieje w games.items (usunięto tylko kafeł na /)', () => {
    expect(content.games.items.find((g) => g.slug === 'coin-collector')).toBeDefined()
  })

  it('trasa /coin-collector nadal jest zarejestrowana w App.tsx', () => {
    expect(readFileSync('src/App.tsx', 'utf-8')).toContain('"/coin-collector"')
  })
})

describe('Kafelki umux i klepai na /products — trzy przyciski', () => {
  // Karta w Products.tsx musi mieć websiteLink (→ Website), openLink (→ GitHub)
  // i link (→ More). Struktura przycisków jest pilnowana przez presence test
  // oraz przycisk "Website" w kodzie karty.
  const CASES = [
    { name: 'umux', pagesDev: 'https://umux.pages.dev', repo: 'https://github.com/CrystalPlatforms/umux' },
    { name: 'klepai', pagesDev: 'https://klepai.pages.dev', repo: 'https://github.com/CrystalPlatforms/klepai' },
  ]

  for (const { name, pagesDev, repo } of CASES) {
    it(`kafel ${name} linkuje do strony własnej (${pagesDev})`, () => {
      expect(products).toContain(`websiteLink: "${pagesDev}"`)
    })

    it(`kafel ${name} linkuje do repozytorium GitHub`, () => {
      expect(products).toContain(`openLink: "${repo}"`)
    })

    it(`kafel ${name} linkuje do własnej strony produktu na landing page'u`, () => {
      expect(products).toContain(`link: "/products/${name}"`)
    })
  }

  it('karta produktu renderuje przycisk „Website" (etykieta obecna w kodzie karty)', () => {
    expect(products).toContain('Website')
  })
})
