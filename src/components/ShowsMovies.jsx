import React from "react";
import { useSectionScroll } from '../hooks/useSectionScroll'

const ShowsMovies = ({ setActiveSection }) => {
  const showsMoviesRef = useSectionScroll('shows-movies', setActiveSection);

  return (
    <section
      id="shows-movies"
      ref={showsMoviesRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16 font-body"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative elements - removed */}
      </div>

      {/* Subtle background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-ff-cyan-50 to-ff-blue-50 dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-cyan-900/20"></div>

      {/* Decorative glows */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-ff-cyan-500/10 dark:bg-ff-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-ff-blue-500/10 dark:bg-ff-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold relative z-10 leading-tight font-sixtyfour mb-6">
            <span className="title-light dark:title-dark">
              SHOWS & MOVIES
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-ff-cyan-500 to-ff-blue-500 mx-auto mb-8 shadow-lg"></div>
          <p className="text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed max-w-2xl mx-auto text-lg">
            <span className="text-ff-cyan-600 dark:text-ff-cyan-400 text-base opacity-80 font-mono">[</span>
              My favorite shows and movies that inspire my creativity and storytelling.
            <span className="text-ff-blue-600 dark:text-ff-blue-400 text-base opacity-80 font-mono">]</span>
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Shows Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-cyan-700 dark:text-ff-cyan-300 font-sixtyfour text-center">
              FAVORITE SHOWS
            </h3>

            {/* Show Cards */}
            <div className="space-y-4">
              <div className="relative overflow-hidden bg-gradient-to-br from-white via-ff-cyan-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-cyan-900/20 border-2 border-ff-cyan-300 dark:border-ff-cyan-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-cyan-500/10 dark:bg-ff-cyan-500/5 rounded-full blur-2xl"></div>
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ff-cyan-500 to-ff-cyan-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="material-icons text-white text-xl">tv</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">JoJo's Bizarre Adventure</h4>
                    <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Anime • Action</p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-white via-ff-blue-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-blue-900/20 border-2 border-ff-blue-300 dark:border-ff-blue-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-blue-500/10 dark:bg-ff-blue-500/5 rounded-full blur-2xl"></div>
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ff-blue-500 to-ff-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="material-icons text-white text-xl">movie</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">Attack on Titan</h4>
                    <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Anime • Drama</p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-white via-ff-purple-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-purple-900/20 border-2 border-ff-purple-300 dark:border-ff-purple-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-purple-500/10 dark:bg-ff-purple-500/5 rounded-full blur-2xl"></div>
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ff-purple-500 to-ff-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="material-icons text-white text-xl">theaters</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">Breaking Bad</h4>
                    <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Drama • Crime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Movies Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-blue-700 dark:text-ff-blue-300 font-sixtyfour text-center">
              FAVORITE MOVIES
            </h3>

            {/* Movie Cards */}
            <div className="space-y-4">
              <div className="relative overflow-hidden bg-gradient-to-br from-white via-ff-pink-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-pink-900/20 border-2 border-ff-pink-300 dark:border-ff-pink-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-pink-500/10 dark:bg-ff-pink-500/5 rounded-full blur-2xl"></div>
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ff-pink-500 to-ff-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="material-icons text-white text-xl">movie_filter</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">Spirited Away</h4>
                    <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Anime • Fantasy</p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-white via-ff-blue-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-blue-900/20 border-2 border-ff-blue-300 dark:border-ff-blue-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-blue-500/10 dark:bg-ff-blue-500/5 rounded-full blur-2xl"></div>
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ff-blue-500 to-ff-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="material-icons text-white text-xl">auto_awesome</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">Inception</h4>
                    <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Sci-Fi • Thriller</p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-white via-ff-green-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-green-900/20 border-2 border-ff-green-300 dark:border-ff-green-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-green-500/10 dark:bg-ff-green-500/5 rounded-full blur-2xl"></div>
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ff-green-500 to-ff-green-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="material-icons text-white text-xl">star</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">The Matrix</h4>
                    <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Sci-Fi • Action</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Genres & Inspiration */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-gold-700 dark:text-ff-gold-300 font-sixtyfour text-center">
              INSPIRATION
            </h3>

            {/* Genre Tags */}
            <div className="space-y-4">
              <div className="relative overflow-hidden bg-gradient-to-br from-white via-ff-gold-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-gold-900/20 border-2 border-ff-gold-300 dark:border-ff-gold-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-gold-500/10 dark:bg-ff-gold-500/5 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200 mb-3">Favorite Genres</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-ff-red-100 dark:bg-ff-red-900/30 text-ff-red-700 dark:text-ff-red-300 rounded-full text-sm font-mono border border-ff-red-300 dark:border-ff-red-700">Anime</span>
                    <span className="px-3 py-1 bg-ff-pink-100 dark:bg-ff-pink-900/30 text-ff-pink-700 dark:text-ff-pink-300 rounded-full text-sm font-mono border border-ff-pink-300 dark:border-ff-pink-700">Sci-Fi</span>
                    <span className="px-3 py-1 bg-ff-gold-100 dark:bg-ff-gold-900/30 text-ff-gold-700 dark:text-ff-gold-300 rounded-full text-sm font-mono border border-ff-gold-300 dark:border-ff-gold-700">Fantasy</span>
                    <span className="px-3 py-1 bg-ff-purple-100 dark:bg-ff-purple-900/30 text-ff-purple-700 dark:text-ff-purple-300 rounded-full text-sm font-mono border border-ff-purple-300 dark:border-ff-purple-700">Drama</span>
                    <span className="px-3 py-1 bg-ff-blue-100 dark:bg-ff-blue-900/30 text-ff-blue-700 dark:text-ff-blue-300 rounded-full text-sm font-mono border border-ff-blue-300 dark:border-ff-blue-700">Action</span>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-white via-ff-pink-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-pink-900/20 border-2 border-ff-pink-300 dark:border-ff-pink-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-pink-500/10 dark:bg-ff-pink-500/5 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200 mb-3">Creative Influence</h4>
                  <p className="text-sm text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed">
                    These shows and movies inspire my art, storytelling, and creative projects.
                    They shape my understanding of narrative, character development, and visual aesthetics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowsMovies;

