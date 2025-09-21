"use client"
import { useState } from "react"
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  LayoutDashboard,
  Settings,
  BarChart3,
  Calendar,
  TrendingUp,
  Target,
  Award,
  PieChartIcon,
  Plus,
  Edit,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const getGoalsData = () => {
  return {
    activeGoals: [
      {
        id: 1,
        title: "Overall Attendance Target",
        target: 85,
        current: 78,
        subject: "All Subjects",
        deadline: "End of Semester",
        priority: "high",
        classesNeeded: 4,
        description: "Maintain above 85% overall attendance",
      },
      {
        id: 2,
        title: "Physics Excellence",
        target: 90,
        current: 92,
        subject: "Physics",
        deadline: "Ongoing",
        priority: "low",
        classesNeeded: 0,
        description: "Keep Physics attendance above 90%",
      },
      {
        id: 3,
        title: "Chemistry Recovery",
        target: 75,
        current: 65,
        subject: "Chemistry",
        deadline: "Next Month",
        priority: "high",
        classesNeeded: 6,
        description: "Bring Chemistry attendance to safe zone",
      },
      {
        id: 4,
        title: "Perfect Week Challenge",
        target: 100,
        current: 80,
        subject: "All Subjects",
        deadline: "This Week",
        priority: "medium",
        classesNeeded: 2,
        description: "Attend all classes this week",
      },
    ],
    completedGoals: [
      {
        id: 5,
        title: "Mathematics Milestone",
        target: 80,
        current: 85,
        subject: "Mathematics",
        completedDate: "Last Month",
        description: "Achieved 80% in Mathematics",
      },
      {
        id: 6,
        title: "10-Day Streak",
        target: 10,
        current: 15,
        subject: "All Subjects",
        completedDate: "2 Weeks Ago",
        description: "Maintained 10-day attendance streak",
      },
    ],
  }
}

const GoalsPage = () => {
  const data = getGoalsData()
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

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "border-red-500 bg-red-900/20"
      case "medium":
        return "border-yellow-500 bg-yellow-900/20"
      case "low":
        return "border-green-500 bg-green-900/20"
      default:
        return "border-neutral-500 bg-neutral-900/20"
    }
  }

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case "high":
        return <AlertCircle className="h-4 w-4 text-red-400" />
      case "medium":
        return <Target className="h-4 w-4 text-yellow-400" />
      case "low":
        return <CheckCircle className="h-4 w-4 text-green-400" />
      default:
        return <Target className="h-4 w-4 text-neutral-400" />
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
                  <img
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
            <h1 className="text-4xl font-bold text-white">🎯 Goals & Targets</h1>
            <p className="text-neutral-400">Set personal targets and track your progress towards better attendance</p>
          </div>

          {/* Add New Goal Button */}
          <div className="max-w-7xl mx-auto w-full">
            <Button className="mb-6 bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add New Goal
            </Button>
          </div>

          {/* Active Goals */}
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-2xl font-bold text-white mb-4">🎯 Active Goals</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {data.activeGoals.map((goal) => (
                <Card key={goal.id} className={`${getPriorityColor(goal.priority)} border-2`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl text-white flex items-center gap-2">
                          {getPriorityIcon(goal.priority)}
                          {goal.title}
                        </CardTitle>
                        <CardDescription className="text-neutral-300 mt-1">{goal.description}</CardDescription>
                      </div>
                      <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-300">Progress</span>
                        <span className="text-white font-semibold">
                          {goal.current}% / {goal.target}%
                        </span>
                      </div>
                      <Progress value={(goal.current / goal.target) * 100} className="h-3" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Subject:</span>
                        <p className="text-white font-medium">{goal.subject}</p>
                      </div>
                      <div>
                        <span className="text-neutral-400">Deadline:</span>
                        <p className="text-white font-medium">{goal.deadline}</p>
                      </div>
                    </div>

                    {goal.classesNeeded > 0 && (
                      <div className="bg-blue-900/30 rounded-lg p-3">
                        <p className="text-blue-200 text-sm">
                          💡 <strong>Recommendation:</strong> Attend {goal.classesNeeded} more {goal.subject} classes to
                          reach your goal.
                        </p>
                      </div>
                    )}

                    {goal.current >= goal.target && (
                      <div className="bg-green-900/30 rounded-lg p-3">
                        <p className="text-green-200 text-sm">
                          🎉 <strong>Goal Achieved!</strong> You've reached your target. Keep it up!
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Completed Goals */}
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-2xl font-bold text-white mb-4">✅ Completed Goals</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {data.completedGoals.map((goal) => (
                <Card key={goal.id} className="bg-gradient-to-br from-green-900/50 to-green-800/50 border-green-700">
                  <CardHeader>
                    <CardTitle className="text-xl text-white flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      {goal.title}
                    </CardTitle>
                    <CardDescription className="text-green-100">{goal.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-green-200">Final Result</span>
                        <span className="text-white font-semibold">
                          {goal.current}% / {goal.target}%
                        </span>
                      </div>
                      <Progress value={100} className="h-3" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-green-300">Subject:</span>
                        <p className="text-white font-medium">{goal.subject}</p>
                      </div>
                      <div>
                        <span className="text-green-300">Completed:</span>
                        <p className="text-white font-medium">{goal.completedDate}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Goal Statistics */}
          <div className="max-w-7xl mx-auto w-full">
            <Card className="bg-gradient-to-br from-purple-900/90 to-purple-800/90 border-purple-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">📊 Goal Statistics</CardTitle>
                <CardDescription className="text-purple-100">Your goal achievement overview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-purple-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">4</div>
                    <div className="text-purple-200 text-sm">Active Goals</div>
                  </div>
                  <div className="bg-purple-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">2</div>
                    <div className="text-purple-200 text-sm">Completed Goals</div>
                  </div>
                  <div className="bg-purple-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">67%</div>
                    <div className="text-purple-200 text-sm">Success Rate</div>
                  </div>
                  <div className="bg-purple-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">12</div>
                    <div className="text-purple-200 text-sm">Classes Needed</div>
                  </div>
                </div>
                <div className="bg-purple-800/50 rounded-lg p-4 mt-4">
                  <p className="text-purple-100 text-sm">
                    💡 <strong>Insight:</strong> You're on track to achieve 3 out of 4 active goals. Focus on Chemistry
                    attendance to improve your overall success rate. Setting smaller, achievable milestones can help
                    maintain motivation.
                  </p>
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

export default GoalsPage
