"use client"
import { Button } from "@/components/ui/button"
import { FlipWords } from "@/components/ui/flip-words"
import Link from "next/link"

const HomePage = () => {
  const words = ["smarter", "better", "efficient", "insightful"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center">
      <div className="text-center space-y-8 p-8 max-w-4xl">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-white leading-tight">🎓 Student Attendance</h1>
          <div className="text-4xl font-normal text-neutral-300">
            Track your attendance
            <FlipWords words={words} className="text-blue-400 font-semibold" />
            <br />
            with our comprehensive dashboard
          </div>
        </div>

        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Get powerful insights, track your progress, and improve your academic performance with real-time analytics and
          predictive forecasting.
        </p>

        <div className="pt-8">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="text-xl px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Launch Dashboard 🚀
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          <div className="bg-neutral-800/50 backdrop-blur-sm p-6 rounded-2xl border border-neutral-700">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-semibold text-white mb-2">Real-time Analytics</h3>
            <p className="text-neutral-400 text-sm">Track attendance patterns and get instant insights</p>
          </div>
          <div className="bg-neutral-800/50 backdrop-blur-sm p-6 rounded-2xl border border-neutral-700">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold text-white mb-2">Predictive Insights</h3>
            <p className="text-neutral-400 text-sm">Forecast your semester performance</p>
          </div>
          <div className="bg-neutral-800/50 backdrop-blur-sm p-6 rounded-2xl border border-neutral-700">
            <div className="text-3xl mb-3">🏆</div>
            <h3 className="text-lg font-semibold text-white mb-2">Gamification</h3>
            <p className="text-neutral-400 text-sm">Earn badges and maintain streaks</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
