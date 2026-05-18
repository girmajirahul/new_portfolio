# Rahul Girmaji — Developer Portfolio

Plain **React 18 + Vite + React Router + Tailwind CSS v4 + Framer Motion** portfolio.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  main.jsx              # Vite entry — mounts <App /> inside <BrowserRouter>
  App.jsx               # Route table
  index.css             # Tailwind v4 + design tokens
  pages/
    Home.jsx            # Composes all portfolio sections
  components/
    portfolio/          # Hero, About, Skills, Experience, Projects,
                        # Achievements, Contact, Navbar, Effects, ParticleField
  assets/
    profile.jpg
```

## Tech

- React 18
- Vite 5
- React Router DOM 6
- Tailwind CSS 4 (`@tailwindcss/vite` plugin — no `tailwind.config.js` needed; tokens live in `src/index.css`)
- Framer Motion
- Lucide React icons
- React Type Animation
