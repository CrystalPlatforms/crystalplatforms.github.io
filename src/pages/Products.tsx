import { cn } from '../utils/helpers'
import { glowAnimation } from '../utils/game-effects'
import { Link } from 'react-router'
import { IconAppWindow, IconBrandGithub, IconExternalLink, IconWorld } from '@tabler/icons-react'

type Product = {
  title: string
  imageUrl?: string
  description: string
  // Internal link to the product page (used by the "More" button,
  // or as the single main button when there is no openLink).
  link: string
  // External link — when present, renders the "Open" button (GitHub/exsize/wspolniak etc.).
  openLink?: string
  // Link do strony własnej produktu (pages.dev) — gdy jest, karta dostaje trzy
  // przyciski: Website / GitHub / More (a "Open" zmienia etykietę na "GitHub").
  websiteLink?: string
  // Label of the single main button shown when there is no openLink (e.g. "Play Now", "Learn More").
  buttonText?: string
}

const apps: Product[] = [
  {
    title: "ExSize",
    imageUrl: "/images/exsize-preview.png",
    description: "Gamified family chore tracker — parents assign tasks, kids earn ExBucks, shop for avatar items and climb the leaderboards. Installable PWA that works offline.",
    link: "/products/exsize",
    openLink: "https://exsize.pages.dev",
  },
  {
    title: "Wspolniak",
    imageUrl: "/images/wspolniak-preview.png",
    description: "Private, invite-only family social app in Polish — photo feed, albums, calendar reminders and real-time chat, self-hosted on your own Cloudflare Workers. Live in production, 100+ releases.",
    link: "/products/wspolniak",
    openLink: "https://wspolniak.com",
  },
  {
    title: "ADM-CLI",
    imageUrl: "/images/adm-preview.png",
    description: "Developer-focused CLI tool that automates environment setup and provides an AI-powered daily assistant for development workflows",
    link: "/products/adm-cli",
    openLink: "https://github.com/CrystalPlatforms/ADM-CLI",
  },
  {
    title: "umux",
    imageUrl: "/images/umux-preview.png",
    description: "Open-source terminal workspace manager for Linux, macOS and Windows — persistent project workspaces, tabs & split panels, SSH, agent status, and desktop notifications when AI CLI tasks finish. Live CLI and sessions that outlive the window — v1.8 is out!",
    link: "/products/umux",
    openLink: "https://github.com/CrystalPlatforms/umux",
    websiteLink: "https://umux.pages.dev",
  },
  {
    title: "Klepai",
    imageUrl: "/images/klepai-preview.png",
    description: "Private, self-hosted LLM manager — a desktop chat app for Linux, macOS and Windows that talks to your own model servers (Ollama first-class). Agent mode with Claude Code & Codex CLI, skill library and permission gates — everything local, no telemetry. Alpha v0.0.2 out now!",
    link: "/products/klepai",
    openLink: "https://github.com/CrystalPlatforms/klepai",
    websiteLink: "https://klepai.pages.dev",
  },
]

const games: Product[] = [
  {
    title: "School's Out!",
    imageUrl: "/images/schoolsout.png",
    description: "Dodge, jump, survive — and tap out Morse code mid-air to bank bonus energy. Five characters, 14 levels, one high score to beat!",
    link: "/schools-out",
    buttonText: "Play Now",
  },
  {
    title: "Coin Collector",
    imageUrl: "/images/coincollector.png",
    description: "High-speed lane-dodging survival — weave between three lanes, grab falling coins and outlast ever-faster obstacles. One hit and it's game over!",
    link: "/coin-collector",
    buttonText: "Play Now",
  },
  {
    title: "Sprint'n Survive!",
    imageUrl: "/images/sprintandsurvive.png",
    description: "A retro runner with a real finish line — jump the neon pillars, score points for every obstacle you dodge and survive the full 1000 meters to victory.",
    link: "/sprint-and-survive",
    buttonText: "Play Now",
  },
]

