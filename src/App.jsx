// Globale Layout-Komponenten
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";

// Seiten-/Sektionen
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { Impressum } from "@/sections/Impressum";
import { Legal } from "@/sections/Legal";


// Routing + Hilfs-Komponente
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      {/* Sorgt dafür, dass beim Routen die Seite nach oben scrollt */}
      <ScrollToTop />

      {/* Haupt-Layout: Navbar oben, Footer unten, Router-Inhalte in der Mitte */}
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />

        <main>
          {/* App-Routen: Home-Seite besteht aus mehreren Sektionen */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* Startseite-Sektionen */}
                  <Hero />
                  <About />
                  <Projects />
                  <Contact />
                </>
              }
            />

            {/* Rechtliche Seiten als eigene Routen (klein geschriebene Pfade) */}
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
