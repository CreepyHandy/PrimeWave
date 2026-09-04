import { SectionLabel } from "../common/SectionLabel";
import { testimonials } from "../../data";

export function Testimonials() {
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