// Unified card for both games and apps — same size, same style.
function ProductCard({ product }: { product: Product }) {
  const isGithub = !!product.openLink && product.openLink.includes('github.com')

  return (
    <div className={cn(
      "flex flex-col h-full",
      "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
      "rounded-xl overflow-hidden",
      "border border-indigo-500/30",
      "shadow-lg shadow-indigo-500/20",
      "transition-all duration-300 hover:scale-105",
      "hover:shadow-xl hover:shadow-indigo-500/30"
    )}>
      {/* IconPhoto / placeholder — always the same aspect ratio so every card is identical in size */}
      <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <IconAppWindow aria-hidden="true" className="h-16 w-16 text-indigo-400/40" />
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className={cn(
          "text-2xl font-bold mb-3",
          "bg-gradient-to-r from-indigo-400 to-purple-400",
          "bg-clip-text text-transparent",
          glowAnimation
        )}>
          {product.title}
        </h3>

        <p className={cn(
          "text-indigo-200 leading-relaxed mb-4"
        )}>
          {product.description}
        </p>

        {/* Buttons — pinned to the bottom so every card in a row lines up */}
        <div className="mt-auto">
          {product.openLink ? (
            <div className={cn("flex", product.websiteLink ? "gap-2" : "gap-3")}>
              {product.websiteLink && (
                <a
                  href={product.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2",
                    "py-2 px-4 rounded-lg",
                    "bg-gradient-to-r from-indigo-600 to-purple-600",
                    "text-white font-medium",
                    "hover:from-indigo-500 hover:to-purple-500",
                    "transition-all duration-300",
                    "shadow-lg shadow-indigo-500/20",
                    "hover:shadow-xl hover:shadow-indigo-500/30"
                  )}
                >
                  <IconWorld aria-hidden="true" className="h-4 w-4" />
                  Website
                </a>
              )}
              <a
                href={product.openLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex-1 flex items-center justify-center gap-2",
                  "py-2 px-4 rounded-lg",
                  "transition-all duration-300",
                  product.websiteLink ? (
                    "border border-indigo-500/50 bg-indigo-900/30 text-indigo-200 font-medium hover:bg-indigo-800/50"
                  ) : (
                    "bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30"
                  )
                )}
              >
                {isGithub ? <IconBrandGithub aria-hidden="true" className="h-4 w-4" /> : <IconExternalLink aria-hidden="true" className="h-4 w-4" />}
                {product.websiteLink ? "GitHub" : "Open"}
              </a>
              <Link
                to={product.link}
                className={cn(
                  "flex-1 block text-center",
                  "py-2 px-4 rounded-lg",
                  "border border-indigo-500/50 bg-indigo-900/30",
                  "text-indigo-200 font-medium",
                  "hover:bg-indigo-800/50",
                  "transition-all duration-300"
                )}
              >
                More
              </Link>
            </div>
          ) : (
            <Link
              to={product.link}
              className={cn(
                "w-full block text-center",
                "py-2 px-4 rounded-lg",
                "bg-gradient-to-r from-indigo-600 to-purple-600",
                "text-white font-medium",
                "hover:from-indigo-500 hover:to-purple-500",
                "transition-all duration-300",
                "shadow-lg shadow-indigo-500/20",
                "hover:shadow-xl hover:shadow-indigo-500/30"
              )}
            >
              {product.buttonText || "Learn More"}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export function Products() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className={cn(
          "text-4xl sm:text-5xl font-bold text-center mb-12",
          "bg-clip-text text-transparent",
          "bg-gradient-to-r from-indigo-400 to-purple-400",
          glowAnimation
        )}>
          Our Products
        </h1>

        {/* Apps Section — shown first */}
        <div className="mb-16">
          <h2 className={cn(
            "text-3xl font-bold text-center mb-8",
            "bg-clip-text text-transparent",
            "bg-gradient-to-r from-indigo-400 to-purple-400"
          )}>
            Apps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {apps.map((app, index) => (
              <ProductCard key={index} product={app} />
            ))}
          </div>
        </div>

        {/* Games Section — shown second */}
        <div>
          <h2 className={cn(
            "text-3xl font-bold text-center mb-8",
            "bg-clip-text text-transparent",
            "bg-gradient-to-r from-indigo-400 to-purple-400"
          )}>
            Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {games.map((game, index) => (
              <ProductCard key={index} product={game} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
