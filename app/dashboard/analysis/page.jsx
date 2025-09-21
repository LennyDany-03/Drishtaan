"use client"
import { useState } from "react"
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"
import {
  LayoutDashboard,
  Settings,
  BarChart3,
  Calendar,
  TrendingUp,
  Target,
  Award,
  PieChartIcon,
  Activity,
  Users,
  Clock,
  Zap,
} from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const getAnalysisData = () => {
  return {
    // Day-to-Day Analysis Data
    dailyAttendance: [
      { day: "Mon", week1: 1, week2: 0, week3: 1, week4: 1 },
      { day: "Tue", week1: 1, week2: 1, week3: 1, week4: 0 },
      { day: "Wed", week1: 0, week2: 1, week3: 1, week4: 1 },
      { day: "Thu", week1: 1, week2: 1, week3: 0, week4: 1 },
      { day: "Fri", week1: 1, week2: 0, week3: 1, week4: 1 },
    ],

    // Month-wise Data
    monthlyData: [
      { month: "Aug", attendance: 92, target: 75 },
      { month: "Sep", attendance: 85, target: 75 },
      { month: "Oct", attendance: 68, target: 75 },
      { month: "Nov", attendance: 78, target: 75 },
      { month: "Dec", attendance: 82, target: 75 },
    ],

    // Subject-wise Data
    subjectData: [
      { subject: "Physics", attendance: 92, required: 75 },
      { subject: "Mathematics", attendance: 85, required: 75 },
      { subject: "Biology", attendance: 73, required: 75 },
      { subject: "Chemistry", attendance: 65, required: 75 },
    ],

    // Time Slot Analysis
    timeSlotData: [
      { time: "9:00-10:00", Mon: 60, Tue: 80, Wed: 40, Thu: 90, Fri: 70 },
      { time: "10:00-11:00", Mon: 90, Tue: 85, Wed: 95, Thu: 80, Fri: 88 },
      { time: "11:00-12:00", Mon: 95, Tue: 90, Wed: 85, Thu: 92, Fri: 90 },
      { time: "2:00-3:00", Mon: 98, Tue: 95, Wed: 92, Thu: 96, Fri: 94 },
      { time: "3:00-4:00", Mon: 95, Tue: 92, Wed: 88, Thu: 90, Fri: 85 },
    ],

    // Peer Comparison
    peerComparison: [
      { category: "You", attendance: 78 },
      { category: "Class Average", attendance: 86 },
      { category: "Top 25%", attendance: 94 },
    ],

    // Engagement Analysis
    engagementData: [
      { subject: "Attention", A: 75, fullMark: 100 },
      { subject: "Punctuality", A: 88, fullMark: 100 },
      { subject: "Participation", A: 65, fullMark: 100 },
      { subject: "Consistency", A: 72, fullMark: 100 },
      { subject: "Preparation", A: 80, fullMark: 100 },
    ],

    // Forecast Data
    forecastData: [
      { week: "Week 1", current: 78, required: 75, projected: 78 },
      { week: "Week 2", current: 76, required: 75, projected: 76 },
      { week: "Week 3", current: 74, required: 75, projected: 74 },
      { week: "Week 4", current: 72, required: 75, projected: 68 },
      { week: "Week 5", current: null, required: 75, projected: 65 },
      { week: "Week 6", current: null, required: 75, projected: 62 },
    ],

    // Streak Data
    streakData: [
      { date: "2024-01-01", streak: 0, status: "absent" },
      { date: "2024-01-02", streak: 1, status: "present" },
      { date: "2024-01-03", streak: 2, status: "present" },
      { date: "2024-01-04", streak: 3, status: "present" },
      { date: "2024-01-05", streak: 0, status: "absent" },
      { date: "2024-01-06", streak: 1, status: "present" },
      { date: "2024-01-07", streak: 2, status: "present" },
    ],
  }
}

const AnalysisPage = () => {
  const data = getAnalysisData()
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
      href: "#",
      icon: <Calendar className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Trends",
      href: "#",
      icon: <TrendingUp className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Goals",
      href: "#",
      icon: <Target className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Achievements",
      href: "#",
      icon: <Award className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Settings",
      href: "#",
      icon: <Settings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
  ]

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

      <AnalysisDashboard data={data} />
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

