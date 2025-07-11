document.addEventListener("DOMContentLoaded", () => {
  // --- Data Definitions (from original React component) ---
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
        { name: "Splash Screen", description: "App loading with brand animation", mockup: "splash" },
        { name: "Login", description: "Secure authentication with Firebase", mockup: "login" },
        { name: "Dashboard", description: "Real-time vehicle tracking overview", mockup: "dashboard" },
        { name: "Vehicle Details", description: "Detailed vehicle information and controls", mockup: "details" },
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
        { name: "Device Scan", description: "BLE device discovery interface", mockup: "scan" },
        { name: "Device Control", description: "Radar sensor control panel", mockup: "control" },
        { name: "Analytics", description: "Real-time sensor data visualization", mockup: "analytics" },
        { name: "Settings", description: "Device configuration and preferences", mockup: "settings" },
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
        { name: "Emergency Dashboard", description: "Quick access to emergency features", mockup: "emergency" },
        { name: "SOS Alert", description: "Emergency alert system interface", mockup: "sos" },
        { name: "Location Tracking", description: "Real-time location monitoring", mockup: "location" },
        { name: "Profile", description: "User profile and role management", mockup: "profile" },
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
        { name: "Startup Feed", description: "Browse funding opportunities", mockup: "feed" },
        { name: "Pitch Deck", description: "Create and manage pitch presentations", mockup: "pitch" },
        { name: "Investor Profile", description: "Connect with potential investors", mockup: "investor" },
        { name: "Analytics", description: "Track pitch performance metrics", mockup: "metrics" },
      ],
      primaryColor: "#7B1FA2",
      accentColor: "#E91E63",
    },
  ]

  // --- Utility Functions ---
  const getBasePath = () => {
    // This assumes the site is hosted at /Android-Dev-Portfolio-Animated/
    // Adjust if your hosting path is different (e.g., '/' for root domain)
    return "/Android-Dev-Portfolio-Animated"
  }

  const handleDownloadCV = () => {
    try {
      const link = document.createElement("a")
      link.href = `${getBasePath()}/resume/Prajwal_Gujar_Android_Developer_Resume.pdf`
      link.download = "Prajwal_Gujar_Android_Developer_Resume.pdf"
      link.target = "_blank"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      const subject = encodeURIComponent("Resume Request - Prajwal Gujar")
      const body = encodeURIComponent("Hi Prajwal,\n\nI would like to request your resume for review.\n\nThank you!")
      window.open(`mailto:gujarprajwal12@gmail.com?subject=${subject}&body=${body}`, "_blank")
    }
  }

  // --- Navigation Logic ---
  const navLinks = document.querySelectorAll(".nav-link")
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")
  const menuIcon = document.getElementById("menu-icon")
  const xIcon = document.getElementById("x-icon")
  let activeSection = "home" // Initial active section

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    // Close mobile menu after clicking a link
    if (mobileMenu.classList.contains("block")) {
      mobileMenu.classList.add("hidden")
      mobileMenu.classList.remove("block")
      menuIcon.classList.remove("hidden")
      xIcon.classList.add("hidden")
    }
  }

  const updateActiveSection = () => {
    const sections = ["home", "about", "experience", "skills", "projects", "contact"]
    const scrollPosition = window.scrollY + 100 // Offset for fixed header

    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const offsetTop = element.offsetTop
        const offsetHeight = element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          if (activeSection !== section) {
            activeSection = section
            navLinks.forEach((link) => {
              if (link.dataset.section === activeSection) {
                link.classList.add("bg-blue-100", "text-blue-700")
                link.classList.remove("text-slate-600", "hover:text-slate-900", "hover:bg-slate-100")
              } else {
                link.classList.remove("bg-blue-100", "text-blue-700")
                link.classList.add("text-slate-600", "hover:text-slate-900", "hover:bg-slate-100")
              }
            })
          }
          break
        }
      }
    }
  }

  // Initial active section update and scroll listener
  updateActiveSection()
  window.addEventListener("scroll", updateActiveSection)

  navLinks.forEach((link) => {
    link.addEventListener("click", () => scrollToSection(link.dataset.section))
  })

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
    mobileMenu.classList.toggle("block")
    menuIcon.classList.toggle("hidden")
    xIcon.classList.toggle("hidden")
  })

  // --- Dynamic Content Rendering ---

  // Render Skills
  const skillsContainer = document.getElementById("skills-container")
  if (skillsContainer) {
    skills.forEach((skill) => {
      const skillCard = `
                <div class="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg">
                    <div class="p-0">
                        <div class="flex justify-between items-center mb-3">
                            <h3 class="font-semibold text-slate-900">${skill.name}</h3>
                            <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-secondary text-secondary-foreground">
                                ${skill.category}
                            </span>
                        </div>
                        <div class="w-full bg-slate-200 rounded-full h-2 mb-2">
                            <div
                                class="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                                style="width: ${skill.level}%;"
                            ></div>
                        </div>
                        <div class="text-right text-sm text-slate-600">${skill.level}%</div>
                    </div>
                </div>
            `
      skillsContainer.insertAdjacentHTML("beforeend", skillCard)
    })
  }

  // Render Projects
  const projectsContainer = document.getElementById("projects-container")
  if (projectsContainer) {
    projects.forEach((project, index) => {
      const projectCard = `
                <div class="overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-0 rounded-lg">
                    <div class="p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
                        <div class="flex items-center space-x-3">
                            <span class="text-2xl">${project.icon}</span>
                            <div>
                                <h3 class="text-xl font-bold">${project.title}</h3>
                                <p class="text-blue-100">${project.description}</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-6 bg-white rounded-b-lg">
                        <div class="space-y-4">
                            <div>
                                <h4 class="font-semibold text-slate-900 mb-2">Key Features:</h4>
                                <ul class="space-y-1">
                                    ${project.features
                                      .map(
                                        (feature) => `
                                        <li class="flex items-start text-sm text-slate-700">
                                            <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                            ${feature}
                                        </li>
                                    `,
                                      )
                                      .join("")}
                                </ul>
                            </div>

                            <div>
                                <h4 class="font-semibold text-slate-900 mb-2">Technologies:</h4>
                                <div class="flex flex-wrap gap-2">
                                    ${project.tech
                                      .map(
                                        (tech) => `
                                        <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-secondary text-secondary-foreground">
                                            ${tech}
                                        </span>
                                    `,
                                      )
                                      .join("")}
                                </div>
                            </div>

                            <div class="pt-4 space-y-3">
                                <button class="view-app-demo-button w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-md" data-project-index="${index}">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone mr-2 h-4 w-4 inline-block align-middle"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                                    View App Demo
                                </button>
                                <a href="${project.playStoreUrl}" target="_blank" class="w-full bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100 py-3 rounded-md inline-flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link mr-2 h-4 w-4"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                                    Play Store
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `
      projectsContainer.insertAdjacentHTML("beforeend", projectCard)
    })
  }

  // --- App Demo Modal Logic ---
  const appDemoModalContainer = document.getElementById("app-demo-modal-container")
  let currentApp = null
  let currentScreenIndex = 0
  let isAnimatingScreen = false

  const renderMockupScreenContent = (screen, app) => {
    let content = ""
    switch (screen.mockup) {
      case "splash":
        content = `
                    <div class="w-full h-full flex flex-col items-center justify-center" style="background-color: ${app.primaryColor};">
                        <div class="text-6xl mb-4">${app.icon}</div>
                        <h1 class="text-2xl font-bold text-white mb-2">${app.title}</h1>
                        <div class="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                `
        break
      case "login":
        content = `
                    <div class="w-full h-full flex flex-col bg-gradient-to-br from-blue-50 to-white p-6">
                        <div class="flex-1 flex flex-col justify-center">
                            <div class="text-center mb-8">
                                <div class="text-4xl mb-4">${app.icon}</div>
                                <h2 class="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h2>
                                <p class="text-gray-600">Sign in to continue</p>
                            </div>
                            <div class="space-y-4">
                                <div class="bg-white rounded-lg p-4 shadow-sm border">
                                    <input type="email" placeholder="Email address" class="w-full outline-none text-gray-700" value="user@example.com" />
                                </div>
                                <div class="bg-white rounded-lg p-4 shadow-sm border">
                                    <input type="password" placeholder="Password" class="w-full outline-none text-gray-700" value="••••••••" />
                                </div>
                                <button class="w-full py-4 rounded-lg text-white font-semibold" style="background-color: ${app.primaryColor};">
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </div>
                `
        break
      case "dashboard":
        content = `
                    <div class="w-full h-full flex flex-col bg-gray-50">
                        <div class="bg-white p-4 shadow-sm">
                            <div class="flex items-center justify-between">
                                <h1 class="text-xl font-bold text-gray-800">Dashboard</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell h-6 w-6 text-gray-600"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                            </div>
                        </div>
                        <div class="flex-1 p-4 space-y-4">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="bg-white p-4 rounded-lg shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity h-8 w-8 mb-2" style="color: ${app.primaryColor};"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                                    <p class="text-sm text-gray-600">Active Vehicles</p>
                                    <p class="text-2xl font-bold text-gray-800">24</p>
                                </div>
                                <div class="bg-white p-4 rounded-lg shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin h-8 w-8 mb-2" style="color: ${app.accentColor};"><path d="M12 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="M12 22.5c-3.3 0-6-2.7-6-6.5S7.7 7.5 12 2.5c4.3 5 6 8.8 6 13.5s-2.7 6.5-6 6.5Z"/></svg>
                                    <p class="text-sm text-gray-600">Locations</p>
                                    <p class="text-2xl font-bold text-gray-800">8</p>
                                </div>
                            </div>
                            <div class="bg-white rounded-lg shadow-sm p-4">
                                <h3 class="font-semibold text-gray-800 mb-3">Recent Activity</h3>
                                <div class="space-y-3">
                                    ${[1, 2, 3]
                                      .map(
                                        (item) => `
                                        <div class="flex items-center space-x-3">
                                            <div class="w-2 h-2 rounded-full" style="background-color: ${app.primaryColor};"></div>
                                            <div class="flex-1">
                                                <p class="text-sm text-gray-800">Vehicle #${item} location updated</p>
                                                <p class="text-xs text-gray-500">2 minutes ago</p>
                                            </div>
                                        </div>
                                    `,
                                      )
                                      .join("")}
                                </div>
                            </div>
                        </div>
                    </div>
                `
        break
      case "scan":
        content = `
                    <div class="w-full h-full flex flex-col bg-gray-50">
                        <div class="bg-white p-4 shadow-sm">
                            <div class="flex items-center space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left h-6 w-6 text-gray-600"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                                <h1 class="text-xl font-bold text-gray-800">Device Scan</h1>
                            </div>
                        </div>
                        <div class="flex-1 p-4">
                            <div class="text-center mb-6">
                                <div class="relative w-32 h-32 mx-auto mb-4">
                                    <div class="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
                                    <div class="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bluetooth absolute inset-0 m-auto h-12 w-12 text-blue-500"><path d="m7 7 10 10L12 22V2l5 5-10 10"/></svg>
                                </div>
                                <p class="text-gray-600">Scanning for devices...</p>
                            </div>
                            <div class="space-y-3">
                                ${["Radar Sensor #001", "Radar Sensor #002", "Radar Sensor #003"]
                                  .map(
                                    (device, index) => `
                                    <div class="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
                                        <div class="flex items-center space-x-3">
                                            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                                            <div>
                                                <p class="font-medium text-gray-800">${device}</p>
                                                <p class="text-sm text-gray-500">Signal: Strong</p>
                                            </div>
                                        </div>
                                        <button class="px-4 py-2 text-sm rounded-md text-white" style="background-color: ${app.primaryColor};">
                                            Connect
                                        </button>
                                    </div>
                                `,
                                  )
                                  .join("")}
                            </div>
                        </div>
                    </div>
                `
        break
      case "emergency":
        content = `
                    <div class="w-full h-full flex flex-col bg-red-50">
                        <div class="bg-red-600 p-4 text-white">
                            <div class="flex items-center justify-between">
                                <h1 class="text-xl font-bold">Emergency Center</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield h-6 w-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            </div>
                        </div>
                        <div class="flex-1 p-4 space-y-6">
                            <div class="bg-white rounded-lg p-6 text-center shadow-sm">
                                <div class="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone h-12 w-12 text-red-600"><path d="M22 16.92v3a2 2 0 0 1-2.18 2.02 15.79 15.79 0 0 1-8.31-4.18 15.79 15.79 0 0 1-4.18-8.31A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                </div>
                                <h2 class="text-xl font-bold text-gray-800 mb-2">Emergency SOS</h2>
                                <p class="text-gray-600 mb-4">Tap to send emergency alert</p>
                                <button class="w-full py-4 bg-red-600 text-white rounded-lg font-semibold">ACTIVATE SOS</button>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="bg-white p-4 rounded-lg shadow-sm text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin h-8 w-8 text-blue-600 mx-auto mb-2"><path d="M12 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="M12 22.5c-3.3 0-6-2.7-6-6.5S7.7 7.5 12 2.5c4.3 5 6 8.8 6 13.5s-2.7 6.5-6 6.5Z"/></svg>
                                    <p class="text-sm font-medium">Location</p>
                                    <p class="text-xs text-gray-500">Enabled</p>
                                </div>
                                <div class="bg-white p-4 rounded-lg shadow-sm text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-8 w-8 text-green-600 mx-auto mb-2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                    <p class="text-sm font-medium">Contacts</p>
                                    <p class="text-xs text-gray-500">5 Added</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
        break
      case "feed":
        content = `
                    <div class="w-full h-full flex flex-col bg-gray-50">
                        <div class="bg-white p-4 shadow-sm">
                            <div class="flex items-center justify-between">
                                <h1 class="text-xl font-bold text-gray-800">Startup Feed</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search h-6 w-6 text-gray-600"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                            </div>
                        </div>
                        <div class="flex-1 p-4 space-y-4">
                            ${[
                              { name: "TechStart AI", funding: "$2.5M", stage: "Series A" },
                              { name: "GreenEnergy Co", funding: "$1.8M", stage: "Seed" },
                              { name: "HealthTech Plus", funding: "$5.2M", stage: "Series B" },
                            ]
                              .map(
                                (startup) => `
                                <div class="bg-white rounded-lg shadow-sm p-4">
                                    <div class="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 class="font-bold text-gray-800">${startup.name}</h3>
                                            <p class="text-sm text-gray-500">${startup.stage}</p>
                                        </div>
                                        <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-secondary text-secondary-foreground">
                                            ${startup.funding}
                                        </span>
                                    </div>
                                    <p class="text-sm text-gray-600 mb-3">
                                        Innovative solution transforming the industry with cutting-edge technology...
                                    </p>
                                    <div class="flex space-x-2">
                                        <button class="px-4 py-2 text-sm rounded-md text-white" style="background-color: ${app.primaryColor};">
                                            View Pitch
                                        </button>
                                        <button class="px-4 py-2 text-sm rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100">
                                            Connect
                                        </button>
                                    </div>
                                </div>
                            `,
                              )
                              .join("")}
                        </div>
                    </div>
                `
        break
      default:
        content = `
                    <div class="w-full h-full flex flex-col items-center justify-center bg-gray-100">
                        <div class="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone h-16 w-16 text-gray-400 mx-auto mb-4"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                            <h3 class="text-lg font-semibold text-gray-600 mb-2">${screen.name}</h3>
                            <p class="text-gray-500">${screen.description}</p>
                        </div>
                    </div>
                `
        break
    }
    return content
  }

  const openAppDemo = (project) => {
    currentApp = project
    currentScreenIndex = 0
    renderAppDemoModal()
  }

  const closeAppDemo = () => {
    appDemoModalContainer.innerHTML = "" // Clear modal content
    currentApp = null
  }

  const navigateScreen = (direction) => {
    if (isAnimatingScreen) return

    isAnimatingScreen = true
    const phoneScreenContent = document.getElementById("phone-screen-content")
    if (phoneScreenContent) {
      phoneScreenContent.classList.add("animating")
    }

    setTimeout(() => {
      if (direction === "next" && currentScreenIndex < currentApp.appScreens.length - 1) {
        currentScreenIndex++
      } else if (direction === "prev" && currentScreenIndex > 0) {
        currentScreenIndex--
      }
      renderAppDemoModalContent() // Re-render only the content part
      if (phoneScreenContent) {
        phoneScreenContent.classList.remove("animating")
      }
      isAnimatingScreen = false
    }, 150) // Match CSS transition duration
  }

  const renderAppDemoModalContent = () => {
    if (!currentApp) return

    const phoneScreenContent = document.getElementById("phone-screen-content")
    if (phoneScreenContent) {
      phoneScreenContent.innerHTML = renderMockupScreenContent(currentApp.appScreens[currentScreenIndex], currentApp)
    }

    const screenNavButtonsContainer = document.getElementById("screen-nav-buttons")
    if (screenNavButtonsContainer) {
      screenNavButtonsContainer.innerHTML = currentApp.appScreens
        .map(
          (screen, index) => `
                <button
                    class="w-full text-left p-3 rounded-lg transition-colors screen-nav-button ${currentScreenIndex === index ? "bg-blue-100 text-blue-700 border border-blue-200" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}"
                    data-screen-index="${index}"
                >
                    <div class="font-medium text-sm">${screen.name}</div>
                    <div class="text-xs opacity-75">${screen.description}</div>
                </button>
            `,
        )
        .join("")

      screenNavButtonsContainer.querySelectorAll(".screen-nav-button").forEach((button) => {
        button.addEventListener("click", (e) => {
          currentScreenIndex = Number.parseInt(e.currentTarget.dataset.screenIndex)
          renderAppDemoModalContent()
        })
      })
    }

    const currentScreenInfo = document.getElementById("current-screen-info")
    if (currentScreenInfo) {
      currentScreenInfo.innerHTML = `
                <h3 class="font-semibold text-gray-800 mb-2">${currentApp.appScreens[currentScreenIndex].name}</h3>
                <p class="text-sm text-gray-600">${currentApp.appScreens[currentScreenIndex].description}</p>
            `
    }

    const prevButton = document.getElementById("modal-prev-button")
    const nextButton = document.getElementById("modal-next-button")

    if (prevButton) prevButton.style.display = currentScreenIndex > 0 ? "flex" : "none"
    if (nextButton) nextButton.style.display = currentScreenIndex < currentApp.appScreens.length - 1 ? "flex" : "none"
  }

  const renderAppDemoModal = () => {
    if (!currentApp) return

    const modalHtml = `
            <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                    <!-- Modal Header -->
                    <div class="flex items-center justify-between p-6 border-b">
                        <div class="flex items-center space-x-3">
                            <span class="text-2xl">${currentApp.icon}</span>
                            <div>
                                <h2 class="text-xl font-bold text-gray-800">${currentApp.title}</h2>
                                <p class="text-sm text-gray-600">Interactive App Demo</p>
                            </div>
                        </div>
                        <button id="modal-close-button" class="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-5 w-5"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </button>
                    </div>

                    <div class="flex flex-col lg:flex-row flex-1">
                        <!-- Phone Mockup -->
                        <div class="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 to-blue-50">
                            <div class="relative">
                                <!-- Phone Frame -->
                                <div class="w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                                    <div class="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                                        <!-- Status Bar -->
                                        <div class="flex items-center justify-between px-6 py-2 bg-white text-black text-sm">
                                            <span class="font-medium">9:41</span>
                                            <div class="flex items-center space-x-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-signal h-4 w-4"><path d="M2 20h.01"/><path d="M7 20h.01"/><path d="M12 20h.01"/><path d="M17 20h.01"/><path d="M22 20h.01"/></svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wifi h-4 w-4"><path d="M12 18V12"/><path d="M4.93 10.93a6.6 6.6 0 0 1 0-9.9"/><path d="M19.07 10.93a6.6 6.6 0 0 0 0-9.9"/><path d="M2 14c6.67-1.67 13.33-1.67 20 0"/><path d="M1.5 17.5c4.5-1.5 9.5-1.5 14 0"/></svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-battery h-4 w-4"><rect width="16" height="10" x="2" y="7" rx="2" ry="2"/><line x1="22" x2="22" y1="11" y2="13"/></svg>
                                            </div>
                                        </div>

                                        <!-- App Content -->
                                        <div id="phone-screen-content" class="flex-1 phone-mockup-screen">
                                            <!-- Content will be rendered here by JS -->
                                        </div>

                                        <!-- Navigation Bar -->
                                        <div class="absolute bottom-0 left-0 right-0 h-16 bg-white border-t flex items-center justify-center">
                                            <div class="w-32 h-1 bg-gray-300 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Navigation Arrows -->
                                <button id="modal-prev-button" class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full w-10 h-10 p-0 bg-white shadow-lg flex items-center justify-center" style="display: none;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left h-5 w-5"><path d="m15 18-6-6 6-6"/></svg>
                                </button>
                                <button id="modal-next-button" class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full w-10 h-10 p-0 bg-white shadow-lg flex items-center justify-center" style="display: none;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-5 w-5"><path d="m9 18 6-6-6-6"/></svg>
                                </button>
                            </div>
                        </div>

                        <!-- App Info Panel -->
                        <div class="w-full lg:w-80 p-6 border-l bg-white overflow-y-auto">
                            <div class="space-y-6">
                                <!-- Current Screen Info -->
                                <div id="current-screen-info">
                                    <!-- Content will be rendered here by JS -->
                                </div>

                                <!-- Screen Navigation -->
                                <div>
                                    <h4 class="font-medium text-gray-800 mb-3">App Screens</h4>
                                    <div id="screen-nav-buttons" class="space-y-2">
                                        <!-- Buttons will be rendered here by JS -->
                                    </div>
                                </div>

                                <!-- Technologies -->
                                <div>
                                    <h4 class="font-medium text-gray-800 mb-3">Technologies Used</h4>
                                    <div class="flex flex-wrap gap-2">
                                        ${currentApp.tech
                                          .map(
                                            (tech) => `
                                            <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-secondary text-secondary-foreground">
                                                ${tech}
                                            </span>
                                        `,
                                          )
                                          .join("")}
                                    </div>
                                </div>

                                <!-- Key Features -->
                                <div>
                                    <h4 class="font-medium text-gray-800 mb-3">Key Features</h4>
                                    <ul class="space-y-2">
                                        ${currentApp.features
                                          .map(
                                            (feature) => `
                                            <li class="flex items-start text-sm text-gray-600">
                                                <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                                ${feature}
                                            </li>
                                        `,
                                          )
                                          .join("")}
                                    </ul>
                                </div>

                                <!-- Action Buttons -->
                                <div class="space-y-3 pt-4 border-t">
                                    <a href="${currentApp.playStoreUrl}" target="_blank" rel="noopener noreferrer" class="w-full py-3 rounded-md text-white inline-flex items-center justify-center" style="background-color: ${currentApp.primaryColor};">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link mr-2 h-4 w-4"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                                        View on Play Store
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    appDemoModalContainer.innerHTML = modalHtml

    // Add event listeners to modal elements
    document.getElementById("modal-close-button").addEventListener("click", closeAppDemo)
    document.getElementById("modal-prev-button").addEventListener("click", () => navigateScreen("prev"))
    document.getElementById("modal-next-button").addEventListener("click", () => navigateScreen("next"))

    renderAppDemoModalContent() // Render initial screen content and navigation
  }

  // --- Event Listeners for Main Page Buttons ---
  document.getElementById("connect-button").addEventListener("click", () => scrollToSection("contact"))
  document.getElementById("download-cv-button").addEventListener("click", handleDownloadCV)
  document.getElementById("download-resume-contact-button").addEventListener("click", handleDownloadCV)

  document.querySelectorAll(".view-app-demo-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const projectIndex = Number.parseInt(e.currentTarget.dataset.projectIndex)
      openAppDemo(projects[projectIndex])
    })
  })
})
