import React from "react";
import { Leaf, CalendarDays, User2 } from "lucide-react";
import conservationArticles from "../data/conservation.json";

const Conservation = () => {
  return (
    <section id="conservation" className="bg-[#f1f5f9] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 float">
            <Leaf size={24} />
          </div>

          <div>
            <h2
              className="text-3xl font-bold text-slate-900 md:text-4xl"
              style={{ fontFamily: '"Merriweather", serif' }}
            >
              Conservation
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Protecting our oceans for future generations
            </p>
          </div>
        </div>

        <div className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
          {conservationArticles.map((article) => (
            <article
              key={article.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-md hover:scale-101 soft-pulse"
            >
              <div className="flex flex-col md:flex-row">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-56 w-full object-cover md:h-auto md:w-72"
                />

                <div className="flex flex-1 flex-col justify-center p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <CalendarDays size={12} />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User2 size={12} />
                      {article.author}
                    </span>
                  </div>

                  <h3
                    className="mb-3 text-2xl font-bold leading-snug text-slate-900"
                    style={{ fontFamily: '"Merriweather", serif' }}
                  >
                    {article.title}
                  </h3>

                  <p className="mb-4 max-w-2xl text-sm leading-6 text-slate-600">
                    {article.excerpt}
                  </p>

                  <a
                    href="#"
                    className="w-fit text-sm font-medium text-cyan-600 transition hover:text-cyan-700"
                  >
                    Read Story →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conservation;
