import svgPaths from "./svg-vcrv6ivggk";

function LogoIcon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="logo icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="logo icon">
          <path d={svgPaths.p1d3146f0} fill="url(#paint0_linear_0_5)" id="Polygon 5" stroke="url(#paint1_linear_0_5)" strokeWidth="0.235034" />
          <path d={svgPaths.p34f22400} fill="#121212" id="Polygon 6" stroke="url(#paint2_linear_0_5)" strokeWidth="0.132947" />
          <line id="Line 148" stroke="url(#paint3_linear_0_5)" strokeWidth="0.235034" x1="22.4621" x2="16.5862" y1="15.8073" y2="5.93587" />
          <line id="Line 149" stroke="url(#paint4_linear_0_5)" strokeWidth="0.235034" x1="6.94687" x2="12.473" y1="20.3526" y2="10.1404" />
          <line id="Line 150" stroke="url(#paint5_linear_0_5)" strokeWidth="0.235034" x1="15.4074" x2="9.32437" y1="26.112" y2="15.9009" />
          <line id="Line 151" stroke="url(#paint6_linear_0_5)" strokeWidth="0.235034" x1="24.4441" x2="12.7422" y1="21.5059" y2="21.6586" />
          <line id="Line 152" stroke="url(#paint7_linear_0_5)" strokeWidth="0.235034" x1="24.8697" x2="19.2582" y1="11.2553" y2="21.5807" />
          <line id="Line 153" stroke="url(#paint8_linear_0_5)" strokeWidth="0.235034" x1="19.0866" x2="7.84319" y1="10.17" y2="9.97035" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_5" x1="11.505" x2="20.4952" y1="0" y2="32">
            <stop stopColor="#239CFF" />
            <stop offset="1" stopColor="#005BE3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_5" x1="11.505" x2="20.4952" y1="0" y2="32">
            <stop stopColor="#239CFF" />
            <stop offset="1" stopColor="#005BE3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_5" x1="14.1002" x2="19.9962" y1="7.25167" y2="23.6296">
            <stop stopColor="#239CFF" />
            <stop offset="1" stopColor="#005BE3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_5" x1="22.5631" x2="24.1803" y1="15.7472" y2="14.5835">
            <stop stopColor="#239CFF" />
            <stop offset="1" stopColor="#005BE3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_0_5" x1="7.05022" x2="8.87762" y1="20.4085" y2="21.2029">
            <stop stopColor="#239CFF" />
            <stop offset="1" stopColor="#005BE3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_0_5" x1="15.5084" x2="17.129" y1="26.0519" y2="24.892">
            <stop stopColor="#239CFF" />
            <stop offset="1" stopColor="#005BE3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_0_5" x1="24.4425" x2="24.247" y1="21.3884" y2="19.4053">
            <stop stopColor="#239CFF" />
            <stop offset="1" stopColor="#005BE3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_0_5" x1="24.7665" x2="22.9412" y1="11.1992" y2="10.3995">
            <stop stopColor="#239CFF" />
            <stop offset="1" stopColor="#005BE3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_0_5" x1="19.0887" x2="18.9475" y1="10.0525" y2="8.06533">
            <stop stopColor="#239CFF" />
            <stop offset="1" stopColor="#005BE3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[1.488px] items-center relative shrink-0" data-name="Logo">
      <LogoIcon />
    </div>
  );
}

function Default() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Default">
      <div className="absolute bg-white h-[1.99px] left-[4.99px] rounded-[100px] top-[8px] w-[21.99px]" data-name="Horizontal Divider" />
      <div className="absolute bg-white bottom-[8px] h-[1.99px] left-[4.99px] rounded-[100px] w-[21.99px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[31.99px]" data-name="Container">
      <Default />
    </div>
  );
}

function ContainerBrandLogo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px overflow-clip relative" data-name="Container → Brand logo">
      <Logo />
      <Container1 />
    </div>
  );
}

function NavMobileDefaultClosed() {
  return (
    <div className="backdrop-blur-[3px] bg-[#0f0d0b] content-stretch flex items-center justify-center overflow-clip p-[20px] relative shrink-0 w-full" data-name="Nav - Mobile default closed">
      <ContainerBrandLogo />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Container">
      <NavMobileDefaultClosed />
    </div>
  );
}