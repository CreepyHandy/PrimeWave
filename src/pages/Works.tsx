import imgHeroSection from "../assets/LandingPage-1/0212f6a03da14a92138719f15d4bda398bbb9eaf.png";
import { ProjectCard } from "../components/common/ProjectCard";
import { Footer } from "../components/common/Footer";
import { allProjects } from "../data";

export function WorksPage({ onNav, onSelectProject }: { onNav: (s: string) => void; onSelectProject: (i: number) => void }) {
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
            Let's build together
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
