import { cn } from '../utils/helpers'
import { glowAnimation } from '../utils/game-effects'
import {
  IconBooks,
  IconBrandApple,
  IconBrandGithub,
  IconBrandWindows,
  IconCode,
  IconCpu,
  IconDatabase,
  IconDownload,
  IconExternalLink,
  IconMessageChatbot,
  IconRobot,
  IconShield,
  IconShieldLock,
  IconSparkles,
} from '@tabler/icons-react'

export function Klepai() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className={cn(
                "p-4 rounded-xl",
                "bg-gradient-to-br from-indigo-600 to-purple-600",
                "shadow-lg shadow-indigo-500/30"
              )}>
                <IconMessageChatbot aria-hidden="true" className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className={cn(
              "text-4xl sm:text-5xl font-bold mb-4",
              "bg-clip-text text-transparent",
              "bg-gradient-to-r from-indigo-400 to-purple-400",
              glowAnimation
            )}>
              klepai
            </h1>
            <p className={cn(
              "text-indigo-300 text-lg",
              "max-w-2xl mx-auto"
            )}>
              A private, self-hosted LLM manager: a desktop chat app for Linux, macOS and Windows that connects to your own model servers over the LAN. Ollama first-class, coding agents in the same window, everything local.
            </p>
          </div>

          {/* Download — Alpha release z GitHub Releases + strona projektu */}
          <div className={cn(
            "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
            "rounded-xl p-8 mb-12",
            "border border-indigo-500/30",
            "shadow-lg shadow-indigo-500/20",
            "text-center"
          )}>
            <h2 className={cn(
              "text-3xl font-bold mb-4",
              "bg-gradient-to-r from-indigo-400 to-purple-400",
              "bg-clip-text text-transparent"
            )}>
              Download klepai
            </h2>
            <p className="text-indigo-300 mb-6 max-w-2xl mx-auto">
              Alpha v0.0.2 is out — free and open-source, no accounts, no telemetry. Grab the build for your system from GitHub Releases.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6">
              <a
                href="https://github.com/CrystalPlatforms/klepai/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "px-6 py-3 rounded-lg",
                  "bg-gradient-to-r from-indigo-600 to-purple-600",
                  "text-white font-medium text-lg",
                  "hover:from-indigo-500 hover:to-purple-500",
                  "transition-all duration-300",
                  "shadow-lg shadow-indigo-500/20",
                  "hover:shadow-xl hover:shadow-indigo-500/30"
                )}
              >
                <IconDownload aria-hidden="true" className="h-5 w-5" />
                Linux
              </a>
              <a
                href="https://github.com/CrystalPlatforms/klepai/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "px-6 py-3 rounded-lg",
                  "border border-indigo-500/50 bg-indigo-900/30",
                  "text-indigo-200 font-medium text-lg",
                  "hover:bg-indigo-800/50",
                  "transition-all duration-300"
                )}
              >
                <IconBrandApple aria-hidden="true" className="h-5 w-5" />
                macOS
              </a>
              <a
                href="https://github.com/CrystalPlatforms/klepai/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "px-6 py-3 rounded-lg",
                  "border border-indigo-500/50 bg-indigo-900/30",
                  "text-indigo-200 font-medium text-lg",
                  "hover:bg-indigo-800/50",
                  "transition-all duration-300"
                )}
              >
                <IconBrandWindows aria-hidden="true" className="h-5 w-5" />
                Windows
              </a>
            </div>
            <p className="text-indigo-400/70 text-sm">
              Alpha software — things may change quickly. Project page:{" "}
              <a
                href="https://klepai.pages.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-300 underline hover:text-indigo-200"
              >
                klepai.pages.dev
              </a>
            </p>
          </div>

          {/* GitHub CTA */}
          <div className={cn(
            "bg-gradient-to-b from-gray-900 to-gray-950",
            "rounded-xl p-8 mb-12",
            "border border-indigo-500/20",
            "text-center"
          )}>
            <h2 className={cn(
              "text-2xl font-bold mb-4",
              "bg-gradient-to-r from-indigo-400 to-purple-400",
              "bg-clip-text text-transparent"
            )}>
              Follow the development
            </h2>
            <p className="text-indigo-300 mb-6">
              Open-source — built with Tauri v2 (Rust) + React + TypeScript. MIT licensed.
            </p>
            <a
              href="https://github.com/CrystalPlatforms/klepai"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2",
                "px-8 py-3 rounded-lg",
                "bg-gradient-to-r from-indigo-600 to-purple-600",
                "text-white font-medium text-lg",
                "hover:from-indigo-500 hover:to-purple-500",
                "transition-all duration-300",
                "shadow-lg shadow-indigo-500/20",
                "hover:shadow-xl hover:shadow-indigo-500/30"
              )}
            >
              View on GitHub <IconExternalLink aria-hidden="true" className="h-5 w-5" />
            </a>
          </div>

          {/* Core Features */}
          <div className="mb-12">
            <h2 className={cn(
              "text-3xl font-bold text-center mb-8",
              "bg-clip-text text-transparent",
              "bg-gradient-to-r from-indigo-400 to-purple-400"
            )}>
              Core Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20"
              )}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                    <IconRobot aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-200">Ollama First-Class</h3>
                </div>
                <p className="text-indigo-300 text-sm">Chat with the models you host — Ollama as a first-class citizen, plus any OpenAI-compatible endpoint on your network. Your servers, your models, your rules.</p>
              </div>
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20"
              )}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                    <IconMessageChatbot aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-200">Rich Chat</h3>
                </div>
                <p className="text-indigo-300 text-sm">Streaming answers with full markdown, syntax-highlighted code blocks and thinking blocks — a native-feeling chat experience for your own models.</p>
              </div>
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20"
              )}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                    <IconSparkles aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-200">Agent Mode</h3>
                </div>
                <p className="text-indigo-300 text-sm">Let your server models code in a project folder through built-in tools — with Claude Code and Codex CLI available as ready-made extra brains in the same window.</p>
              </div>
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20"
              )}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                    <IconBooks aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-200">Skill Library</h3>
                </div>
                <p className="text-indigo-300 text-sm">Import .skill packages or plain Markdown files and invoke them from the / palette in any mode — reusable prompts that live locally with your chats.</p>
              </div>
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20"
              )}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                    <IconShieldLock aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-200">Permission Gates</h3>
                </div>
                <p className="text-indigo-300 text-sm">Agents ask before they act — approve an action once, for the conversation, or forever. No surprise file edits.</p>
              </div>
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20"
              )}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                    <IconShield aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-200">Everything Local</h3>
                </div>
                <p className="text-indigo-300 text-sm">Conversations live in a local SQLite database. No accounts, no telemetry, no cloud — your chats never leave your machine.</p>
              </div>
            </div>
          </div>

          {/* Built With */}
          <div className={cn(
            "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
            "rounded-xl p-6",
            "border border-indigo-500/30",
            "shadow-lg shadow-indigo-500/20"
          )}>
            <h2 className={cn(
              "text-2xl font-bold mb-6",
              "bg-gradient-to-r from-indigo-400 to-purple-400",
              "bg-clip-text text-transparent"
            )}>
              Built With
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <IconCpu aria-hidden="true" className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">Rust + Tauri v2</p>
                  <p className="text-indigo-300 text-sm">Native desktop app for Linux, macOS and Windows, with signature-verified update bundles.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <IconCode aria-hidden="true" className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">React + TypeScript</p>
                  <p className="text-indigo-300 text-sm">The chat interface, agent mode UI and model server management.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <IconDatabase aria-hidden="true" className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">Local SQLite</p>
                  <p className="text-indigo-300 text-sm">All chat history stored locally — portable, private, easy to back up.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <IconBrandGithub aria-hidden="true" className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-indigo-200 font-medium">Open Source (MIT)</p>
                  <p className="text-indigo-300 text-sm">Free to use, self-host and contribute to on GitHub.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
