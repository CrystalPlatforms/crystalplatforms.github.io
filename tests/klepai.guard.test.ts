import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import content from '../public/content.json'

// Klepai guard — issue #66 „add klepai".
// Chroni przed regresją dodania klepai do produktów:
//  - klepai to APLIKACJA (self-hosted LLM manager), nie gra — więc żyje w
//    sekcji apps na /products (wzorzec umux/ADM-CLI), a NIE w games.
//  - ma własną stronę /products/klepai podpiętą w App.tsx.
//  - karta produktu linkuje do repozytorium CrystalPlatforms/klepai.

const products = readFileSync('src/pages/Products.tsx', 'utf-8')
const app = readFileSync('src/App.tsx', 'utf-8')

describe('Klepai — strona produktu (issue #66)', () => {
  it('karta klepai istnieje na /products i linkuje do własnej strony', () => {
    expect(products).toContain('title: "Klepai"')
    expect(products).toContain('link: "/products/klepai"')
  })

  it('karta klepai linkuje do repozytorium CrystalPlatforms/klepai (przycisk Open)', () => {
    expect(products).toContain('openLink: "https://github.com/CrystalPlatforms/klepai"')
  })

  it('karta klepai ma obrazek podglądowy na dysku', () => {
    expect(products).toContain('imageUrl: "/images/klepai-preview.png"')
    expect(existsSync('public/images/klepai-preview.png'), 'brak pliku public/images/klepai-preview.png').toBe(true)
  })

  it('App.tsx rejestruje trasę /products/klepai', () => {
    expect(app).toContain("/products/klepai")
    expect(app).toContain("from './pages/Klepai'")
  })

  it('klepai NIE jest trasą pełnoekranowej gry (to aplikacja, nie gra)', () => {
    const gameRoutes = app.match(/const GAME_ROUTES = \[([^\]]*)\]/)?.[1] ?? ''
    expect(gameRoutes).not.toContain('/products/klepai')
  })

  it('klepai nie wkradł się do sekcji gier w content.json', () => {
    const klepaiInGames = content.games.items.filter((g) =>
      g.slug.toLowerCase().includes('klepai') || g.title.toLowerCase().includes('klepai'),
    )
    expect(klepaiInGames).toEqual([])
  })
})
