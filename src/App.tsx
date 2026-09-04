import { useState } from "react";
import { Navigation } from "./components/common/Navigation";
import { Home } from "./pages/Home";
import { WorksPage } from "./pages/Works";
import { WorkDetailPage } from "./pages/WorkDetail";
import { ContactPage } from "./pages/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [page, setPage] = useState<"home" | "works" | "workDetail" | "contact">("home");
  const [selectedProject, setSelectedProject] = useState(0);

  const sectionRefs: Record<string, string> = {
    hero: "hero-section",
    services: "services",
    work: "work",
    about: "about",
    contact: "contact",
  };

  function navigateTo(section: string) {
    if (section === "works") {
      setPage("works");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (section === "contact") {
      setPage("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const wasOnSubPage = page !== "home";
    setPage("home");
    setTimeout(() => {
      if (section === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const id = sectionRefs[section] ?? section;
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, wasOnSubPage ? 50 : 0);
    setActiveSection(section);
  }

  function openProject(index: number) {
    setSelectedProject(index);
    setPage("workDetail");
    window.scrollTo({ top: 0 });
  }

  // Active section is purely click-driven now.

  return (
    <div className="bg-[#0f0d0b] min-h-full">
      <Navigation onNav={navigateTo} activeSection={activeSection} page={page} />

      {page === "contact" ? (
        <ContactPage onNav={navigateTo} />
      ) : page === "workDetail" ? (
        <WorkDetailPage projectIndex={selectedProject} onNav={navigateTo} onSelectProject={openProject} />
      ) : page === "works" ? (
        <WorksPage onNav={navigateTo} onSelectProject={openProject} />
      ) : (
        <Home onNav={navigateTo} onSelectProject={openProject} />
      )}
    </div>
  );
}
