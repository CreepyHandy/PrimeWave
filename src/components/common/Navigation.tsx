import { useState, useEffect } from "react";
import { LogoIcon } from "./LogoIcon";

export function Navigation({
  onNav,
  activeSection,
  page,
}: {
  onNav: (section: string) => void;
  activeSection: string;
  page: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "services", label: "Services" },
    { id: "works", label: "Work" },
    { id: "about", label: "About" },
  ];

  function isActive(id: string) {
    if (id === "works") return page === "works" || page === "workDetail";
    return page === "home" && activeSection === id;
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0f0d0b]/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-[#0f0d0b]"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 h-[62px] flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNav("hero")}
          className="flex items-center gap-2 shrink-0 group"
        >
          <LogoIcon />
          <span className="hidden md:inline font-['General_Sans:Medium',sans-serif] text-white text-[18px] tracking-tight">
            PrimeWavee
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNav(link.id)}
              className="relative px-3 py-1.5 text-[14px] font-['General_Sans:Regular',sans-serif] group"
            >
              <span className={`transition-colors duration-200 ${isActive(link.id) ? "text-white" : "text-[#b5ada4] group-hover:text-white"}`}>
                {link.label}
              </span>
              <span
                className={`absolute bottom-0.5 left-3 right-3 h-px bg-[#239cff] transition-all duration-200 origin-left ${
                  isActive(link.id) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <button
            onClick={() => onNav("contact")}
            className="relative px-4 py-2 rounded-full text-[14px] font-['General_Sans:Medium',sans-serif] text-[#f5f3ef] border border-[#f5f3ef]/60 hover:border-white hover:text-white transition-all duration-200 hover:bg-white/5"
          >
            Let's Build Together
          </button>
        </div>

        {/* Mobile hamburger — 2 strokes */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-[5px]">
            <span
              className={`block h-px bg-white rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3px]" : ""}`}
            />
            <span
              className={`block h-px bg-white rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-64" : "max-h-0"}`}
      >
        <div className="bg-[#0f0d0b] px-10 pb-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNav(link.id);
                setMobileOpen(false);
              }}
              className={`text-left py-2 font-['General_Sans:Regular',sans-serif] text-[16px] transition-colors ${isActive(link.id) ? "text-white" : "text-[#b5ada4] hover:text-white"}`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              onNav("contact");
              setMobileOpen(false);
            }}
            className="mt-2 px-4 py-2 rounded-full border border-[#f5f3ef]/60 text-[#f5f3ef] text-[14px] font-['General_Sans:Medium',sans-serif] w-fit"
          >
            Let's Build Together
          </button>
        </div>
      </div>
    </nav>
  );
}
