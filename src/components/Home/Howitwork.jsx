import React, { useState } from "react";
import { Building2, Megaphone, Send } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: <Building2 size={28} color="#fff" />,
    title: "Register Your Business",
    desc: "Connect your WhatsApp Business API account securely and import your customer contact lists.",
  },
  {
    number: "2",
    icon: <Megaphone size={28} color="#fff" />,
    title: "Create Campaign",
    desc: "Build engaging message templates, get quick approvals, and schedule your broadcast.",
  },
  {
    number: "3",
    icon: <Send size={28} color="#fff" />,
    title: "Send Bulk Messages",
    desc: "Launch your campaign to thousands of customers and track engagement in real-time.",
  },
];

const StepCard = ({ number, icon, title, desc }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        bg-white rounded-3xl px-10 py-12 border border-[#6C47FF]/10 text-center
        transition-all duration-200 ease-in-out
        ${
          hovered
            ? "shadow-[0_12px_40px_rgba(108,71,255,0.12)] -translate-y-1"
            : "shadow-[0_2px_16px_rgba(108,71,255,0.05)]"
        }
      `}
    >
      {/* Number Badge */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          <div className="w-20 h-20 rounded-[22px] bg-gradient-to-br from-[#7C5CFC] to-[#5E35FF] flex items-center justify-center shadow-[0_8px_24px_rgba(108,71,255,0.35)]">
            <span className="text-white text-3xl font-extrabold">{number}</span>
          </div>
          {/* subtle glow ring */}
          <div className="absolute inset-0 rounded-[22px] bg-[#6C47FF]/20 blur-xl scale-125 -z-10" />
        </div>
      </div>

      <h3 className="text-[#181830] text-xl font-bold mb-3">{title}</h3>
      <p className="text-[#8B8FA8] text-[15px] leading-relaxed">{desc}</p>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="w-full bg-white font-[Manrope,sans-serif]">
      <div className="max-w-6xl mx-auto px-10 lg:px-0 py-20">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[13px] font-bold tracking-[0.12em] uppercase text-[#6C47FF] mb-4">
            How It Works
          </p>
          <h2 className="text-[#181830] text-5xl font-extrabold leading-tight mb-5">
            Start growing in three simple steps
          </h2>
          <p className="text-[#8B8FA8] text-[17px] font-normal leading-relaxed max-w-xl mx-auto">
            Our platform is designed to get you up and running with WhatsApp
            marketing in minutes, not days.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <StepCard key={i} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
