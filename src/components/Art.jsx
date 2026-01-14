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
      className="min-h-screen relative overflow-hidden pt-20 pb-8 sm:py-20 md:py-24 font-body"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative elements - removed */}
      </div>

      {/* Decorative glows - consistent in both modes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-ff-purple-400/5 dark:bg-ff-purple-500/8 rounded-full blur-3xl transition-colors duration-500"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-ff-pink-400/5 dark:bg-ff-pink-500/8 rounded-full blur-3xl transition-colors duration-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold relative z-10 leading-tight font-sixtyfour mb-4 sm:mb-6">
            <span className="title-light dark:title-dark">
              DIGITAL ART
            </span>
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-ff-purple-500 to-ff-pink-500 mx-auto mb-4 sm:mb-6 md:mb-8 shadow-lg"></div>
          <p className="text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed max-w-2xl mx-auto text-base sm:text-lg md:text-xl px-4">
            <span className="text-ff-purple-600 dark:text-ff-purple-400 opacity-80 font-mono">[</span>
              Exploring the boundaries of digital creativity through character design, landscapes, and conceptual art.
            <span className="text-ff-pink-600 dark:text-ff-pink-400 opacity-80 font-mono">]</span>
          </p>
        </div>

        {/* Mobile: Single Column with Horizontal Scroll, Desktop: Grid */}
        <div className="space-y-6 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          {/* Portfolio Section - Mobile: Horizontal Scroll */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-2xl lg:text-2xl font-bold text-ff-purple-700 dark:text-ff-purple-300 font-sixtyfour">
              PORTFOLIO
            </h3>
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
              {portfolioItems.slice(0, 3).map((item) => (
                <div key={item.id} className="min-w-[260px] lg:min-w-0 bg-white/90 backdrop-blur-sm dark:bg-ff-slate-800/95 border-2 border-ff-purple-200 dark:border-ff-purple-700 rounded-xl p-4 shadow-lg shadow-ff-red-200/50 dark:shadow-ff-slate-900/50 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-2">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-white/20"
                      style={{ background: 'linear-gradient(135deg, #a855f7, #9333ea)' }}>
                      <span className="text-xl">{item.image}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-ff-slate-800 dark:text-ff-slate-200 truncate">{item.title}</h4>
                      <p className="text-xs text-ff-slate-600 dark:text-ff-slate-400 truncate">{item.category} • {item.year}</p>
                    </div>
                  </div>
                  <p className="text-xs text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Section - Mobile: Horizontal Scroll */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-2xl lg:text-2xl font-bold text-ff-pink-700 dark:text-ff-pink-300 font-sixtyfour">
              TOOLS
            </h3>
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
              {tools.slice(0, 3).map((tool, index) => (
                <div key={index} className="min-w-[240px] lg:min-w-0 bg-white/90 backdrop-blur-sm dark:bg-ff-slate-800/95 border-2 border-ff-pink-200 dark:border-ff-pink-700 rounded-xl p-4 shadow-lg shadow-ff-red-200/50 dark:shadow-ff-slate-900/50 transition-all duration-500">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{tool.icon}</span>
                      <h4 className="font-bold text-sm text-ff-slate-800 dark:text-ff-slate-200">{tool.name}</h4>
                    </div>
                    <span className="text-xs text-ff-pink-700 dark:text-ff-pink-300 font-mono font-bold">{tool.proficiency}%</span>
                  </div>
                  <div className="w-full bg-ff-slate-200 dark:bg-ff-slate-700 h-2 rounded-full">
                    <div
                      className={`h-2 bg-gradient-to-r ${tool.color} rounded-full`}
                      style={{ width: `${tool.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section - Mobile: Grid */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-2xl lg:text-2xl font-bold text-ff-gold-700 dark:text-ff-gold-300 font-sixtyfour">
              STATS
            </h3>
            <div className="grid grid-cols-2 lg:flex lg:flex-col gap-3">
              <div className="bg-white/90 backdrop-blur-sm dark:bg-ff-slate-800/95 border-2 border-ff-gold-200 dark:border-ff-gold-700 rounded-xl p-3 text-center shadow-lg shadow-ff-red-200/50 dark:shadow-ff-slate-900/50 transition-all duration-500">
                <div className="text-2xl font-bold text-ff-gold-700 dark:text-ff-gold-300 mb-1">500+</div>
                <div className="text-xs text-ff-slate-700 dark:text-ff-slate-300">Artworks</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm dark:bg-ff-slate-800/95 border-2 border-ff-purple-200 dark:border-ff-purple-700 rounded-xl p-3 text-center shadow-lg shadow-ff-red-200/50 dark:shadow-ff-slate-900/50 transition-all duration-500">
                <div className="text-2xl font-bold text-ff-purple-700 dark:text-ff-purple-300 mb-1">6</div>
                <div className="text-xs text-ff-slate-700 dark:text-ff-slate-300">Software</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm dark:bg-ff-slate-800/95 border-2 border-ff-blue-200 dark:border-ff-blue-700 rounded-xl p-3 text-center shadow-lg shadow-ff-red-200/50 dark:shadow-ff-slate-900/50 transition-all duration-500">
                <div className="text-2xl font-bold text-ff-blue-700 dark:text-ff-blue-300 mb-1">3+</div>
                <div className="text-xs text-ff-slate-700 dark:text-ff-slate-300">Years</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm dark:bg-ff-slate-800/95 border-2 border-ff-green-200 dark:border-ff-green-700 rounded-xl p-3 text-center shadow-lg shadow-ff-red-200/50 dark:shadow-ff-slate-900/50 transition-all duration-500">
                <div className="text-2xl font-bold text-ff-green-700 dark:text-ff-green-300 mb-1">15+</div>
                <div className="text-xs text-ff-slate-700 dark:text-ff-slate-300">Styles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Art
