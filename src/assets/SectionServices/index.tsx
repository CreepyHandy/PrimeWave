import svgPaths from "./svg-rxchuca9yl";

function Svg() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g clipPath="url(#clip0_0_4)" id="svg-414004469_387">
          <path d={svgPaths.p26f3aa80} fill="#239CFF" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_4">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[10px]" data-name="Container">
      <Svg />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b5ada4] text-[13px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15.6px]">Services</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container3 />
    </div>
  );
}

function ServicesEyebrow() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="Services → Eyebrow">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.57px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Cal_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b5ada4] text-[32px] w-full">
        <p className="leading-[38px] mb-0">From strategy.</p>
        <p className="leading-[38px] text-[#fcfaf5]">To experiences.</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col gap-[23.42px] items-start overflow-clip relative shrink-0 w-full" data-name="Heading">
      <ServicesEyebrow />
      <Heading2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Cal_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fcfaf5] text-[49.4px] tracking-[-2px] w-full">
        <p className="leading-[60px]">Identity</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Heading">
      <Container5 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Cal_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b5ada4] text-[20px] w-full whitespace-pre-wrap">
        <p className="leading-[24px] mb-0">{`Build a distinctive brand that `}</p>
        <p className="leading-[24px] mb-0">{`communicates your vision, earns `}</p>
        <p className="leading-[24px] mb-0">{`trust, and creates lasting `}</p>
        <p className="leading-[24px]">recognition.</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="border-b border-black border-solid content-stretch flex h-[42px] items-center justify-between pb-[16px] relative shrink-0 w-full">
      <p className="font-['Cal_Sans:Regular',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#b5ada4] text-[24px]">Brand Strategy</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[15.6px] relative shrink-0 text-[#239cff] text-[13px] tracking-[1px] uppercase">01</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="border-b border-black border-solid content-stretch flex h-[42px] items-center justify-between pb-[16px] relative shrink-0 w-full">
      <p className="font-['Cal_Sans:Regular',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#b5ada4] text-[24px]">Logo Design</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[15.6px] relative shrink-0 text-[#239cff] text-[13px] tracking-[1px] uppercase">02</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="border-b border-black border-solid content-stretch flex h-[42px] items-center justify-between pb-[16px] relative shrink-0 w-full">
      <p className="font-['Cal_Sans:Regular',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#b5ada4] text-[24px]">Visual Identity</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[15.6px] relative shrink-0 text-[#239cff] text-[13px] tracking-[1px] uppercase">03</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="border-b border-black border-solid content-stretch flex h-[42px] items-center justify-between pb-[16px] relative shrink-0 w-full">
      <p className="font-['Cal_Sans:Regular',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#b5ada4] text-[24px]">Brand Guidelines</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[15.6px] relative shrink-0 text-[#239cff] text-[13px] tracking-[1px] uppercase">04</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="border-b border-black border-solid content-stretch flex h-[42px] items-center justify-between pb-[16px] relative shrink-0 w-full">
      <p className="font-['Cal_Sans:Regular',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#b5ada4] text-[24px]">Brand Assets</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[15.6px] relative shrink-0 text-[#239cff] text-[13px] tracking-[1px] uppercase">05</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] h-[273px] items-start relative shrink-0 w-full whitespace-nowrap">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame5 />
    </div>
  );
}

function Subtext() {
  return (
    <div className="content-stretch flex flex-col gap-[39.99px] items-start overflow-clip relative shrink-0 w-full" data-name="Subtext">
      <Heading3 />
      <Frame4 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center overflow-clip relative shrink-0 w-full" data-name="Content">
      <Heading1 />
      <Subtext />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Content />
    </div>
  );
}

function SectionIdentity() {
  return (
    <div className="bg-[#0f0d0b] content-stretch flex flex-col items-center p-[24px] rounded-[8px] shrink-0 sticky top-0 w-full" data-name="Section - Identity">
      <Container4 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Cal_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fcfaf5] text-[49.4px] tracking-[-2px] w-full">
        <p className="leading-[60px]">Product</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Heading">
      <Container7 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Cal_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b5ada4] text-[20px] w-full whitespace-pre-wrap">
        <p className="leading-[24px] mb-0">{`Create intuitive digital products `}</p>
        <p className="leading-[24px] mb-0">{`that balance user needs, business `}</p>
        <p className="leading-[24px] mb-0">{`goals, and exceptional `}</p>
        <p className="leading-[24px]">experiences.</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="border-b border-black border-solid content-stretch flex h-[42px] items-center justify-between pb-[16px] relative shrink-0 w-full">
      <p className="font-['Cal_Sans:Regular',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#b5ada4] text-[24px]">UX Design</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[15.6px] relative shrink-0 text-[#239cff] text-[13px] tracking-[1px] uppercase">01</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="border-b border-black border-solid content-stretch flex h-[42px] items-center justify-between pb-[16px] relative shrink-0 w-full">
      <p className="font-['Cal_Sans:Regular',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#b5ada4] text-[24px]">UI Design</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[15.6px] relative shrink-0 text-[#239cff] text-[13px] tracking-[1px] uppercase">02</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="border-b border-black border-solid content-stretch flex h-[42px] items-center justify-between pb-[16px] relative shrink-0 w-full">
      <p className="font-['Cal_Sans:Regular',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#b5ada4] text-[24px]">Mobile App Design</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[15.6px] relative shrink-0 text-[#239cff] text-[13px] tracking-[1px] uppercase">03</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="border-b border-black border-solid content-stretch flex h-[42px] items-center justify-between pb-[16px] relative shrink-0 w-full">
      <p className="font-['Cal_Sans:Regular',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#b5ada4] text-[24px]">Web App Design</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[15.6px] relative shrink-0 text-[#239cff] text-[13px] tracking-[1px] uppercase">04</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="border-b border-black border-solid content-stretch flex h-[42px] items-center justify-between pb-[16px] relative shrink-0 w-full">
      <p className="font-['Cal_Sans:Regular',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#b5ada4] text-[24px]">Prototypes</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[15.6px] relative shrink-0 text-[#239cff] text-[13px] tracking-[1px] uppercase">05</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] h-[273px] items-start relative shrink-0 w-full whitespace-nowrap">
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Subtext1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative shrink-0 w-full" data-name="Subtext">
      <Heading5 />
      <Frame6 />
    </div>
  );
}

function ContainerContent() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center overflow-clip relative shrink-0 w-full" data-name="Container → Content">
      <Heading4 />
      <Subtext1 />
    </div>
  );
}

function SectionProduct() {
  return (
    <div className="bg-[#161412] content-stretch flex flex-col items-center justify-center p-[24px] rounded-[8px] shrink-0 sticky top-0 w-full" data-name="Section - Product">
      <ContainerContent />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Cal_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fcfaf5] text-[49.4px] tracking-[-2px] w-full">
        <p className="leading-[60px]">Website</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Heading">
      <Container9 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Cal_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b5ada4] text-[20px] w-full whitespace-pre-wrap">
        <p className="leading-[24px] mb-0">{`Design modern, high-performing `}</p>
        <p className="leading-[24px] mb-0">{`websites that tell your story and `}</p>
        <p className="leading-[24px]">convert visitors into customers.</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="border-b border-black border-solid content-stretch flex h-[42px] items-center justify-between pb-[16px] relative shrink-0 w-full">
      <p className="font-['Cal_Sans:Regular',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#b5ada4] text-[24px]">Websites</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[15.6px] relative shrink-0 text-[#239cff] text-[13px] tracking-[1px] uppercase">01</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="border-b border-black border-solid content-stretch flex h-[42px] items-center justify-between pb-[16px] relative shrink-0 w-full">
      <p className="font-['Cal_Sans:Regular',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#b5ada4] text-[24px]">Landing Pages</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[15.6px] relative shrink-0 text-[#239cff] text-[13px] tracking-[1px] uppercase">02</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="border-b border-black border-solid content-stretch flex h-[42px] items-center justify-between pb-[16px] relative shrink-0 w-full">
      <p className="font-['Cal_Sans:Regular',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#b5ada4] text-[24px]">CMS Websites</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[15.6px] relative shrink-0 text-[#239cff] text-[13px] tracking-[1px] uppercase">03</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="border-b border-black border-solid content-stretch flex h-[42px] items-center justify-between pb-[16px] relative shrink-0 w-full">
      <p className="font-['Cal_Sans:Regular',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#b5ada4] text-[24px]">Responsive Design</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[15.6px] relative shrink-0 text-[#239cff] text-[13px] tracking-[1px] uppercase">04</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="border-b border-black border-solid content-stretch flex h-[42px] items-center justify-between pb-[16px] relative shrink-0 w-full">
      <p className="font-['Cal_Sans:Regular',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#b5ada4] text-[24px]">SEO-ready Loyouts</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[15.6px] relative shrink-0 text-[#239cff] text-[13px] tracking-[1px] uppercase">05</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] h-[273px] items-start relative shrink-0 w-full whitespace-nowrap">
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Subtext2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative shrink-0 w-full" data-name="Subtext">
      <Heading7 />
      <Frame12 />
    </div>
  );
}

function ContainerContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center overflow-clip relative shrink-0 w-full" data-name="Container → Content">
      <Heading6 />
      <Subtext2 />
    </div>
  );
}

function SectionWebsite() {
  return (
    <div className="bg-[#0f0d0b] content-stretch flex flex-col items-center justify-center p-[24px] rounded-[8px] shrink-0 sticky top-0 w-full" data-name="Section - Website">
      <ContainerContent1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Cal_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fcfaf5] text-[49.6px] tracking-[-2px] w-full">
        <p className="leading-[60px]">Development</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Heading">
      <Container11 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Cal_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b5ada4] text-[20px] w-full whitespace-pre-wrap">
        <p className="leading-[24px] mb-0">{`Bring designs to life with fast, `}</p>
        <p className="leading-[24px] mb-0">{`responsive Framer websites built `}</p>
        <p className="leading-[24px]">for performance and scalability.</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="border-b border-black border-solid content-stretch flex h-[42px] items-center justify-between pb-[16px] relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['Cal_Sans:Regular',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#b5ada4] text-[24px]">Websites Dev.</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[15.6px] relative shrink-0 text-[#239cff] text-[13px] tracking-[1px] uppercase">01</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="border-b border-black border-solid content-stretch flex h-[42px] items-center justify-between pb-[16px] relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['Cal_Sans:Regular',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#b5ada4] text-[24px]">Mobile App Dev.</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[15.6px] relative shrink-0 text-[#239cff] text-[13px] tracking-[1px] uppercase">02</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="border-b border-black border-solid content-stretch flex h-[42px] items-center justify-between pb-[16px] relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['Cal_Sans:Regular',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#b5ada4] text-[24px]">Landing Pages</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[15.6px] relative shrink-0 text-[#239cff] text-[13px] tracking-[1px] uppercase">03</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="border-b border-black border-solid content-stretch flex h-[42px] items-center justify-between pb-[16px] relative shrink-0 w-full">
      <p className="font-['Cal_Sans:Regular',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#b5ada4] text-[24px] whitespace-pre">{`Enterprise  Softwares`}</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[15.6px] relative shrink-0 text-[#239cff] text-[13px] tracking-[1px] uppercase whitespace-nowrap">04</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="border-b border-black border-solid content-stretch flex h-[42px] items-center justify-between pb-[16px] relative shrink-0 w-full">
      <p className="font-['Cal_Sans:Regular',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#b5ada4] text-[24px] whitespace-pre">{`Enterprise  Softwares`}</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[15.6px] relative shrink-0 text-[#239cff] text-[13px] tracking-[1px] uppercase whitespace-nowrap">05</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Subtext3() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative shrink-0 w-full" data-name="Subtext">
      <Heading9 />
      <Frame18 />
    </div>
  );
}

function ContainerContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center overflow-clip relative shrink-0 w-full" data-name="Container → Content">
      <Heading8 />
      <Subtext3 />
    </div>
  );
}

function SectionDevelopment() {
  return (
    <div className="bg-[#161412] content-stretch flex flex-col items-center justify-center p-[24px] rounded-[8px] shrink-0 sticky top-0 w-full" data-name="Section - Development">
      <ContainerContent2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Cal_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fcfaf5] text-[49.4px] tracking-[-2px] w-full">
        <p className="leading-[60px]">Systems</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container14 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Heading">
      <Container13 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Cal_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b5ada4] text-[20px] w-full whitespace-pre-wrap">
        <p className="leading-[24px] mb-0">{`Build scalable design systems that `}</p>
        <p className="leading-[24px] mb-0">{`keep your product consistent, `}</p>
        <p className="leading-[24px] mb-0">{`efficient, and ready for future `}</p>
        <p className="leading-[24px]">growth.</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="border-b border-black border-solid content-stretch flex h-[42px] items-center justify-between pb-[16px] relative shrink-0 w-full">
      <p className="font-['Cal_Sans:Regular',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#b5ada4] text-[24px]">Component</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[15.6px] relative shrink-0 text-[#239cff] text-[13px] tracking-[1px] uppercase">01</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="border-b border-black border-solid content-stretch flex h-[42px] items-center justify-between pb-[16px] relative shrink-0 w-full">
      <p className="font-['Cal_Sans:Regular',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#b5ada4] text-[24px]">Design Tokens</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[15.6px] relative shrink-0 text-[#239cff] text-[13px] tracking-[1px] uppercase">02</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="border-b border-black border-solid content-stretch flex h-[42px] items-center justify-between pb-[16px] relative shrink-0 w-full">
      <p className="font-['Cal_Sans:Regular',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#b5ada4] text-[24px]">UI Guidelines</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[15.6px] relative shrink-0 text-[#239cff] text-[13px] tracking-[1px] uppercase">03</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="border-b border-black border-solid content-stretch flex h-[42px] items-center justify-between pb-[16px] relative shrink-0 w-full">
      <p className="font-['Cal_Sans:Regular',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#b5ada4] text-[24px]">Documentation</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[15.6px] relative shrink-0 text-[#239cff] text-[13px] tracking-[1px] uppercase">04</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="border-b border-black border-solid content-stretch flex h-[42px] items-center justify-between pb-[16px] relative shrink-0 w-full">
      <p className="font-['Cal_Sans:Regular',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#b5ada4] text-[24px]">Maintenance</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[15.6px] relative shrink-0 text-[#239cff] text-[13px] tracking-[1px] uppercase">05</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full whitespace-nowrap">
      <Frame25 />
      <Frame26 />
      <Frame27 />
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Subtext4() {
  return (
    <div className="content-stretch flex flex-col gap-[39.99px] items-start overflow-clip relative shrink-0 w-full" data-name="Subtext">
      <Heading11 />
      <Frame24 />
    </div>
  );
}

function ContainerContent3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center overflow-clip relative shrink-0 w-full" data-name="Container → Content">
      <Heading10 />
      <Subtext4 />
    </div>
  );
}

function SectionSystems() {
  return (
    <div className="bg-[#0f0d0b] content-stretch flex flex-col items-center justify-center p-[24px] rounded-[8px] shrink-0 sticky top-0 w-full" data-name="Section - Systems">
      <ContainerContent3 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center px-[20px] py-[60px] relative shrink-0 w-full" data-name="Container">
      <Heading />
      <SectionIdentity />
      <SectionProduct />
      <SectionWebsite />
      <SectionDevelopment />
      <SectionSystems />
    </div>
  );
}

export default function SectionServices() {
  return (
    <div className="bg-[#161412] content-stretch flex flex-col items-center justify-center relative size-full" data-name="Section - Services">
      <Container />
    </div>
  );
}