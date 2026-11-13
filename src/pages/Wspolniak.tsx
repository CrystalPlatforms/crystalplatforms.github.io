import { cn } from '../utils/helpers'
import { glowAnimation } from '../utils/game-effects'
import { IconArrowLeft, IconCalendar, IconCamera, IconHeart, IconKey, IconLayoutDashboard, IconMessageCircle, IconMessages, IconPhoto, IconRobot, IconSearch, IconShield, IconUsers } from '@tabler/icons-react'
import { Link } from 'react-router'

export function Wspolniak() {
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
                <IconUsers aria-hidden="true" className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className={cn(
              "text-4xl sm:text-5xl font-bold mb-4",
              "bg-clip-text text-transparent",
              "bg-gradient-to-r from-indigo-400 to-purple-400",
              glowAnimation
            )}>
              Wspólniak
            </h1>
            <p className={cn(
              "text-indigo-300 text-lg",
              "max-w-2xl mx-auto"
            )}>
              A private digital family home — share memories, chat in real time, and plan family events in one closed, invite-only space.
            </p>
          </div>

          {/* What is Wspólniak */}
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
              Your Family's Private Space
            </h2>
            <p className="text-indigo-300 mb-4 max-w-2xl mx-auto">
              Wspólniak replaces sending photos individually across messengers by providing one shared digital family space. No public access, no external users, no algorithms.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="px-4 py-2 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-200 text-sm">One family</span>
              <span className="px-4 py-2 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-200 text-sm">One private space</span>
              <span className="px-4 py-2 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-200 text-sm">No public access</span>
              <span className="px-4 py-2 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-200 text-sm">No external users</span>
              <span className="px-4 py-2 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-200 text-sm">Passwordless</span>
              <span className="px-4 py-2 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-200 text-sm">Real-time chat</span>
            </div>
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
                  <IconLayoutDashboard aria-hidden="true" className="h-6 w-6 text-indigo-400" />
                  <h3 className="text-xl font-bold text-indigo-200">Feed</h3>
                </div>
                <p className="text-indigo-300 text-sm">Chronological feed with text and photo posts — react, comment, pin the important ones. iPhone HEIC photos convert automatically. The main screen of the app.</p>
              </div>
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20"
              )}>
                <div className="flex items-center space-x-3 mb-3">
                  <IconPhoto aria-hidden="true" className="h-6 w-6 text-indigo-400" />
                  <h3 className="text-xl font-bold text-indigo-200">Albums</h3>
                </div>
                <p className="text-indigo-300 text-sm">Long-term memory storage. Albums never expire. Everyone can create them, add images with titles, and download whole albums as a ZIP.</p>
              </div>
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20"
              )}>
                <div className="flex items-center space-x-3 mb-3">
                  <IconCalendar aria-hidden="true" className="h-6 w-6 text-indigo-400" />
                  <h3 className="text-xl font-bold text-indigo-200">Family Calendar</h3>
                </div>
                <p className="text-indigo-300 text-sm">Plan family events — meetings, birthdays, trips. A daily reminder worker posts upcoming events straight to the feed (Polish holidays optional).</p>
              </div>
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20"
              )}>
                <div className="flex items-center space-x-3 mb-3">
                  <IconMessages aria-hidden="true" className="h-6 w-6 text-indigo-400" />
                  <h3 className="text-xl font-bold text-indigo-200">Real-Time Chat</h3>
                </div>
                <p className="text-indigo-300 text-sm">One live family chat built on Cloudflare Durable Objects — messages arrive instantly, with attachments and emoji reactions on every bubble.</p>
              </div>
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20"
              )}>
                <div className="flex items-center space-x-3 mb-3">
                  <IconMessageCircle aria-hidden="true" className="h-6 w-6 text-indigo-400" />
                  <h3 className="text-xl font-bold text-indigo-200">Comments & Reactions</h3>
                </div>
                <p className="text-indigo-300 text-sm">React to posts and chat messages with emoji. Leave comments under any post — everything visible to the whole family.</p>
              </div>
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20"
              )}>
                <div className="flex items-center space-x-3 mb-3">
                  <IconSearch aria-hidden="true" className="h-6 w-6 text-indigo-400" />
                  <h3 className="text-xl font-bold text-indigo-200">Search</h3>
                </div>
                <p className="text-indigo-300 text-sm">Search across posts, albums, and events to quickly find any memory or information.</p>
              </div>
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20"
              )}>
                <div className="flex items-center space-x-3 mb-3">
                  <IconRobot aria-hidden="true" className="h-6 w-6 text-indigo-400" />
                  <h3 className="text-xl font-bold text-indigo-200">AL — AI Assistant</h3>
                </div>
                <p className="text-indigo-300 text-sm">Meet AL, the built-in assistant: pick a model, get streaming answers, search the family feed and export conversations — without leaving the app.</p>
              </div>
              <div className={cn(
                "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
                "rounded-xl p-6",
                "border border-indigo-500/30",
                "shadow-lg shadow-indigo-500/20"
              )}>
                <div className="flex items-center space-x-3 mb-3">
                  <IconKey aria-hidden="true" className="h-6 w-6 text-indigo-400" />
                  <h3 className="text-xl font-bold text-indigo-200">Passwordless &amp; PWA</h3>
                </div>
                <p className="text-indigo-300 text-sm">No passwords — family joins with magic-link invites. Install as a PWA with push notifications, or use the native Android shell.</p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className={cn(
            "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
            "rounded-xl p-6 mb-12",
            "border border-indigo-500/30",
            "shadow-lg shadow-indigo-500/20"
          )}>
            <h2 className={cn(
              "text-2xl font-bold mb-6",
              "bg-gradient-to-r from-indigo-400 to-purple-400",
              "bg-clip-text text-transparent"
            )}>
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                    <IconKey aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-indigo-200 font-medium mb-1">Magic-Link Invites</h3>
                <p className="text-indigo-300 text-sm">No passwords, no public sign-up. The admin invites family members with magic links and manages the space.</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                    <IconCamera aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-indigo-200 font-medium mb-1">Share Memories</h3>
                <p className="text-indigo-300 text-sm">Upload photos, write updates, and create albums. Everything stays in one place.</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                    <IconHeart aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-indigo-200 font-medium mb-1">React & Comment</h3>
                <p className="text-indigo-300 text-sm">Leave reactions and comments. Stay connected with your family in a calm, private environment.</p>
              </div>
            </div>
          </div>

          {/* Privacy & Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className={cn(
              "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
              "rounded-xl p-6",
              "border border-indigo-500/30",
              "shadow-lg shadow-indigo-500/20"
            )}>
              <div className="flex items-center space-x-3 mb-4">
                <IconShield aria-hidden="true" className="h-6 w-6 text-indigo-400" />
                <h2 className={cn(
                  "text-2xl font-bold",
                  "bg-gradient-to-r from-indigo-400 to-purple-400",
                  "bg-clip-text text-transparent"
                )}>
                  Privacy First
                </h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <IconShield aria-hidden="true" className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span className="text-indigo-200">Fully private environment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <IconShield aria-hidden="true" className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span className="text-indigo-200">No advertising or external tracking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <IconShield aria-hidden="true" className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span className="text-indigo-200">Admin-managed accounts only</span>
                </li>
                <li className="flex items-start space-x-3">
                  <IconShield aria-hidden="true" className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span className="text-indigo-200">Self-hosted — your data stays on your own Cloudflare account</span>
                </li>
                <li className="flex items-start space-x-3">
                  <IconShield aria-hidden="true" className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span className="text-indigo-200">Albums are permanent</span>
                </li>
              </ul>
            </div>
            <div className={cn(
              "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
              "rounded-xl p-6",
              "border border-indigo-500/30",
              "shadow-lg shadow-indigo-500/20"
            )}>
              <div className="flex items-center space-x-3 mb-4">
                <IconLayoutDashboard aria-hidden="true" className="h-6 w-6 text-indigo-400" />
                <h2 className={cn(
                  "text-2xl font-bold",
                  "bg-gradient-to-r from-indigo-400 to-purple-400",
                  "bg-clip-text text-transparent"
                )}>
                  Simple by Design
                </h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <IconLayoutDashboard aria-hidden="true" className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span className="text-indigo-200">Minimal, clean interface</span>
                </li>
                <li className="flex items-start space-x-3">
                  <IconLayoutDashboard aria-hidden="true" className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span className="text-indigo-200">No algorithmic feed</span>
                </li>
                <li className="flex items-start space-x-3">
                  <IconLayoutDashboard aria-hidden="true" className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span className="text-indigo-200">Predictable navigation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <IconLayoutDashboard aria-hidden="true" className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span className="text-indigo-200">Mobile-first, works on slow internet</span>
                </li>
                <li className="flex items-start space-x-3">
                  <IconLayoutDashboard aria-hidden="true" className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span className="text-indigo-200">Designed for all ages</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Back to Products */}
          <div className="text-center">
            <Link
              to="/products"
              className={cn(
                "inline-flex items-center gap-2",
                "px-6 py-3 rounded-lg",
                "bg-gradient-to-r from-indigo-600 to-purple-600",
                "text-white font-medium",
                "hover:from-indigo-500 hover:to-purple-500",
                "transition-all duration-300",
                "shadow-lg shadow-indigo-500/20",
                "hover:shadow-xl hover:shadow-indigo-500/30"
              )}
            >
              <IconArrowLeft aria-hidden="true" className="h-5 w-5" /> Back to Products
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
