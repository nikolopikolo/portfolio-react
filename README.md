# Developer Portfolio Website

A modern, visually polished personal developer portfolio built with **React** and **Vite**.

## 🎨 Design Direction
- **Theme:** Near-black background (`#0D0F12`) with dark slate cards (`#13171D`).
- **Accent:** Subtle green highlight (`#38B273`).
- **Typography:** Inter for clean sans-serif text and Fira Code for developer monospaced code blocks.
- **Aesthetic:** Clean, minimal, modern developer aesthetic with subtle grid pattern, ambient glow, and hover transitions.
- **Responsiveness:** Fully responsive across mobile phones, tablets, and desktop displays.

---

## 🚀 Features & Components

1. **Navbar (`Navbar.jsx`)**
   - Brand logo with developer monogram.
   - Smooth scrolling to Home, About, Skills, Projects, and Contact sections.
   - Real-time active section highlighting based on scroll position.
   - Mobile-responsive slide-out navigation menu with accessible backdrop and body lock.

2. **Hero Section (`Hero.jsx` & `CodeWindow.jsx`)**
   - Headline: "Hey, I'm [Your Name]."
   - Subtitle: "Aspiring Software Developer."
   - Concise introduction and direct call-to-action buttons ("View My Projects", "Contact Me").
   - Interactive developer code window with tab switching (`developer.config.ts` vs `status.sh`), syntax highlighting, status indicators, and one-click copy.
   - Animated scroll-down indicator.

3. **About Me (`About.jsx` & `InfoCard.jsx`)**
   - Personal developer introduction and engineering philosophy.
   - Highlights of core values and clean code practices.
   - Reusable info cards:
     - **Currently Learning:** Kotlin Coroutines, Jetpack Compose, Advanced React.
     - **Main Interests:** Frontend engineering, native Android apps, offline utilities.
     - **What I'm Working On:** Android utilities and modular React interfaces.

4. **Skills (`Skills.jsx` & `SkillCard.jsx`)**
   - Reusable skill cards with icons and practice highlights.
   - Category filtering (All, Frontend, Programming, Mobile & Platforms, Tools).
   - Covers React, JavaScript, HTML5, CSS3, Kotlin, Python, Git, and Android Development.
   - Honest proficiency framing without exaggerated claims.

5. **Projects (`Projects.jsx` & `ProjectCard.jsx`)**
   - Responsive multi-column grid with subtle hover lift and accent glow effects.
   - **PixelGallery:** Android & Wear OS application for local image transfer over Wi-Fi ([GitHub](https://github.com/nikolopikolo/PixelGallery)).
   - **Fundory:** Personal budgeting and shopping cost calculator Android application ([GitHub](https://github.com/nikolopikolo/fundory)).
   - Includes feature bullets, tech stacks, repository links, and custom SVG mockups.

6. **Contact (`Contact.jsx`)**
   - Direct contact channels with one-click email copy (and tooltip feedback).
   - Direct GitHub and `mailto:` links.
   - Interactive contact message form with client-side validation and friendly confirmation feedback.

7. **Footer (`Footer.jsx`)**
   - Minimalist footer with copyright, navigation links, and smooth "Back to top" button.

---

## 🛠️ Quick Start

### Install dependencies
```bash
npm install
```

### Start the development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

---

## 📝 Customization

All personal details, project descriptions, skills, and links can be modified directly in:
```
src/data/portfolioData.js
```
Simply edit your name, contact email, social links, or add new projects and skills.
