import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Services } from "../components/sections/Services";
import { Works } from "../components/sections/Works";
import { WhyUs } from "../components/sections/WhyUs";
import { Testimonials } from "../components/sections/Testimonials";
import { Footer } from "../components/common/Footer";

export function Home({ onNav, onSelectProject }: { onNav: (s: string) => void; onSelectProject: (i: number) => void }) {
  return (
    <>
      <div id="hero-section">
        <Hero onNav={onNav} />
      </div>
      <About />
      <Services />
      <Works onSelectProject={onSelectProject} />
      <WhyUs />
      <Testimonials />
      <Footer onNav={onNav} />
    </>
  );
}
