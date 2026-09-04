export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="w-2.5 h-2.5 rounded-full bg-[#239cff] shrink-0" />
      <span className="font-['Roboto_Mono:Regular',monospace] text-[13px] tracking-[1px] uppercase text-[#b5ada4]">
        {children}
      </span>
    </div>
  );
}
