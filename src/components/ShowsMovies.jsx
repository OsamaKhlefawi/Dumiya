import React from "react";
import { useSectionScroll } from '../hooks/useSectionScroll'

const ShowsMovies = ({ setActiveSection }) => {
  const showsMoviesRef = useSectionScroll('shows-movies', setActiveSection);

  return (
    <section
      id="shows-movies"
      ref={showsMoviesRef}
      className="min-h-screen relative overflow-hidden pt-20 pb-8 sm:py-20 md:py-24 font-body"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative elements - removed */}
      </div>

      {/* Decorative glows - consistent in both modes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-ff-cyan-400/5 dark:bg-ff-cyan-500/8 rounded-full blur-3xl transition-colors duration-500"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-ff-blue-400/5 dark:bg-ff-blue-500/8 rounded-full blur-3xl transition-colors duration-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold relative z-10 leading-tight font-sixtyfour mb-4 sm:mb-6">
            <span className="title-light dark:title-dark">
              SHOWS & MOVIES
            </span>
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-ff-cyan-500 to-ff-blue-500 mx-auto mb-4 sm:mb-6 md:mb-8 shadow-lg"></div>
          <p className="text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed max-w-2xl mx-auto text-base sm:text-lg md:text-xl px-4">
            <span className="text-ff-cyan-600 dark:text-ff-cyan-400 opacity-80 font-mono">[</span>
              My favorite shows and movies that inspire my creativity and storytelling.
            <span className="text-ff-blue-600 dark:text-ff-blue-400 opacity-80 font-mono">]</span>
          </p>
        </div>

        {/* Mobile: Single Column, Desktop: Grid */}
        <div className="space-y-6 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          {/* Shows Section - Mobile: Horizontal Scroll */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-2xl lg:text-2xl font-bold text-ff-cyan-700 dark:text-ff-cyan-300 font-sixtyfour">
              SHOWS
            </h3>
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
              <div className="min-w-[220px] lg:min-w-0 bg-white/90 backdrop-blur-sm dark:bg-ff-slate-800/95 border-2 border-ff-cyan-200 dark:border-ff-cyan-700 rounded-xl p-3 shadow-lg shadow-ff-red-200/50 dark:shadow-ff-slate-900/50 transition-all duration-500">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-white/20"
                    style={{ background: 'linear-gradient(135deg, #06b6d4, #0891b2)' }}>
                    <span className="material-icons text-white text-lg">tv</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-ff-slate-800 dark:text-ff-slate-200 truncate">JoJo's Bizarre Adventure</h4>
                    <p className="text-xs text-ff-slate-600 dark:text-ff-slate-400 truncate">Anime • Action</p>
                  </div>
                </div>
              </div>

              <div className="min-w-[220px] lg:min-w-0 bg-white/90 backdrop-blur-sm dark:bg-ff-slate-800/95 border-2 border-ff-blue-200 dark:border-ff-blue-700 rounded-xl p-3 shadow-lg shadow-ff-red-200/50 dark:shadow-ff-slate-900/50 transition-all duration-500">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-white/20"
                    style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}>
                    <span className="material-icons text-white text-lg">movie</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-ff-slate-800 dark:text-ff-slate-200 truncate">Attack on Titan</h4>
                    <p className="text-xs text-ff-slate-600 dark:text-ff-slate-400 truncate">Anime • Drama</p>
                  </div>
                </div>
              </div>

              <div className="min-w-[220px] lg:min-w-0 bg-white/90 backdrop-blur-sm dark:bg-ff-slate-800/95 border-2 border-ff-purple-200 dark:border-ff-purple-700 rounded-xl p-3 shadow-lg shadow-ff-red-200/50 dark:shadow-ff-slate-900/50 transition-all duration-500">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-white/20"
                    style={{ background: 'linear-gradient(135deg, #a855f7, #9333ea)' }}>
                    <span className="material-icons text-white text-lg">theaters</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-ff-slate-800 dark:text-ff-slate-200 truncate">Breaking Bad</h4>
                    <p className="text-xs text-ff-slate-600 dark:text-ff-slate-400 truncate">Drama • Crime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Movies Section - Mobile: Horizontal Scroll */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-2xl lg:text-2xl font-bold text-ff-blue-700 dark:text-ff-blue-300 font-sixtyfour">
              MOVIES
            </h3>
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
              <div className="min-w-[220px] lg:min-w-0 bg-white/90 backdrop-blur-sm dark:bg-ff-slate-800/95 border-2 border-ff-pink-200 dark:border-ff-pink-700 rounded-xl p-3 shadow-lg shadow-ff-red-200/50 dark:shadow-ff-slate-900/50 transition-all duration-500">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-white/20"
                    style={{ background: 'linear-gradient(135deg, #ec4899, #db2777)' }}>
                    <span className="material-icons text-white text-lg">movie_filter</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-ff-slate-800 dark:text-ff-slate-200 truncate">Spirited Away</h4>
                    <p className="text-xs text-ff-slate-600 dark:text-ff-slate-400 truncate">Anime • Fantasy</p>
                  </div>
                </div>
              </div>

              <div className="min-w-[220px] lg:min-w-0 bg-white/90 backdrop-blur-sm dark:bg-ff-slate-800/95 border-2 border-ff-blue-200 dark:border-ff-blue-700 rounded-xl p-3 shadow-lg shadow-ff-red-200/50 dark:shadow-ff-slate-900/50 transition-all duration-500">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-white/20"
                    style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}>
                    <span className="material-icons text-white text-lg">auto_awesome</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-ff-slate-800 dark:text-ff-slate-200 truncate">Inception</h4>
                    <p className="text-xs text-ff-slate-600 dark:text-ff-slate-400 truncate">Sci-Fi • Thriller</p>
                  </div>
                </div>
              </div>

              <div className="min-w-[220px] lg:min-w-0 bg-white/90 backdrop-blur-sm dark:bg-ff-slate-800/95 border-2 border-ff-green-200 dark:border-ff-green-700 rounded-xl p-3 shadow-lg shadow-ff-red-200/50 dark:shadow-ff-slate-900/50 transition-all duration-500">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-white/20"
                    style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}>
                    <span className="material-icons text-white text-lg">star</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-ff-slate-800 dark:text-ff-slate-200 truncate">The Matrix</h4>
                    <p className="text-xs text-ff-slate-600 dark:text-ff-slate-400 truncate">Sci-Fi • Action</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inspiration Section - Mobile: Compact */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-2xl lg:text-2xl font-bold text-ff-gold-700 dark:text-ff-gold-300 font-sixtyfour">
              GENRES
            </h3>
            <div className="bg-white/90 backdrop-blur-sm dark:bg-ff-slate-800/95 border-2 border-ff-gold-200 dark:border-ff-gold-700 rounded-xl p-4 shadow-lg shadow-ff-red-200/50 dark:shadow-ff-slate-900/50 transition-all duration-500">
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-ff-red-100 dark:bg-ff-red-900/30 text-ff-red-700 dark:text-ff-red-300 rounded-full text-xs font-mono">Anime</span>
                <span className="px-2 py-1 bg-ff-pink-100 dark:bg-ff-pink-900/30 text-ff-pink-700 dark:text-ff-pink-300 rounded-full text-xs font-mono">Sci-Fi</span>
                <span className="px-2 py-1 bg-ff-gold-100 dark:bg-ff-gold-900/30 text-ff-gold-700 dark:text-ff-gold-300 rounded-full text-xs font-mono">Fantasy</span>
                <span className="px-2 py-1 bg-ff-purple-100 dark:bg-ff-purple-900/30 text-ff-purple-700 dark:text-ff-purple-300 rounded-full text-xs font-mono">Drama</span>
                <span className="px-2 py-1 bg-ff-blue-100 dark:bg-ff-blue-900/30 text-ff-blue-700 dark:text-ff-blue-300 rounded-full text-xs font-mono">Action</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowsMovies;

