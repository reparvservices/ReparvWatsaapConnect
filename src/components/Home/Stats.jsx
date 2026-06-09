import React, { memo } from "react";

const STATS = [
  {
    id: "businesses",
    value: "500+",
    label: "Businesses Trust Reparv",
  },
  {
    id: "messages",
    value: "10M+",
    label: "Messages Delivered",
  },
  {
    id: "delivery",
    value: "99.9%",
    label: "Delivery Rate",
  },
];

const Stats = memo(() => {
  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-3">
          {STATS.map(({ id, value, label }) => (
            <article key={id} className="flex flex-col items-center">
              <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
                {value}
              </h2>

              <p className="mt-2 text-base text-gray-600 md:text-lg">{label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

Stats.displayName = "Stats";

export default Stats;
