"use client"
import { useState } from "react"
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LayoutDashboard,
  Settings,
  BarChart3,
  Calendar,
  TrendingUp,
  Target,
  Award,
  PieChartIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const getCalendarData = () => {
  const today = new Date()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()

  // Sample attendance data for the current month
  const attendanceData = {
    1: { status: "present", classes: ["Physics", "Math", "Chemistry"] },
    2: { status: "absent", classes: ["Biology"] },
    3: { status: "present", classes: ["Physics", "Math"] },
    4: { status: "late", classes: ["Chemistry", "Biology"] },
    5: { status: "present", classes: ["Physics", "Math", "Chemistry", "Biology"] },
    8: { status: "present", classes: ["Physics", "Math"] },
    9: { status: "absent", classes: ["Chemistry"] },
    10: { status: "present", classes: ["Biology", "Physics"] },
    11: { status: "late", classes: ["Math"] },
    12: { status: "present", classes: ["Chemistry", "Biology"] },
    15: { status: "present", classes: ["Physics", "Math", "Chemistry"] },
    16: { status: "absent", classes: ["Biology"] },
    17: { status: "present", classes: ["Physics", "Math"] },
    18: { status: "present", classes: ["Chemistry", "Biology"] },
    19: { status: "late", classes: ["Physics"] },
    22: { status: "present", classes: ["Math", "Chemistry"] },
    23: { status: "present", classes: ["Biology", "Physics"] },
    24: { status: "absent", classes: ["Math"] },
    25: { status: "present", classes: ["Chemistry", "Biology"] },
    26: { status: "present", classes: ["Physics", "Math"] },
  }

  return { currentMonth, currentYear, attendanceData }
}

const CalendarPage = () => {
  const { currentMonth, currentYear, attendanceData } = getCalendarData()
  const [open, setOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)

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

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

  const getStatusColor = (status) => {
    switch (status) {
      case "present":
        return "bg-green-500"
      case "absent":
        return "bg-red-500"
      case "late":
        return "bg-yellow-500"
      default:
        return "bg-neutral-600"
    }
  }

  const getStatusEmoji = (status) => {
    switch (status) {
      case "present":
        return "🟢"
      case "absent":
        return "🔴"
      case "late":
        return "🟡"
      default:
        return "⚪"
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
            <h1 className="text-4xl font-bold text-white">📅 Calendar View</h1>
            <p className="text-neutral-400">Track your daily attendance patterns and class schedules</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
            {/* Calendar */}
            <Card className="col-span-1 lg:col-span-2 bg-gradient-to-br from-blue-900/90 to-blue-800/90 border-blue-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-white flex items-center gap-2">
                    <Calendar className="h-6 w-6" />
                    {monthNames[currentMonth]} {currentYear}
                  </CardTitle>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-blue-800 hover:bg-blue-700 text-white">
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-blue-800 hover:bg-blue-700 text-white">
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <CardDescription className="text-blue-100">
                  Click on any date to see detailed class attendance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center text-blue-200 font-semibold py-2">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {/* Empty cells for days before month starts */}
                  {Array.from({ length: firstDayOfMonth }, (_, i) => (
                    <div key={`empty-${i}`} className="h-12"></div>
                  ))}

                  {/* Days of the month */}
                  {Array.from({ length: daysInMonth }, (_, i) => {
                    const day = i + 1
                    const dayData = attendanceData[day]
                    const isToday = day === new Date().getDate() && currentMonth === new Date().getMonth()

                    return (
                      <button
                        key={day}
                        onClick={() => setSelectedDate(day)}
                        className={`h-12 rounded-lg flex items-center justify-center text-sm font-medium transition-all hover:scale-105 ${
                          isToday ? "ring-2 ring-white" : ""
                        } ${dayData ? getStatusColor(dayData.status) : "bg-neutral-700 text-neutral-300"} text-white`}
                      >
                        {day}
                      </button>
                    )
                  })}
                </div>

                {/* Legend */}
                <div className="flex justify-center gap-4 mt-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-green-500"></div>
                    <span className="text-blue-100">🟢 Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-red-500"></div>
                    <span className="text-blue-100">🔴 Absent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-yellow-500"></div>
                    <span className="text-blue-100">🟡 Late</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day Details */}
            <Card className="col-span-1 bg-gradient-to-br from-purple-900/90 to-purple-800/90 border-purple-700">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  {selectedDate ? `Day ${selectedDate} Details` : "Select a Date"}
                </CardTitle>
                <CardDescription className="text-purple-100">
                  {selectedDate ? "Classes and attendance status" : "Click on a calendar date to view details"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedDate && attendanceData[selectedDate] ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-lg">
                      <span className="text-2xl">{getStatusEmoji(attendanceData[selectedDate].status)}</span>
                      <span className="text-white font-semibold capitalize">{attendanceData[selectedDate].status}</span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-purple-200 font-medium">Classes:</h4>
                      {attendanceData[selectedDate].classes.map((className, idx) => (
                        <div key={idx} className="bg-purple-800/50 rounded-lg p-2">
                          <span className="text-white text-sm">{className}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : selectedDate ? (
                  <div className="text-center text-purple-200">
                    <p>No classes scheduled for this day</p>
                  </div>
                ) : (
                  <div className="text-center text-purple-200">
                    <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Select a date to view attendance details</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Insights */}
          <div className="max-w-7xl mx-auto w-full">
            <Card className="bg-gradient-to-br from-green-900/90 to-green-800/90 border-green-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">📊 Monthly Insights</CardTitle>
                <CardDescription className="text-green-100">
                  Patterns and trends from your calendar data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">18</div>
                    <div className="text-green-200 text-sm">Days Present</div>
                  </div>
                  <div className="bg-green-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">4</div>
                    <div className="text-green-200 text-sm">Days Absent</div>
                  </div>
                  <div className="bg-green-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">3</div>
                    <div className="text-green-200 text-sm">Days Late</div>
                  </div>
                </div>
                <div className="bg-green-800/50 rounded-lg p-4 mt-4">
                  <p className="text-green-100 text-sm">
                    💡 <strong>Pattern Detected:</strong> Most absences occur on Mondays and Fridays. Your best
                    attendance streak this month was 8 consecutive days. Consider setting Monday morning reminders to
                    improve consistency.
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

export default CalendarPage
