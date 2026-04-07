import React from "react";
import { Waves } from "lucide-react";
import aboutData from "../data/about.json";

const About = () => {
  return (
    <section id="about" className="bg-[#eaf4f5] px-6 py-16 md:py-24 fade-up">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-600 text-white shadow-sm">
          <Waves size={24} />
        </div>

        <h2
          className="text-4xl font-bold text-slate-900 md:text-5xl"
          style={{ fontFamily: '"Merriweather", serif' }}
        >
          {aboutData.title}
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
          {aboutData.description}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {aboutData.stats.map((stat) => (
            <div key={stat.id} className="text-center float">
              <h3 className="text-4xl font-bold text-cyan-600 md:text-5xl ">
                {stat.value}
              </h3>
              <p className="mt-2 text-sm text-slate-600 md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
