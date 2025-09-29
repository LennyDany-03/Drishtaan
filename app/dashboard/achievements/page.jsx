"use client"
import { useState } from "react"
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  LayoutDashboard,
  Settings,
  BarChart3,
  Calendar,
  TrendingUp,
  Target,
  Award,
  PieChartIcon,
  Star,
  Trophy,
  Medal,
  Crown,
} from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const getAchievementsData = () => {
  return {
    earnedBadges: [
      {
        id: 1,
        name: "Perfect Week",
        icon: "⭐",
        description: "Attended all classes for a complete week",
        earnedDate: "2 weeks ago",
        rarity: "common",
        category: "Consistency",
      },
      {
        id: 2,
        name: "Early Bird",
        icon: "🌅",
        description: "Present in all morning classes this month",
        earnedDate: "1 week ago",
        rarity: "uncommon",
        category: "Punctuality",
      },
      {
        id: 3,
        name: "Consistent Performer",
        icon: "📈",
        description: "Maintained above 75% for 4 consecutive weeks",
        earnedDate: "3 days ago",
        rarity: "rare",
        category: "Performance",
      },
      {
        id: 4,
        name: "Subject Saver",
        icon: "🎯",
        description: "Brought Chemistry from 60% to 75%",
        earnedDate: "1 month ago",
        rarity: "epic",
        category: "Recovery",
      },
      {
        id: 5,
        name: "Streak Master",
        icon: "🔥",
        description: "Achieved 15-day attendance streak",
        earnedDate: "2 months ago",
        rarity: "legendary",
        category: "Streaks",
      },
    ],
    milestones: [
      {
        id: 1,
        title: "100 Classes Attended",
        description: "Reached the century mark in total classes",
        progress: 100,
        target: 100,
        completed: true,
        reward: "Certificate of Dedication",
      },
      {
        id: 2,
        title: "Physics Excellence",
        description: "Maintain 90%+ attendance in Physics for 2 months",
        progress: 85,
        target: 100,
        completed: false,
        reward: "Subject Master Badge",
      },
      {
        id: 3,
        title: "Semester Champion",
        description: "Achieve 85%+ overall attendance this semester",
        progress: 78,
        target: 85,
        completed: false,
        reward: "Semester Trophy",
      },
    ],
    upcomingBadges: [
      {
        name: "Chemistry Champion",
        requirement: "Attend 5 more Chemistry classes",
        progress: 3,
        target: 5,
        icon: "🧪",
      },
      {
        name: "Monthly Warrior",
        requirement: "Complete the month with 90%+ attendance",
        progress: 22,
        target: 30,
        icon: "⚔️",
      },
      {
        name: "Perfect Punctuality",
        requirement: "Be on time for 10 consecutive classes",
        progress: 7,
        target: 10,
        icon: "⏰",
      },
    ],
    stats: {
      totalBadges: 5,
      totalMilestones: 1,
      currentStreak: 8,
      longestStreak: 15,
      totalClasses: 127,
      perfectDays: 23,
    },
  }
}