const AnalysisDashboard = ({ data }) => {
  const chartConfig = {
    attendance: {
      label: "Attendance",
      color: "hsl(var(--chart-1))",
    },
    target: {
      label: "Target",
      color: "hsl(var(--chart-2))",
    },
    projected: {
      label: "Projected",
      color: "hsl(var(--chart-3))",
    },
  }

  return (
    <div className="flex flex-1">
      <div className="flex h-full w-full flex-1 flex-col gap-6 rounded-tl-2xl border border-neutral-700 bg-neutral-900 p-6 overflow-y-auto">
        {/* Header */}
        <div className="text-center space-y-2 mb-6">
          <h1 className="text-4xl font-bold text-white">📊 Deep Analysis Dashboard</h1>
          <p className="text-neutral-400">Comprehensive insights to guide your improvement journey</p>
        </div>

        {/* Row 1: Removed Day-to-day heatmap + Weekly Pattern analysis */}
        {/* Weekly Pattern / Time Slot Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto w-full">
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
                {data.timeSlotData.map((slot) => (
                  <div key={slot.time} className="grid grid-cols-6 gap-1">
                    <div className="text-xs text-purple-200 pr-2">{slot.time}</div>
                    {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                      <div
                        key={day}
                        className={`h-6 rounded text-xs flex items-center justify-center font-bold ${
                          slot[day] >= 90 ? "bg-green-500" : slot[day] >= 75 ? "bg-yellow-500" : "bg-red-500"
                        } text-white`}
                      >
                        {slot[day]}%
                      </div>
                    ))}
                  </div>
                ))}
                <div className="bg-purple-800/50 rounded-lg p-3 mt-4">
                  <p className="text-purple-100 text-sm">
                    💡 <strong>Insight:</strong> Most absences are in 9:00–10:00 AM slots. You are consistent in
                    afternoon labs (95% attendance).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Month-wise Attendance */}
          <Card className="bg-gradient-to-br from-green-900/90 to-green-800/90 border-green-700">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Month-Wise Attendance
              </CardTitle>
              <CardDescription className="text-green-100">
                Trend of attendance growth/decline across months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data.monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#d1d5db" />
                    <YAxis stroke="#d1d5db" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="attendance" fill="#10b981" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="target" fill="#6b7280" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="bg-green-800/50 rounded-lg p-3 mt-4">
                <p className="text-green-100 text-sm">
                  💡 <strong>Insight:</strong> Attendance dropped in October after mid-sems. Your best month was August
                  with 92% attendance.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Row 2: Subject-wise bar graph */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto w-full">
          {/* Subject-wise Deep Analysis */}
          <Card className="bg-gradient-to-br from-orange-900/90 to-orange-800/90 border-orange-700">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Subject-Wise Deep Analysis
              </CardTitle>
              <CardDescription className="text-orange-100">
                Horizontal bar chart showing which subjects need attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {data.subjectData.map((subject, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-white text-sm">
                      <span>{subject.subject}</span>
                      <span className={subject.attendance >= 75 ? "text-green-300" : "text-red-300"}>
                        {subject.attendance}%
                      </span>
                    </div>
                    <div className="w-full bg-neutral-700 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${subject.attendance >= 75 ? "bg-green-500" : "bg-red-500"}`}
                        style={{ width: `${subject.attendance}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
                <div className="bg-orange-800/50 rounded-lg p-3 mt-4">
                  <p className="text-orange-100 text-sm">
                    💡 <strong>Insight:</strong> You need to improve Chemistry (65%) to stay exam-eligible. Your highest
                    attendance is Physics (92%). Keep it up!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Row 3: Forecast chart + Peer comparison + Engagement Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
          {/* Predictive / Forecast Analysis */}
          <Card className="bg-gradient-to-br from-red-900/90 to-red-800/90 border-red-700">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Forecast Analysis
              </CardTitle>
              <CardDescription className="text-red-100">Will you stay above 75% by semester end?</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data.forecastData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="week" stroke="#d1d5db" />
                    <YAxis stroke="#d1d5db" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="current" stroke="#3b82f6" strokeWidth={2} />
                    <Line type="monotone" dataKey="projected" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="required" stroke="#10b981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="bg-red-800/50 rounded-lg p-3 mt-4">
                <p className="text-red-100 text-sm">
                  💡 <strong>Warning:</strong> If you continue current pace, you'll end at 68% (below safe limit).
                  Attend 3 more classes weekly to reach 80%.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Peer Comparison */}
          <Card className="bg-gradient-to-br from-indigo-900/90 to-indigo-800/90 border-indigo-700">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <Users className="h-5 w-5" />
                Peer Comparison
              </CardTitle>
              <CardDescription className="text-indigo-100">Your attendance vs class benchmarks</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data.peerComparison}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="category" stroke="#d1d5db" />
                    <YAxis stroke="#d1d5db" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="attendance" fill="#6366f1" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="bg-indigo-800/50 rounded-lg p-3 mt-4">
                <p className="text-indigo-100 text-sm">
                  💡 <strong>Insight:</strong> You are 8% below class average. Your attendance is higher than 30% of
                  students in Physics.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Engagement Analysis */}
          <Card className="bg-gradient-to-br from-teal-900/90 to-teal-800/90 border-teal-700">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Engagement Analysis
              </CardTitle>
              <CardDescription className="text-teal-100">Quality of attendance, not just presence</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={data.engagementData}>
                    <PolarGrid stroke="#374151" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: "#d1d5db", fontSize: 12 }} />
                    <PolarRadiusAxis tick={{ fill: "#d1d5db", fontSize: 10 }} />
                    <Radar
                      name="Engagement"
                      dataKey="A"
                      stroke="#14b8a6"
                      fill="#14b8a6"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="bg-teal-800/50 rounded-lg p-3 mt-4">
                <p className="text-teal-100 text-sm">
                  💡 <strong>Insight:</strong> Your punctuality is strong but attention score is low. Focus on active
                  participation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Streak & Achievement Analysis */}
        <div className="max-w-7xl mx-auto w-full">
          <Card className="bg-gradient-to-br from-yellow-900/90 to-yellow-800/90 border-yellow-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                🔥 Streak & Achievement Analysis
              </CardTitle>
              <CardDescription className="text-yellow-100">Timeline of streaks and motivation tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {data.streakData.map((day, idx) => (
                    <div
                      key={idx}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                        day.status === "present" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                      }`}
                      title={`${day.date}: ${day.status} (streak: ${day.streak})`}
                    >
                      {day.streak}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-yellow-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">15</div>
                    <div className="text-yellow-200 text-sm">Longest Streak</div>
                  </div>
                  <div className="bg-yellow-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">3</div>
                    <div className="text-yellow-200 text-sm">Current Streak</div>
                  </div>
                  <div className="bg-yellow-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">7</div>
                    <div className="text-yellow-200 text-sm">Avg Streak Length</div>
                  </div>
                </div>
                <div className="bg-yellow-800/50 rounded-lg p-3">
                  <p className="text-yellow-100 text-sm">
                    💡 <strong>Insight:</strong> You maintained a 15-day streak last month. Breaking streaks happened
                    mostly around exams. Aim for a 20-day streak this month!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default AnalysisPage
