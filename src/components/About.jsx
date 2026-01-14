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
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20 font-body"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative elements - removed */}
      </div>

      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-ff-red-50/10 dark:to-ff-red-900/10"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold relative z-10 leading-tight font-sixtyfour mb-6">
            <span className="title-light dark:title-dark">
              ABOUT ME
            </span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-ff-red-400 to-ff-pink-400 mx-auto"></div>
        </div>

        {/* Intro Box - Horizontal */}
        <div className="relative overflow-hidden bg-gradient-to-br from-white via-ff-slate-50 to-ff-red-50 dark:from-ff-slate-800 dark:via-ff-slate-800 dark:to-ff-slate-900 border-4 border-ff-red-300 dark:border-ff-red-700 rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16 shadow-lg hover:shadow-xl transition-all duration-300">
          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-ff-red-500/10 dark:bg-ff-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-ff-pink-500/10 dark:bg-ff-pink-500/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-ff-red-500 to-ff-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="material-icons text-white text-2xl sm:text-3xl">person</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-ff-red-700 dark:text-ff-red-300 font-sixtyfour">
                WHO I AM
              </h3>
            </div>
            <p className="text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed text-base sm:text-lg">
              [Placeholder: Write a brief introduction about yourself - who you are, what you do, and what drives you. Talk about your passion for art, gaming, and software development. Make it personal and engaging.]
            </p>
          </div>
        </div>

        {/* Detailed Sections - Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Art Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-white via-ff-purple-50 to-ff-pink-50 dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-purple-900/20 border-3 border-ff-purple-300 dark:border-ff-purple-700 rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            {/* Decorative glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-purple-500/10 dark:bg-ff-purple-500/5 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-ff-purple-500 to-ff-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="material-icons text-white text-xl sm:text-2xl">palette</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-ff-purple-700 dark:text-ff-purple-300 font-sixtyfour">
                  ART
                </h3>
              </div>
              <p className="text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                [Placeholder: Describe your art journey - what kind of art you create (digital character design, illustration, etc.), your artistic style, favorite subjects to draw, tools and software you use, and what inspires your creativity.]
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-ff-slate-700 dark:text-ff-slate-300">
                  <span className="material-icons text-ff-purple-600 dark:text-ff-purple-400 text-sm">check_circle</span>
                  <span>Digital Character Design</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-ff-slate-700 dark:text-ff-slate-300">
                  <span className="material-icons text-ff-purple-600 dark:text-ff-purple-400 text-sm">check_circle</span>
                  <span>Illustration</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-ff-slate-700 dark:text-ff-slate-300">
                  <span className="material-icons text-ff-purple-600 dark:text-ff-purple-400 text-sm">check_circle</span>
                  <span>[Add your specialty]</span>
                </div>
              </div>
            </div>
          </div>

          {/* Gaming Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-white via-ff-orange-50 to-ff-red-50 dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-orange-900/20 border-3 border-ff-orange-300 dark:border-ff-orange-700 rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            {/* Decorative glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-orange-500/10 dark:bg-ff-orange-500/5 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-ff-orange-500 to-ff-red-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="material-icons text-white text-xl sm:text-2xl">sports_esports</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-ff-orange-700 dark:text-ff-orange-300 font-sixtyfour">
                  GAMING
                </h3>
              </div>
              <p className="text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                [Placeholder: Share your gaming passion - favorite games and genres, what you love about gaming, memorable gaming experiences, streaming or content creation, and how gaming influences your other interests.]
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-ff-slate-700 dark:text-ff-slate-300">
                  <span className="material-icons text-ff-orange-600 dark:text-ff-orange-400 text-sm">check_circle</span>
                  <span>[Favorite game/genre]</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-ff-slate-700 dark:text-ff-slate-300">
                  <span className="material-icons text-ff-orange-600 dark:text-ff-orange-400 text-sm">check_circle</span>
                  <span>[Gaming platform]</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-ff-slate-700 dark:text-ff-slate-300">
                  <span className="material-icons text-ff-orange-600 dark:text-ff-orange-400 text-sm">check_circle</span>
                  <span>[Gaming interest]</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coding Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-white via-ff-blue-50 to-cyan-50 dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-blue-900/20 border-3 border-ff-blue-300 dark:border-ff-blue-700 rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            {/* Decorative glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-blue-500/10 dark:bg-ff-blue-500/5 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-ff-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="material-icons text-white text-xl sm:text-2xl">code</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-ff-blue-700 dark:text-ff-blue-300 font-sixtyfour">
                  CODING
                </h3>
              </div>
              <p className="text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                [Placeholder: Explain your coding journey - what got you into programming, languages and frameworks you work with, types of projects you build, areas of interest (web dev, game dev, etc.), and how you combine coding with your creative side.]
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-ff-slate-700 dark:text-ff-slate-300">
                  <span className="material-icons text-ff-blue-600 dark:text-ff-blue-400 text-sm">check_circle</span>
                  <span>[Programming language]</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-ff-slate-700 dark:text-ff-slate-300">
                  <span className="material-icons text-ff-blue-600 dark:text-ff-blue-400 text-sm">check_circle</span>
                  <span>[Framework/tool]</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-ff-slate-700 dark:text-ff-slate-300">
                  <span className="material-icons text-ff-blue-600 dark:text-ff-blue-400 text-sm">check_circle</span>
                  <span>[Area of focus]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
