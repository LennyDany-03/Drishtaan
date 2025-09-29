"use client"
import { useState } from "react"
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
  User,
  Bell,
  Shield,
  Download,
  Camera,
  QrCode,
  Mail,
  Phone,
} from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const SettingsPage = () => {
  const [open, setOpen] = useState(false)
  const [settings, setSettings] = useState({
    // Profile Settings
    name: "John Doe",
    email: "john.doe@university.edu",
    phone: "+1 (555) 123-4567",
    studentId: "STU2024001",

    // Notification Settings
    lowAttendanceAlerts: true,
    classReminders: true,
    goalReminders: false,
    weeklyReports: true,
    emailNotifications: true,
    pushNotifications: false,

    // Privacy Settings
    faceRecognition: true,
    qrCodeCheckin: true,
    dataSharing: false,
    analyticsTracking: true,
  })

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

  const handleSettingChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
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
            <h1 className="text-4xl font-bold text-white">⚙️ Settings & Preferences</h1>
            <p className="text-neutral-400">Customize your attendance tracking experience and privacy settings</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto w-full">
            {/* Profile Settings */}
            <Card className="bg-gradient-to-br from-blue-900/90 to-blue-800/90 border-blue-700">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profile Settings
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Update your personal information and profile photo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Profile Photo */}
                <div className="flex items-center gap-4">
                  <Image
                    src="/student-avatar.png"
                    alt="Profile"
                    className="w-16 h-16 rounded-full border-2 border-blue-400"
                  />
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="text-blue-200 border-blue-400 bg-transparent">
                      <Camera className="h-4 w-4 mr-2" />
                      Change Photo
                    </Button>
                    <p className="text-blue-200 text-xs">JPG, PNG up to 5MB</p>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-blue-200">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      value={settings.name}
                      onChange={(e) => handleSettingChange("name", e.target.value)}
                      className="bg-blue-800/30 border-blue-600 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-blue-200">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={settings.email}
                      onChange={(e) => handleSettingChange("email", e.target.value)}
                      className="bg-blue-800/30 border-blue-600 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-blue-200">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={settings.phone}
                      onChange={(e) => handleSettingChange("phone", e.target.value)}
                      className="bg-blue-800/30 border-blue-600 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="studentId" className="text-blue-200">
                      Student ID
                    </Label>
                    <Input
                      id="studentId"
                      value={settings.studentId}
                      disabled
                      className="bg-blue-800/30 border-blue-600 text-white opacity-60"
                    />
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">Save Profile Changes</Button>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card className="bg-gradient-to-br from-green-900/90 to-green-800/90 border-green-700">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Preferences
                </CardTitle>
                <CardDescription className="text-green-100">
                  Control when and how you receive attendance alerts and reminders
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-green-200">Low Attendance Alerts</Label>
                      <p className="text-green-300 text-sm">Get notified when attendance drops below 75%</p>
                    </div>
                    <Switch
                      checked={settings.lowAttendanceAlerts}
                      onCheckedChange={(checked) => handleSettingChange("lowAttendanceAlerts", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-green-200">Class Reminders</Label>
                      <p className="text-green-300 text-sm">Receive reminders 30 minutes before classes</p>
                    </div>
                    <Switch
                      checked={settings.classReminders}
                      onCheckedChange={(checked) => handleSettingChange("classReminders", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-green-200">Goal Reminders</Label>
                      <p className="text-green-300 text-sm">Get updates on your attendance goals progress</p>
                    </div>
                    <Switch
                      checked={settings.goalReminders}
                      onCheckedChange={(checked) => handleSettingChange("goalReminders", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-green-200">Weekly Reports</Label>
                      <p className="text-green-300 text-sm">Receive weekly attendance summary reports</p>
                    </div>
                    <Switch
                      checked={settings.weeklyReports}
                      onCheckedChange={(checked) => handleSettingChange("weeklyReports", checked)}
                    />
                  </div>
                </div>

                <div className="border-t border-green-700 pt-4">
                  <h4 className="text-green-200 font-medium mb-3">Delivery Methods</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-green-300" />
                        <Label className="text-green-200">Email Notifications</Label>
                      </div>
                      <Switch
                        checked={settings.emailNotifications}
                        onCheckedChange={(checked) => handleSettingChange("emailNotifications", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-green-300" />
                        <Label className="text-green-200">Push Notifications</Label>
                      </div>
                      <Switch
                        checked={settings.pushNotifications}
                        onCheckedChange={(checked) => handleSettingChange("pushNotifications", checked)}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Privacy & Security */}
            <Card className="bg-gradient-to-br from-purple-900/90 to-purple-800/90 border-purple-700">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Privacy & Security
                </CardTitle>
                <CardDescription className="text-purple-100">
                  Control your data privacy and check-in methods
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-purple-200 flex items-center gap-2">
                        <Camera className="h-4 w-4" />
                        Face Recognition Check-in
                      </Label>
                      <p className="text-purple-300 text-sm">Allow facial recognition for attendance marking</p>
                    </div>
                    <Switch
                      checked={settings.faceRecognition}
                      onCheckedChange={(checked) => handleSettingChange("faceRecognition", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-purple-200 flex items-center gap-2">
                        <QrCode className="h-4 w-4" />
                        QR Code Check-in
                      </Label>
                      <p className="text-purple-300 text-sm">Enable QR code scanning for attendance</p>
                    </div>
                    <Switch
                      checked={settings.qrCodeCheckin}
                      onCheckedChange={(checked) => handleSettingChange("qrCodeCheckin", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-purple-200">Data Sharing with Instructors</Label>
                      <p className="text-purple-300 text-sm">Share detailed analytics with your professors</p>
                    </div>
                    <Switch
                      checked={settings.dataSharing}
                      onCheckedChange={(checked) => handleSettingChange("dataSharing", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-purple-200">Analytics Tracking</Label>
                      <p className="text-purple-300 text-sm">Allow anonymous usage analytics for app improvement</p>
                    </div>
                    <Switch
                      checked={settings.analyticsTracking}
                      onCheckedChange={(checked) => handleSettingChange("analyticsTracking", checked)}
                    />
                  </div>
                </div>

                <div className="bg-purple-800/50 rounded-lg p-3">
                  <p className="text-purple-100 text-sm">
                    🔒 <strong>Privacy Note:</strong> Your attendance data is encrypted and stored securely. You can
                    request data deletion at any time by contacting support.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Export & Management */}
            <Card className="bg-gradient-to-br from-orange-900/90 to-orange-800/90 border-orange-700">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Data Export & Management
                </CardTitle>
                <CardDescription className="text-orange-100">
                  Download your attendance records and manage your data
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full text-orange-200 border-orange-400 hover:bg-orange-800/50 bg-transparent"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Attendance Report (PDF)
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full text-orange-200 border-orange-400 hover:bg-orange-800/50 bg-transparent"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export Data (CSV)
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full text-orange-200 border-orange-400 hover:bg-orange-800/50 bg-transparent"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Achievement Certificates
                  </Button>
                </div>

                <div className="border-t border-orange-700 pt-4">
                  <h4 className="text-orange-200 font-medium mb-3">Data Management</h4>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full text-red-300 border-red-500 hover:bg-red-900/50 bg-transparent"
                    >
                      Request Data Deletion
                    </Button>
                    <p className="text-orange-300 text-xs">
                      This will permanently delete all your attendance data and cannot be undone.
                    </p>
                  </div>
                </div>

                <div className="bg-orange-800/50 rounded-lg p-3">
                  <p className="text-orange-100 text-sm">
                    📊 <strong>Data Summary:</strong> You have 127 attendance records, 5 achievements, and 3 active
                    goals. Last export was never.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support & Help */}
          <div className="max-w-7xl mx-auto w-full">
            <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">🆘 Support & Help</CardTitle>
                <CardDescription className="text-gray-100">
                  Need assistance? Get help with your attendance tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button
                    variant="outline"
                    className="text-gray-200 border-gray-400 hover:bg-gray-800/50 bg-transparent"
                  >
                    📚 User Guide
                  </Button>
                  <Button
                    variant="outline"
                    className="text-gray-200 border-gray-400 hover:bg-gray-800/50 bg-transparent"
                  >
                    💬 Contact Support
                  </Button>
                  <Button
                    variant="outline"
                    className="text-gray-200 border-gray-400 hover:bg-gray-800/50 bg-transparent"
                  >
                    🐛 Report Bug
                  </Button>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                  <Textarea
                    placeholder="Describe your issue or feedback..."
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                    rows={3}
                  />
                  <Button className="mt-3 bg-gray-600 hover:bg-gray-700">Send Feedback</Button>
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

export default SettingsPage
