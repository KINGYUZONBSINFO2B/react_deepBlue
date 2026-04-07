import React from "react";

const Newsletter = () => {
  return (
    <section id="newsletter" className="bg-gradient-to-r from-[#0f5c73] to-[#0b5b85] px-6 py-16 md:py-24 fade-up">
      <div className="mx-auto max-w-3xl text-center text-white">
        <h2
          className="text-4xl font-bold md:text-5xl"
          style={{ fontFamily: '"Merriweather", serif' }}
        >
          Dive Deeper
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-cyan-50 md:text-lg">
          Join 15,000+ ocean enthusiasts. Get the latest marine biology
          discoveries and conservation news delivered to your inbox weekly.
        </p>

        <form className="mx-auto mt-10 flex w-full max-w-2xl flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email address"
            className="h-14 flex-1 rounded-full border border-white/10 bg-white/10 px-6 text-sm text-white placeholder:text-cyan-100/70 p-4"
          />

          <button
            type="submit"
            className="h-14 rounded-full bg-white px-8 text-sm font-semibold text-slate-900  hover:scale-[1.02] soft-pulse"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-4 text-xs text-cyan-100/70">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
