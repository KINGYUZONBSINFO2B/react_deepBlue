import React from "react";
import { Fish, CalendarDays, User2, Waves } from "lucide-react";
import expedition from "../data/expedition.json";

const Expedition = () => {
  return (
    <>
      <section id="expeditions" className="py-20 bg-dark-bg ">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
              <Waves size={24} />
            </div>

            <div>
              <h2
                className="text-3xl font-bold text-white md:text-4xl"
                style={{ fontFamily: '"Merriweather", serif' }}
              >
                Expeditions
              </h2>
              <p className="mt-1 text-sm text-white">
                Discover the incredible creatures of our oceans
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 soft-pulse relative">
            {expedition.map((article) => (
              <article
                key={article.id}
                className="overflow-hidden rounded-2xl left-3 right-3 shadow-sm duration-600 hover:scale-105 lg:w-[650px]"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-[448px] lg:w-[650px] object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/90 via-black/60 to-transparent lg:w-[650px] rounded-b-2xl"></div>
                <div className="p-5 absolute bottom-3 z-10 ">
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-white">
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
                    className="mb-3 text-xl font-bold leading-snug text-white"
                    style={{ fontFamily: '"Merriweather", serif' }}
                  >
                    {article.title}
                  </h3>

                  <p className="text-sm leading-6 text-white">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Expedition;
