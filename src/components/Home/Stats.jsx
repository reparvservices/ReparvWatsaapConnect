import React from "react";

const statsData = [
  {
    value: "500+",
    label: "Businesses Trust Reparv",
  },
  {
    value: "10M+",
    label: "Messages Delivered",
  },
  {
    value: "99.9%",
    label: "Delivery Rate",
  },
];

const Stats = () => {
  return (
    <section className="w-full bg-[#FFFFFF] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                {stat.value}
              </h2>
              <p className="mt-2 text-gray-600 text-base md:text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
