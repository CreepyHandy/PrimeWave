import { useEffect } from "react";
import imgDetailHero from "../assets/DetailedWorkPage/e8aae7b65f47cce826c8aa0cd63d52507e152b75.png";
import imgDetailGallery from "../assets/DetailedWorkPage/244f3962b9fc6f941659e4efbd5a7f61144c979e.png";
import imgDetailChallenge0 from "../assets/DetailedWorkPage/f4d2aca7d035bba4932f77c89ee49e57d77beec7.png";
import imgDetailChallenge1 from "../assets/DetailedWorkPage/5106151af6f806f3f4bfee72d1823b2b70b5c8f9.png";
import imgDetailApproach0 from "../assets/DetailedWorkPage/3980c9be4471f65c828655e4cc10fe748a32293c.png";
import imgDetailApproach1 from "../assets/DetailedWorkPage/1f45238c171fa2a42c04efc26f242d52ce7b9fb3.png";
import imgDetailSolutions from "../assets/DetailedWorkPage/1c6af93d23c05f5dae812e8e5b808c496edb2bbe.png";

import { allProjects, projectDetails } from "../data";
import { Footer } from "../components/common/Footer";

function MetaStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-start gap-2">
      <span className="font-['Roboto_Mono:Regular',monospace] text-[#239cff] text-[13px] tracking-[1px] uppercase">{label}</span>
      <span className="font-['General_Sans:Regular',sans-serif] text-[#fcfaf5] text-[16px]">{value}</span>
    </div>
  );
}

