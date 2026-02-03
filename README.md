# Eight Agency - BPO Operational Excellence

A professional, high-performance landing page for **Eight Agency**, a premier BPO solutions provider. This project features a modern, responsive user interface designed to convert, built with Next.js and a custom light-theme design system.

## 🚀 Features

- **Professional Design System**: A clean **Light Theme** aesthetic with white backgrounds, sharp black typography, and neon green (`#a8e005`) accents.
- **Modern UI Components**:
  - **Glassmorphism Navbar**: Floating navigation with frost/blur effects.
  - **Interactive Cards**: Hover-lift effects and subtle shadows for Team, Services, and Industries.
  - **Smooth Animations**: Intersection observer-based fade-in animations for all sections.
- **Fully Responsive**: Optimized for generic mobile, tablet, and desktop viewports.
- **Performance**: High lighthouse scores thanks to Next.js optimization and lightweight CSS.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: Vanilla CSS with CSS Variables (`globals.css`) for a robust Design System.
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (`react-icons/fa`)
- **Fonts**: [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts)

## 📁 Project Structure

```bash
📦 src
 ┣ 📂 app
 ┃ ┣ 📜 globals.css      # Core Design System (Variables, Utilities, Reset)
 ┃ ┣ 📜 layout.tsx       # Root layout with fonts and metadata
 ┃ ┗ 📜 page.tsx         # Main landing page
 ┣ 📂 components
 ┃ ┣ 📜 Navbar.tsx       # Floating glass header
 ┃ ┣ 📜 Hero.tsx         # Hero section with 3D-tilt image & stats
 ┃ ┣ 📜 About.tsx        # Company overview with grid layout
 ┃ ┣ 📜 Services.tsx     # Services list & CTA
 ┃ ┣ 📜 Industries.tsx   # Industry cards
 ┃ ┣ 📜 Process.tsx      # Step-by-step process flow
 ┃ ┣ 📜 Team.tsx         # Team member grid
 ┃ ┣ 📜 Testimonials.tsx # Client success stories
 ┃ ┗ 📜 Footer.tsx       # Multi-column footer with newsletter
```

## 🎨 Design System

The project uses a **CSS Variable** based system defined in `src/app/globals.css`.

### Colors (Light Theme)
- **Background**: `#ffffff` (White)
- **Foreground**: `#0a0a0a` (Deep Black)
- **Primary**: `#a8e005` (Neon Green)
- **Surface**: `#f4f4f5` (Light Gray)

### Utilities
- `.glass`: Frosted glass effect.
- `.card`: Standard card container with hover lift.
- `.text-primary-gradient`: Gradient text for headings.
- `.section-padding`: Standardized vertical spacing.

## ⚡ Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

3. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## 📝 License

This project is proprietary to Eight Agency.
"# EightCompany" 
