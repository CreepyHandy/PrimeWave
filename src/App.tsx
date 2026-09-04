import { useState, useEffect } from "react";
import svgPaths from "../imports/svg-3j8ehv7zw6";
import footerSvg from "./imports/Footer/svg-4xeqal4mcp";
import worksSvg from "./imports/Works/svg-yejep7j8es";
import contactSvg from "./imports/ContactUsPage/svg-1dmcysa7y9";
import imgHeroSection from "./imports/LandingPage-1/0212f6a03da14a92138719f15d4bda398bbb9eaf.png";
import imgLogoRaw0 from "./imports/LandingPage-1/041c560b7ab1764d035dda876f5ca9cedd47a90c.png";
import imgLogoRaw1 from "./imports/LandingPage-1/6627188bb2a848b570320bab6b885f1490736703.png";
import imgLogoRaw2 from "./imports/LandingPage-1/ecc55123e2aa024586b3f8576ca1e84c7d333312.png";
import imgLogoRaw3 from "./imports/LandingPage-1/c4dd994f9fff0b1f7c6f5bf3b09431ebbae64cc2.png";
import imgLogoRaw4 from "./imports/LandingPage-1/945fd52559f1812dab671149e2c15371809effa2.png";
import imgLogoRaw5 from "./imports/LandingPage-1/31f45f334387fcf08b7ff0b846e2390d48cc033c.png";
import imgLogoRaw6 from "./imports/LandingPage-1/e1804ef700b6db16935e04f2c8b89be63e767175.png";
import imgLogoRaw7 from "./imports/LandingPage-1/9638b2612f3831c1eb6d25141002a300eac9f62f.png";
import imgLogoRaw8 from "./imports/LandingPage-1/6db5984718016aa8f33ee44ea7184271f59fe802.png";
import imgLogoRaw9 from "./imports/LandingPage-1/ebca9812717d7de0f182c515bcebabc8c1e3af68.png";
import imgProject0 from "./imports/LandingPage-1/e77f1cc99e48fe30a1ff5456759350474c49385f.png";
import imgProject1 from "./imports/LandingPage-1/b3455181d69bdb79bfe522c0054d4159d6771078.png";
import imgProject2 from "./imports/LandingPage-1/ffb771fc96528e8e1e06b15675a3777cf2a656ea.png";
import imgProject3 from "./imports/LandingPage-1/8667165634c9636b348d82e7aa956251cdf94654.png";
import imgWorksAssure from "./imports/GeneralWorksPage/e8aae7b65f47cce826c8aa0cd63d52507e152b75.png";
import imgWorksReunion from "./imports/GeneralWorksPage/ee9ca2f711e5713c9109e8a7486e20bd528cfa2c.png";
import imgDetailHero from "./imports/DetailedWorkPage/e8aae7b65f47cce826c8aa0cd63d52507e152b75.png";
import imgDetailGallery from "./imports/DetailedWorkPage/244f3962b9fc6f941659e4efbd5a7f61144c979e.png";
import imgDetailChallenge0 from "./imports/DetailedWorkPage/f4d2aca7d035bba4932f77c89ee49e57d77beec7.png";
import imgDetailChallenge1 from "./imports/DetailedWorkPage/5106151af6f806f3f4bfee72d1823b2b70b5c8f9.png";
import imgDetailApproach0 from "./imports/DetailedWorkPage/3980c9be4471f65c828655e4cc10fe748a32293c.png";
import imgDetailApproach1 from "./imports/DetailedWorkPage/1f45238c171fa2a42c04efc26f242d52ce7b9fb3.png";
import imgDetailSolutions from "./imports/DetailedWorkPage/1c6af93d23c05f5dae812e8e5b808c496edb2bbe.png";
import imgAvatar0 from "./imports/LandingPage-1/cdd0e239cdc4f711bd9f452f8d8dca4dabd17547.png";
import imgAvatar1 from "./imports/LandingPage-1/6259054dfd21c8de11534318ab98596ddbd7729a.png";
import imgAvatar2 from "./imports/LandingPage-1/44f054b7349d5a1b263a57682db79a056ab3bf06.png";
import imgAvatar3 from "./imports/LandingPage-1/a0f4159ae4f1c2a43e33e223d4ce1e8e3362104a.png";
import imgAvatar4 from "./imports/LandingPage-1/eddc1f0a2f48f3cbb303c29ff073fe5507046f7e.png";

const logoImages = [
  imgLogoRaw0, imgLogoRaw1, imgLogoRaw2, imgLogoRaw3, imgLogoRaw4,
  imgLogoRaw5, imgLogoRaw6, imgLogoRaw7, imgLogoRaw8, imgLogoRaw9,
];

// ─── Logo SVG ───────────────────────────────────────────────────────────────

