export function ProjectCard({ project, index, onSelect }: { project: any; index: number; onSelect: (i: number) => void }) {
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
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-2 py-1 rounded text-[11px] font-['General_Sans:Regular',sans-serif] tracking-[1px] uppercase bg-[#0f0d0b]/80 text-[#239cff]">
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
