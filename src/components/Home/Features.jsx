import { Calendar, Send, User, User2Icon, UserCheck2 } from "lucide-react";
import React, { useState } from "react";
import {
  IoSendOutline,
  IoLayersOutline,
  IoCalendarOutline,
  IoPeopleOutline,
  IoBarChartOutline,
  IoPersonAddOutline,
} from "react-icons/io5";

const features = [
  {
    icon: <Send size={26} className="text-[#6C47FF]" />,
    title: "Bulk Messaging",
    desc: "Send thousands of targeted WhatsApp messages in just one click to your entire audience list without getting blocked.",
  },
  {
    icon: <IoLayersOutline size={26} className="text-[#6C47FF]" />,
    title: "Smart Templates",
    desc: "Create, manage, and get instant approval from Meta for highly converting WhatsApp message templates.",
  },
  {
    icon: <Calendar size={26} className="text-[#6C47FF]" />,
    title: "Campaign Scheduling",
    desc: "Plan ahead by scheduling your marketing campaigns for the optimal delivery times to maximize open rates.",
  },
  {
    icon: <IoPeopleOutline size={26} className="text-[#6C47FF]" />,
    title: "Contact Management",
    desc: "Easily upload, segment, and manage your contacts to deliver personalized messaging experiences.",
  },
  {
    icon: <IoBarChartOutline size={26} className="text-[#6C47FF]" />,
    title: "Analytics Tracking",
    desc: "Track open rates, replies, and delivery statuses in real-time on your dashboard to measure campaign success.",
  },
  {
    icon: <IoPeopleOutline size={26} className="text-[#6C47FF]" />,
    title: "Team Collaboration",
    desc: "Invite your team members to manage campaigns, build templates, and oversee analytics together in one workspace.",
  },
];

const FeatureCard = ({ icon, title, desc }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        bg-white rounded-2xl p-9 border border-[#6C47FF]/[0.07] cursor-default
        transition-all duration-200 ease-in-out
        ${
          hovered
            ? "shadow-[0_12px_36px_rgba(108,71,255,0.10)] -translate-y-1"
            : "shadow-[0_2px_16px_rgba(108,71,255,0.04)] translate-y-0"
        }
      `}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-[#EEEBFF] flex items-center justify-center mb-7">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-[#181830] text-lg font-bold leading-snug mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#7A7F96] text-[14.5px] font-normal leading-relaxed">
        {desc}
      </p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="w-full bg-[#F0F2FA] font-[Manrope,sans-serif]">
      <div className="max-w-6xl mx-auto px-4 lg:px-0 py-20">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[13px] font-bold tracking-[0.12em] uppercase text-[#6C47FF] mb-4">
            Features
          </p>
          <h2 className="text-[#181830] text-5xl font-extrabold leading-tight mb-5">
            Everything you need to grow
          </h2>
          <p className="text-[#8B8FA8] text-[17px] font-normal leading-relaxed max-w-xl mx-auto">
            Powerful tools designed to make WhatsApp marketing simple,
            efficient, and highly converting for your business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              desc={feature.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
