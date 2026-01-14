import React, { useState } from 'react'
import { useSectionScroll } from '../hooks/useSectionScroll'

const Art = ({ setActiveSection }) => {
  const [showGallery, setShowGallery] = useState(false)
  const [showCommissions, setShowCommissions] = useState(false)
  const artRef = useSectionScroll('art', setActiveSection)

  const artworks = [
    { id: 1, title: 'Cyberpunk Cityscape', category: 'digital', description: 'Neon-lit futuristic city', year: '2024', image: '🌃', featured: true },
    { id: 2, title: 'Fantasy Warrior', category: 'character', description: 'Armored knight with magical sword', year: '2024', image: '⚔️', featured: true },
    { id: 3, title: 'Mountain Valley', category: 'landscape', description: 'Serene mountain at sunset', year: '2024', image: '🏔️', featured: true },
    { id: 4, title: 'Persona Fan Art', category: 'fanart', description: 'Tribute to Persona series', year: '2024', image: '🎭', featured: true },
    { id: 5, title: 'Space Station', category: 'digital', description: 'Futuristic space station design', year: '2023', image: '🚀', featured: false },
    { id: 6, title: 'Forest Guardian', category: 'character', description: 'Mystical forest spirit', year: '2023', image: '🌳', featured: false },
    { id: 7, title: 'Ocean Depths', category: 'landscape', description: 'Underwater bioluminescent scene', year: '2023', image: '🌊', featured: false },
    { id: 8, title: 'JoJo Fan Art', category: 'fanart', description: 'JoJo\'s Bizarre Adventure tribute', year: '2023', image: '💫', featured: false },
    { id: 9, title: 'Neon Portrait', category: 'digital', description: 'Cyberpunk style portrait', year: '2023', image: '👁️', featured: false },
    { id: 10, title: 'Dragon Knight', category: 'character', description: 'Epic dragon rider', year: '2023', image: '🐉', featured: false },
    { id: 11, title: 'Autumn Forest', category: 'landscape', description: 'Fall colors landscape', year: '2022', image: '🍂', featured: false },
    { id: 12, title: 'Hollow Knight Art', category: 'fanart', description: 'Hollow Knight tribute', year: '2022', image: '🦋', featured: false }
  ]

  const tools = [
    { name: 'Clip Studio Paint', proficiency: 95, icon: '🖼️', description: 'Primary drawing software' },
    { name: 'Adobe Photoshop', proficiency: 90, icon: '🎨', description: 'Photo editing & compositing' },
    { name: 'Procreate', proficiency: 85, icon: '✏️', description: 'iPad sketching & painting' },
    { name: 'Blender', proficiency: 70, icon: '🗿', description: '3D modeling & rendering' },
    { name: 'Krita', proficiency: 80, icon: '🖌️', description: 'Open-source alternative' },
    { name: 'Wacom Tablet', proficiency: 95, icon: '📱', description: 'Primary drawing tablet' }
  ]

  const commissionTypes = [
    { 
      type: 'Sketch', 
      price: '$XX', 
      icon: '✏️', 
      description: 'Quick character sketch, clean lines',
      features: ['1 Character', 'Simple background', '3-5 days delivery'],
      color: 'from-ff-slate-500 to-ff-slate-600'
    },
    { 
      type: 'Colored', 
      price: '$XX', 
      icon: '🎨', 
      description: 'Full color character illustration',
      features: ['1-2 Characters', 'Basic background', '5-7 days delivery'],
      color: 'from-ff-purple-500 to-ff-purple-600'
    },
    { 
      type: 'Full Illustration', 
      price: '$XX+', 
      icon: '🖼️', 
      description: 'Detailed scene with full rendering',
      features: ['Multiple characters', 'Detailed background', '10-14 days delivery'],
      color: 'from-ff-pink-500 to-ff-pink-600'
    }
  ]

  const featuredArtworks = artworks.filter(a => a.featured)

  return (
    <section
      id="art"
      ref={artRef}
      className="min-h-screen relative overflow-hidden pt-20 pb-8 sm:py-20 md:py-24 font-body"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-ff-purple-400/10 dark:bg-ff-purple-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-ff-pink-400/10 dark:bg-ff-pink-500/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold relative z-10 leading-tight font-sixtyfour mb-4 sm:mb-6">
            <span className="title-light dark:title-dark">DIGITAL ART</span>
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-ff-purple-500 to-ff-pink-500 mx-auto mb-4 sm:mb-6 md:mb-8 shadow-lg"></div>
          <p className="text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed max-w-2xl mx-auto text-base sm:text-lg md:text-xl px-4">
            <span className="text-ff-purple-600 dark:text-ff-purple-400 opacity-80 font-mono">[</span>
              Exploring creativity through character design, landscapes, and conceptual art.
            <span className="text-ff-pink-600 dark:text-ff-pink-400 opacity-80 font-mono">]</span>
          </p>
        </div>

        {/* Three Sections Layout */}
        <div className="space-y-8 lg:space-y-12">
          
          {/* Section 1: Art Showcase */}
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl lg:text-3xl font-bold text-ff-purple-700 dark:text-ff-purple-300 font-sixtyfour">
                🎨 ART SHOWCASE
            </h3>
              <button 
                onClick={() => setShowGallery(true)}
                className="px-4 py-2 bg-gradient-to-r from-ff-purple-500 to-ff-pink-500 text-white rounded-lg font-bold text-sm hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
              >
                <span>View Gallery</span>
                <span className="material-icons text-sm">arrow_forward</span>
              </button>
            </div>
            
            {/* Featured Art Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredArtworks.map((art) => (
                <div 
                  key={art.id} 
                  className="group relative bg-white dark:bg-ff-slate-800 border-2 border-ff-purple-300 dark:border-ff-purple-700 rounded-xl overflow-hidden shadow-lg shadow-ff-slate-300 dark:shadow-ff-slate-900/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
                  onClick={() => setShowGallery(true)}
                >
                  {/* Art Placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-ff-purple-100 to-ff-pink-100 dark:from-ff-slate-700 dark:to-ff-slate-600 flex items-center justify-center">
                    <span className="text-5xl lg:text-6xl group-hover:scale-110 transition-transform">{art.image}</span>
                      </div>
                  {/* Art Info */}
                  <div className="p-3">
                    <h4 className="font-bold text-sm text-ff-slate-800 dark:text-ff-slate-200 truncate">{art.title}</h4>
                    <p className="text-xs text-ff-slate-600 dark:text-ff-slate-400">{art.category} • {art.year}</p>
                      </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ff-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <p className="text-white text-xs">{art.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Tools & Software */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-ff-pink-700 dark:text-ff-pink-300 font-sixtyfour">
              🛠️ TOOLS & SOFTWARE
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="bg-white dark:bg-ff-slate-800 border-2 border-ff-pink-300 dark:border-ff-pink-700 rounded-xl p-4 shadow-lg shadow-ff-slate-300 dark:shadow-ff-slate-900/50 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg ring-2 ring-white/20"
                      style={{ background: 'linear-gradient(135deg, #ec4899, #db2777)' }}>
                        <span className="text-2xl">{tool.icon}</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">{tool.name}</h4>
                      <p className="text-xs text-ff-slate-600 dark:text-ff-slate-400">{tool.description}</p>
                    </div>
                      </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-ff-slate-600 dark:text-ff-slate-400">Proficiency</span>
                      <span className="text-ff-pink-700 dark:text-ff-pink-300 font-mono font-bold">{tool.proficiency}%</span>
                    </div>
                    <div className="w-full bg-ff-slate-200 dark:bg-ff-slate-700 h-2 rounded-full overflow-hidden">
                      <div
                        className="h-2 bg-gradient-to-r from-ff-pink-500 to-ff-purple-500 rounded-full transition-all duration-1000"
                        style={{ width: `${tool.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Art Commissions */}
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl lg:text-3xl font-bold text-ff-gold-700 dark:text-ff-gold-300 font-sixtyfour">
                💰 COMMISSIONS
            </h3>
              <button 
                onClick={() => setShowCommissions(true)}
                className="px-4 py-2 bg-gradient-to-r from-ff-gold-500 to-ff-orange-500 text-white rounded-lg font-bold text-sm hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
              >
                <span>Commission Info</span>
                <span className="material-icons text-sm">arrow_forward</span>
              </button>
            </div>

            {/* Commission Status */}
            <div className="bg-gradient-to-r from-ff-green-500/10 to-ff-emerald-500/10 dark:from-ff-green-500/20 dark:to-ff-emerald-500/20 border-2 border-ff-green-300 dark:border-ff-green-700 rounded-xl p-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-ff-green-500 rounded-full animate-pulse"></div>
                <span className="font-bold text-ff-green-700 dark:text-ff-green-300">Commissions: OPEN</span>
                <span className="text-sm text-ff-slate-600 dark:text-ff-slate-400 ml-auto">[Placeholder - Update status]</span>
              </div>
            </div>
            
            {/* Commission Types Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {commissionTypes.map((comm, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-ff-slate-800 border-2 border-ff-gold-300 dark:border-ff-gold-700 rounded-xl p-4 shadow-lg shadow-ff-slate-300 dark:shadow-ff-slate-900/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  onClick={() => setShowCommissions(true)}
                >
                  <div className="text-center mb-3">
                    <div 
                      className="w-14 h-14 mx-auto rounded-full flex items-center justify-center shadow-lg ring-2 ring-white/20 mb-2"
                      style={{ background: `linear-gradient(135deg, ${comm.color.includes('slate') ? '#64748b, #475569' : comm.color.includes('purple') ? '#a855f7, #9333ea' : '#ec4899, #db2777'})` }}>
                      <span className="text-2xl">{comm.icon}</span>
                    </div>
                    <h4 className="font-bold text-lg text-ff-slate-800 dark:text-ff-slate-200">{comm.type}</h4>
                    <div className="text-2xl font-bold text-ff-gold-600 dark:text-ff-gold-400 font-mono">{comm.price}</div>
                  </div>
                  <p className="text-xs text-ff-slate-600 dark:text-ff-slate-400 text-center mb-3">{comm.description}</p>
                  <ul className="space-y-1">
                    {comm.features.map((feature, i) => (
                      <li key={i} className="text-xs text-ff-slate-700 dark:text-ff-slate-300 flex items-center gap-2">
                        <span className="text-ff-green-500">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {showGallery && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto"
          onClick={(e) => e.target === e.currentTarget && setShowGallery(false)}
        >
          {/* Modal Content */}
          <div className="min-h-full py-8 px-4">
            <div className="relative bg-white dark:bg-ff-slate-900 rounded-2xl w-full max-w-6xl mx-auto shadow-2xl">
              {/* Header */}
              <div className="sticky top-0 bg-white dark:bg-ff-slate-900 border-b border-ff-slate-300 dark:border-ff-slate-700 p-4 flex items-center justify-between z-10 rounded-t-2xl">
                <div>
                  <h3 className="text-2xl font-bold text-ff-purple-700 dark:text-ff-purple-300 font-sixtyfour">🎨 ART GALLERY</h3>
                  <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">{artworks.length} artworks</p>
                </div>
                <button 
                  onClick={() => setShowGallery(false)}
                  className="w-10 h-10 rounded-full bg-ff-slate-100 dark:bg-ff-slate-800 flex items-center justify-center hover:bg-ff-slate-200 dark:hover:bg-ff-slate-700 transition-colors"
                >
                  <span className="material-icons">close</span>
                </button>
              </div>

              {/* Gallery Grid */}
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {artworks.map((art) => (
                    <div 
                      key={art.id} 
                      className="group relative bg-ff-slate-100 dark:bg-ff-slate-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                    >
                      <div className="aspect-square bg-gradient-to-br from-ff-purple-100 to-ff-pink-100 dark:from-ff-slate-700 dark:to-ff-slate-600 flex items-center justify-center">
                        <span className="text-5xl group-hover:scale-110 transition-transform">{art.image}</span>
                      </div>
                      <div className="p-3">
                        <h4 className="font-bold text-sm text-ff-slate-800 dark:text-ff-slate-200 truncate">{art.title}</h4>
                        <p className="text-xs text-ff-slate-600 dark:text-ff-slate-400">{art.year}</p>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-ff-purple-900/90 via-ff-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                        <h4 className="font-bold text-white">{art.title}</h4>
                        <p className="text-white/80 text-xs">{art.description}</p>
                        <span className="text-xs text-ff-purple-300 mt-1">{art.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Commissions Modal */}
      {showCommissions && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowCommissions(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white dark:bg-ff-slate-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="sticky top-0 bg-white/95 dark:bg-ff-slate-900/95 backdrop-blur-sm border-b border-ff-slate-300 dark:border-ff-slate-700 p-4 flex items-center justify-between z-10">
              <h3 className="text-2xl font-bold text-ff-gold-700 dark:text-ff-gold-300 font-sixtyfour">💰 COMMISSIONS</h3>
              <button 
                onClick={() => setShowCommissions(false)}
                className="w-10 h-10 rounded-full bg-ff-slate-100 dark:bg-ff-slate-800 flex items-center justify-center hover:bg-ff-slate-200 dark:hover:bg-ff-slate-700 transition-colors"
              >
                <span className="material-icons">close</span>
              </button>
            </div>

            {/* Commission Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)] space-y-8">
              {/* Status Banner */}
              <div className="bg-gradient-to-r from-ff-green-500/20 to-ff-emerald-500/20 border-2 border-ff-green-400 dark:border-ff-green-600 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-ff-green-500 rounded-full animate-pulse"></div>
                  <span className="font-bold text-lg text-ff-green-700 dark:text-ff-green-300">Commissions are currently OPEN!</span>
                </div>
                <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400 mt-2">[Placeholder: Add current queue status and estimated wait times]</p>
              </div>

              {/* Pricing Section */}
              <div>
                <h4 className="text-xl font-bold text-ff-slate-800 dark:text-ff-slate-200 mb-4 font-sixtyfour">📋 PRICING</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {commissionTypes.map((comm, index) => (
                    <div 
                      key={index} 
                      className="bg-ff-slate-50 dark:bg-ff-slate-800 border-2 border-ff-slate-300 dark:border-ff-slate-700 rounded-xl p-5 text-center hover:border-ff-gold-400 dark:hover:border-ff-gold-600 transition-colors"
                    >
                      <div 
                        className="w-16 h-16 mx-auto rounded-full flex items-center justify-center shadow-lg ring-2 ring-white/20 mb-3"
                        style={{ background: `linear-gradient(135deg, ${comm.color.includes('slate') ? '#64748b, #475569' : comm.color.includes('purple') ? '#a855f7, #9333ea' : '#ec4899, #db2777'})` }}>
                        <span className="text-3xl">{comm.icon}</span>
                      </div>
                      <h5 className="font-bold text-lg text-ff-slate-800 dark:text-ff-slate-200">{comm.type}</h5>
                      <div className="text-3xl font-bold text-ff-gold-600 dark:text-ff-gold-400 font-mono my-2">{comm.price}</div>
                      <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400 mb-4">{comm.description}</p>
                      <ul className="space-y-2 text-left">
                        {comm.features.map((feature, i) => (
                          <li key={i} className="text-sm text-ff-slate-700 dark:text-ff-slate-300 flex items-center gap-2">
                            <span className="text-ff-green-500">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terms & Conditions */}
              <div>
                <h4 className="text-xl font-bold text-ff-slate-800 dark:text-ff-slate-200 mb-4 font-sixtyfour">📜 TERMS</h4>
                <div className="bg-ff-slate-50 dark:bg-ff-slate-800 rounded-xl p-4 space-y-2">
                  <p className="text-sm text-ff-slate-700 dark:text-ff-slate-300">✓ [Placeholder: Payment terms - 50% upfront, 50% on completion]</p>
                  <p className="text-sm text-ff-slate-700 dark:text-ff-slate-300">✓ [Placeholder: Revision policy - 2 free revisions included]</p>
                  <p className="text-sm text-ff-slate-700 dark:text-ff-slate-300">✓ [Placeholder: Usage rights - Personal use included, commercial extra]</p>
                  <p className="text-sm text-ff-slate-700 dark:text-ff-slate-300">✗ [Placeholder: What I won't draw - NSFW, hate content, etc.]</p>
                </div>
              </div>

              {/* Examples */}
              <div>
                <h4 className="text-xl font-bold text-ff-slate-800 dark:text-ff-slate-200 mb-4 font-sixtyfour">🖼️ EXAMPLES</h4>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-square bg-gradient-to-br from-ff-purple-100 to-ff-pink-100 dark:from-ff-slate-700 dark:to-ff-slate-600 rounded-xl flex items-center justify-center">
                      <span className="text-ff-slate-400 dark:text-ff-slate-500 text-sm">[Example {i}]</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact / Request Form Placeholder */}
              <div>
                <h4 className="text-xl font-bold text-ff-slate-800 dark:text-ff-slate-200 mb-4 font-sixtyfour">📬 REQUEST</h4>
                <div className="bg-gradient-to-br from-ff-purple-100 to-ff-pink-100 dark:from-ff-slate-800 dark:to-ff-slate-700 rounded-xl p-6 text-center">
                  <span className="text-4xl mb-4 block">📧</span>
                  <p className="text-ff-slate-700 dark:text-ff-slate-300 mb-4">[Placeholder: Add contact method or commission request form]</p>
                  <button className="px-6 py-3 bg-gradient-to-r from-ff-purple-500 to-ff-pink-500 text-white rounded-lg font-bold hover:scale-105 transition-transform shadow-lg">
                    Request Commission
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Art
