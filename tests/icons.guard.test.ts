import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import content from '../public/content.json'
import pkg from '../package.json'
import { getIconComponent } from '../src/utils/helpers'
import { IconHelp } from '@tabler/icons-react'

// Icons guard — issue #67 „Replace icons and icon library with Tabler Icons".
// Chroni przed regresją wymiany ikon:
//  1. w projekcie nie ma już żadnych śladów lucide-react (kod + zależności),
//  2. KAŻDA nazwa ikony użyta w content.json ma mapowanie w helpers.ts
//     (brak mapowania = cichy fallback IconHelp na żywej stronie),
//  3. ikony w JSX są dekoracyjne — każdy tag ikony ma aria-hidden="true".

// Założenia (stan na implementację #67):
// - content.json PRZECHOWUJE stare nazwy ikon (z czasów lucide); tłumaczenie
//   na Tabler robi wyłącznie mapa w src/utils/helpers.ts.
// - Standard wizualny: stroke 2 (domyślny Tablera), rozmiar klasami Tailwinda;
//   obu nie testujemy jednostkowo (to konwencja CSS/library), testujemy to,
//   co jest statycznie weryfikowalne w plikach.
// - Nie testujemy wyglądu ikon (odpowiedniości kształtów) — to ocena HITL.

const readFile = (name: string) => readFileSync(name, 'utf-8')

// Rekursywnie zbiera ścieżki plików w katalogu (jak w rebrand.guard).
function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry)
    return statSync(full).isDirectory() ? walk(full) : [full]
  })
}

const srcFiles = walk('src').filter((file) => /\.(t|j)sx?$/.test(file))

// Zbiera WSZYSTKIE wartości pól "icon" oraz "ctaIcon" z content.json
// (dowolna głębokość).
function collectIconNames(value: unknown): string[] {
  if (Array.isArray(value)) return value.flatMap(collectIconNames)
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, v]) =>
      (key === 'icon' || key === 'ctaIcon') && typeof v === 'string'
        ? [v]
        : collectIconNames(v),
    )
  }
  return []
}

describe('Icons guard — Tabler Icons (issue #67)', () => {
  describe('brak starej biblioteki (lucide-react)', () => {
    it('package.json nie ma lucide-react w dependencies', () => {
      expect(pkg.dependencies).not.toHaveProperty('lucide-react')
    })

    it('package.json ma @tabler/icons-react w dependencies', () => {
      expect(pkg.dependencies).toHaveProperty('@tabler/icons-react')
    })

    it('w src/ nie ma żadnego importu ani wzmianki o lucide', () => {
      const offenders = srcFiles.filter((file) => readFile(file).includes('lucide'))
      expect(offenders, `pliki z referencjami do lucide: ${offenders.join(', ')}`).toEqual([])
    })
  })

  describe('mapowanie ikon z content.json', () => {
    it('każda ikona z content.json ma mapowanie (nie wpada w fallback IconHelp)', () => {
      const iconNames = collectIconNames(content)
      expect(iconNames.length).toBeGreaterThan(0)
      for (const name of iconNames) {
        expect(getIconComponent(name), `brak mapowania dla ikony "${name}"`).not.toBe(IconHelp)
      }
    })

    it('znana ikona zwraca komponent Tablera (Star → Tabler Star)', () => {
      const star = getIconComponent('Star')
      // Komponent Tablera to ForwardRefExoticComponent (obiekt z renderem),
      // a jego displayName to nazwa ikony bez prefiksu Icon*.
      expect(typeof star).toBe('object')
      expect((star as { displayName?: string }).displayName).toBe('Star')
    })

    it('nieznana nazwa zwraca fallback IconHelp zamiast crashować', () => {
      expect(getIconComponent('__no_such_icon__')).toBe(IconHelp)
    })
  })

  describe('dostępność ikon w JSX', () => {
    it('każdy tag ikony w JSX ma aria-hidden (ikony są dekoracyjne)', () => {
      const misses: string[] = []
      for (const file of srcFiles) {
        const text = readFile(file)
        const tags = text.match(/<(?:Icon[A-Z]\w*|NavIcon|IconComponent)\b[^>]*?\/?>/g) ?? []
        for (const tag of tags) {
          if (!tag.includes('aria-hidden')) misses.push(`${file}: ${tag}`)
        }
      }
      expect(misses, `tagi ikon bez aria-hidden:\n${misses.join('\n')}`).toEqual([])
    })
  })
})
