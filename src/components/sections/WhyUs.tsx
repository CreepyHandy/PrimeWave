import { SectionLabel } from "../common/SectionLabel";
import { whyIcons, whyCards } from "../../data";

export function WhyUs() {
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
              className="bg-[#0f0d0b] rounded-lg p-6"
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
