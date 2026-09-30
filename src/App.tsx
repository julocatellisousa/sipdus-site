import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ResearchQuestion from "./components/ResearchQuestion";
import HowItWorks from "./components/HowItWorks";
import Technology from "./components/Technology";
import Accessibility from "./components/Accessibility";
import Research from "./components/Research";
import Team from "./components/Team";
import Footer from "./components/Footer";
import AccessibilityMenu from "./components/AccessibilityMenu";
import VLibras from "./components/VLibras";

function ColorVisionFilters() {
  return (
    <svg
      width="0"
      height="0"
      style={{
        position: "absolute",
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      <defs>
        {/* PROTANOPIA */}
        <filter id="filter-protanopia">
          <feColorMatrix
            type="matrix"
            values="
              0.567 0.433 0     0 0
              0.558 0.442 0     0 0
              0     0.242 0.758 0 0
              0     0     0     1 0
            "
          />
        </filter>

        {/* DEUTERANOPIA */}
        <filter id="filter-deuteranopia">
          <feColorMatrix
            type="matrix"
            values="
              0.625 0.375 0     0 0
              0.700 0.300 0     0 0
              0     0.300 0.700 0 0
              0     0     0     1 0
            "
          />
        </filter>

        {/* TRITANOPIA */}
        <filter id="filter-tritanopia">
          <feColorMatrix
            type="matrix"
            values="
              0.950 0.050 0     0 0
              0     0.433 0.567 0 0
              0     0.475 0.525 0 0
              0     0     0     1 0
            "
          />
        </filter>
      </defs>
    </svg>
  );
}

export default function App() {
  return (
    <>
      {/* Filtros de percepção das cores */}
      <ColorVisionFilters />

      {/* Todo o site que será alterado pelos filtros */}
      <div id="site-content">
        <Navbar />

        <main>
          <Hero />

          <ResearchQuestion />

          <HowItWorks />

          <Technology />

          <Accessibility />

          <Research />

          <Team />
        </main>

        <Footer />
      </div>

      {/* Ficam fora do filtro para continuarem utilizáveis */}
      <AccessibilityMenu />

      <VLibras />
    </>
  );
}