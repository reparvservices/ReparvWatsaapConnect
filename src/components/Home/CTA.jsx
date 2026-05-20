export default function CTA() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 py-12 sm:py-16 font-[Manrope,sans-serif]">
      <div className="max-w-5xl mx-auto">
        <div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden px-6 sm:px-12 lg:px-20 py-14 sm:py-20 text-center"
          style={{
            background:
              "linear-gradient(135deg, #6C3BFF 0%, #3B0764 60%, #3B0764 100%)",
          }}
        >
          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(167,139,250,0.35) 0%, transparent 65%)",
            }}
          />
          <div className="relative z-10">
            <h2 className="text-white text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5 sm:mb-6">
              Ready to Grow with WhatsApp
              <br className="hidden sm:block" /> Marketing?
            </h2>
            <p className="text-purple-200 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-8 sm:mb-10">
              Join hundreds of businesses that use Reparv to engage customers
              and drive sales through high-converting WhatsApp campaigns.
            </p>
            <button className="inline-flex items-center gap-2 bg-white text-[#181830] text-sm sm:text-[15px] font-bold px-7 sm:px-10 py-3.5 sm:py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
