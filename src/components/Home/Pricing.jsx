import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    desc: "For small teams just getting started with WhatsApp marketing.",
    price: "29",
    features: [
      "1,000 Messages / month",
      "Basic Templates",
      "Email Support",
      "1 Team Member",
    ],
    cta: "Get Started",
    popular: false,
    ctaStyle: "ghost",
  },
  {
    name: "Professional",
    desc: "For growing businesses scaling up their communication.",
    price: "99",
    features: [
      "10,000 Messages / month",
      "Advanced Templates",
      "Priority Support",
      "5 Team Members",
      "Custom Analytics",
    ],
    cta: "Start Free Trial",
    popular: true,
    ctaStyle: "solid",
  },
  {
    name: "Enterprise",
    desc: "For high-volume sending and custom integration needs.",
    price: "299",
    features: [
      "Unlimited Messages",
      "Dedicated Account Manager",
      "24/7 Phone Support",
      "Unlimited Members",
      "Custom Integrations",
    ],
    cta: "Contact Sales",
    popular: false,
    ctaStyle: "ghost",
  },
];

const PlanCard = ({ name, desc, price, features, cta, popular, ctaStyle }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative rounded-3xl px-6 sm:px-8 py-8 sm:py-10 flex flex-col transition-all duration-200
        ${
          popular
            ? "bg-white border-2 border-[#6C47FF] shadow-[0_8px_40px_rgba(108,71,255,0.18)] lg:scale-[1.03] z-10"
            : `bg-white border border-[#6C47FF]/10 ${hovered ? "shadow-[0_12px_40px_rgba(108,71,255,0.10)] -translate-y-1" : "shadow-sm"}`
        }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-[#6C47FF] text-white text-[10px] sm:text-[11px] font-bold tracking-widest uppercase px-4 sm:px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-[#181830] text-xl sm:text-2xl font-extrabold mb-2">
        {name}
      </h3>
      <p className="text-[#8B8FA8] text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
        {desc}
      </p>
      <div className="flex items-end gap-1 mb-6 sm:mb-8">
        <span className="text-[#181830] text-4xl sm:text-5xl font-extrabold leading-none">
          ${price}
        </span>
        <span className="text-[#8B8FA8] text-sm mb-1">/mo</span>
      </div>
      <ul className="flex flex-col gap-2.5 sm:gap-3 mb-8 sm:mb-10 flex-1">
        {features.map((f, i) => (
          <li
            key={i}
            className="flex items-center gap-2.5 text-[#3D3D5C] text-sm sm:text-[15px]"
          >
            <CheckCircle2
              size={18}
              className="text-[#25D366] flex-shrink-0"
              strokeWidth={2.2}
            />
            {f}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 sm:py-3.5 rounded-2xl font-bold text-sm sm:text-[15px] transition-all duration-150
        ${
          ctaStyle === "solid"
            ? "bg-[#6C47FF] text-white hover:bg-[#5A38E0] shadow-[0_4px_18px_rgba(108,71,255,0.35)]"
            : "bg-[#EEEBFF] text-[#6C47FF] hover:bg-[#E0DBFF]"
        }`}
      >
        {cta}
      </button>
    </div>
  );
};

export default function Pricing() {
  return (
    <section className="w-full bg-[#F4F2FF] px-4 sm:px-6 lg:px-10 py-16 sm:py-20 font-[Manrope,sans-serif]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[11px] sm:text-[13px] font-extrabold tracking-[0.15em] uppercase text-[#6C47FF] mb-3">
            Pricing
          </p>
          <h2 className="text-[#181830] text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-[#8B8FA8] text-sm sm:text-[17px] leading-relaxed max-w-xl mx-auto">
            Choose the perfect plan for your business size. Upgrade or downgrade
            at any time.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-center">
          {plans.map((plan, i) => (
            <PlanCard key={i} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
