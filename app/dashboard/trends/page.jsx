"use client"
import { useState } from "react"
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar } from "recharts"
import {
  LayoutDashboard,
  Settings,
  BarChart3,
  Calendar,
  TrendingUp,
  Target,
  Award,
  PieChartIcon,
  Clock,
  BookOpen,
} from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const getTrendsData = () => {
  return {
    monthlyTrend: [
      { month: "Jan", attendance: 85, target: 75 },
      { month: "Feb", attendance: 88, target: 75 },
      { month: "Mar", attendance: 82, target: 75 },
      { month: "Apr", attendance: 79, target: 75 },
      { month: "May", attendance: 68, target: 75 },
      { month: "Jun", attendance: 72, target: 75 },
      { month: "Jul", attendance: 78, target: 75 },
      { month: "Aug", attendance: 85, target: 75 },
      { month: "Sep", attendance: 82, target: 75 },
      { month: "Oct", attendance: 76, target: 75 },
      { month: "Nov", attendance: 80, target: 75 },
      { month: "Dec", attendance: 83, target: 75 },
    ],
    timeSlotHeatmap: [
      { time: "8:00-9:00", Mon: 45, Tue: 50, Wed: 40, Thu: 55, Fri: 35 },
      { time: "9:00-10:00", Mon: 60, Tue: 65, Wed: 55, Thu: 70, Fri: 50 },
      { time: "10:00-11:00", Mon: 85, Tue: 90, Wed: 80, Thu: 88, Fri: 75 },
      { time: "11:00-12:00", Mon: 95, Tue: 92, Wed: 90, Thu: 94, Fri: 88 },
      { time: "2:00-3:00", Mon: 98, Tue: 96, Wed: 94, Thu: 97, Fri: 92 },
      { time: "3:00-4:00", Mon: 92, Tue: 88, Wed: 85, Thu: 90, Fri: 80 },
      { time: "4:00-5:00", Mon: 75, Tue: 70, Wed: 68, Thu: 72, Fri: 60 },
    ],
    semesterComparison: [
      { semester: "Sem 1", attendance: 88, subjects: 6 },
      { semester: "Sem 2", attendance: 82, subjects: 6 },
      { semester: "Sem 3", attendance: 75, subjects: 7 },
      { semester: "Sem 4", attendance: 78, subjects: 7 },
      { semester: "Sem 5", attendance: 73, subjects: 8 },
      { semester: "Current", attendance: 78, subjects: 8 },
    ],
  }
}