const AchievementsPage = () => {
  const data = getAchievementsData()
  const [open, setOpen] = useState(false)

  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Analysis",
      href: "/dashboard/analysis",
      icon: <PieChartIcon className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Analytics",
      href: "#",
      icon: <BarChart3 className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Calendar",
      href: "/dashboard/calendar",
      icon: <Calendar className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Trends",
      href: "/dashboard/trends",
      icon: <TrendingUp className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Goals",
      href: "/dashboard/goals",
      icon: <Target className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Achievements",
      href: "/dashboard/achievements",
      icon: <Award className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
  ]

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case "common":
        return "border-gray-500 bg-gray-900/20"
      case "uncommon":
        return "border-green-500 bg-green-900/20"
      case "rare":
        return "border-blue-500 bg-blue-900/20"
      case "epic":
        return "border-purple-500 bg-purple-900/20"
      case "legendary":
        return "border-yellow-500 bg-yellow-900/20"
      default:
        return "border-neutral-500 bg-neutral-900/20"
    }
  }

  const getRarityIcon = (rarity) => {
    switch (rarity) {
      case "common":
        return <Medal className="h-4 w-4 text-gray-400" />
      case "uncommon":
        return <Award className="h-4 w-4 text-green-400" />
      case "rare":
        return <Star className="h-4 w-4 text-blue-400" />
      case "epic":
        return <Trophy className="h-4 w-4 text-purple-400" />
      case "legendary":
        return <Crown className="h-4 w-4 text-yellow-400" />
      default:
        return <Medal className="h-4 w-4 text-neutral-400" />
    }
  }

  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-full flex-1 flex-col overflow-hidden bg-neutral-900 md:flex-row",
        "h-screen",
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Student Profile",
                href: "#",
                icon: (
                  <Image
                    src="/student-avatar.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={28}
                    height={28}
                    alt="Student Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>

      <div className="flex flex-1">
        <div className="flex h-full w-full flex-1 flex-col gap-6 rounded-tl-2xl border border-neutral-700 bg-neutral-900 p-6 overflow-y-auto">
          {/* Header */}
          <div className="text-center space-y-2 mb-6">
            <h1 className="text-4xl font-bold text-white">🏆 Achievements & Badges</h1>
            <p className="text-neutral-400">Celebrate your attendance milestones and unlock new achievements</p>
          </div>

          {/* Achievement Stats */}
          <div className="max-w-7xl mx-auto w-full">
            <Card className="bg-gradient-to-br from-yellow-900/90 to-yellow-800/90 border-yellow-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">📊 Achievement Overview</CardTitle>
                <CardDescription className="text-yellow-100">Your attendance achievement statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  <div className="bg-yellow-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">{data.stats.totalBadges}</div>
                    <div className="text-yellow-200 text-sm">Badges Earned</div>
                  </div>
                  <div className="bg-yellow-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">{data.stats.totalMilestones}</div>
                    <div className="text-yellow-200 text-sm">Milestones</div>
                  </div>
                  <div className="bg-yellow-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">{data.stats.currentStreak}</div>
                    <div className="text-yellow-200 text-sm">Current Streak</div>
                  </div>
                  <div className="bg-yellow-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">{data.stats.longestStreak}</div>
                    <div className="text-yellow-200 text-sm">Longest Streak</div>
                  </div>
                  <div className="bg-yellow-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">{data.stats.totalClasses}</div>
                    <div className="text-yellow-200 text-sm">Total Classes</div>
                  </div>
                  <div className="bg-yellow-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">{data.stats.perfectDays}</div>
                    <div className="text-yellow-200 text-sm">Perfect Days</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Earned Badges */}
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-2xl font-bold text-white mb-4">🎖️ Earned Badges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.earnedBadges.map((badge) => (
                <Card key={badge.id} className={`${getRarityColor(badge.rarity)} border-2`}>
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{badge.icon}</div>
                    <CardTitle className="text-lg text-white flex items-center justify-center gap-2">
                      {getRarityIcon(badge.rarity)}
                      {badge.name}
                    </CardTitle>
                    <Badge variant="outline" className="w-fit mx-auto">
                      {badge.category}
                    </Badge>
                  </CardHeader>
                  <CardContent className="text-center space-y-2">
                    <p className="text-neutral-300 text-sm">{badge.description}</p>
                    <p className="text-neutral-400 text-xs">Earned {badge.earnedDate}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Milestones */}
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-2xl font-bold text-white mb-4">🎯 Milestones</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {data.milestones.map((milestone) => (
                <Card
                  key={milestone.id}
                  className={`${milestone.completed ? "bg-gradient-to-br from-green-900/50 to-green-800/50 border-green-700" : "bg-gradient-to-br from-blue-900/50 to-blue-800/50 border-blue-700"}`}
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-white flex items-center gap-2">
                      {milestone.completed ? (
                        <Trophy className="h-5 w-5 text-green-400" />
                      ) : (
                        <Target className="h-5 w-5 text-blue-400" />
                      )}
                      {milestone.title}
                    </CardTitle>
                    <CardDescription className={milestone.completed ? "text-green-100" : "text-blue-100"}>
                      {milestone.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className={milestone.completed ? "text-green-200" : "text-blue-200"}>Progress</span>
                        <span className="text-white font-semibold">
                          {milestone.progress} / {milestone.target}
                        </span>
                      </div>
                      <div className="w-full bg-neutral-700 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${milestone.completed ? "bg-green-500" : "bg-blue-500"}`}
                          style={{ width: `${(milestone.progress / milestone.target) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className={`${milestone.completed ? "bg-green-800/50" : "bg-blue-800/50"} rounded-lg p-3`}>
                      <p className={`${milestone.completed ? "text-green-100" : "text-blue-100"} text-sm`}>
                        🎁 <strong>Reward:</strong> {milestone.reward}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Badges */}
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-2xl font-bold text-white mb-4">🔮 Upcoming Badges</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.upcomingBadges.map((badge, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 border-purple-700 border-dashed"
                >
                  <CardHeader className="text-center">
                    <div className="text-3xl mb-2 opacity-60">{badge.icon}</div>
                    <CardTitle className="text-lg text-white">{badge.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-purple-200 text-sm text-center">{badge.requirement}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-purple-200">Progress</span>
                        <span className="text-white font-semibold">
                          {badge.progress} / {badge.target}
                        </span>
                      </div>
                      <div className="w-full bg-neutral-700 rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-purple-500"
                          style={{ width: `${(badge.progress / badge.target) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Motivation Section */}
          <div className="max-w-7xl mx-auto w-full">
            <Card className="bg-gradient-to-br from-orange-900/90 to-orange-800/90 border-orange-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">🚀 Keep Going!</CardTitle>
                <CardDescription className="text-orange-100">
                  Positive reinforcement to motivate your attendance journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-orange-800/50 rounded-lg p-4">
                    <p className="text-orange-100 text-sm">
                      🎉 <strong>Great Progress!</strong> You've earned 5 badges this semester. You're in the top 25% of
                      students for achievement unlocks!
                    </p>
                  </div>
                  <div className="bg-orange-800/50 rounded-lg p-4">
                    <p className="text-orange-100 text-sm">
                      🔥 <strong>Streak Alert!</strong> You're just 2 days away from beating your longest streak record.
                      Keep attending to unlock the "Streak Breaker" legendary badge!
                    </p>
                  </div>
                  <div className="bg-orange-800/50 rounded-lg p-4">
                    <p className="text-orange-100 text-sm">
                      🎯 <strong>Next Milestone:</strong> Complete 3 more perfect weeks to unlock the "Consistency King"
                      epic badge. You've got this!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Logo = () => {
  return (
    <a href="#" className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black">
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        AttendanceHub
      </motion.span>
    </a>
  )
}

export const LogoIcon = () => {
  return (
    <a href="#" className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black">
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </a>
  )
}

export default AchievementsPage
