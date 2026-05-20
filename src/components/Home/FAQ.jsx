import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "How do I get my WhatsApp templates approved?",
    a: "WhatsApp templates require approval by Meta before they can be sent. Our platform includes an integrated template builder that automatically checks your content against Meta's guidelines, ensuring quick approval within 24 hours.",
  },
  {
    q: "Can I import contacts from my existing CRM?",
    a: "Yes! You can easily import contacts from popular CRMs like HubSpot, Salesforce, and Zoho. Our platform supports CSV imports and direct integrations so your contact list is always up to date.",
  },
  {
    q: "What happens if I exceed my monthly message limit?",
    a: "If you exceed your monthly message limit, you can easily purchase additional message credits from your dashboard. We'll notify you at 80% usage so you're never caught off guard.",
  },
  {
    q: "Is there a free trial available?",
    a: "Absolutely! We offer a 14-day free trial with full access to all features — no credit card required. Sign up and start sending WhatsApp campaigns right away.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="w-full bg-[#F4F2FF] px-4 sm:px-6 py-16 sm:py-24 font-[Manrope,sans-serif]">
      <div className="max-w-[700px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-extrabold tracking-[0.15em] uppercase text-[#6C47FF] mb-3">
            FAQ
          </p>
          <h2 className="text-[#181830] text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Frequently asked questions
          </h2>
          <p className="text-[#8B8FA8] text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            Everything you need to know about getting started with WhatsApp
            marketing.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`bg-white rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-2 border-[#6C47FF]"
                    : "border border-gray-200"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between px-5 sm:px-7 py-5 sm:py-6 text-left gap-4"
                >
                  <span className="text-[#181830] text-sm sm:text-[15px] font-bold leading-snug">
                    {item.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp
                      size={20}
                      className="flex-shrink-0 text-[#6C47FF]"
                    />
                  ) : (
                    <ChevronDown
                      size={20}
                      className="flex-shrink-0 text-[#8B8FA8]"
                    />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-7 pb-6">
                    <p className="text-[#8B8FA8] text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