function LogoIcon({ size = 28 }: { size?: number }) {
  return (
    <svg fill="none" height={size} viewBox="0 0 28 28" width={size}>
      <path d={svgPaths.p2419cb00} fill="url(#lg1)" stroke="url(#lg2)" strokeWidth="0.205655" />
      <path d={svgPaths.p8b10b80} fill="#121212" stroke="url(#lg3)" strokeWidth="0.116329" />
      <line stroke="url(#lg4)" strokeWidth="0.205655" x1="19.6542" x2="14.5128" y1="13.8316" y2="5.19405" />
      <line stroke="url(#lg5)" strokeWidth="0.205655" x1="6.07863" x2="10.914" y1="17.8086" y2="8.87304" />
      <line stroke="url(#lg6)" strokeWidth="0.205655" x1="13.4815" x2="8.15887" y1="22.8479" y2="13.9131" />
      <line stroke="url(#lg7)" strokeWidth="0.205655" x1="21.3884" x2="11.1493" y1="18.8175" y2="18.9511" />
      <line stroke="url(#lg8)" strokeWidth="0.205655" x1="21.761" x2="16.8509" y1="9.84825" y2="18.883" />
      <line stroke="url(#lg9)" strokeWidth="0.205655" x1="16.7009" x2="6.86283" y1="8.89887" y2="8.72422" />
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="lg1" x1="10.0668" x2="17.9332" y1="0" y2="28">
          <stop stopColor="#239CFF" /><stop offset="1" stopColor="#005BE3" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="lg2" x1="10.0668" x2="17.9332" y1="0" y2="28">
          <stop stopColor="#239CFF" /><stop offset="1" stopColor="#005BE3" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="lg3" x1="12.3377" x2="17.4968" y1="6.34538" y2="20.676">
          <stop stopColor="#239CFF" /><stop offset="1" stopColor="#005BE3" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="lg4" x1="19.7426" x2="21.3435" y1="13.779" y2="12.5967">
          <stop stopColor="#239CFF" /><stop offset="1" stopColor="#005BE3" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="lg5" x1="6.16907" x2="8.00396" y1="17.8576" y2="18.6288">
          <stop stopColor="#239CFF" /><stop offset="1" stopColor="#005BE3" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="lg6" x1="13.5699" x2="15.1748" y1="22.7952" y2="21.6173">
          <stop stopColor="#239CFF" /><stop offset="1" stopColor="#005BE3" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="lg7" x1="21.3871" x2="21.1678" y1="18.7147" y2="16.7363">
          <stop stopColor="#239CFF" /><stop offset="1" stopColor="#005BE3" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="lg8" x1="21.6707" x2="19.8379" y1="9.79915" y2="9.02238">
          <stop stopColor="#239CFF" /><stop offset="1" stopColor="#005BE3" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="lg9" x1="16.7027" x2="16.5367" y1="8.79606" y2="6.81325">
          <stop stopColor="#239CFF" /><stop offset="1" stopColor="#005BE3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ─── Section label ───────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="w-2.5 h-2.5 rounded-full bg-[#239cff] shrink-0" />
      <span className="font-['Roboto_Mono:Regular',monospace] text-[13px] tracking-[1px] uppercase text-[#b5ada4]">
        {children}
      </span>
    </div>
  );
}

// ─── Navigation ──────────────────────────────────────────────────────────────

function Navigation({
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
            Let&apos;s Build Together
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
            Let&apos;s Build Together
          </button>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero({ onNav }: { onNav: (s: string) => void }) {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden flex flex-col justify-between pt-[clamp(100px,14vh,160px)] pb-[clamp(60px,9vh,100px)]">
      {/* Background */}
      <img
        src={imgHeroSection}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0d0b]/60 via-[#0f0d0b]/20 to-[#0f0d0b]/80" />

      {/* Heading */}
      <div className="relative z-10 flex justify-center px-6 text-center">
        <h1 className="font-['Cal_Sans:Regular',sans-serif] text-[clamp(52px,7vw,92px)] leading-[1.05] tracking-[-2px] max-w-5xl">
          <span className="text-[#b5ada4] md:whitespace-nowrap">Your product. Our expertise.</span>
          <br />
          <span className="text-[#fcfaf5]">We build the software your industry runs on.</span>
        </h1>
      </div>

      {/* Logo marquee — middle strip */}
      <div className="relative z-10 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
          {[...logoImages, ...logoImages, ...logoImages].map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="h-[25px] mx-10 object-contain pointer-events-none"
            />
          ))}
        </div>
      </div>

      {/* Description + CTA — bottom */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 gap-6">
        <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] md:text-[20px] leading-[1.6] max-w-[90vw] md:max-w-[504px]">
          PrimeWavee designs and builds tailored software for businesses, founders, and organizations —
          taking products from concept to launch with the expertise and attention they deserve.
        </p>
        <button
          onClick={() => onNav("contact")}
          className="px-8 py-3.5 md:px-6 md:py-2.5 rounded-full bg-gradient-to-r from-[#239cff] to-[#005be3] text-white font-['General_Sans:Medium',sans-serif] text-[14px] hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-[#239cff]/25"
        >
          Let&apos;s build together
        </button>
      </div>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="bg-[#0f0d0b] px-6 md:px-20 py-24">
      <div className="max-w-[1120px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-[60px]">
          {/* Left */}
          <div className="lg:w-[612px] shrink-0 space-y-6">
            <SectionLabel>About PrimeWave</SectionLabel>
            <h2 className="font-['Cal_Sans:Regular',sans-serif] text-[clamp(32px,4vw,48px)] tracking-[-0.3px] leading-[1.2]">
              <span className="text-[#b5ada4]">Technology that turns </span>
              <span className="text-[#fcfaf5]">business needs into products that work.</span>
            </h2>
            <button className="relative px-4 py-2 rounded-full border border-[#f5f3ef]/50 text-[#f5f3ef] text-[14px] font-['General_Sans:Medium',sans-serif] hover:border-white hover:text-white transition-all duration-200 hover:bg-white/5">
              View Our Services
            </button>
          </div>

          {/* Right */}
          <div className="flex-1">
            <div className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6] space-y-4">
              <p>
                We believe in helping businesses and organizations bring their digital ideas to life.
                We design and develop tailored software around the way each client operates, whether
                that&apos;s a customer-facing application, a business platform, or a system built for
                a specific industry.
              </p>
              <p>
                We don&apos;t believe in forcing every project into the same solution. We take time to
                understand the problem, define what needs to be built, and create technology that fits
                the business behind it.
              </p>
              <p>
                From the first conversation to deployment and beyond, we work as a technical
                partner—not just a development team. The goal is straightforward: deliver software
                that is dependable today and ready for what&apos;s next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ────────────────────────────────────────────────────────────────

const serviceCategories = [
  {
    name: "Identity",
    description: "Build a distinctive brand that communicates your vision, earns trust, and creates lasting recognition.",
    items: ["Brand Strategy", "Logo Design", "Visual Identity", "Brand Guidelines", "Brand Assets"],
    bg: "#0f0d0b",
  },
  {
    name: "Product",
    description: "Create intuitive digital products that balance user needs, business goals, and exceptional experiences.",
    items: ["UX Design", "UI Design", "Mobile App Design", "Web App Design", "Prototypes"],
    bg: "#161412",
  },
  {
    name: "Website",
    description: "Design modern, high-performing websites that tell your story and convert visitors into customers.",
    items: ["Websites", "Landing Pages", "CMS Websites", "Responsive Design", "SEO-ready Layouts"],
    bg: "#0f0d0b",
  },
  {
    name: "Development",
    description: "Bring designs to life with fast, responsive websites built for performance and scalability.",
    items: ["Website Development", "Mobile App Development", "Landing Pages", "Enterprise Grade Software", "API Integrations"],
    bg: "#161412",
  },
  {
    name: "Systems",
    description: "Build scalable design systems that keep your product consistent, efficient, and ready for future growth.",
    items: ["Component Libraries", "Design Tokens", "UI Guidelines", "Documentation", "Maintenance"],
    bg: "#0f0d0b",
  },
];

function Services() {
  return (
    <section id="services" className="bg-[#0f0d0b] px-6 md:px-20 py-24">
      <div className="max-w-[1120px] mx-auto">
        <div className="mb-16 space-y-4">
          <SectionLabel>Services</SectionLabel>
          <h2 className="font-['Cal_Sans:Regular',sans-serif] text-[clamp(32px,4vw,48px)] tracking-[-0.3px] leading-[1.2]">
            <span className="text-[#b5ada4]">From strategy.</span>
            <br />
            <span className="text-[#fcfaf5]">To experiences.</span>
          </h2>
        </div>

        {/* Sticky stacked service cards */}
        <div className="space-y-6">
          {serviceCategories.map((cat, i) => (
            <div
              key={cat.name}
              className="rounded-lg overflow-hidden"
              style={{ backgroundColor: cat.bg, position: "sticky", top: `${64 + i * 16}px` }}
            >
              <div className="p-[clamp(24px,4vw,60px)]">
                {/* Big category name */}
                <p className="font-['Cal_Sans:Regular',sans-serif] text-[#fcfaf5] text-[clamp(44px,8vw,120px)] tracking-[-2px] leading-[1.2] mb-6 md:mb-10">
                  {cat.name}
                </p>

                {/* Two-column detail */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-[240px]">
                  <div className="md:w-[380px] shrink-0">
                    <p className="font-['Cal_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] md:text-[clamp(20px,2.5vw,32px)] leading-[1.4] md:leading-[1.2]">
                      {cat.description}
                    </p>
                  </div>
                  <div className="flex-1 space-y-3 md:space-y-4">
                    {cat.items.map((item, idx) => (
                      <div
                        key={item}
                        className="flex items-center justify-between pb-3 md:pb-4 border-b border-black/60"
                      >
                        <span className="font-['Cal_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] md:text-[24px] leading-[1.1]">
                          {item}
                        </span>
                        <span className="font-['Roboto_Mono:Regular',monospace] text-[#239cff] text-[13px] tracking-[1px] uppercase">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Works ───────────────────────────────────────────────────────────────────

const projects = [
  {
    img: imgProject0,
    title: "Assure (AI SaaS)",
    subtitle: "Building trust for an AI-first platform.",
    tags: ["AI", "SaaS", "Identity"],
  },
  {
    img: imgProject1,
    title: "United Consulting",
    subtitle: "A consulting website built around clarity.",
    tags: ["Website", "Branding"],
  },
  {
    img: imgProject2,
    title: "Crestmark",
    subtitle: "An institutional identity for modern investment firms.",
    tags: ["Identity", "Finance"],
  },
  {
    img: imgProject3,
    title: "Ability",
    subtitle: "Designing healthcare with confidence.",
    tags: ["Healthcare", "Product"],
  },
];

function ProjectCard({ project, index, onSelect }: { project: typeof projects[0]; index: number; onSelect: (i: number) => void }) {
  return (
    <div className="group cursor-pointer" onClick={() => onSelect(index)}>
      <div className="relative overflow-hidden rounded-lg aspect-[548/400] bg-[#161412] mb-4">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#239cff]/0 group-hover:bg-[#239cff]/10 transition-colors duration-300" />
        <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 rounded text-[11px] font-['Roboto_Mono:Regular',monospace] tracking-[1px] uppercase bg-[#0f0d0b]/80 text-[#239cff]">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-['Cal_Sans:Regular',sans-serif] text-[#fcfaf5] text-[28px] leading-[1.2] group-hover:text-[#239cff] transition-colors duration-200">
          {project.title}
        </h3>
        <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] mt-1">
          {project.subtitle}
        </p>
      </div>
    </div>
  );
}

function Works({ onSelectProject }: { onSelectProject: (i: number) => void }) {
  return (
    <section id="work" className="bg-[#0f0d0b] px-6 md:px-20 py-24">
      <div className="max-w-[1120px] mx-auto">
        <div className="mb-16 space-y-4">
          <SectionLabel>Our Works</SectionLabel>
          <h2 className="font-['Cal_Sans:Regular',sans-serif] text-[clamp(32px,4vw,48px)] tracking-[-0.3px] leading-[1.2]">
            <span className="text-[#b5ada4]">Work that moves</span>
            <br />
            <span className="text-[#fcfaf5]">brands forward.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} onSelect={onSelectProject} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why PrimeWave ───────────────────────────────────────────────────────────

const whyIcons: { bg: string; fg: string; viewBox: string }[] = [
  { bg: worksSvg.p2917de00, fg: worksSvg.p186b1f80, viewBox: "0 0 23.9947 21.996" },
  { bg: worksSvg.p1b056e00, fg: worksSvg.p1cc9f280, viewBox: "0 0 27.9923 24.9939" },
  { bg: worksSvg.p97bd3c0,  fg: worksSvg.p3f1ebcc0, viewBox: "0 0 28.998 28.998" },
  { bg: worksSvg.p247c1000, fg: worksSvg.p3701200,  viewBox: "0 0 27.9937 17.9962" },
  { bg: worksSvg.p2ad56480, fg: worksSvg.p769680,   viewBox: "0 0 31.9884 21.9924" },
  { bg: worksSvg.p11f07380, fg: worksSvg.p2dc5fb00, viewBox: "0 0 29.9927 19.9951" },
];

const whyCards = [
  {
    title: "Startup Focused",
    body: "We design for ambitious startups, helping founders launch and grow.",
  },
  {
    title: "Strategy First",
    body: "Every decision is guided by your goals, users, and long-term vision.",
  },
  {
    title: "Thoughtful Craft",
    body: "Every detail is refined to create meaningful experiences.",
  },
  {
    title: "Built to Scale",
    body: "We create flexible solutions that grow alongside your business.",
  },
  {
    title: "Collaborative Process",
    body: "We work closely with your team through every stage of the project.",
  },
  {
    title: "Long-Term Partnership",
    body: "We're here to support your business long after launch.",
  },
];

function WhyUs() {
  return (
    <section className="bg-[#161412] px-6 md:px-20 py-24">
      <div className="max-w-[1120px] mx-auto">
        <div className="mb-16 space-y-4">
          <SectionLabel>Why PrimeWave</SectionLabel>
          <h2 className="font-['Cal_Sans:Regular',sans-serif] text-[clamp(32px,4vw,48px)] tracking-[-0.3px] leading-[1.2]">
            <span className="text-[#b5ada4]">More than a service.</span>
            <br />
            <span className="text-[#fcfaf5]">A strategic partnership.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyCards.map((card, i) => (
            <div
              key={card.title}
              className="bg-[#0f0d0b] rounded-lg p-6 group hover:ring-1 hover:ring-[#239cff]/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-8 h-8 mb-10">
                <svg
                  viewBox={whyIcons[i].viewBox}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "100%", height: "100%" }}
                >
                  <path d={whyIcons[i].bg} fill="#239CFF" opacity="0.2" />
                  <path d={whyIcons[i].fg} fill="#239CFF" />
                </svg>
              </div>
              <h3 className="font-['Cal_Sans:Regular',sans-serif] text-[#fcfaf5] text-[22px] mb-2">
                {card.title}
              </h3>
              <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[15px] leading-[1.55]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials (ticker) ────────────────────────────────────────────────────

const testimonials = [
  {
    quote: "They ask the right questions, challenge assumptions, and build experiences that actually work for users.",
    name: "Sarah Mitchell",
    company: "Nova Labs",
    avatar: imgAvatar0,
  },
  {
    quote: "PrimeWavee delivered exceptional work with remarkable attention to detail. Every pixel was considered.",
    name: "Daniel Kim",
    company: "Horizon",
    avatar: imgAvatar1,
  },
  {
    quote: "They quickly understood our vision and transformed it into a brand that feels genuinely ours.",
    name: "Olivia Nestl",
    company: "Elevate",
    avatar: imgAvatar2,
  },
  {
    quote: "Working with PrimeWavee felt like adding an experienced design team to our startup overnight.",
    name: "James Walker",
    company: "Vertex",
    avatar: imgAvatar3,
  },
  {
    quote: "It's fast, beautifully crafted, and perfectly reflects our brand. We couldn't be happier.",
    name: "Sophia Raci",
    company: "BrightFlow",
    avatar: imgAvatar4,
  },
];

function Testimonials() {
  const doubled = [...testimonials, ...testimonials];
  return (
    <section className="bg-[#0f0d0b] py-24 overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6 md:px-20 mb-16 space-y-4">
        <SectionLabel>Testimonials</SectionLabel>
        <h2 className="font-['Cal_Sans:Regular',sans-serif] text-[clamp(32px,4vw,48px)] tracking-[-0.3px] leading-[1.2]">
          <span className="text-[#b5ada4]">Trusted by founders.</span>
          <br />
          <span className="text-[#fcfaf5]">Proven by results.</span>
        </h2>
      </div>

      {/* Ticker */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0f0d0b] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0f0d0b] to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-4"
          style={{
            width: "max-content",
            animation: "marquee 40s linear infinite",
          }}
        >
          {doubled.map((t, i) => (
            <div
              key={i}
              className="bg-[#161412] rounded-lg p-6 shrink-0 w-[360px] flex flex-col justify-between"
              style={{ minHeight: "230px" }}
            >
              <div className="text-[#239cff] mb-3 opacity-60">
                <svg width="20" height="16" viewBox="0 0 24 20" fill="currentColor">
                  <path d="M0 20V11.2L4.8 0h4.4L5.2 11.2H9.6V20H0zm13.6 0V11.2L18.4 0h4.4L18.8 11.2H23.2V20H13.6z"/>
                </svg>
              </div>
              <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[18px] leading-[1.5] flex-1 mb-6">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded object-cover" />
                <div>
                  <p className="font-['General_Sans:Regular',sans-serif] text-[#fcfaf5] text-[15px]">{t.name}</p>
                  <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[13px]">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function FooterLogoIcon() {
  return (
    <div className="relative shrink-0 size-[28px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="28" viewBox="0 0 28 28" width="28">
        <path d={svgPaths.p2419cb00} fill="url(#flg1)" stroke="url(#flg2)" strokeWidth="0.205655" />
        <path d={svgPaths.p8b10b80} fill="#121212" stroke="url(#flg3)" strokeWidth="0.116329" />
        <line stroke="url(#flg4)" strokeWidth="0.205655" x1="19.6542" x2="14.5128" y1="13.8316" y2="5.19405" />
        <line stroke="url(#flg5)" strokeWidth="0.205655" x1="6.07863" x2="10.914" y1="17.8086" y2="8.87304" />
        <line stroke="url(#flg6)" strokeWidth="0.205655" x1="13.4815" x2="8.15887" y1="22.8479" y2="13.9131" />
        <line stroke="url(#flg7)" strokeWidth="0.205655" x1="21.3884" x2="11.1493" y1="18.8175" y2="18.9511" />
        <line stroke="url(#flg8)" strokeWidth="0.205655" x1="21.761" x2="16.8509" y1="9.84825" y2="18.883" />
        <line stroke="url(#flg9)" strokeWidth="0.205655" x1="16.7009" x2="6.86283" y1="8.89887" y2="8.72422" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="flg1" x1="10.0668" x2="17.9332" y1="0" y2="28"><stop stopColor="#239CFF"/><stop offset="1" stopColor="#005BE3"/></linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="flg2" x1="10.0668" x2="17.9332" y1="0" y2="28"><stop stopColor="#239CFF"/><stop offset="1" stopColor="#005BE3"/></linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="flg3" x1="12.3377" x2="17.4968" y1="6.34538" y2="20.676"><stop stopColor="#239CFF"/><stop offset="1" stopColor="#005BE3"/></linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="flg4" x1="19.7426" x2="21.3435" y1="13.779" y2="12.5967"><stop stopColor="#239CFF"/><stop offset="1" stopColor="#005BE3"/></linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="flg5" x1="6.16907" x2="8.00396" y1="17.8576" y2="18.6288"><stop stopColor="#239CFF"/><stop offset="1" stopColor="#005BE3"/></linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="flg6" x1="13.5699" x2="15.1748" y1="22.7952" y2="21.6173"><stop stopColor="#239CFF"/><stop offset="1" stopColor="#005BE3"/></linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="flg7" x1="21.3871" x2="21.1678" y1="18.7147" y2="16.7363"><stop stopColor="#239CFF"/><stop offset="1" stopColor="#005BE3"/></linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="flg8" x1="21.6707" x2="19.8379" y1="9.79915" y2="9.02238"><stop stopColor="#239CFF"/><stop offset="1" stopColor="#005BE3"/></linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="flg9" x1="16.7027" x2="16.5367" y1="8.79606" y2="6.81325"><stop stopColor="#239CFF"/><stop offset="1" stopColor="#005BE3"/></linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Footer({ onNav }: { onNav: (s: string) => void }) {
  return (
    <footer id="contact" className="bg-[#0f0d0b] px-4 md:px-[60px] py-10 md:py-[120px] flex flex-col items-center gap-[10px] overflow-hidden">
      {/* Card */}
      <div className="bg-[#161412] rounded-[8px] w-full max-w-[1120px] flex flex-col">
        {/* Top content */}
        <div className="flex-1 flex flex-col items-center gap-4 px-6 pt-10 md:pt-[40px] pb-6 md:pb-8">
          {/* Logo */}
          <div className="flex items-center gap-1.5">
            <FooterLogoIcon />
            <span className="font-['General_Sans:Medium',sans-serif] text-white text-[20px] leading-normal">PrimeWavee</span>
          </div>

          {/* Heading + body + CTA */}
          <div className="flex flex-col items-center gap-4 max-w-[451px] text-center">
            <div className="font-['Cal_Sans:Regular',sans-serif] text-[clamp(32px,6vw,48px)] tracking-[-0.3px] leading-[1.2]">
              <p className="text-[#b5ada4]">Your next big</p>
              <p className="text-[#fcfaf5]">idea starts here.</p>
            </div>
            <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.4]">
              We partner with ambitious teams to turn bold ideas into exceptional experiences.
            </p>
            <button
              onClick={() => onNav("contact")}
              className="px-6 py-3 md:px-4 md:py-2 rounded-[30px] bg-gradient-to-r from-[#239cff] to-[#005be3] text-white font-['General_Sans:Medium',sans-serif] text-[14px] leading-[22px] hover:opacity-90 transition-opacity"
            >
              Let&apos;s build together
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mx-6 flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-0 items-center py-4 md:py-3 text-center md:text-left">
          {/* Desktop: copyright left | Mobile: URL first, then copyright */}
          <span className="font-['Cal_Sans:Regular',sans-serif] text-[#6b6b6b] text-[12px] tracking-[0.5px] order-2 md:order-1">©2026 Primewavee</span>
          <span className="font-['Cal_Sans:Regular',sans-serif] text-[#fcfaf5] text-[14px] order-1 md:order-2">primewave.online</span>
        </div>
      </div>

      {/* Watermark */}
      <div className="select-none pointer-events-none w-full max-w-[1120px] flex justify-center">
        <p className="font-['Cal_Sans:Regular',sans-serif] text-[#161412] text-[clamp(60px,10vw,120px)] tracking-[-2px] leading-[1.2] whitespace-nowrap text-center">
          PrimeWavee
        </p>
      </div>
    </footer>
  );
}

// ─── Works Page ──────────────────────────────────────────────────────────────

const allProjects = [
  {
    img: imgWorksAssure,
    title: "Assure (AI SaaS)",
    subtitle: "Building trust for an AI-first platform.",
    tags: ["AI", "SaaS", "Identity"],
  },
  {
    img: imgProject1,
    title: "United Consulting",
    subtitle: "A consulting website built around clarity.",
    tags: ["Website", "Branding"],
  },
  {
    img: imgProject2,
    title: "Crestmark",
    subtitle: "An institutional identity for modern investment firms.",
    tags: ["Identity", "Finance"],
  },
  {
    img: imgProject3,
    title: "Ability",
    subtitle: "Designing healthcare with confidence.",
    tags: ["Healthcare", "Product"],
  },
  {
    img: imgWorksReunion,
    title: "Reunion",
    subtitle: "Creating excitement before the event begins.",
    tags: ["Event", "Brand"],
  },
];

function WorksPage({ onNav, onSelectProject }: { onNav: (s: string) => void; onSelectProject: (i: number) => void }) {
  return (
    <div className="bg-[#0f0d0b] min-h-screen">
      {/* Hero section — mirrors homepage hero */}
      <section className="relative w-full min-h-[80vh] overflow-hidden flex flex-col justify-between pt-[clamp(100px,14vh,160px)] pb-[clamp(60px,9vh,100px)]">
        <img
          src={imgHeroSection}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0d0b]/60 via-[#0f0d0b]/20 to-[#0f0d0b]/90" />

        {/* Heading */}
        <div className="relative z-10 flex justify-center px-6 text-center">
          <h1 className="font-['Cal_Sans:Regular',sans-serif] text-[clamp(40px,7vw,92px)] leading-[1.1] tracking-[-2px] max-w-5xl">
            <span className="text-[#b5ada4] md:whitespace-nowrap">Your product. Our expertise.</span>
            <br />
            <span className="text-[#fcfaf5]">We build the software your industry runs on.</span>
          </h1>
        </div>

        {/* Description + CTA */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 gap-6">
          <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[18px] leading-[1.6] max-w-[504px]">
            Discover how we help founders transform ambitious ideas into memorable brands,
            intuitive digital products, and high-performing websites that build trust and engage users.
          </p>
          <button
            onClick={() => onNav("contact")}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#239cff] to-[#005be3] text-white font-['General_Sans:Medium',sans-serif] text-[14px] hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-[#239cff]/25"
          >
            Let&apos;s build together
          </button>
        </div>
      </section>

      {/* Works grid */}
      <section className="px-6 md:px-20 py-24 max-w-[1440px] mx-auto">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} onSelect={onSelectProject} />
            ))}
          </div>
        </div>
      </section>

      <Footer onNav={onNav} />
    </div>
  );
}

// ─── Work Detail Page ────────────────────────────────────────────────────────

type ProjectDetail = {
  overviewHeading: string;
  overviewPara1: string;
  overviewPara2: string;
  client: string;
  duration: string;
  industry: string;
  challengeLabel: string;
  challengeHeading: string;
  challengePara1: string;
  challengePara2: string;
  approachLabel: string;
  approachHeading: string;
  approachPara1: string;
  approachPara2: string;
  solutionsLabel: string;
  solutionsHeading: string;
  solutionsPara1: string;
  solutionsPara2: string;
};

const projectDetails: ProjectDetail[] = [
  {
    // 0 — Assure (AI SaaS)
    overviewHeading: "Building trust for an AI-first platform.",
    overviewPara1: "Assure was created to help AI startups communicate and present complex technologies through a clear, modern, and approachable digital experience. As AI continues to transform industries, many companies face the challenge of explaining advanced solutions in a way that feels both innovative and trustworthy.",
    overviewPara2: "The experience was designed to support founders, investors, and enterprise customers by making complex concepts easier to understand without losing their technical depth. Through a thoughtful interface, structured content, and intuitive navigation, Assure helps users quickly recognize the value of AI solutions while building trust in the brands behind them.",
    client: "Assure AI", duration: "3 Weeks", industry: "Artificial Intelligence",
    challengeLabel: "Challenge", challengeHeading: "Making AI feel approachable.",
    challengePara1: "Many AI products overwhelm visitors with technical jargon, complex messaging, and generic, template-like interfaces that make it difficult to understand what the product actually does or why it matters. Instead of creating clarity, these experiences often leave users feeling confused or disconnected.",
    challengePara2: "The challenge was to design a brand identity and website that communicated intelligence, simplicity, and trust from the very first interaction. The experience needed to make advanced technology feel approachable while maintaining a distinctive personality, balancing professionalism with warmth to create a memorable and engaging first impression.",
    approachLabel: "Approach", approachHeading: "Clarity through thoughtful design.",
    approachPara1: "We focused on creating a clear and intentional content hierarchy that helps users quickly understand the product and navigate the experience with ease. Clean, modern typography improves readability, while thoughtful spacing and visual balance reduce cognitive load and keep the interface approachable.",
    approachPara2: "Subtle animations and micro-interactions provide feedback and guide attention without becoming distracting, creating a smooth and engaging browsing experience. Every section was carefully designed to reinforce credibility, build user confidence, and improve comprehension.",
    solutionsLabel: "Solutions", solutionsHeading: "A modern SaaS experience built for growth.",
    solutionsPara1: "The final result combines a premium visual identity with a strategic, conversion-focused website that balances aesthetics with usability. Every page is designed to clearly communicate the product's value, build trust through thoughtful design, and guide visitors toward meaningful actions.",
    solutionsPara2: "The cohesive brand system ensures consistency across every touchpoint, while the flexible layout supports future growth as the company evolves. The outcome is a modern digital experience that helps emerging AI companies stand out, attract the right customers, and scale with confidence.",
  },
  {
    // 1 — United Consulting
    overviewHeading: "A consulting presence built on clarity and authority.",
    overviewPara1: "United Consulting needed a digital presence that projected expertise and professionalism to enterprise clients while remaining approachable and easy to navigate. The existing brand lacked coherence across touchpoints, making it difficult for prospects to quickly assess services and take action.",
    overviewPara2: "The goal was to create a high-converting website that established immediate credibility, communicated the firm's strategic capabilities, and guided decision-makers through a clear engagement funnel — turning visits into qualified conversations.",
    client: "United Consulting", duration: "4 Weeks", industry: "Professional Services",
    challengeLabel: "Challenge", challengeHeading: "Communicating expertise without complexity.",
    challengePara1: "Consulting firms often struggle to differentiate themselves online. Generic language, dense copy, and uninspired layouts fail to communicate the depth of expertise that clients are actually paying for.",
    challengePara2: "The challenge was to translate United Consulting's strategic depth into a visual and verbal identity that felt authoritative, modern, and instantly trustworthy to C-suite buyers — without sacrificing accessibility or warmth.",
    approachLabel: "Approach", approachHeading: "Structure that builds confidence.",
    approachPara1: "We mapped the buyer journey from first impression to inquiry, structuring each page to answer the right questions at the right time. A disciplined typographic hierarchy and restrained color palette reinforced credibility.",
    approachPara2: "Case study modules and social proof were positioned strategically to reduce purchase anxiety and accelerate decision-making, ensuring every visit moved prospects one step closer to a conversation.",
    solutionsLabel: "Solutions", solutionsHeading: "A website that converts trust into action.",
    solutionsPara1: "The delivered site presents United Consulting as a premium advisory partner — not just a service provider. Clear service definitions, credibility signals, and friction-free contact flows work together to shorten the sales cycle.",
    solutionsPara2: "The result is a digital presence that consistently converts qualified visitors into active pipeline opportunities, establishing United Consulting as the clear choice for organizations seeking strategic counsel.",
  },
  {
    // 2 — Crestmark
    overviewHeading: "Defining a legacy brand for the digital age.",
    overviewPara1: "Crestmark Capital required an identity system that honored its institutional heritage while signaling modern capability to a new generation of investors. The brief called for a brand that could operate across print, digital, and event contexts without losing coherence or gravitas.",
    overviewPara2: "The design challenge was to balance timeless financial prestige with the clarity and accessibility that contemporary digital audiences expect — creating a system that felt both established and forward-thinking.",
    client: "Crestmark Capital", duration: "6 Weeks", industry: "Finance & Investment",
    challengeLabel: "Challenge", challengeHeading: "Balancing prestige with accessibility.",
    challengePara1: "Heritage financial brands often rely on density and tradition as signals of credibility, but these same qualities can feel exclusionary and opaque to younger investors and digital-first audiences.",
    challengePara2: "Crestmark needed an identity that maintained institutional authority while opening the door to a broader, more diverse investor base — without diluting the brand's core proposition or alienating its existing clientele.",
    approachLabel: "Approach", approachHeading: "Identity rooted in institutional credibility.",
    approachPara1: "We grounded the identity in a restrained typographic system and a carefully considered color palette that referenced traditional finance while applying contemporary proportions and digital-first spacing.",
    approachPara2: "Every design decision was tested against both print and screen contexts to ensure the identity performed equally well across all brand touchpoints, from digital reports to physical signage.",
    solutionsLabel: "Solutions", solutionsHeading: "A brand system that scales with growth.",
    solutionsPara1: "The resulting identity system gives Crestmark Capital a distinctive, ownable presence across digital, print, and environmental contexts. A comprehensive guidelines document ensures consistency as the firm grows.",
    solutionsPara2: "The flexible component library makes it easy to extend the system to new products, markets, and communications without requiring a full redesign — a brand built to compound in value over time.",
  },
  {
    // 3 — Ability
    overviewHeading: "Healthcare design that puts people first.",
    overviewPara1: "Ability Health approached us to redesign their patient-facing digital platform. The existing product was technically functional but emotionally cold — structured around clinical workflows rather than the anxious, often overwhelmed people who actually used it. Trust was eroding and engagement was declining.",
    overviewPara2: "Our mandate was to rebuild the experience around human empathy: making critical health information accessible, interactions feel supportive, and the overall product worthy of the trust patients were placing in it during vulnerable moments.",
    client: "Ability Health", duration: "5 Weeks", industry: "Healthcare",
    challengeLabel: "Challenge", challengeHeading: "Making healthcare feel human again.",
    challengePara1: "Digital health products frequently prioritize compliance and data architecture over the emotional reality of their users. Patients navigating health information are often scared, time-pressured, and not medically literate — yet most platforms design for the exception rather than the rule.",
    challengePara2: "The challenge was to redesign Ability's product so that clarity, warmth, and confidence replaced confusion and clinical detachment — creating an experience worthy of the trust patients place in it during vulnerable moments.",
    approachLabel: "Approach", approachHeading: "Empathy-driven design decisions.",
    approachPara1: "We conducted extensive user research sessions with patients across different demographics and health literacy levels, identifying the specific moments where the existing product caused the most friction and anxiety.",
    approachPara2: "These insights drove every significant design decision — from the language used in UI labels to the pacing of onboarding flows and the way health data was visualized — ensuring every interaction felt supportive rather than clinical.",
    solutionsLabel: "Solutions", solutionsHeading: "A platform that inspires confidence and care.",
    solutionsPara1: "The redesigned Ability platform reduced time-to-task for core patient journeys by a significant margin while measurably improving satisfaction scores. Warm, accessible typography and human photography transformed the emotional tone.",
    solutionsPara2: "A carefully sequenced information architecture ensured patients could find what they needed quickly and confidently. The result is a product that people trust — and return to — during the moments that matter most.",
  },
  {
    // 4 — Reunion
    overviewHeading: "Building anticipation before the doors open.",
    overviewPara1: "Reunion 2026 is an AI-focused creative conference bringing together thinkers, innovators, and makers for a landmark annual gathering. The event needed a digital presence that matched the ambition of its programming — bold, memorable, and magnetic enough to drive early ticket sales before a single speaker was announced.",
    overviewPara2: "The challenge was to generate genuine excitement and urgency through design alone, creating an experience that made prospective attendees feel that missing Reunion would mean missing a cultural moment.",
    client: "Reunion Event Co.", duration: "2 Weeks", industry: "Events & Entertainment",
    challengeLabel: "Challenge", challengeHeading: "Creating momentum before launch day.",
    challengePara1: "Event marketing is uniquely time-pressured: you need to generate demand before the full content programme is confirmed, sell tickets to an audience that hasn't yet experienced the event, and build a brand identity from scratch in record time.",
    challengePara2: "The digital presence needed to do the heavy lifting months before the doors opened — generating genuine excitement and urgency through design alone, making prospective attendees feel that missing Reunion would mean missing a cultural moment.",
    approachLabel: "Approach", approachHeading: "Bold visuals that demand attention.",
    approachPara1: "We anchored the Reunion identity in high-contrast, typographically bold design language that communicated scale and importance from the first pixel. An editorial-style layout combined with a confident color story created immediate impact.",
    approachPara2: "Every section was engineered to drive the single most important action — claiming a ticket — creating the sense that Reunion was already an institution, even at its inaugural edition.",
    solutionsLabel: "Solutions", solutionsHeading: "An event experience that starts online.",
    solutionsPara1: "The Reunion website delivered exceptional pre-launch conversion rates, with early-access ticket tiers selling out significantly ahead of schedule. The brand extended seamlessly across social, email, and physical venue materials.",
    solutionsPara2: "A cohesive world of touchpoints built anticipation at every stage of the journey. Reunion established itself as a signature event before a single attendee had walked through the door.",
  },
];

function MetaStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-start gap-2">
      <span className="font-['Roboto_Mono:Regular',monospace] text-[#239cff] text-[13px] tracking-[1px] uppercase">{label}</span>
      <span className="font-['General_Sans:Regular',sans-serif] text-[#fcfaf5] text-[16px]">{value}</span>
    </div>
  );
}

function WorkDetailPage({
  projectIndex,
  onNav,
  onSelectProject,
}: {
  projectIndex: number;
  onNav: (s: string) => void;
  onSelectProject: (i: number) => void;
}) {
  const project = allProjects[projectIndex];
  const detail = projectDetails[projectIndex];
  const nextIndex = (projectIndex + 1) % allProjects.length;
  const nextProject = allProjects[nextIndex];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [projectIndex]);

  return (
    <div className="bg-[#0f0d0b] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 pt-[100px] pb-24">
        <div className="max-w-[1120px] mx-auto">

          {/* Title */}
          <h1 className="font-['Cal_Sans:Regular',sans-serif] text-[#fcfaf5] text-[clamp(48px,7vw,92px)] tracking-[-2px] leading-[1.1] mb-10">
            {project.title}
          </h1>

          {/* Hero image */}
          <div className="w-full h-[clamp(260px,45vw,600px)] rounded-lg overflow-hidden mb-16">
            <img src={imgDetailHero} alt={project.title} className="w-full h-full object-cover" />
          </div>

          {/* Overview: heading left | text + meta right */}
          <div className="flex flex-col md:flex-row gap-10 mb-16">
            <div className="md:flex-1">
              <h2 className="font-['Cal_Sans:Regular',sans-serif] text-[#fcfaf5] text-[clamp(28px,4vw,48px)] tracking-[-0.3px] leading-[1.2]">
                {detail.overviewHeading}
              </h2>
            </div>
            <div className="md:flex-1 flex flex-col gap-5">
              <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6]">{detail.overviewPara1}</p>
              <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6]">{detail.overviewPara2}</p>
              {/* Meta stats — nested in the right column, below paragraphs */}
              <div className="flex flex-wrap gap-10 pt-6 mt-2 border-t border-white/10">
                <MetaStat label="Client" value={detail.client} />
                <MetaStat label="Duration" value={detail.duration} />
                <MetaStat label="Industry" value={detail.industry} />
              </div>
            </div>
          </div>

          {/* Challenge — image gallery above, two-col text below */}
          <div className="mb-16">
            {/* Gallery: full-width top + two side-by-side below, equal heights */}
            <div className="flex flex-col gap-3 mb-12">
              <div className="w-full rounded-lg overflow-hidden h-[clamp(220px,32vw,420px)] bg-[#161412]">
                <img src={imgDetailGallery} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg overflow-hidden h-[clamp(220px,32vw,420px)] bg-[#161412]">
                  <img src={imgDetailChallenge0} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden h-[clamp(220px,32vw,420px)] bg-[#161412]">
                  <img src={imgDetailChallenge1} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            {/* Text: label+heading left | two paragraphs right */}
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:flex-1 flex flex-col gap-4">
                <span className="font-['Roboto_Mono:Regular',monospace] text-[#239cff] text-[13px] tracking-[1px] uppercase">{detail.challengeLabel}</span>
                <h2 className="font-['Cal_Sans:Regular',sans-serif] text-[#fcfaf5] text-[clamp(28px,3.5vw,48px)] tracking-[-0.3px] leading-[1.2]">
                  {detail.challengeHeading}
                </h2>
              </div>
              <div className="md:flex-1 flex flex-col gap-5">
                <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6]">{detail.challengePara1}</p>
                <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6]">{detail.challengePara2}</p>
              </div>
            </div>
          </div>

          {/* Approach — image gallery above, two-col text below */}
          <div className="mb-16">
            <div className="flex flex-col gap-4 mb-12">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden h-[clamp(160px,22vw,320px)] bg-[#161412]">
                  <img src={imgDetailApproach0} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden h-[clamp(160px,22vw,320px)] bg-[#161412]">
                  <img src={imgDetailApproach1} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:flex-1 flex flex-col gap-4">
                <span className="font-['Roboto_Mono:Regular',monospace] text-[#239cff] text-[13px] tracking-[1px] uppercase">{detail.approachLabel}</span>
                <h2 className="font-['Cal_Sans:Regular',sans-serif] text-[#fcfaf5] text-[clamp(28px,3.5vw,48px)] tracking-[-0.3px] leading-[1.2]">
                  {detail.approachHeading}
                </h2>
              </div>
              <div className="md:flex-1 flex flex-col gap-5">
                <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6]">{detail.approachPara1}</p>
                <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6]">{detail.approachPara2}</p>
              </div>
            </div>
          </div>

          {/* Solutions — two side-by-side images above, two-col text below */}
          <div className="mb-20">
            <div className="grid grid-cols-2 gap-3 mb-12">
              <div className="rounded-lg overflow-hidden h-[clamp(220px,32vw,420px)] bg-[#161412]">
                <img src={imgDetailApproach0} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden h-[clamp(220px,32vw,420px)] bg-[#161412]">
                <img src={imgDetailSolutions} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:flex-1 flex flex-col gap-4">
                <span className="font-['Roboto_Mono:Regular',monospace] text-[#239cff] text-[13px] tracking-[1px] uppercase">{detail.solutionsLabel}</span>
                <h2 className="font-['Cal_Sans:Regular',sans-serif] text-[#fcfaf5] text-[clamp(28px,3.5vw,48px)] tracking-[-0.3px] leading-[1.2]">
                  {detail.solutionsHeading}
                </h2>
              </div>
              <div className="md:flex-1 flex flex-col gap-5">
                <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6]">{detail.solutionsPara1}</p>
                <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6]">{detail.solutionsPara2}</p>
                <div>
                  <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#239cff] to-[#005be3] text-white font-['General_Sans:Medium',sans-serif] text-[14px] hover:opacity-90 transition-opacity duration-200">
                    Live preview
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Previous / Next Project */}
          <div className="flex justify-between pt-4">
            <button
              onClick={() => onSelectProject((projectIndex - 1 + allProjects.length) % allProjects.length)}
              className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] underline underline-offset-2 hover:text-white transition-colors duration-200"
            >
              ‹ Previous Project
            </button>
            <button
              onClick={() => onSelectProject(nextIndex)}
              className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] underline underline-offset-2 hover:text-white transition-colors duration-200"
            >
              Next Project ›
            </button>
          </div>

        </div>
      </div>

      <Footer onNav={onNav} />
    </div>
  );
}

// ─── Contact Page ────────────────────────────────────────────────────────────

function ContactIcon({ path, viewBox }: { path: string; viewBox: string }) {
  return (
    <div className="w-5 h-5 shrink-0 mt-0.5">
      <svg viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d={path} fill="#b5ada4" />
      </svg>
    </div>
  );
}

function ContactPage({ onNav }: { onNav: (s: string) => void }) {
  return (
    <div className="bg-[#0f0d0b] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 pt-[clamp(80px,12vh,140px)] pb-24">
        <div className="max-w-[1120px] mx-auto">
          <div className="flex flex-col md:flex-row gap-16 md:gap-20">

            {/* Left — heading + description + CTA */}
            <div className="md:flex-[1] flex flex-col gap-10">
              <div>
                <h1 className="font-['Cal_Sans:Regular',sans-serif] text-[clamp(36px,5vw,64px)] tracking-[-1px] leading-[1.15]">
                  <span className="text-[#b5ada4]">Contact Us.</span>
                  <br />
                  <span className="text-[#fcfaf5]">Bring your vision.</span>
                  <br />
                  <span className="text-[#fcfaf5]">We&apos;ll help shape it.</span>
                </h1>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[18px] leading-[1.6] max-w-[460px]">
                  Whether you&apos;re launching a startup or refreshing your brand, we&apos;d love to hear about your vision. Tell us what you&apos;re building, and let&apos;s explore how we can help.
                </p>
                <div>
                  <button
                    onClick={() => onNav("contact")}
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#239cff] to-[#005be3] text-white font-['General_Sans:Medium',sans-serif] text-[14px] hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-[#239cff]/25"
                  >
                    Let&apos;s build together
                  </button>
                </div>
              </div>
            </div>

            {/* Right — contact items */}
            <div className="md:flex-[1] flex flex-col gap-10 md:pt-2">
              {/* Email */}
              <div className="flex gap-4 items-start">
                <ContactIcon path={contactSvg.p10821740} viewBox="0 0 19.4952 14.9963" />
                <div className="flex flex-col gap-1">
                  <span className="font-['General_Sans:Regular',sans-serif] text-[#fcfaf5] text-[20px] leading-[1.3]">Email Us</span>
                  <span className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.4]">Our team will get back to you within 24 hours.</span>
                  <a href="mailto:primewavee1@gmail.com" className="font-['General_Sans:Regular',sans-serif] text-[#239cff] text-[16px] hover:underline">
                    primewavee1@gmail.com
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10" />

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <ContactIcon path={contactSvg.p836c280} viewBox="0 0 18.7452 18.7452" />
                <div className="flex flex-col gap-1">
                  <span className="font-['General_Sans:Regular',sans-serif] text-[#fcfaf5] text-[20px] leading-[1.3]">Talk to Team</span>
                  <span className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.4]">We&apos;re available Monday–Friday, 9 AM–6 PM.</span>
                  <a href="tel:+2347043239289" className="font-['General_Sans:Regular',sans-serif] text-[#239cff] text-[16px] hover:underline">
                    +234 704 323 9289
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10" />

              {/* Visit / Web */}
              <div className="flex gap-4 items-start">
                <ContactIcon path={contactSvg.p26abea00} viewBox="0 0 23 23" />
                <div className="flex flex-col gap-1">
                  <span className="font-['General_Sans:Regular',sans-serif] text-[#fcfaf5] text-[20px] leading-[1.3]">Visit Us</span>
                  <span className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.4]">We&apos;re available Monday–Friday, 9 AM–6 PM.</span>
                  <a href="https://www.primewavee.online" target="_blank" rel="noopener noreferrer" className="font-['General_Sans:Regular',sans-serif] text-[#239cff] text-[16px] hover:underline">
                    www.primewavee.online
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer onNav={onNav} />
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

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

  // Track active section via intersection observer (home page only)
  useEffect(() => {
    if (page !== "home") return;
    const sections = ["about", "services", "work", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [page]);

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
        <>
          <div id="hero-section">
            <Hero onNav={navigateTo} />
          </div>
          <About />
          <Services />
          <Works onSelectProject={openProject} />
          <WhyUs />
          <Testimonials />
          <Footer onNav={navigateTo} />
        </>
      )}
    </div>
  );
}

