# KVolt Website & Documentation ⚡

The official landing page and documentation site for **KVolt v2.3.0** (production-ready).

![KVolt Hero](/public/mascot-with-transparent-background.png)

## 🚀 Overview

This project is a modern Single Page Application (SPA) built with **React 19** and **Vite**, designed to showcase the features of KVolt and provide comprehensive documentation for developers. It features a polished, mobile-first design with smooth animations and interactive elements.

## ✨ Features

*   **Modern Design**: Glassmorphism effects, gradient typography, and smooth transitions.
*   **Fully Responsive**:
    *   **Mobile Navigation**: Hamburger menu and sliding drawer for documentation.
    *   **Adaptive Layouts**: Optimized Hero, Features, and Performance sections for all screen sizes.
*   **Dark/Light Mode**: System-aware theme switching with persistent preferences.
*   **Interactive Documentation**:
    *   Sidebar navigation with category grouping.
    *   Code highlighting for Go snippets.
    *   Deep linking support.
*   **Performance First**: Built with Vite for instant HMR and optimized production builds.

## 🛠️ Tech Stack

*   **Framework**: [React 19](https://react.dev/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Routing**: [React Router v7](https://reactrouter.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Styling**: Vanilla CSS (CSS Modules approach) with CSS Variables.

## 📦 Getting Started

### Prerequisites

*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/go-kvolt/go-kvolt.github.io.git
    cd go-kvolt.github.io
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Building for Production

To create a production-ready build:

```bash
npm run build
```

The output will be generated in the `dist/` directory, ready to be deployed to GitHub Pages or any static host.

## 📂 Project Structure

```
src/
├── components/     # UI Components (Navbar, Hero, Features, etc.)
├── data/          # Documentation content (JSX files)
│   └── docs/      # Individual doc sections (intro, install, routing...)
├── pages/         # Route Components (Docs.jsx)
├── index.css      # flexible global styles & variables
└── main.jsx       # Entry point
```

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.

---

Created & maintained by Kaviraj Mani
