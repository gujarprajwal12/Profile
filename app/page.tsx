"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Smartphone,
  Users,
  Award,
  Calendar,
  MapPin,
  Download,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import AppDemoModal from "@/components/app-demo-modal"

export default function AndroidPortfolio() {
  const [selectedApp, setSelectedApp] = useState<any>(null)
  const [isAppModalOpen, setIsAppModalOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownloadCV = () => {
    try {
      // First try to download the PDF file
      const link = document.createElement("a")
      link.href = "/Android-Dev-Portfolio-Animated/resume/Prajwal_Gujar_Android_Developer_Resume.pdf" // Adjusted path for basePath
      link.download = "Prajwal_Gujar_Android_Developer_Resume.pdf"
      link.target = "_blank"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      // Fallback: Open email to request resume
      const subject = encodeURIComponent("Resume Request - Prajwal Gujar")
      const body = encodeURIComponent("Hi Prajwal,\n\nI would like to request your resume for review.\n\nThank you!")
      window.open(`mailto:gujarprajwal12@gmail.com?subject=${subject}&body=${body}`, "_blank")
    }
  }

  const openAppDemo = (project: any) => {
    setSelectedApp(project)
    setIsAppModalOpen(true)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { name: "Kotlin", level: 90, category: "Language" },
    { name: "Java", level: 75, category: "Language" },
    { name: "Jetpack Compose", level: 85, category: "UI Framework" },
    { name: "Android SDK", level: 90, category: "Framework" },
    { name: "MVVM Architecture", level: 85, category: "Architecture" },
    { name: "Room Database", level: 80, category: "Database" },
    { name: "Retrofit", level: 85, category: "Networking" },
    { name: "Firebase", level: 90, category: "Backend" },
    { name: "Coroutines", level: 80, category: "Concurrency" },
    { name: "Material Design", level: 85, category: "Design" },
  ]

  const projects = [
    {
      title: "Autosgrid",
      description: "Comprehensive automotive platform with real-time updates and secure authentication",
      tech: ["Kotlin", "Firebase", "MVVM", "Material Design"],
      features: [
        "Real-time vehicle tracking and updates",
        "Firebase authentication and push notifications",
        "Role-based access control",
        "Secure data handling and encryption",
      ],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.autosgrid",
      icon: "🚗",
      appScreens: [
        {
          name: "Splash Screen",
          description: "App loading with brand animation",
          mockup: "splash",
        },
        {
          name: "Login",
          description: "Secure authentication with Firebase",
          mockup: "login",
        },
        {
          name: "Dashboard",
          description: "Real-time vehicle tracking overview",
          mockup: "dashboard",
        },
        {
          name: "Vehicle Details",
          description: "Detailed vehicle information and controls",
          mockup: "details",
        },
      ],
      primaryColor: "#1976D2",
      accentColor: "#FFC107",
    },
    {
      title: "Tekelek Radar",
      description: "IoT-based application for interacting with radar sensors and device management",
      tech: ["Kotlin", "Coroutines", "Retrofit", "Room", "BLE"],
      features: [
        "Device activation and diagnostics",
        "Bluetooth Low Energy communication",
        "35% API response time optimization",
        "Real-time sensor data processing",
      ],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.tek889",
      icon: "📡",
      appScreens: [
        {
          name: "Device Scan",
          description: "BLE device discovery interface",
          mockup: "scan",
        },
        {
          name: "Device Control",
          description: "Radar sensor control panel",
          mockup: "control",
        },
        {
          name: "Analytics",
          description: "Real-time sensor data visualization",
          mockup: "analytics",
        },
        {
          name: "Settings",
          description: "Device configuration and preferences",
          mockup: "settings",
        },
      ],
      primaryColor: "#2E7D32",
      accentColor: "#FF5722",
    },
    {
      title: "ArunPol",
      description: "Security-focused application with SOS system and role-based access",
      tech: ["Kotlin", "Firebase", "Location Services"],
      features: [
        "Emergency SOS system implementation",
        "Role-based access and permissions",
        "Secure backend communication",
        "Real-time location tracking",
      ],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.arunachalpradesh.mobileapp",
      icon: "⏱️",
      appScreens: [
        {
          name: "Emergency Dashboard",
          description: "Quick access to emergency features",
          mockup: "emergency",
        },
        {
          name: "SOS Alert",
          description: "Emergency alert system interface",
          mockup: "sos",
        },
        {
          name: "Location Tracking",
          description: "Real-time location monitoring",
          mockup: "location",
        },
        {
          name: "Profile",
          description: "User profile and role management",
          mockup: "profile",
        },
      ],
      primaryColor: "#D32F2F",
      accentColor: "#FFA000",
    },
    {
      title: "Unicorn",
      description: "Funding and pitch deck platform with clean architecture",
      tech: ["Kotlin", "Firebase", "Clean Architecture"],
      features: [
        "Clean Architecture implementation",
        "Scalable codebase design",
        "User feedback analytics integration",
        "Modern UI/UX design patterns",
      ],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.unicorn.apps",
      icon: "🦄",
      appScreens: [
        {
          name: "Startup Feed",
          description: "Browse funding opportunities",
          mockup: "feed",
        },
        {
          name: "Pitch Deck",
          description: "Create and manage pitch presentations",
          mockup: "pitch",
        },
        {
          name: "Investor Profile",
          description: "Connect with potential investors",
          mockup: "investor",
        },
        {
          name: "Analytics",
          description: "Track pitch performance metrics",
          mockup: "metrics",
        },
      ],
      primaryColor: "#7B1FA2",
      accentColor: "#E91E63",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-slate-900">Prajwal Gujar</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["home", "about", "experience", "skills", "projects", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item
                        ? "bg-blue-100 text-blue-700"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
              {["home", "about", "experience", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    activeSection === item
                      ? "bg-blue-100 text-blue-700"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Prajwal Gujar
                  </span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-700">Android Developer</h2>
                <p className="text-lg text-slate-600 max-w-2xl">
                  Passionate Android Developer with 3+ years of experience in designing, developing, and optimizing
                  high-performance mobile applications using Kotlin, Jetpack Compose, and modern Android architecture
                  patterns.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Let's Connect
                </Button>
                <Button
                  onClick={handleDownloadCV}
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg bg-transparent"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>

              <div className="flex space-x-6">
                <Link
                  href="https://github.com/gujarprajwal12"
                  target="_blank"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://linkedin.com/in/prajwal-gujar-a3303913b"
                  target="_blank"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="mailto:gujarprajwal12@gmail.com"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Smartphone className="h-32 w-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Dedicated Android developer with a passion for creating exceptional mobile experiences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                Hello! I'm Prajwal Shekhar Gujar, an experienced Android Developer with over three years of hands-on
                experience in mobile application development. I specialize in creating robust, scalable, and
                user-friendly Android applications using modern development practices.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                My expertise spans across Kotlin, Jetpack Compose, MVVM architecture, and performance optimization. I'm
                passionate about staying up-to-date with the latest Android technologies and best practices to deliver
                exceptional user experiences.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">3+</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">8+</div>
                  <div className="text-slate-600">Apps Published</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-slate-700">Maharashtra, India</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-slate-700">gujarprajwal12@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-slate-700">+91 7040452312</span>
                  </div>
                  <Separator className="my-4" />
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Native Android</Badge>
                      <Badge variant="secondary">Kotlin</Badge>
                      <Badge variant="secondary">Jetpack Compose</Badge>
                      <Badge variant="secondary">MVVM</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Professional Journey</h2>
            <p className="text-lg text-slate-600">My career progression and key achievements</p>
          </div>

          <div className="space-y-8">
            <Card className="overflow-hidden shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle className="text-xl">Android Developer - Freelance</CardTitle>
                    <CardDescription className="text-blue-100">Self-Employed</CardDescription>
                  </div>
                  <div className="flex items-center text-blue-100 mt-2 sm:mt-0">
                    <Calendar className="h-4 w-4 mr-2" />
                    2024 - Present
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Developed self-initiated Android applications using Kotlin, MVVM, Room Database, and Coroutines
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Created sample apps integrating Retrofit, Firebase (Auth, FCM), and Google Maps API
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Used Jetpack Compose and Material Design 3 to prototype modern UI components
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Published projects on GitHub with comprehensive technical documentation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-green-500 to-teal-600 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle className="text-xl">Android Developer</CardTitle>
                    <CardDescription className="text-green-100">Barquecon Technologies</CardDescription>
                  </div>
                  <div className="flex items-center text-green-100 mt-2 sm:mt-0">
                    <Calendar className="h-4 w-4 mr-2" />
                    2021 - 2024
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Developed and deployed 5+ Android applications with scalable architectures
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Reduced app crash rates by 20% through efficient exception handling and ANR resolution
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Optimized API handling and database performance, improving app responsiveness by 30%
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Mentored 3 junior developers and improved team productivity by 15%
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle className="text-xl">Bachelor of Engineering</CardTitle>
                    <CardDescription className="text-purple-100">Computer Engineering - AVCOE</CardDescription>
                  </div>
                  <div className="flex items-center text-purple-100 mt-2 sm:mt-0">
                    <Calendar className="h-4 w-4 mr-2" />
                    2015 - 2019
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-slate-700">
                  Graduated from Amrutvahini College of Engineering (AVCOE), Sangamner, Maharashtra. Built a strong
                  foundation in computer science fundamentals, software engineering principles, and mobile application
                  development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
            <p className="text-lg text-slate-600">Technologies and tools I work with</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-slate-50 to-blue-50"
              >
                <CardContent className="p-0">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-slate-900">{skill.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {skill.category}
                    </Badge>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-slate-600">{skill.level}%</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <CardContent className="p-0">
                <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Clean Code</h3>
                <p className="text-slate-600">
                  Writing maintainable, readable, and efficient code following best practices
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 border-0">
              <CardContent className="p-0">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Team Collaboration</h3>
                <p className="text-slate-600">
                  Effective communication and collaboration in agile development environments
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-0">
              <CardContent className="p-0">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Problem Solving</h3>
                <p className="text-slate-600">
                  Analytical thinking and creative solutions to complex technical challenges
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600">Showcasing my best Android development work</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{project.icon}</span>
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-blue-100">{project.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-slate-700">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 space-y-3">
                      <Button
                        onClick={() => openAppDemo(project)}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        <Smartphone className="mr-2 h-4 w-4" />
                        View App Demo
                      </Button>
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <Link href={project.playStoreUrl} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Play Store
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Let's Connect</h2>
            <p className="text-lg text-slate-600">Ready to discuss your next Android project?</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">Get in Touch</h3>
                <p className="text-lg text-slate-700 mb-8">
                  I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                  want to say hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <Link href="mailto:gujarprajwal12@gmail.com" className="text-blue-600 hover:text-blue-700">
                      gujarprajwal12@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Phone</h4>
                    <Link href="tel:+917040452312" className="text-green-600 hover:text-green-700">
                      +91 7040452312
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">WhatsApp</h4>
                    <Link
                      href="https://wa.me/917040452312?text=Hello%2C%20I%20want%20to%20connect%20with%20you"
                      target="_blank"
                      className="text-purple-600 hover:text-purple-700"
                    >
                      Chat on WhatsApp
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex space-x-6 pt-6">
                <Link
                  href="https://github.com/gujarprajwal12"
                  target="_blank"
                  className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors"
                >
                  <Github className="h-6 w-6 text-slate-700" />
                </Link>
                <Link
                  href="https://linkedin.com/in/prajwal-gujar-a3303913b"
                  target="_blank"
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-blue-700" />
                </Link>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <Button
                  onClick={handleDownloadCV}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download My Resume
                </Button>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg">
              <CardContent className="p-0">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Project discussion"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Prajwal Gujar</h3>
            <p className="text-slate-400 mb-6">Android Developer | Kotlin Enthusiast | Mobile App Architect</p>

            <div className="flex justify-center space-x-6 mb-8">
              <Link
                href="https://github.com/gujarprajwal12"
                target="_blank"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/prajwal-gujar-a3303913b"
                target="_blank"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:gujarprajwal12@gmail.com"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>

            <div className="border-t border-slate-800 pt-8">
              <p className="text-slate-400">
                © 2025 Prajwal Gujar. All rights reserved. Built with Next.js and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
      {isAppModalOpen && selectedApp && <AppDemoModal app={selectedApp} onClose={() => setIsAppModalOpen(false)} />}
    </div>
  )
}