export function WorkDetailPage({
  projectIndex,
  onNav,
  onSelectProject,
}: {
  projectIndex: number;
  onNav: (s: string) => void;
  onSelectProject: (i: number) => void;
}) {
  const project = allProjects[projectIndex];
  const detail = projectDetails[projectIndex];
  const nextIndex = (projectIndex + 1) % allProjects.length;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [projectIndex]);

  return (
    <div className="bg-[#0f0d0b] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 pt-[100px] pb-24">
        <div className="max-w-[1120px] mx-auto">

          {/* Title */}
          <h1 className="font-['Cal_Sans:Regular',sans-serif] text-[#fcfaf5] text-[clamp(48px,7vw,92px)] tracking-[-2px] leading-[1.1] mb-10">
            {project.title}
          </h1>

          {/* Hero image */}
          <div className="w-full h-[clamp(260px,45vw,600px)] rounded-lg overflow-hidden mb-16">
            <img src={imgDetailHero} alt={project.title} className="w-full h-full object-cover" />
          </div>

          {/* Overview: heading left | text + meta right */}
          <div className="flex flex-col md:flex-row gap-10 mb-16">
            <div className="md:flex-1">
              <h2 className="font-['Cal_Sans:Regular',sans-serif] text-[#fcfaf5] text-[clamp(28px,4vw,48px)] tracking-[-0.3px] leading-[1.2]">
                {detail.overviewHeading}
              </h2>
            </div>
            <div className="md:flex-1 flex flex-col gap-5">
              <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6]">{detail.overviewPara1}</p>
              <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6]">{detail.overviewPara2}</p>
              {/* Meta stats — nested in the right column, below paragraphs */}
              <div className="flex flex-wrap gap-10 pt-6 mt-2 border-t border-white/10">
                <MetaStat label="Client" value={detail.client} />
                <MetaStat label="Duration" value={detail.duration} />
                <MetaStat label="Industry" value={detail.industry} />
              </div>
            </div>
          </div>

          {/* Challenge — image gallery above, two-col text below */}
          <div className="mb-16">
            {/* Gallery: full-width top + two side-by-side below, equal heights */}
            <div className="flex flex-col gap-3 mb-12">
              <div className="w-full rounded-lg overflow-hidden h-[clamp(220px,32vw,420px)] bg-[#161412]">
                <img src={imgDetailGallery} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg overflow-hidden h-[clamp(220px,32vw,420px)] bg-[#161412]">
                  <img src={imgDetailChallenge0} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden h-[clamp(220px,32vw,420px)] bg-[#161412]">
                  <img src={imgDetailChallenge1} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            {/* Text: label+heading left | two paragraphs right */}
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:flex-1 flex flex-col gap-4">
                <span className="font-['Roboto_Mono:Regular',monospace] text-[#239cff] text-[13px] tracking-[1px] uppercase">{detail.challengeLabel}</span>
                <h2 className="font-['Cal_Sans:Regular',sans-serif] text-[#fcfaf5] text-[clamp(28px,3.5vw,48px)] tracking-[-0.3px] leading-[1.2]">
                  {detail.challengeHeading}
                </h2>
              </div>
              <div className="md:flex-1 flex flex-col gap-5">
                <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6]">{detail.challengePara1}</p>
                <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6]">{detail.challengePara2}</p>
              </div>
            </div>
          </div>

          {/* Approach — image gallery above, two-col text below */}
          <div className="mb-16">
            <div className="flex flex-col gap-4 mb-12">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden h-[clamp(160px,22vw,320px)] bg-[#161412]">
                  <img src={imgDetailApproach0} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden h-[clamp(160px,22vw,320px)] bg-[#161412]">
                  <img src={imgDetailApproach1} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:flex-1 flex flex-col gap-4">
                <span className="font-['Roboto_Mono:Regular',monospace] text-[#239cff] text-[13px] tracking-[1px] uppercase">{detail.approachLabel}</span>
                <h2 className="font-['Cal_Sans:Regular',sans-serif] text-[#fcfaf5] text-[clamp(28px,3.5vw,48px)] tracking-[-0.3px] leading-[1.2]">
                  {detail.approachHeading}
                </h2>
              </div>
              <div className="md:flex-1 flex flex-col gap-5">
                <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6]">{detail.approachPara1}</p>
                <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6]">{detail.approachPara2}</p>
              </div>
            </div>
          </div>

          {/* Solutions — two side-by-side images above, two-col text below */}
          <div className="mb-20">
            <div className="grid grid-cols-2 gap-3 mb-12">
              <div className="rounded-lg overflow-hidden h-[clamp(220px,32vw,420px)] bg-[#161412]">
                <img src={imgDetailApproach0} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden h-[clamp(220px,32vw,420px)] bg-[#161412]">
                <img src={imgDetailSolutions} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:flex-1 flex flex-col gap-4">
                <span className="font-['Roboto_Mono:Regular',monospace] text-[#239cff] text-[13px] tracking-[1px] uppercase">{detail.solutionsLabel}</span>
                <h2 className="font-['Cal_Sans:Regular',sans-serif] text-[#fcfaf5] text-[clamp(28px,3.5vw,48px)] tracking-[-0.3px] leading-[1.2]">
                  {detail.solutionsHeading}
                </h2>
              </div>
              <div className="md:flex-1 flex flex-col gap-5">
                <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6]">{detail.solutionsPara1}</p>
                <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.6]">{detail.solutionsPara2}</p>
                <div>
                  <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#239cff] to-[#005be3] text-white font-['General_Sans:Medium',sans-serif] text-[14px] hover:opacity-90 transition-opacity duration-200">
                    Live preview
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Previous / Next Project */}
          <div className="flex justify-between pt-4">
            <button
              onClick={() => onSelectProject((projectIndex - 1 + allProjects.length) % allProjects.length)}
              className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] underline underline-offset-2 hover:text-white transition-colors duration-200"
            >
              ‹ Previous Project
            </button>
            <button
              onClick={() => onSelectProject(nextIndex)}
              className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] underline underline-offset-2 hover:text-white transition-colors duration-200"
            >
              Next Project ›
            </button>
          </div>

        </div>
      </div>

      <Footer onNav={onNav} />
    </div>
  );
}
