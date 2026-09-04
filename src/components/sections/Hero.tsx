import imgHeroSection from "../../assets/LandingPage-1/0212f6a03da14a92138719f15d4bda398bbb9eaf.png";
import { logoImages } from "../../data";

export function Hero({ onNav }: { onNav: (s: string) => void }) {
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
          Let's build together
        </button>
      </div>
    </section>
  );
}
