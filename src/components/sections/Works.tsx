import { SectionLabel } from "../common/SectionLabel";
import { ProjectCard } from "../common/ProjectCard";
import { projects } from "../../data";

export function Works({ onSelectProject }: { onSelectProject: (i: number) => void }) {
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
