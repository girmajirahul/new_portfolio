import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";

/**
 * Root application component.
 *
 * Project structure:
 *   src/
 *     main.jsx             <- Vite entry, mounts <App /> inside <BrowserRouter>
 *     App.jsx              <- this file (route table)
 *     pages/               <- top-level pages
 *       Home.jsx
 *     components/
 *       portfolio/         <- portfolio sections (Hero, About, Projects, ...)
 *     assets/              <- images and static assets
 *     index.css            <- global styles + Tailwind v4
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
