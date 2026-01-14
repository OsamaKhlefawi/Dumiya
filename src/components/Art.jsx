import React, { useState, useMemo } from 'react'
import { useSectionScroll } from '../hooks/useSectionScroll'

const Art = ({ setActiveSection }) => {
  const [activeCategory, setActiveCategory] = useState('all')
  const artRef = useSectionScroll('art', setActiveSection)

  const categories = [
    { id: 'all', label: 'All', icon: '🎨', color: 'from-ff-red-500 to-ff-pink-500' },
    { id: 'digital', label: 'Digital Art', icon: '💻', color: 'from-ff-red-500 to-ff-red-600' },
    { id: 'concept', label: 'Concept Art', icon: '🌌', color: 'from-ff-pink-500 to-ff-pink-600' },
    { id: 'character', label: 'Character Design', icon: '👤', color: 'from-ff-gold-500 to-ff-gold-600' },
    { id: 'landscape', label: 'Landscapes', icon: '🏔️', color: 'from-ff-red-400 to-ff-red-500' },
    { id: 'abstract', label: 'Abstract', icon: '🌀', color: 'from-ff-pink-400 to-ff-pink-500' }
  ]

  const portfolioItems = [
    { id: 1, title: 'Cyberpunk Cityscape', category: 'digital', description: 'Neon-lit futuristic city with flying cars', year: '2024', image: '🌃' },
    { id: 2, title: 'Fantasy Warrior', category: 'character', description: 'Armored knight with magical sword', year: '2023', image: '⚔️' },
    { id: 3, title: 'Mountain Valley', category: 'landscape', description: 'Serene mountain landscape at sunset', year: '2023', image: '🏔️' },
    { id: 4, title: 'Abstract Emotions', category: 'abstract', description: 'Colorful representation of human emotions', year: '2024', image: '🎭' },
    { id: 5, title: 'Space Station', category: 'concept', description: 'Futuristic space station design', year: '2023', image: '🚀' },
    { id: 6, title: 'Forest Guardian', category: 'character', description: 'Mystical forest spirit character', year: '2024', image: '🌳' },
    { id: 7, title: 'Ocean Depths', category: 'landscape', description: 'Underwater scene with bioluminescent creatures', year: '2023', image: '🌊' },
    { id: 8, title: 'Digital Dreams', category: 'abstract', description: 'Surreal digital art piece', year: '2024', image: '💫' }
  ]

  const tools = [
    { name: 'Adobe Photoshop', proficiency: 90, icon: '🎨', color: 'from-ff-red-500 to-ff-red-600' },
    { name: 'Procreate', proficiency: 85, icon: '✏️', color: 'from-ff-pink-500 to-ff-pink-600' },
    { name: 'Blender', proficiency: 75, icon: '🗿', color: 'from-ff-gold-500 to-ff-gold-600' },
    { name: 'Krita', proficiency: 80, icon: '🖌️', color: 'from-ff-red-400 to-ff-red-500' },
    { name: 'Affinity Designer', proficiency: 70, icon: '📐', color: 'from-ff-pink-400 to-ff-pink-500' },
    { name: 'Clip Studio Paint', proficiency: 85, icon: '🖼️', color: 'from-ff-gold-400 to-ff-gold-500' }
  ]

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section
      id="art"
      ref={artRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20 font-body"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative elements - removed */}
      </div>

      {/* Subtle background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-ff-purple-50 to-ff-pink-50 dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-purple-900/20"></div>

      {/* Decorative glows */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-ff-purple-500/10 dark:bg-ff-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-ff-pink-500/10 dark:bg-ff-pink-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold relative z-10 leading-tight font-sixtyfour mb-6">
            <span className="title-light dark:title-dark">
              DIGITAL ART
            </span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-ff-purple-500 to-ff-pink-500 mx-auto mb-6 sm:mb-8 shadow-lg"></div>
          <p className="text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed max-w-2xl mx-auto text-lg sm:text-xl px-4">
            <span className="text-ff-purple-600 dark:text-ff-purple-400 text-lg opacity-80 font-mono">[</span>
              Exploring the boundaries of digital creativity through character design, landscapes, and conceptual art.
            <span className="text-ff-pink-600 dark:text-ff-pink-400 text-lg opacity-80 font-mono">]</span>
          </p>
        </div>

        {/* Content Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Portfolio Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-purple-700 dark:text-ff-purple-300 font-sixtyfour text-center">
              PORTFOLIO
            </h3>

            {/* Artwork Cards */}
            <div className="space-y-4">
              {portfolioItems.slice(0, 3).map((item) => (
                <div key={item.id} className="relative overflow-hidden bg-gradient-to-br from-white via-ff-purple-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-purple-900/20 border-2 border-ff-purple-300 dark:border-ff-purple-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  {/* Decorative glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-purple-500/10 dark:bg-ff-purple-500/5 rounded-full blur-2xl"></div>

                  <div className="relative z-10">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-ff-purple-500 to-ff-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-2xl">{item.image}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">{item.title}</h4>
                        <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">{item.category} • {item.year}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Software Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-pink-700 dark:text-ff-pink-300 font-sixtyfour text-center">
              TOOLS & SOFTWARE
            </h3>

            {/* Tool Cards */}
            <div className="space-y-4">
              {tools.slice(0, 3).map((tool, index) => (
                <div key={index} className="relative overflow-hidden bg-gradient-to-br from-white via-ff-pink-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-pink-900/20 border-2 border-ff-pink-300 dark:border-ff-pink-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  {/* Decorative glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-pink-500/10 dark:bg-ff-pink-500/5 rounded-full blur-2xl"></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{tool.icon}</span>
                        <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">{tool.name}</h4>
                      </div>
                      <span className="text-sm text-ff-pink-700 dark:text-ff-pink-300 font-mono font-bold">{tool.proficiency}%</span>
                    </div>
                    <div className="w-full bg-ff-slate-200 dark:bg-ff-slate-700 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-2 bg-gradient-to-r ${tool.color} transition-all duration-1000 ease-out rounded-full`}
                        style={{ width: `${tool.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Art Stats & Philosophy */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-gold-700 dark:text-ff-gold-300 font-sixtyfour text-center">
              ART STATS
            </h3>

            {/* Stats Cards */}
            <div className="space-y-4">
              <div className="relative overflow-hidden bg-gradient-to-br from-white via-ff-gold-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-gold-900/20 border-2 border-ff-gold-300 dark:border-ff-gold-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-center">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-gold-500/10 dark:bg-ff-gold-500/5 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="text-3xl font-bold text-ff-gold-700 dark:text-ff-gold-300 mb-2">500+</div>
                  <div className="text-sm text-ff-slate-700 dark:text-ff-slate-300">Artworks Created</div>
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-white via-ff-purple-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-purple-900/20 border-2 border-ff-purple-300 dark:border-ff-purple-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-center">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-purple-500/10 dark:bg-ff-purple-500/5 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="text-3xl font-bold text-ff-purple-700 dark:text-ff-purple-300 mb-2">6</div>
                  <div className="text-sm text-ff-slate-700 dark:text-ff-slate-300">Software Mastered</div>
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-white via-ff-blue-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-blue-900/20 border-2 border-ff-blue-300 dark:border-ff-blue-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-center">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-blue-500/10 dark:bg-ff-blue-500/5 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="text-3xl font-bold text-ff-blue-700 dark:text-ff-blue-300 mb-2">3+</div>
                  <div className="text-sm text-ff-slate-700 dark:text-ff-slate-300">Years Experience</div>
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-white via-ff-green-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-green-900/20 border-2 border-ff-green-300 dark:border-ff-green-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-center">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-green-500/10 dark:bg-ff-green-500/5 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="text-3xl font-bold text-ff-green-700 dark:text-ff-green-300 mb-2">15+</div>
                  <div className="text-sm text-ff-slate-700 dark:text-ff-slate-300">Art Styles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Art
