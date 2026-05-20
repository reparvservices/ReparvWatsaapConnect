import React from "react";
import heroImage from "../../assets/home/heroright.png";

const ZapIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#EBE5FF"
    strokeWidth="1.33"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const ReparvHeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center  bg-[linear-gradient(124.31deg,#1E1B4B_0%,#2E1065_100%)]">
      {/* ── CONTENT ── */}
      <div className="relative z-10 w-full max-w-[1440px] justify-between mx-auto px-3 sm:px-10 lg:px-20 py-24 lg:mt-10 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-6 w-full">
          {/* ── LEFT — Text ── */}
          <div className="w-full lg:w-[50%] flex flex-col gap-0 shrink-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-[rgba(108,59,255,0.2)] border border-[rgba(108,59,255,0.4)] rounded-full px-5 py-2 w-fit mb-6">
              <ZapIcon />
              <span className="text-[#EBE5FF] text-sm font-semibold leading-[17px]">
                New: Automated WhatsApp Campaigns
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-white font-extrabold leading-[1.1] tracking-[-1.92px] text-[40px] sm:text-[52px] lg:text-[64px] mb-6 pt-2 z-100">
              Simplify Your WhatsApp Marketing with Reparv
            </h1>

            {/* Description */}
            <p className="text-white/70 font-normal text-base sm:text-lg lg:text-xl leading-8 max-w-[580px] z-100">
              Help your business send bulk WhatsApp marketing messages using
              smart templates and automated campaigns. Built specifically for
              builders, property dealers, and sales partners.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-7">
              <button
                className="px-8 py-4 rounded-2xl text-white font-semibold text-base leading-none cursor-pointer border-0 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  background:
                    "linear-gradient(106.94deg, #6C3BFF 0%, #8B63FF 100%)",
                  boxShadow: "0 8px 24px rgba(108,59,255,0.25)",
                }}
              >
                Start Free Trial
              </button>
              <button className="px-8 py-4 rounded-2xl text-white font-semibold text-base leading-none border border-white/30 bg-transparent cursor-pointer transition-all duration-200 hover:bg-white/10 hover:border-white/55 active:bg-white/15">
                Book Demo
              </button>
            </div>
          </div>

          {/* ── RIGHT — Image ── */}

          <div className="w-full lg:w-[52%] flex items-center justify-center lg:absolute lg:right-0 lg:top-0 lg:h-full">
            <img
              src={heroImage}
              alt="WhatsApp Marketing Platform Illustration"
              className="w-full max-w-none lg:w-[70vw] h-auto object-contain opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReparvHeroSection;
