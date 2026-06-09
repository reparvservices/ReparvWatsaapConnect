import React, { memo } from "react";
import { CheckCircle2 } from "lucide-react";

const PLANS = [
  {
    id: "starter",
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
    id: "professional",
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
    id: "enterprise",
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

const PlanCard = memo(
  ({ name, desc, price, features, cta, popular, ctaStyle }) => {
    return (
      <article
        className={`relative flex flex-col rounded-3xl px-6 py-8 sm:px-8 sm:py-10 transition-all duration-200
          ${
            popular
              ? "z-10 bg-white border-2 border-[#6C47FF] shadow-[0_8px_40px_rgba(108,71,255,0.18)] lg:scale-[1.03]"
              : "bg-white border border-[#6C47FF]/10 shadow-sm hover:shadow-[0_12px_40px_rgba(108,71,255,0.10)] hover:-translate-y-1"
          }`}
      >
        {popular && (
          <div className="absolute left-1/2 -top-4 -translate-x-1/2">
            <span className="whitespace-nowrap rounded-full bg-[#6C47FF] px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg sm:px-5 sm:text-[11px]">
              Most Popular
            </span>
          </div>
        )}

        <h3 className="mb-2 text-xl font-extrabold text-[#181830] sm:text-2xl">
          {name}
        </h3>

        <p className="mb-5 text-xs leading-relaxed text-[#8B8FA8] sm:mb-6 sm:text-sm">
          {desc}
        </p>

        <div className="mb-6 flex items-end gap-1 sm:mb-8">
          <span className="text-4xl font-extrabold leading-none text-[#181830] sm:text-5xl">
            ${price}
          </span>

          <span className="mb-1 text-sm text-[#8B8FA8]">/mo</span>
        </div>

        <ul className="mb-8 flex flex-1 flex-col gap-2.5 sm:mb-10 sm:gap-3">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2.5 text-sm text-[#3D3D5C] sm:text-[15px]"
            >
              <CheckCircle2
                size={18}
                strokeWidth={2.2}
                className="flex-shrink-0 text-[#25D366]"
              />
              {feature}
            </li>
          ))}
        </ul>

        <button
          className={`w-full rounded-2xl py-3 text-sm font-bold transition-all duration-150 sm:py-3.5 sm:text-[15px]
            ${
              ctaStyle === "solid"
                ? "bg-[#6C47FF] text-white shadow-[0_4px_18px_rgba(108,71,255,0.35)] hover:bg-[#5A38E0]"
                : "bg-[#EEEBFF] text-[#6C47FF] hover:bg-[#E0DBFF]"
            }`}
        >
          {cta}
        </button>
      </article>
    );
  },
);

PlanCard.displayName = "PlanCard";

function Pricing() {
  return (
    <section className="w-full bg-[#F4F2FF] px-4 py-16 font-[Manrope,sans-serif] sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#6C47FF] sm:text-[13px]">
            Pricing
          </p>

          <h2 className="mb-4 text-3xl font-extrabold leading-tight text-[#181830] sm:text-4xl lg:text-5xl">
            Simple, transparent pricing
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-relaxed text-[#8B8FA8] sm:text-[17px]">
            Choose the perfect plan for your business size. Upgrade or downgrade
            at any time.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 items-center gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Pricing);
