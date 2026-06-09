import React, { memo } from "react";
import heroImage from "../../assets/home/heroright.png";

const ZapIcon = memo(() => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#EBE5FF"
    strokeWidth="1.33"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
));

export default function ReparvHeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-[linear-gradient(124.31deg,#1E1B4B_0%,#2E1065_100%)]">
      <div className="relative z-10 mx-auto w-full max-w-[1440px] justify-between px-3 py-24 sm:px-10 lg:mt-10 lg:px-20 lg:py-28">
        <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:gap-6">
          {/* Left Content */}
          <div className="flex w-full shrink-0 flex-col lg:w-1/2">
            <div className="mb-6 inline-flex w-fit items-center gap-2.5 rounded-full border border-[rgba(108,59,255,0.4)] bg-[rgba(108,59,255,0.2)] px-5 py-2">
              <ZapIcon />
              <span className="text-sm font-semibold leading-[17px] text-[#EBE5FF]">
                New: Automated WhatsApp Campaigns
              </span>
            </div>

            <h1 className="z-10 mb-6 pt-2 text-[40px] font-extrabold leading-[1.1] tracking-[-1.92px] text-white sm:text-[52px] lg:text-[64px]">
              Simplify Your WhatsApp Marketing with Reparv
            </h1>

            <p className="z-10 max-w-[580px] text-base leading-8 text-white/70 sm:text-lg lg:text-xl">
              Help your business send bulk WhatsApp marketing messages using
              smart templates and automated campaigns. Built specifically for
              builders, property dealers, and sales partners.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-7">
              <button className="rounded-2xl bg-[linear-gradient(106.94deg,#6C3BFF_0%,#8B63FF_100%)] px-8 py-4 text-base font-semibold leading-none text-white shadow-[0_8px_24px_rgba(108,59,255,0.25)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0">
                Start Free Trial
              </button>

              <button className="rounded-2xl border border-white/30 bg-transparent px-8 py-4 text-base font-semibold leading-none text-white transition-all duration-200 hover:border-white/55 hover:bg-white/10 active:bg-white/15">
                Book Demo
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex w-full items-center justify-center lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[52%]">
            <img
              src={heroImage}
              alt="WhatsApp Marketing Platform Illustration"
              fetchPriority="high"
              decoding="async"
              className="h-auto w-full max-w-none object-contain opacity-80 lg:w-[70vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
