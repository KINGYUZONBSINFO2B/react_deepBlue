import React from "react";

const Hero = () => {
  return (
    <>
      <section id="hero" className="relative pt-20 pb-32 flex items-center justify-center min-h-[80vh] fade-up">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582967788606-a171f1080ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Ocean depth"
            className="w-full h-full object-cover opacity-15"
          />
        </div>

        {/* dark navy base */}
        <div className="absolute inset-0 bg-[var(--color-dark-bg)]"></div>

        {/* extra dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#04101f]/90 via-[#081a33]/85 to-[#030b18]/95"></div>

        {/* center glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,180,255,0.10),transparent_45%)]"></div>

        {/* subtle vignette */}
        <div className="absolute inset-0 bg-black/25"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-primary-dark)] border border-cyan-500/30 text-cyan-300 text-sm font-semibold tracking-wider mb-6 uppercase">
            Explore the Unknown
          </span>
          <h1 className="text-5xl md:text-7xl font-merriweather font-bold text-white leading-tight mb-6">
            Discover the Secrets of the{" "}
            <span className="text-[var(--color-primary)]">Deep</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-inter mb-10 max-w-2xl mx-auto">
            Join us on a journey beneath the surface to explore the wonders,
            wildlife, and mysteries of our planet's oceans.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#latest"
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 py-3.5 rounded-full font-medium transition-all text-lg"
            >
              Read Articles
            </a>
            <a
              href="#about"
              className="bg-[var(--color-text-muted)] hover:bg-[var(--color-text-secondary)] backdrop-blur-sm border border-white/20 text-white px-8 py-3.5 rounded-full font-medium transition-all text-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
