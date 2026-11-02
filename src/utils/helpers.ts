import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import {
  IconBackpack,
  IconBrandGithub,
  IconBrandX,
  IconBrandYoutube,
  IconBolt,
  IconDeviceGamepad2,
  IconDiamond,
  IconHeart,
  IconHelp,
  IconPlayerPlay,
  IconQuote,
  IconStar,
  IconThumbUp,
  IconTrophy,
  IconWorld,
  type TablerIcon,
} from '@tabler/icons-react'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Mapowanie nazw ikon z content.json na ikony Tabler (@tabler/icons-react).
// To JEDYNE miejsce tłumaczące nazwy z treści (content.json) na Tabler —
// treść nie musi się zmieniać razem z biblioteką ikon.
//
// Standard ikon w całym projekcie: stroke-width 2 (domyślny Tablera, spójny
// z definednym stylem outline), rozmiar sterowany klasami Tailwinda (h-4/w-4
// do h-12/w-12) użytymi przy renderze. Ikony dekoracyjne dostają
// aria-hidden="true" w miejscach użycia; ikony "znaczące" — etykietę aria-label.
const ICON_MAP: Record<string, TablerIcon> = {
  Backpack: IconBackpack,
  Gamepad2: IconDeviceGamepad2,
  Gem: IconDiamond,
  Globe: IconWorld,
  Heart: IconHeart,
  PlayCircle: IconPlayerPlay,
  Quote: IconQuote,
  Star: IconStar,
  ThumbsUp: IconThumbUp,
  Trophy: IconTrophy,
  Twitter: IconBrandX, // link prowadzi na x.com — używamy brandu X
  Youtube: IconBrandYoutube,
  Github: IconBrandGithub,
  Zap: IconBolt,
}

// Fallback dla nieznanej nazwy — zamiast crasha renderujemy znak zapytania.
const FALLBACK_ICON = IconHelp

export function getIconComponent(iconName: string) {
  return ICON_MAP[iconName] ?? FALLBACK_ICON
}
