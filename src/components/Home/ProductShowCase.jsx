import { Wand2, Upload, BarChart2, Activity } from "lucide-react";

import dashboardImg from "../../assets/home/productshowcase.png";

const FEATURES = [
  {
    icon: Wand2,
    title: "Template Builder",
    description:
      "Draft interactive messages with buttons, images, and variables.",
  },
  {
    icon: Upload,
    title: "Contact Upload",
    description:
      "Seamlessly import CSV files and automatically filter out invalid numbers.",
  },
  {
    icon: BarChart2,
    title: "Campaign Reports",
    description:
      "Visualize your ROI with detailed charts and conversion metrics.",
  },
  {
    icon: Activity,
    title: "Delivery Insights",
    description:
      "Monitor exactly who received, opened, and clicked your messages.",
  },
];

export default function ProductShowcase() {
  return (
    <section className="w-full bg-[#F0F0F8] px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center lg:max-w-xl lg:text-left">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#6C3BFF]">
            Product Showcase
          </p>

          <h2 className="mb-5 text-3xl font-extrabold leading-tight text-[#0D0D2B] sm:text-4xl md:text-5xl">
            Powerful dashboard
            <br />
            built for scale
          </h2>

          <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-gray-500 sm:mb-10 sm:text-base lg:mx-0">
            Everything you need to run professional marketing campaigns is right
            at your fingertips.
          </p>

          <div className="space-y-6 text-left sm:space-y-8">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <article key={title} className="flex items-start gap-4 sm:gap-5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#EDE8F8] sm:h-11 sm:w-11">
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                    className="text-[#6C3BFF]"
                  />
                </div>

                <div>
                  <h3 className="mb-1 text-sm font-bold text-[#0D0D2B] sm:text-base">
                    {title}
                  </h3>

                  <p className="text-xs leading-relaxed text-gray-500 sm:text-sm">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex w-full flex-1 items-center justify-center lg:justify-end">
          <img
            src={dashboardImg}
            alt="Campaign Analytics Dashboard"
            loading="lazy"
            decoding="async"
            className="h-auto w-full max-w-sm object-contain drop-shadow-xl sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
}
