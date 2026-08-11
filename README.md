<div align="center">

# 🌌 Fajrin Widianto — Portfolio
### **Full-Stack Developer & UI/UX Designer**

*An interactive, high-fidelity personal portfolio crafted using Next.js, Framer Motion, and WebGL, showcasing premium Apple HIG design concepts, interactive widgets, and fluid micro-interactions.*

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-20232a?style=for-the-badge&logo=react&logoColor=61dafb)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-007acc?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff00c8?style=for-the-badge&logo=framer&logoColor=white)](https://framer.com/motion)
[![WebGL](https://img.shields.io/badge/WebGL-2.0-990000?style=for-the-badge&logo=webgl&logoColor=white)](https://khronos.org/webgl)

</div>

---

## 🎨 Design Philosophy — Luminous Monolith
The portfolio is designed with a premium **Luminous Monolith** theme, inspired by **Apple's Human Interface Guidelines (HIG)** and modern glassmorphism. It leverages fine visual borders, soft glowing states, subtle background shaders, and satisfying spring physics to create an organic, tactile experience.

---

## ✨ Core Interactive Features

### 1. 📱 Scroll-Responsive Dynamic Island
An iOS-inspired floating navigation bar that morphs dynamically based on viewport actions:
*   **At Top**: Renders as a full glass navigation menu with links, theme toggles, and CTAs.
*   **Scrolled Down**: Collapses into a minimal black capsule pill containing a pulsing activity indicator.
*   **Tactile Expansion**: Hovering (desktop) or tapping (mobile) expands the pill back into navigation.
*   **Touchscreen Protection**: Configured with smart event checking to ignore emulated hover sticking on mobile devices.

### 2. 🎛️ Apple-Style Bento Grid
A pixel-perfect, 12-column asymmetric grid layout showcasing real engineering case studies and interactive widgets, with unified heights and flex-stretching cover mockups:
*   **Kaloriku (Capstone Project)**: Replaces placeholder items with a real DBS Foundation x Dicoding capstone, featuring a dedicated Backend description.
*   **SaaS Platform & E-commerce App**: Seamlessly proportioned grids.
*   **Collaboration Card**: Full-width footer CTA with active email link elements.

### 3. 🧩 Interactive Playground Widgets
*   **GitHub Activity Board**: A custom 12x7 contribution calendar containing 84 cells. Hovering over active cells reveals a tooltip with funny log commits.
*   **Terminal Sandbox**: A mock Bash test runner that runs unit tests asynchronously on tap, rendering incremental logs with a blinking cursor.

### 4. ⚡ Skill Glow Grid
A skill catalog grouped into Frontend, Backend, and Tooling. Hovering cards activates brand-specific neon glows (e.g. cyan for React, green for Node, orange-red for Git) while restoring grayscale icons back to full brand saturation.

### 5. 🌗 LERP WebGL Theme Transitions
*   **Sun/Moon Toggle**: An animated toggle using rotational springs (`stiffness: 320`) and scaling states.
*   **Shader Morphing**: Triggering light/dark mode triggers a Linear Interpolation (LERP) loop inside a custom GPU fragment shader, blending background colors smoothly over 0.5s instead of flipping instantly.

### 6. 📖 Challenge-Based Learning (CBL) Popups
Clicking on any project opens a premium overlay detailed in Apple's **Challenge-Based Learning** storytelling format:
*   **Overview**: Summary of the capstone project scope.
*   **Challenge**: The technical and architecture hurdles.
*   **Investigation**: Benchmarks and research methodologies.
*   **Solution (Act)**: Technical deployment details, APIs, and cloud deployments.
*   *Supports Esc-key closing, backdrop blur (`backdrop-filter: blur(16px)`), and scroll-locking.*

---

## 🛠️ Tech Stack & Services

| Category | Technologies |
| :--- | :--- |
| **Frontend Core** | React 19, Next.js 15 (App Router), TypeScript |
| **Styling & UI** | CSS Modules (Vanilla), TailwindCSS, Apple HIG Glassmorphic Tokens |
| **Animation Engine** | Framer Motion (Spring-physics layout animations) |
| **Graphics & Shader** | WebGL 2.0 (Custom GLSL fragment shader, LERP animation) |
| **Backend & Databases** | Node.js, Express, Hapi, MySQL, Sequelize, REST APIs, JWT |
| **DevOps & Cloud** | Google Cloud Platform (Cloud Run, Cloud SQL, Cloud Storage), Docker |

---

## 📂 Folder Structure

```
personal-portfolio/
├── public/                 # Static assets (fajrin.png, kaloriku.jpg, etc.)
└── src/
    └── app/
        ├── hero/component/          # Hero section component & styling
        ├── about/component/         # About section component & styling
        ├── expertise/component/     # Expertise/Skills grid component
        ├── works/component/         # Bento Grid project showcase & popups
        ├── experience/component/    # Resume & experience timeline component
        ├── navbar/component/        # Dynamic Island floating navigation
        ├── footer/component/        # Sub-footer copyright & social section
        ├── webgl/component/         # GPU GLSL canvas background program
        ├── globals.css              # CSS Variables, Design System Tokens, and Resets
        ├── layout.tsx               # Main layout wrapper
        ├── page.tsx                 # Portfolio Page layout aggregator
        └── page.module.css          # Page wrapper styling
```

---

## 🚀 Getting Started

### Prerequisites
*   Node.js (v18.0.0 or higher)
*   npm or pnpm

### Installation
1.  Clone the repository:
    ```bash
    git clone https://github.com/fajrinTech/Fajrin-Widianto.git
    cd Fajrin-Widianto
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Run Locally
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Build & Export
Compile and verify the Next.js production build:
```bash
npm run build
```
The optimized static bundle will be exported to the `.next` directory.

---

<div align="center">
Designed and developed by <strong>Fajrin Widianto</strong>. © 2026.
</div>
