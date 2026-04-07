import React from "react";
import { Search, Fish, Calendar, User, ArrowRight, X } from "lucide-react";
import articlesData from "../data/articles.json";
import { useState } from "react";

export default function LatestStories() {
    const [searchQuery, setSearchQuery] = useState("");
  const filteredArticles = articlesData.filter((article) => {
    const query = (searchQuery || "").toLowerCase();
    return (
      article.title?.toLowerCase().includes(query) ||
      article.author?.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <section id="latest" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Search */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-slate-900 mb-3">
                Latest Stories
              </h2>
              <p className="text-slate-500 font-inter">
                Curated Insights from the front lines of oceanography.
              </p>
            </div>

            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search articles or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-full bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all font-inter"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
            </div>
          </div>

          {/* Results Info */}
          {searchQuery && (
            <div className="mb-8 font-inter text-slate-600">
              Found {filteredArticles.length} result
              {filteredArticles.length !== 1 ? "s" : ""} for "{searchQuery}"
            </div>
          )}

          {/* Empty State */}
          {filteredArticles.length === 0 ? (
            <div className="py-20 text-center  ">
              <Fish className="h-22 w-22  text-cyan-300 mx-auto mb-4 bg-cyan-100 p-4 rounded-full" />
              <h3 className="text-xl font-bold text-slate-700 mb-2 font-merriweather">
                No stories found
              </h3>
              <p className="text-slate-500 mb-6 font-inter">
                We couldn't find any articles matching "{searchQuery}". Try searching for a different title or author, or clear your search to see all stories.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="bg-cyan-600 p-3 rounded-full text-white font-medium hover:text-cyan-700 flex items-center justify-center mx-auto"
              >
               <X className="w-5 h-5" />  Clear Search
              </button>
            </div>
          ) : (
            /* Article Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <article
                  key={index}
                  className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 soft-pulse"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full text-cyan-700">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-xs text-slate-500 mb-4 space-x-4 font-inter">
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" /> {article.date}
                      </span>
                      <span className="flex items-center">
                        <User className="h-3 w-3 mr-1" /> {article.author}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold font-merriweather text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 font-inter text-sm mb-6 flex-grow line-clamp-3">
                      {article.excerpt}
                    </p>
                    <a
                      href="#"
                      className="flex items-center text-cyan-600 font-medium text-sm hover:text-cyan-800 transition-colors mt-auto"
                    >
                      Read Story <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
