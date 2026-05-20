import React from "react";

const benefits = [
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#6C47FF"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 4l5 5L8 21l-5-2 2-5L15 4z" />
        <path d="M17.5 7.5l-1-1" />
        <path d="M3 3l1.5 1.5M20.5 3.5l-1 1M3.5 20.5l1-1" />
      </svg>
    ),
    title: "Easy to Use",
    desc: "No technical skills required. Our intuitive interface makes marketing simple for anyone.",
  },
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#6C47FF"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Fast Delivery",
    desc: "Industry-leading delivery speeds ensure your messages reach customers instantly.",
  },
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#6C47FF"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l2.4 3.2 4-.8-.8 4L21 11l-3.4 2 .8 4-4-.8L12 19.6l-2.4-2.4-4 .8.8-4L3 11l3.4-2-.8-4 4 .8z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "Approved Templates",
    desc: "Get your message templates approved by Meta faster with our built-in compliance checks.",
  },
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#6C47FF"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "Secure Platform",
    desc: "Enterprise-grade security keeps your customer data safe, private, and fully compliant.",
  },
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#6C47FF"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="5" width="20" height="14" rx="3" />
        <path d="M16 12h2" />
        <path d="M2 10h20" />
      </svg>
    ),
    title: "Affordable Pricing",
    desc: "Transparent pricing that scales with your business. No hidden fees or surprise charges.",
  },
];

const BenefitCard = ({ icon, title, desc }) => (
  <div className="bg-[#F4F2FF] rounded-3xl px-8 py-10 text-center border border-transparent hover:border-[#6C47FF]/20 hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(108,71,255,0.13)] transition-all duration-200 ease-in-out">
    <div className="w-14 h-14 bg-white rounded-[18px] flex items-center justify-center mx-auto mb-6 shadow-[0_2px_14px_rgba(108,71,255,0.11)]">
      {icon}
    </div>
    <h3 className="text-[#181830] text-[16.5px] font-bold mb-2.5">{title}</h3>
    <p className="text-[#8B8FA8] text-sm leading-relaxed">{desc}</p>
  </div>
);

const Benefits = () => (
  <section className="w-full bg-white font-[Manrope,sans-serif] px-6 py-20">
    <div className="max-w-[1100px] mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-[11.5px] font-extrabold tracking-[0.15em] uppercase text-[#6C47FF] mb-4">
          Benefits
        </p>
        <h2 className="text-[#181830] text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
          Why choose Reparv
        </h2>
        <p className="text-[#8B8FA8] text-base leading-relaxed max-w-md mx-auto">
          We provide the most reliable infrastructure for your essential
          business communications.
        </p>
      </div>

      {/* Top Row: 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {benefits.slice(0, 3).map((b, i) => (
          <BenefitCard key={i} {...b} />
        ))}
      </div>

      {/* Bottom Row: 2 cards centered under left 2 cols */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:max-w-[calc((1100px-44px)*2/3+22px)] mx-auto w-full">
        {benefits.slice(3).map((b, i) => (
          <BenefitCard key={i} {...b} />
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
