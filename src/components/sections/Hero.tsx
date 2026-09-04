import imgHeroSection from "../../assets/LandingPage-1/0212f6a03da14a92138719f15d4bda398bbb9eaf.png";
import { logoImages } from "../../data";

export function Hero({ onNav }: { onNav: (s: string) => void }) {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden flex flex-col justify-start md:justify-between pt-[120px] md:pt-[clamp(100px,14vh,160px)] pb-[60px] md:pb-[clamp(60px,9vh,100px)] gap-12 md:gap-0">
      {/* Background */}
      <img
        src={imgHeroSection}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0d0b]/60 via-[#0f0d0b]/20 to-[#0f0d0b]/80" />

      {/* Heading */}
      <div className="relative z-10 flex justify-center px-6 text-center">
        <h1 className="font-['Cal_Sans:Regular',sans-serif] text-[clamp(48px,11vw,92px)] leading-[1.05] tracking-[-2px] max-w-5xl">
          {/* Mobile Heading */}
          <span className="text-[#b5ada4] md:hidden">
            Your product.<br />Our Expertise
          </span>
          {/* Desktop Heading */}
          <span className="text-[#b5ada4] hidden md:inline md:whitespace-nowrap">
            Your product. Our expertise.
          </span>
          <br />
          <span className="text-[#fcfaf5]">We build the software your industry runs on.</span>
        </h1>
      </div>

      {/* Logo marquee — middle strip */}
      <div className="relative z-10 overflow-hidden mt-2 md:mt-0">
        <div className="flex animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
          {[...logoImages, ...logoImages, ...logoImages].map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="h-[20px] md:h-[25px] mx-6 md:mx-10 object-contain pointer-events-none"
            />
          ))}
        </div>
      </div>

      {/* Description + CTA — bottom */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 gap-8 md:gap-6 mt-4 md:mt-0">
        {/* Mobile Description */}
        <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6] max-w-[340px] block md:hidden">
          We partner with founders to build memorable brands, digital products, and websites that earn trust, attract customers, and accelerate growth.
        </p>
        {/* Desktop Description */}
        <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[20px] leading-[1.6] max-w-[504px] hidden md:block">
          PrimeWavee designs and builds tailored software for businesses, founders, and organizations —
          taking products from concept to launch with the expertise and attention they deserve.
        </p>
        <button
          onClick={() => onNav("contact")}
          className="px-8 py-3.5 md:px-6 md:py-2.5 rounded-full bg-gradient-to-r from-[#239cff] to-[#005be3] text-white font-['General_Sans:Medium',sans-serif] text-[14px] hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-[#239cff]/25"
        >
          Let's build together
        </button>
      </div>
    </section>
  );
}
