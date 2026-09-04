import { SectionLabel } from "../common/SectionLabel";

export function About() {
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
                that's a customer-facing application, a business platform, or a system built for
                a specific industry.
              </p>
              <p>
                We don't believe in forcing every project into the same solution. We take time to
                understand the problem, define what needs to be built, and create technology that fits
                the business behind it.
              </p>
              <p>
                From the first conversation to deployment and beyond, we work as a technical
                partner—not just a development team. The goal is straightforward: deliver software
                that is dependable today and ready for what's next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
