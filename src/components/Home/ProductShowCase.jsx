import {
  Wand2,
  Upload,
  BarChart2,
  Activity,
  BarChart,
  Grape,
} from "lucide-react";
import dashboardImg from "../../assets/home/productshowcase.png";
import { PiGraph } from "react-icons/pi";

const features = [
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
    <section
      className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24"
      style={{ backgroundColor: "#F0F0F8" }}
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center gap-10 sm:gap-14 lg:gap-16">
        {/* LEFT COLUMN */}
        <div className="flex-1 w-full lg:max-w-xl text-center lg:text-left">
          {/* Label */}
          <p
            className="text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: "#6C3BFF" }}
          >
            Product Showcase
          </p>

          {/* Heading */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 sm:mb-5"
            style={{ color: "#0D0D2B" }}
          >
            Powerful dashboard
            <br />
            built for scale
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base text-gray-500 mb-8 sm:mb-10 leading-relaxed max-w-md mx-auto lg:mx-0">
            Everything you need to run professional marketing campaigns is right
            at your fingertips.
          </p>

          {/* Features */}
          <div className="flex flex-col gap-6 sm:gap-8 text-left">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-4 sm:gap-5">
                <div
                  className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "#EDE8F8" }}
                >
                  <Icon
                    size={18}
                    style={{ color: "#6C3BFF" }}
                    strokeWidth={1.8}
                  />
                </div>
                <div>
                  <h3
                    className="text-sm sm:text-base font-bold mb-1"
                    style={{ color: "#0D0D2B" }}
                  >
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN — Dashboard Image */}
        <div className="flex-1 w-full flex justify-center lg:justify-end items-center">
          <img
            src={dashboardImg}
            alt="Campaign Analytics Dashboard"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
