export const personalInfo = {
  name: "Nikolopikolo",
  greeting: "Hey, I'm Nikolopikolo.",
  role: "Aspiring Software Developer",
  shortBio:
    "Curious and dedicated aspiring software developer with a passion for building clean, user-centric software. Enthusiastic about modern web engineering, Android development, and local offline utilities.",
  location: "Earth (Open to Remote)",
  status: "Available for junior roles & open-source collaborations",
  email: "developer.contact@example.com",
  github: "https://github.com/nikolopikolo",
  linkedin: "https://linkedin.com",
};

export const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const aboutData = {
  paragraphs: [
    "I am an aspiring software developer with an enthusiastic interest in programming, computer systems, and modern software development. My curiosity centers on how software can solve practical everyday problems while remaining clean, robust, and accessible.",
    "I enjoy taking ideas from initial concept to functioning applications—whether that means crafting responsive interfaces with React, engineering native mobile experiences with Kotlin and Android SDK, or designing offline-first tools. I believe in continuous practice, reading documentation thoroughly, and writing code with clarity and maintainability.",
  ],
  milestones: [
    {
      period: "Early Steps",
      title: "Foundations in Code",
      description: "Began by studying programming logic, data structures, and scripting in Python and JavaScript.",
    },
    {
      period: "Mobile Focus",
      title: "Native Android & Kotlin",
      description: "Adopted Kotlin and Android SDK, building native applications with Room database and Material Design 3.",
    },
    {
      period: "Local Utilities",
      title: "PixelGallery & Fundory",
      description: "Engineered local Wi-Fi transfer for Android/Wear OS (PixelGallery) and offline-first budgeting (Fundory).",
    },
    {
      period: "Present Day",
      title: "Modern React & Web Architecture",
      description: "Expanding into React component architectures, state management patterns, and performant web applications.",
    },
  ],
  cards: [
    {
      id: "learning",
      title: "Currently Learning",
      description: "Deepening knowledge of Kotlin Coroutines, Jetpack Compose, and advanced React design patterns and state management.",
      icon: "GraduationCap",
      tag: "Focus Area",
    },
    {
      id: "interests",
      title: "Main Interests",
      description: "Front-end engineering, native Android mobile applications, clean component architecture, and local network utilities.",
      icon: "Code2",
      tag: "Exploration",
    },
    {
      id: "working-on",
      title: "What I'm Working On",
      description: "Refining personal Android utilities, developing modular React interfaces, and enhancing local Wi-Fi media synchronization.",
      icon: "Layers",
      tag: "In Progress",
    },
  ],
};

export const skillCategories = [
  {
    id: "frontend",
    name: "Frontend Development",
    description: "Building responsive, modern, and accessible user interfaces for the web.",
    skills: [
      { name: "React", level: "Core Framework", icon: "Code", highlight: "Components & Hooks" },
      { name: "JavaScript", level: "ES6+", icon: "FileCode", highlight: "Modern syntax & Async" },
      { name: "HTML5", level: "Semantic Markup", icon: "Layout", highlight: "Accessibility & SEO" },
      { name: "CSS3", level: "Modern CSS", icon: "Palette", highlight: "Flexbox, Grid & Animations" },
    ],
  },
  {
    id: "programming",
    name: "Programming Languages",
    description: "General-purpose languages used for application logic, scripting, and development.",
    skills: [
      { name: "Kotlin", level: "Intermediate", icon: "Cpu", highlight: "Android & Coroutines" },
      { name: "Python", level: "Foundational", icon: "Terminal", highlight: "Scripting & Algorithms" },
      { name: "JavaScript", level: "Intermediate", icon: "FileCode", highlight: "Web & DOM Logic" },
    ],
  },
  {
    id: "mobile",
    name: "Mobile & Platforms",
    description: "Developing native applications and utilities for handheld and wearable hardware.",
    skills: [
      { name: "Android Development", level: "Practical", icon: "Smartphone", highlight: "Android SDK & Jetpack" },
      { name: "Wear OS", level: "Companion Apps", icon: "Watch", highlight: "Wearable Sync & UI" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Workflow",
    description: "Essential version control and developer environments used daily.",
    skills: [
      { name: "Git", level: "Version Control", icon: "GitBranch", highlight: "Branching & Workflow" },
      { name: "GitHub", level: "Collaboration", icon: "Github", highlight: "Repositories & PRs" },
      { name: "Android Studio", level: "IDE", icon: "Laptop", highlight: "Profiling & Emulators" },
      { name: "Vite", level: "Build Tool", icon: "Zap", highlight: "Fast Bundling & HMR" },
    ],
  },
];

export const projectsData = [
  {
    id: "pixelgallery",
    title: "PixelGallery",
    badge: "Android & Wear OS",
    category: "Mobile Application",
    description:
      "An Android and Wear OS application for transferring and viewing images locally over Wi-Fi. Features zero-cloud peer-to-peer synchronization, responsive gallery layouts, and companion watch display mode.",
    features: [
      "Direct local Wi-Fi transfer without external servers",
      "Companion Wear OS tile and image viewer",
      "Low-latency image compression and preview caching",
    ],
    technologies: ["Kotlin", "Android SDK", "Wear OS", "Local Wi-Fi / Sockets", "Jetpack"],
    githubUrl: "https://github.com/nikolopikolo/PixelGallery",
    status: "Active Project",
    statusColor: "green",
    accentGlow: "rgba(56, 178, 115, 0.2)",
    iconName: "Image",
  },
  {
    id: "fundory",
    title: "Fundory",
    badge: "Personal Finance",
    category: "Android Application",
    description:
      "A personal budgeting and shopping cost calculator Android application designed to help track planned purchases, prevent overspending at checkout, and calculate cart totals with tax and discount adjustments.",
    features: [
      "Instant cart total calculation with tax and discount adjustments",
      "Clean Material Design 3 interface with dark mode",
      "Local offline data persistence with Room database",
    ],
    technologies: ["Kotlin", "Android Studio", "Material Design 3", "Room Database", "Architecture Components"],
    githubUrl: "https://github.com/nikolopikolo/fundory",
    status: "Completed Prototype",
    statusColor: "blue",
    accentGlow: "rgba(59, 130, 246, 0.2)",
    iconName: "Wallet",
  },
];

export const heroCodeSnippet = {
  fileName: "developer.config.ts",
  language: "typescript",
  code: `// Aspiring Software Developer Profile
const developer = {
  name: "Nikolopikolo",
  role: "Aspiring Software Developer",
  focus: ["React", "Kotlin", "Android", "Clean Code"],
  passion: "Building useful, high-craft software",
  traits: [
    "Fast learner",
    "Detail-oriented",
    "Systems thinker"
  ],
  currentlyBuilding: [
    "PixelGallery (Android/Wear OS)",
    "Fundory (Budget App)"
  ],
  status: "Ready to collaborate"
};

export default developer;`,
};

