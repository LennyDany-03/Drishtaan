"use client"
import { useState } from "react"
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts"
import { LayoutDashboard, Settings, BarChart3, Calendar, TrendingUp, Target, Award, PieChartIcon } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const getDashboardData = () => {
  return {
    overallAttendance: 78,
    subjects: [
      { name: "Physics", attendance: 92, color: "#3b82f6", status: "🟢" },
      { name: "Chemistry", attendance: 65, color: "#ef4444", status: "🔴" },
      { name: "Mathematics", attendance: 85, color: "#f59e0b", status: "🟡" },
      { name: "Biology", attendance: 73, color: "#f59e0b", status: "🟡" },
    ],
    pieData: [
      { name: "Present", value: 78, fill: "#3b82f6" },
      { name: "Absent", value: 22, fill: "#64748b" },
    ],
    comparisonData: [
      { name: "You", value: 78, fill: "#8b5cf6" },
      { name: "Class Average", value: 86, fill: "#64748b" },
    ],
    currentStreak: 10,
    badges: [
      { name: "Perfect Week", icon: "⭐", description: "attended all classes this week" },
      { name: "Early Bird", icon: "🌅", description: "present in all morning classes this month" },
      { name: "Consistent", icon: "📈", description: "maintained above 75% for 4 weeks" },
    ],
    achievements: [
      "Completed 10-day attendance streak",
      "Improved Chemistry attendance by 15%",
      "Maintained above 90% in Physics for 3 weeks",
    ],
  }
}

const DashboardPage = () => {
  const data = getDashboardData()
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
                    src="/pie-chart-example.svg"
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

      <Dashboard data={data} />
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

const Dashboard = ({ data }) => {
  const chartConfig = {
    present: {
      label: "Present",
      color: "hsl(var(--chart-1))",
    },
    absent: {
      label: "Absent",
      color: "hsl(var(--chart-2))",
    },
  }

  return (
    <div className="flex flex-1">
      <div className="flex h-full w-full flex-1 flex-col gap-6 rounded-tl-2xl border border-neutral-700 bg-neutral-900 p-6 overflow-y-auto">
        {/* Header */}
        <div className="text-center space-y-2 mb-6">
          <h1 className="text-4xl font-bold text-white">📊 Attendance Dashboard</h1>
          <p className="text-neutral-400">Comprehensive insights to boost your academic performance</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
          {/* Overall Attendance Card */}
          <Card className="col-span-1 lg:col-span-2 bg-gradient-to-br from-blue-900/90 to-blue-800/90 border-blue-700">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-white">
                Overall Attendance: {data.overallAttendance}%
              </CardTitle>
              <CardDescription className="text-blue-100">
                You're {data.overallAttendance >= 75 ? "above" : "below"} the 75% threshold.
                {data.overallAttendance >= 75 ? " Great job!" : " Need improvement!"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <ChartContainer config={chartConfig} className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={data.pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {data.pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-white font-semibold">Subject Breakdown:</h3>
                  {data.subjects.map((subject, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                      <span className="text-white font-medium flex items-center gap-2">
                        {subject.status} {subject.name}
                      </span>
                      <span className={`font-bold ${subject.attendance >= 75 ? "text-green-300" : "text-red-300"}`}>
                        {subject.attendance}%
                      </span>
                    </div>
                  ))}
                  <p className="text-blue-200 text-sm mt-4">
                    💡 Maintain at least 2 more Chemistry classes to cross 75%.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 10-Day Streak Card */}
          <Card className="col-span-1 bg-gradient-to-br from-green-900/90 to-green-800/90 border-green-700">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-white">🔥 {data.currentStreak}-Day Streak</CardTitle>
              <CardDescription className="text-green-100">
                You're on fire! Keep attending classes to maintain your streak.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-white font-semibold">Recent Badges:</h3>
                {data.badges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white/10 rounded-lg p-2">
                    <span className="text-xl">{badge.icon}</span>
                    <div className="flex-1">
                      <span className="text-white text-sm font-medium">{badge.name}</span>
                      <p className="text-green-200 text-xs">({badge.description})</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-green-200 text-sm mt-4">🎯 Break your own record: Aim for a 15-day streak!</p>
            </CardContent>
          </Card>

          {/* Class Comparison Card */}
          <Card className="col-span-1 bg-gradient-to-br from-purple-900/90 to-purple-800/90 border-purple-700">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-white">📊 Class Comparison</CardTitle>
              <CardDescription className="text-purple-100">Your attendance vs class average</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data.comparisonData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#d1d5db" />
                    <YAxis stroke="#d1d5db" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
              <p className="text-purple-200 text-sm mt-4">
                📈 You're 8% below class average. Attending 1 extra class per week will help close the gap.
              </p>
            </CardContent>
          </Card>

          {/* Recent Achievements Card */}
          <Card className="col-span-1 lg:col-span-2 bg-gradient-to-br from-orange-900/90 to-orange-800/90 border-orange-700">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-white">🏆 Recent Achievements</CardTitle>
              <CardDescription className="text-orange-100">Your latest milestones and accomplishments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {data.achievements.map((achievement, idx) => (
                <div key={idx} className="bg-white/10 rounded-lg p-3">
                  <span className="text-white text-sm">✨ {achievement}</span>
                </div>
              ))}
              <p className="text-orange-200 text-sm mt-4">🎯 Next Goal: Reach 80% overall before mid-sems.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