const TrendsPage = () => {
  const data = getTrendsData()
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

  const chartConfig = {
    attendance: {
      label: "Attendance",
      color: "hsl(var(--chart-1))",
    },
    target: {
      label: "Target",
      color: "hsl(var(--chart-2))",
    },
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
            <h1 className="text-4xl font-bold text-white">📈 Trends & Analytics</h1>
            <p className="text-neutral-400">
              Visualize your attendance patterns and identify improvement opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto w-full">
            {/* Monthly Attendance Trend */}
            <Card className="col-span-1 lg:col-span-2 bg-gradient-to-br from-blue-900/90 to-blue-800/90 border-blue-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <TrendingUp className="h-6 w-6" />
                  Monthly Attendance Trend
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Track your attendance percentage across months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data.monthlyTrend}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="month" stroke="#d1d5db" />
                      <YAxis stroke="#d1d5db" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="attendance"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="target"
                        stroke="#10b981"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        dot={{ fill: "#10b981", strokeWidth: 2, r: 3 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
                <div className="bg-blue-800/50 rounded-lg p-4 mt-4">
                  <p className="text-blue-100 text-sm">
                    💡 <strong>Insight:</strong> Attendance dropped by 12% after mid-sems in May. Your best performance
                    was in February (88%). Current trend shows recovery since July.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Time Slot Heatmap */}
            <Card className="bg-gradient-to-br from-purple-900/90 to-purple-800/90 border-purple-700">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Time Slot Analysis
                </CardTitle>
                <CardDescription className="text-purple-100">Heatmap showing attendance by time slots</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="grid grid-cols-6 gap-1 text-xs text-white">
                    <div></div>
                    {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                      <div key={day} className="text-center font-semibold">
                        {day}
                      </div>
                    ))}
                  </div>
                  {data.timeSlotHeatmap.map((slot) => (
                    <div key={slot.time} className="grid grid-cols-6 gap-1">
                      <div className="text-xs text-purple-200 pr-2 flex items-center">{slot.time}</div>
                      {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                        <div
                          key={day}
                          className={`h-8 rounded text-xs flex items-center justify-center font-bold ${
                            slot[day] >= 90
                              ? "bg-green-500"
                              : slot[day] >= 75
                                ? "bg-yellow-500"
                                : slot[day] >= 50
                                  ? "bg-orange-500"
                                  : "bg-red-500"
                          } text-white`}
                        >
                          {slot[day]}%
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="bg-purple-800/50 rounded-lg p-3 mt-4">
                  <p className="text-purple-100 text-sm">
                    💡 <strong>Pattern:</strong> Most absences occur in early morning slots (8-10 AM). Afternoon
                    sessions (2-3 PM) show highest attendance rates.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Semester Comparison */}
            <Card className="bg-gradient-to-br from-green-900/90 to-green-800/90 border-green-700">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Semester Comparison
                </CardTitle>
                <CardDescription className="text-green-100">
                  Compare attendance across different semesters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data.semesterComparison}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="semester" stroke="#d1d5db" />
                      <YAxis stroke="#d1d5db" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="attendance" fill="#10b981" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
                <div className="bg-green-800/50 rounded-lg p-3 mt-4">
                  <p className="text-green-100 text-sm">
                    💡 <strong>Trend:</strong> Attendance generally decreases with semester progression. Current
                    semester shows improvement from Sem 5. Peak performance was in Sem 1 (88%).
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Insights */}
          <div className="max-w-7xl mx-auto w-full">
            <Card className="bg-gradient-to-br from-orange-900/90 to-orange-800/90 border-orange-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">🔍 Key Insights & Recommendations</CardTitle>
                <CardDescription className="text-orange-100">
                  Data-driven insights to improve your attendance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-white font-semibold text-lg">📊 Patterns Identified</h3>
                    <div className="space-y-3">
                      <div className="bg-orange-800/50 rounded-lg p-3">
                        <p className="text-orange-100 text-sm">
                          <strong>Monday Blues:</strong> 15% lower attendance on Mondays compared to mid-week
                        </p>
                      </div>
                      <div className="bg-orange-800/50 rounded-lg p-3">
                        <p className="text-orange-100 text-sm">
                          <strong>Morning Struggle:</strong> 8-10 AM slots show 25% more absences
                        </p>
                      </div>
                      <div className="bg-orange-800/50 rounded-lg p-3">
                        <p className="text-orange-100 text-sm">
                          <strong>Exam Impact:</strong> Attendance drops 20% during exam periods
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-white font-semibold text-lg">💡 Recommendations</h3>
                    <div className="space-y-3">
                      <div className="bg-orange-800/50 rounded-lg p-3">
                        <p className="text-orange-100 text-sm">
                          <strong>Set Monday Reminders:</strong> Schedule alerts for Monday morning classes
                        </p>
                      </div>
                      <div className="bg-orange-800/50 rounded-lg p-3">
                        <p className="text-orange-100 text-sm">
                          <strong>Adjust Sleep Schedule:</strong> Earlier bedtime for better morning attendance
                        </p>
                      </div>
                      <div className="bg-orange-800/50 rounded-lg p-3">
                        <p className="text-orange-100 text-sm">
                          <strong>Exam Strategy:</strong> Maintain attendance even during exam prep
                        </p>
                      </div>
                    </div>
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

export default TrendsPage
