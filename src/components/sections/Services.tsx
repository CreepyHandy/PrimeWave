import { SectionLabel } from "../common/SectionLabel";
import { serviceCategories } from "../../data";

export function Services() {
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
                        <span className="font-['General_Sans:Regular',sans-serif] text-[#239cff] text-[13px] tracking-[1px] uppercase">
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
