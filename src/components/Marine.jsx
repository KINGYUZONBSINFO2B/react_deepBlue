import React from "react";
import { Fish, CalendarDays, User2 } from "lucide-react";
import marineArticles from "../data/marine.json";



const Marine = () => {
  return (
    <section id="marine-life" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 float">
            <Fish size={24} />
          </div>

          <div>
            <h2
              className="text-3xl font-bold text-slate-900 md:text-4xl"
              style={{ fontFamily: '"Merriweather", serif' }}
            >
              Marine Life
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Discover the incredible creatures of our oceans
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {marineArticles.map((article) => (
            <article
              key={article.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg soft-pulse"
            >
              <img
                src={article.image}
                alt={article.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
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
                  className="mb-3 text-xl font-bold leading-snug text-slate-900"
                  style={{ fontFamily: '"Merriweather", serif' }}
                >
                  {article.title}
                </h3>

                <p className="text-sm leading-6 text-slate-600">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marine;
