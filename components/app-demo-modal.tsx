"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  X,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Wifi,
  Battery,
  Signal,
  ArrowLeft,
  Bell,
  Search,
  MapPin,
  Phone,
  Shield,
  Activity,
  Bluetooth,
  Users,
  ExternalLink,
} from "lucide-react"

interface AppDemoModalProps {
  app: any
  onClose: () => void
}

export function AppDemoModal({ app, onClose }: AppDemoModalProps) {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const navigateScreen = (direction: "next" | "prev") => {
    if (isAnimating) return

    setIsAnimating(true)
    setTimeout(() => {
      if (direction === "next" && currentScreen < app.appScreens.length - 1) {
        setCurrentScreen(currentScreen + 1)
      } else if (direction === "prev" && currentScreen > 0) {
        setCurrentScreen(currentScreen - 1)
      }
      setIsAnimating(false)
    }, 150)
  }

  const renderMockupScreen = (screen: any, app: any) => {
    const baseClasses = "w-full h-full flex flex-col"

    switch (screen.mockup) {
      case "splash":
        return (
          <div className={`${baseClasses} items-center justify-center`} style={{ backgroundColor: app.primaryColor }}>
            <div className="text-6xl mb-4">{app.icon}</div>
            <h1 className="text-2xl font-bold text-white mb-2">{app.title}</h1>
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )

      case "login":
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-blue-50 to-white p-6`}>
            <div className="flex-1 flex flex-col justify-center">
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">{app.icon}</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h2>
                <p className="text-gray-600">Sign in to continue</p>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full outline-none text-gray-700"
                    defaultValue="user@example.com"
                  />
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full outline-none text-gray-700"
                    defaultValue="••••••••"
                  />
                </div>
                <button
                  className="w-full py-4 rounded-lg text-white font-semibold"
                  style={{ backgroundColor: app.primaryColor }}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        )

      case "dashboard":
        return (
          <div className={`${baseClasses} bg-gray-50`}>
            <div className="bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
                <Bell className="h-6 w-6 text-gray-600" />
              </div>
            </div>

            <div className="flex-1 p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <Activity className="h-8 w-8 mb-2" style={{ color: app.primaryColor }} />
                  <p className="text-sm text-gray-600">Active Vehicles</p>
                  <p className="text-2xl font-bold text-gray-800">24</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <MapPin className="h-8 w-8 mb-2" style={{ color: app.accentColor }} />
                  <p className="text-sm text-gray-600">Locations</p>
                  <p className="text-2xl font-bold text-gray-800">8</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-4">
                <h3 className="font-semibold text-gray-800 mb-3">Recent Activity</h3>
                <div className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: app.primaryColor }}></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-800">Vehicle #{item} location updated</p>
                        <p className="text-xs text-gray-500">2 minutes ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case "scan":
        return (
          <div className={`${baseClasses} bg-gray-50`}>
            <div className="bg-white p-4 shadow-sm">
              <div className="flex items-center space-x-3">
                <ArrowLeft className="h-6 w-6 text-gray-600" />
                <h1 className="text-xl font-bold text-gray-800">Device Scan</h1>
              </div>
            </div>

            <div className="flex-1 p-4">
              <div className="text-center mb-6">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
                  <Bluetooth className="absolute inset-0 m-auto h-12 w-12 text-blue-500" />
                </div>
                <p className="text-gray-600">Scanning for devices...</p>
              </div>

              <div className="space-y-3">
                {["Radar Sensor #001", "Radar Sensor #002", "Radar Sensor #003"].map((device, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="font-medium text-gray-800">{device}</p>
                        <p className="text-sm text-gray-500">Signal: Strong</p>
                      </div>
                    </div>
                    <Button size="sm" style={{ backgroundColor: app.primaryColor }}>
                      Connect
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case "emergency":
        return (
          <div className={`${baseClasses} bg-red-50`}>
            <div className="bg-red-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">Emergency Center</h1>
                <Shield className="h-6 w-6" />
              </div>
            </div>

            <div className="flex-1 p-4 space-y-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-12 w-12 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Emergency SOS</h2>
                <p className="text-gray-600 mb-4">Tap to send emergency alert</p>
                <button className="w-full py-4 bg-red-600 text-white rounded-lg font-semibold">ACTIVATE SOS</button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-xs text-gray-500">Enabled</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Contacts</p>
                  <p className="text-xs text-gray-500">5 Added</p>
                </div>
              </div>
            </div>
          </div>
        )

      case "feed":
        return (
          <div className={`${baseClasses} bg-gray-50`}>
            <div className="bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-800">Startup Feed</h1>
                <Search className="h-6 w-6 text-gray-600" />
              </div>
            </div>

            <div className="flex-1 p-4 space-y-4">
              {[
                { name: "TechStart AI", funding: "$2.5M", stage: "Series A" },
                { name: "GreenEnergy Co", funding: "$1.8M", stage: "Seed" },
                { name: "HealthTech Plus", funding: "$5.2M", stage: "Series B" },
              ].map((startup, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-gray-800">{startup.name}</h3>
                      <p className="text-sm text-gray-500">{startup.stage}</p>
                    </div>
                    <Badge variant="secondary">{startup.funding}</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Innovative solution transforming the industry with cutting-edge technology...
                  </p>
                  <div className="flex space-x-2">
                    <Button size="sm" style={{ backgroundColor: app.primaryColor }}>
                      View Pitch
                    </Button>
                    <Button size="sm" variant="outline">
                      Connect
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      default:
        return (
          <div className={`${baseClasses} items-center justify-center bg-gray-100`}>
            <div className="text-center">
              <Smartphone className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">{screen.name}</h3>
              <p className="text-gray-500">{screen.description}</p>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{app.icon}</span>
            <div>
              <h2 className="text-xl font-bold text-gray-800">{app.title}</h2>
              <p className="text-sm text-gray-600">Interactive App Demo</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row h-[600px]">
          {/* Phone Mockup */}
          <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-6 py-2 bg-white text-black text-sm">
                    <span className="font-medium">9:41</span>
                    <div className="flex items-center space-x-1">
                      <Signal className="h-4 w-4" />
                      <Wifi className="h-4 w-4" />
                      <Battery className="h-4 w-4" />
                    </div>
                  </div>

                  {/* App Content */}
                  <div
                    className={`flex-1 transition-all duration-300 ${isAnimating ? "opacity-50 scale-95" : "opacity-100 scale-100"}`}
                  >
                    {renderMockupScreen(app.appScreens[currentScreen], app)}
                  </div>

                  {/* Navigation Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t flex items-center justify-center">
                    <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              {currentScreen > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full w-10 h-10 p-0 bg-white shadow-lg"
                  onClick={() => navigateScreen("prev")}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              )}

              {currentScreen < app.appScreens.length - 1 && (
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full w-10 h-10 p-0 bg-white shadow-lg"
                  onClick={() => navigateScreen("next")}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              )}
            </div>
          </div>

          {/* App Info Panel */}
          <div className="w-full lg:w-80 p-6 border-l bg-white overflow-y-auto">
            <div className="space-y-6">
              {/* Current Screen Info */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">{app.appScreens[currentScreen].name}</h3>
                <p className="text-sm text-gray-600">{app.appScreens[currentScreen].description}</p>
              </div>

              {/* Screen Navigation */}
              <div>
                <h4 className="font-medium text-gray-800 mb-3">App Screens</h4>
                <div className="space-y-2">
                  {app.appScreens.map((screen: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentScreen(index)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        currentScreen === index
                          ? "bg-blue-100 text-blue-700 border border-blue-200"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div className="font-medium text-sm">{screen.name}</div>
                      <div className="text-xs opacity-75">{screen.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-medium text-gray-800 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {app.tech.map((tech: string, index: number) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="font-medium text-gray-800 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {app.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t">
                <Button asChild className="w-full" style={{ backgroundColor: app.primaryColor }}>
                  <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View on Play Store
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppDemoModal
