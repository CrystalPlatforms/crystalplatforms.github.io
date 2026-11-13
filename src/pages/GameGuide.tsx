import { cn } from '../utils/helpers'
import { glowAnimation } from '../utils/game-effects'
import { IconArrowLeft, IconBolt, IconBook, IconDeviceGamepad2, IconKeyboard, IconSpace, IconTrophy } from '@tabler/icons-react'

export function GameGuide() {
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
                <IconBook aria-hidden="true" className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className={cn(
              "text-4xl sm:text-5xl font-bold mb-4",
              "bg-clip-text text-transparent",
              "bg-gradient-to-r from-indigo-400 to-purple-400",
              glowAnimation
            )}>
              Game Guide
            </h1>
            <p className={cn(
              "text-indigo-300 text-lg",
              "max-w-2xl mx-auto"
            )}>
              Learn how to play our games and master the mechanics
            </p>
          </div>

          {/* School's Out! Section */}
          <div className={cn(
            "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
            "rounded-xl p-8 mb-12",
            "border border-indigo-500/30",
            "shadow-lg shadow-indigo-500/20"
          )}>
            <div className="flex items-center space-x-4 mb-6">
              <IconDeviceGamepad2 aria-hidden="true" className="h-10 w-10 text-indigo-400" />
              <h2 className={cn(
                "text-3xl font-bold",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                School's Out!
              </h2>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className={cn(
                  "text-2xl font-bold mb-4 text-indigo-200"
                )}>
                  How to Play
                </h3>
                <p className="text-indigo-300 mb-6 leading-relaxed">
                  School's Out! is an exciting arcade-style game where you must survive the school day by jumping over obstacles 
                  and managing your energy. Master Morse code combos to bank bonus energy and achieve the highest score possible!
                </p>
              </section>

              <section>
                <h3 className={cn(
                  "text-xl font-bold mb-4 text-indigo-200",
                  "flex items-center space-x-2"
                )}>
                  <IconKeyboard aria-hidden="true" className="h-5 w-5" />
                  <span>Basic Controls</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={cn(
                    "p-4 rounded-lg",
                    "bg-gray-800/50",
                    "border border-indigo-500/20"
                  )}>
                    <div className="flex items-center space-x-3 mb-2">
                      <IconSpace aria-hidden="true" className="h-5 w-5 text-indigo-400" />
                      <span className="text-indigo-200 font-medium">Jump</span>
                    </div>
                    <p className="text-indigo-300 text-sm">
                      Press <kbd className="px-2 py-1 bg-gray-700 rounded text-indigo-200">Spacebar</kbd> or tap the left side
                      of the screen (on mobile) to jump over obstacles.
                    </p>
                  </div>
                  <div className={cn(
                    "p-4 rounded-lg",
                    "bg-gray-800/50",
                    "border border-indigo-500/20"
                  )}>
                    <div className="flex items-center space-x-3 mb-2">
                      <IconBolt aria-hidden="true" className="h-5 w-5 text-indigo-400" />
                      <span className="text-indigo-200 font-medium">Energy Management</span>
                    </div>
                    <p className="text-indigo-300 text-sm">
                      Watch your energy bar carefully. Jumping consumes energy, so manage it wisely to survive longer.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className={cn(
                  "text-xl font-bold mb-4 text-indigo-200",
                  "flex items-center space-x-2"
                )}>
                  <IconBolt aria-hidden="true" className="h-5 w-5" />
                  <span>Morse Code Combos</span>
                </h3>
                <div className={cn(
                  "p-4 rounded-lg",
                  "bg-indigo-800/30",
                  "border border-indigo-500/30"
                )}>
                  <p className="text-indigo-200 mb-3">
                    One of the unique features of School's Out! is the Morse code combo system:
                  </p>
                  <ul className="list-disc list-inside text-indigo-300 space-y-2 ml-2">
                    <li>Mid-air, the game challenges you with a random letter and its Morse code</li>
                    <li>Tap out the pattern with <kbd className="px-2 py-1 bg-gray-700 rounded text-indigo-200">Enter</kbd> — a quick tap is a dot (.), a longer hold is a dash (-)</li>
                    <li>You have 10 seconds to enter the letter — a mistake resets the sequence you&apos;ve entered so far</li>
                    <li>Success grants 5 seconds of zero energy drain: jump freely while it lasts!</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className={cn(
                  "text-xl font-bold mb-4 text-indigo-200",
                  "flex items-center space-x-2"
                )}>
                  <IconTrophy aria-hidden="true" className="h-5 w-5" />
                  <span>Tips for High Scores</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <p className="text-indigo-300">
                      <strong className="text-indigo-200">Timing is everything:</strong> Learn the patterns of obstacles and jump 
                      at the right moment to conserve energy.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <p className="text-indigo-300">
                      <strong className="text-indigo-200">Practice Morse code:</strong> Clean combos mean longer stretches of
                      free energy — and longer runs mean higher scores.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <p className="text-indigo-300">
                      <strong className="text-indigo-200">Survive as long as possible:</strong> The longer you stay alive, 
                      the more points you accumulate. Try to set new personal records!
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Coin Collector Section */}
          <div className={cn(
            "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
            "rounded-xl p-8",
            "border border-indigo-500/30",
            "shadow-lg shadow-indigo-500/20"
          )}>
            <div className="flex items-center space-x-4 mb-6">
              <IconDeviceGamepad2 aria-hidden="true" className="h-10 w-10 text-indigo-400" />
              <h2 className={cn(
                "text-3xl font-bold",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                Coin Collector
              </h2>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className={cn(
                  "text-2xl font-bold mb-4 text-indigo-200"
                )}>
                  How to Play
                </h3>
                <p className="text-indigo-300 mb-6 leading-relaxed">
                  Coin Collector is a fast-paced lane-dodging survival game. Your character runs automatically across three lanes
                  while coins and obstacles rain down from above. Survive as long as you can — the game speeds up every time your
                  score climbs by another 100 points!
                </p>
              </section>

              <section>
                <h3 className={cn(
                  "text-xl font-bold mb-4 text-indigo-200",
                  "flex items-center space-x-2"
                )}>
                  <IconKeyboard aria-hidden="true" className="h-5 w-5" />
                  <span>Controls</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={cn(
                    "p-4 rounded-lg",
                    "bg-gray-800/50",
                    "border border-indigo-500/20"
                  )}>
                    <div className="flex items-center space-x-3 mb-2">
                      <IconArrowLeft aria-hidden="true" className="h-5 w-5 text-indigo-400" />
                      <span className="text-indigo-200 font-medium">Movement</span>
                    </div>
                    <p className="text-indigo-300 text-sm">
                      Use the <kbd className="px-2 py-1 bg-gray-700 rounded text-indigo-200">←</kbd> and <kbd className="px-2 py-1 bg-gray-700 rounded text-indigo-200">→</kbd> arrow
                      keys to switch lanes — your character runs on their own. Coin Collector is keyboard-only, so it&apos;s best on desktop.
                    </p>
                  </div>
                  <div className={cn(
                    "p-4 rounded-lg",
                    "bg-gray-800/50",
                    "border border-indigo-500/20"
                  )}>
                    <div className="flex items-center space-x-3 mb-2">
                      <IconTrophy aria-hidden="true" className="h-5 w-5 text-indigo-400" />
                      <span className="text-indigo-200 font-medium">Objective</span>
                    </div>
                    <p className="text-indigo-300 text-sm">
                      Earn 10 points for every second you survive, catch falling coins as a bonus tally, and dodge everything else.
                      One collision ends the run!
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className={cn(
                  "text-xl font-bold mb-4 text-indigo-200",
                  "flex items-center space-x-2"
                )}>
                  <IconBolt aria-hidden="true" className="h-5 w-5" />
                  <span>Gameplay Mechanics</span>
                </h3>
                <div className="space-y-4">
                  <div className={cn(
                    "p-4 rounded-lg",
                    "bg-indigo-800/30",
                    "border border-indigo-500/30"
                  )}>
                    <h4 className="text-indigo-200 font-semibold mb-2">Three Lanes</h4>
                    <p className="text-indigo-300 text-sm">
                      Obstacles spawn on a steady timer and fall faster as your level rises — a new level every 100 points.
                      Switch lanes early and keep your options open!
                    </p>
                  </div>
                  <div className={cn(
                    "p-4 rounded-lg",
                    "bg-red-900/20",
                    "border border-red-500/30"
                  )}>
                    <h4 className="text-indigo-200 font-semibold mb-2">Coins &amp; Score</h4>
                    <p className="text-indigo-300 text-sm">
                      Coins add to your coin counter — a badge of honor shown on the game-over screen. Your real score ticks up
                      by 10 every second you stay alive, so survival is always the priority.
                    </p>
                  </div>
                  <div className={cn(
                    "p-4 rounded-lg",
                    "bg-green-900/20",
                    "border border-green-500/30"
                  )}>
                    <h4 className="text-indigo-200 font-semibold mb-2">One Hit, Game Over</h4>
                    <p className="text-indigo-300 text-sm">
                      There are no lives or checkpoints — a single collision ends your run. The game-over screen shows your score,
                      coins and level, and you&apos;re one click away from another attempt.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className={cn(
                  "text-xl font-bold mb-4 text-indigo-200",
                  "flex items-center space-x-2"
                )}>
                  <IconTrophy aria-hidden="true" className="h-5 w-5" />
                  <span>Pro Tips</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <p className="text-indigo-300">
                      <strong className="text-indigo-200">Stay central:</strong> The middle lane gives you the most room to react —
                      switch lanes early instead of at the last moment.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <p className="text-indigo-300">
                      <strong className="text-indigo-200">Read the rhythm:</strong> Obstacles arrive on a steady timer — learn the
                      cadence instead of staring at each falling object.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <p className="text-indigo-300">
                      <strong className="text-indigo-200">Chase the next 100:</strong> Every 100 points raises the level and the speed.
                      Set short goals to stay focused through long runs.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Sprint'n Survive! Section */}
          <div className={cn(
            "bg-gradient-to-b from-indigo-900/50 to-purple-900/50",
            "rounded-xl p-8 mt-12",
            "border border-indigo-500/30",
            "shadow-lg shadow-indigo-500/20"
          )}>
            <div className="flex items-center space-x-4 mb-6">
              <IconDeviceGamepad2 aria-hidden="true" className="h-10 w-10 text-indigo-400" />
              <h2 className={cn(
                "text-3xl font-bold",
                "bg-gradient-to-r from-indigo-400 to-purple-400",
                "bg-clip-text text-transparent"
              )}>
                Sprint&apos;n Survive!
              </h2>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className={cn(
                  "text-2xl font-bold mb-4 text-indigo-200"
                )}>
                  How to Play
                </h3>
                <p className="text-indigo-300 mb-6 leading-relaxed">
                  Sprint&apos;n Survive! is a retro runner with a real finish line: 1000 meters of neon-lit track stand between you
                  and victory. Your runner moves forward automatically — your job is altitude. Jump the red pillars, fine-tune your
                  height in the air, and don&apos;t touch anything!
                </p>
              </section>

              <section>
                <h3 className={cn(
                  "text-xl font-bold mb-4 text-indigo-200",
                  "flex items-center space-x-2"
                )}>
                  <IconKeyboard aria-hidden="true" className="h-5 w-5" />
                  <span>Controls</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={cn(
                    "p-4 rounded-lg",
                    "bg-gray-800/50",
                    "border border-indigo-500/20"
                  )}>
                    <div className="flex items-center space-x-3 mb-2">
                      <IconSpace aria-hidden="true" className="h-5 w-5 text-indigo-400" />
                      <span className="text-indigo-200 font-medium">Jump</span>
                    </div>
                    <p className="text-indigo-300 text-sm">
                      Press <kbd className="px-2 py-1 bg-gray-700 rounded text-indigo-200">Space</kbd> to jump — but only from the
                      ground. Time it against the pillars!
                    </p>
                  </div>
                  <div className={cn(
                    "p-4 rounded-lg",
                    "bg-gray-800/50",
                    "border border-indigo-500/20"
                  )}>
                    <div className="flex items-center space-x-3 mb-2">
                      <IconBolt aria-hidden="true" className="h-5 w-5 text-indigo-400" />
                      <span className="text-indigo-200 font-medium">Mid-Air Control</span>
                    </div>
                    <p className="text-indigo-300 text-sm">
                      Use <kbd className="px-2 py-1 bg-gray-700 rounded text-indigo-200">↑</kbd> / <kbd className="px-2 py-1 bg-gray-700 rounded text-indigo-200">↓</kbd> to
                      adjust your height while airborne — perfect for squeezing over tall pillars.
                    </p>
                  </div>
                </div>
                <p className="text-indigo-400/70 text-sm mt-4">
                  Sprint&apos;n Survive! is keyboard-only — best played on desktop.
                </p>
              </section>

              <section>
                <h3 className={cn(
                  "text-xl font-bold mb-4 text-indigo-200",
                  "flex items-center space-x-2"
                )}>
                  <IconBolt aria-hidden="true" className="h-5 w-5" />
                  <span>Gameplay Mechanics</span>
                </h3>
                <div className="space-y-4">
                  <div className={cn(
                    "p-4 rounded-lg",
                    "bg-indigo-800/30",
                    "border border-indigo-500/30"
                  )}>
                    <h4 className="text-indigo-200 font-semibold mb-2">1000 Meters to Glory</h4>
                    <p className="text-indigo-300 text-sm">
                      The distance counter counts down from 1000 as you sprint. Survive to zero and the victory screen is yours —
                      a perfect run takes about two and a half minutes.
                    </p>
                  </div>
                  <div className={cn(
                    "p-4 rounded-lg",
                    "bg-red-900/20",
                    "border border-red-500/30"
                  )}>
                    <h4 className="text-indigo-200 font-semibold mb-2">Points for Clean Movement</h4>
                    <p className="text-indigo-300 text-sm">
                      Every pillar you clear adds +10 points, awarded automatically as it disappears behind you. There&apos;s nothing
                      to collect — just clean, obstacle-free running.
                    </p>
                  </div>
                  <div className={cn(
                    "p-4 rounded-lg",
                    "bg-green-900/20",
                    "border border-green-500/30"
                  )}>
                    <h4 className="text-indigo-200 font-semibold mb-2">One Hit and It&apos;s Over</h4>
                    <p className="text-indigo-300 text-sm">
                      Touch a pillar once and the run ends immediately — your final score shows on the screen. Retro extras included:
                      UI in English, Polish or Chinese, and four chiptune-style tracks.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

