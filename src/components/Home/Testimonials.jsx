import React, { useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    stars: 5,
    quote:
      "Reparv transformed how we reach our real estate clients. Open rates went from 15% on email to 90% on WhatsApp within the first week.",
    name: "Sarah Jenkins",
    role: "Sales Director, Prime Estates",
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    stars: 5,
    quote:
      "The campaign scheduling saves us hours every week. It's incredibly easy to use and the analytics are spot on for tracking our ROI.",
    name: "David Chen",
    role: "Marketing Lead, BuildCo",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    stars: 5,
    quote:
      "Best WhatsApp marketing tool we've used. Getting templates approved is fast and the customer support is absolutely top-notch.",
    name: "Maria Gomez",
    role: "Agency Owner, Nexus Marketing",
    avatar: "https://i.pravatar.cc/80?img=32",
  },
];

const StarRating = ({ count }) => (
  <div className="flex gap-1 mb-5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={18} className="text-[#F5A623] fill-[#F5A623]" />
    ))}
  </div>
);

const TestimonialCard = ({ stars, quote, name, role, avatar }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        bg-white rounded-3xl px-8 py-8 border border-[#6C47FF]/20 flex flex-col justify-between
        transition-all duration-200 ease-in-out
        ${
          hovered
            ? "shadow-[0_12px_40px_rgba(108,71,255,0.12)] -translate-y-1"
            : "shadow-[0_2px_16px_rgba(108,71,255,0.05)]"
        }
      `}
    >
      {/* Stars */}
      <StarRating count={stars} />

      {/* Quote */}
      <p className="text-[#3D3D5C] text-[15px] leading-relaxed mb-8 flex-1">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-[#181830] text-[15px] font-bold leading-tight">
            {name}
          </p>
          <p className="text-[#8B8FA8] text-[13px] mt-0.5">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="w-full bg-white font-[Manrope,sans-serif]">
      <div className="max-w-6xl mx-auto px-10 py-20">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[13px] font-bold tracking-[0.12em] uppercase text-[#6C47FF] mb-4">
            Testimonials
          </p>
          <h2 className="text-[#181830] text-5xl font-extrabold leading-tight mb-5">
            Loved by sales teams
          </h2>
          <p className="text-[#8B8FA8] text-[17px] font-normal leading-relaxed max-w-xl mx-auto">
            See how other businesses are growing their revenue with our WhatsApp
            marketing platform.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
