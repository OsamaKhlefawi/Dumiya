import React, { useMemo } from 'react'
import { useSectionScroll } from '../hooks/useSectionScroll'

const About = ({ setActiveSection }) => {
  const aboutRef = useSectionScroll('about', setActiveSection)

  const skills = useMemo(() => [
    { name: 'Digital Art', level: 90, color: 'from-ff-pink-500 to-ff-red-500' },
    { name: 'Gaming Strategy', level: 85, color: 'from-ff-red-500 to-ff-orange-500' },
    { name: 'Creative Design', level: 88, color: 'from-ff-pink-500 to-ff-orange-500' },
    { name: 'Problem Solving', level: 82, color: 'from-ff-green-500 to-ff-emerald-500' },
    { name: 'Team Collaboration', level: 87, color: 'from-ff-orange-500 to-ff-red-500' },
    { name: 'Technical Skills', level: 80, color: 'from-ff-indigo-500 to-ff-red-500' }
  ], [])

  return (
    <section
      id="about"
      ref={aboutRef}
      className="min-h-screen relative overflow-hidden pt-20 pb-8 sm:py-20 md:py-24 font-body"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative elements - removed */}
      </div>

      {/* Decorative glows - consistent in both modes */}
      <div className="absolute top-40 -left-20 w-80 h-80 bg-ff-red-400/5 dark:bg-ff-red-500/8 rounded-full blur-3xl transition-colors duration-500"></div>
      <div className="absolute bottom-40 -right-20 w-80 h-80 bg-ff-pink-400/5 dark:bg-ff-pink-500/8 rounded-full blur-3xl transition-colors duration-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold relative z-10 leading-tight font-sixtyfour mb-4 sm:mb-6">
            <span className="title-light dark:title-dark">
              ABOUT ME
            </span>
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-ff-red-400 to-ff-pink-400 mx-auto"></div>
        </div>

        {/* Intro Box - Mobile: Compact, Desktop: Larger */}
        <div className="relative bg-white/90 backdrop-blur-sm dark:bg-ff-slate-800/95 backdrop-blur-sm border-2 border-ff-red-200 dark:border-ff-red-700 rounded-xl p-4 lg:p-8 mb-6 lg:mb-16 shadow-lg shadow-ff-red-200/50 dark:shadow-ff-slate-900/50 transition-all duration-500">

          <div className="relative z-10">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div 
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-white/20"
                style={{ background: 'linear-gradient(135deg, #ef4444, #ec4899)' }}>
                <span className="material-icons text-white text-xl sm:text-2xl md:text-3xl">person</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-ff-red-700 dark:text-ff-red-300 font-sixtyfour">
                WHO I AM
              </h3>
            </div>
            <p className="text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed text-sm sm:text-base md:text-lg">
              [Placeholder: Write a brief introduction about yourself - who you are, what you do, and what drives you. Talk about your passion for art, gaming, and software development. Make it personal and engaging.]
            </p>
          </div>
        </div>

        {/* Detailed Sections - Stack on mobile, Grid on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Art Section - Mobile: Compact Card */}
          <div className="bg-white/90 backdrop-blur-sm dark:bg-ff-slate-800/95 border-2 border-ff-purple-200 dark:border-ff-purple-700 rounded-xl p-4 lg:p-6 shadow-lg shadow-ff-red-200/50 dark:shadow-ff-slate-900/50 transition-all duration-500">
            <div className="flex items-center gap-3 mb-3">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-white/20"
                style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}>
                <span className="material-icons text-white">palette</span>
              </div>
              <h3 className="text-lg lg:text-2xl font-bold text-ff-purple-700 dark:text-ff-purple-300 font-sixtyfour">ART</h3>
            </div>
            <p className="text-xs lg:text-base text-ff-slate-700 dark:text-ff-slate-300 mb-3 leading-relaxed">
              [Placeholder: Describe your art journey - what kind of art you create (digital character design, illustration, etc.), your artistic style, favorite subjects to draw, tools and software you use, and what inspires your creativity.]
            </p>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs text-ff-slate-700 dark:text-ff-slate-300">
                <span className="material-icons text-ff-purple-600 dark:text-ff-purple-400 text-sm">check_circle</span>
                <span>Digital Character Design</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-ff-slate-700 dark:text-ff-slate-300">
                <span className="material-icons text-ff-purple-600 dark:text-ff-purple-400 text-sm">check_circle</span>
                <span>Illustration</span>
              </div>
            </div>
          </div>

          {/* Gaming Section - Mobile: Compact Card */}
          <div className="bg-white/90 backdrop-blur-sm dark:bg-ff-slate-800/95 border-2 border-ff-orange-200 dark:border-ff-orange-700 rounded-xl p-4 lg:p-6 shadow-lg shadow-ff-red-200/50 dark:shadow-ff-slate-900/50 transition-all duration-500">
            <div className="flex items-center gap-3 mb-3">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-white/20"
                style={{ background: 'linear-gradient(135deg, #f97316, #ef4444)' }}>
                <span className="material-icons text-white">sports_esports</span>
              </div>
              <h3 className="text-lg lg:text-2xl font-bold text-ff-orange-700 dark:text-ff-orange-300 font-sixtyfour">GAMING</h3>
            </div>
            <p className="text-xs lg:text-base text-ff-slate-700 dark:text-ff-slate-300 mb-3 leading-relaxed">
              [Placeholder: Share your gaming passion - favorite games and genres, what you love about gaming, memorable gaming experiences, streaming or content creation, and how gaming influences your other interests.]
            </p>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs text-ff-slate-700 dark:text-ff-slate-300">
                <span className="material-icons text-ff-orange-600 dark:text-ff-orange-400 text-sm">check_circle</span>
                <span>[Favorite game/genre]</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-ff-slate-700 dark:text-ff-slate-300">
                <span className="material-icons text-ff-orange-600 dark:text-ff-orange-400 text-sm">check_circle</span>
                <span>[Gaming platform]</span>
              </div>
            </div>
          </div>

          {/* Coding Section - Mobile: Compact Card */}
          <div className="bg-white/90 backdrop-blur-sm dark:bg-ff-slate-800/95 border-2 border-ff-blue-200 dark:border-ff-blue-700 rounded-xl p-4 lg:p-6 shadow-lg shadow-ff-red-200/50 dark:shadow-ff-slate-900/50 transition-all duration-500">
            <div className="flex items-center gap-3 mb-3">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-white/20"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}>
                <span className="material-icons text-white">code</span>
              </div>
              <h3 className="text-lg lg:text-2xl font-bold text-ff-blue-700 dark:text-ff-blue-300 font-sixtyfour">CODING</h3>
            </div>
            <p className="text-xs lg:text-base text-ff-slate-700 dark:text-ff-slate-300 mb-3 leading-relaxed">
              [Placeholder: Explain your coding journey - what got you into programming, languages and frameworks you work with, types of projects you build, areas of interest (web dev, game dev, etc.), and how you combine coding with your creative side.]
            </p>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs text-ff-slate-700 dark:text-ff-slate-300">
                <span className="material-icons text-ff-blue-600 dark:text-ff-blue-400 text-sm">check_circle</span>
                <span>[Programming language]</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-ff-slate-700 dark:text-ff-slate-300">
                <span className="material-icons text-ff-blue-600 dark:text-ff-blue-400 text-sm">check_circle</span>
                <span>[Framework/tool]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
