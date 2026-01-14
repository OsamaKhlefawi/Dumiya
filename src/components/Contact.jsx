import React, { useMemo } from 'react'
import { useSectionScroll } from '../hooks/useSectionScroll'

const Contact = ({ setActiveSection }) => {
  const contactRef = useSectionScroll('contact', setActiveSection)

  const socialLinks = [
    { name: 'Discord', icon: '💬', url: '#', color: 'from-ff-indigo-500 to-ff-purple-500' },
    { name: 'Twitter (X)', icon: '🐦', url: '#', color: 'from-ff-red-400 to-ff-cyan-500' },
    { name: 'Instagram', icon: '📸', url: '#', color: 'from-ff-purple-500 to-ff-pink-500' },
    { name: 'Trakt', icon: '📺', url: '#', color: 'from-ff-orange-500 to-ff-red-500' },
    { name: 'Backlogged', icon: '🎮', url: '#', color: 'from-ff-green-500 to-ff-emerald-500' }
  ]

  return (
    <section
      id="contact"
      ref={contactRef}
      className="min-h-screen relative overflow-hidden pt-20 pb-8 sm:py-20 md:py-24 font-body"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative elements - removed */}
      </div>

      {/* Decorative glows - consistent in both modes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-ff-green-400/5 dark:bg-ff-green-500/8 rounded-full blur-3xl transition-colors duration-500"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-ff-cyan-400/5 dark:bg-ff-cyan-500/8 rounded-full blur-3xl transition-colors duration-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold relative z-10 leading-tight font-sixtyfour mb-4 sm:mb-6">
            <span className="title-light dark:title-dark">
              GET IN TOUCH
            </span>
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-ff-green-500 to-ff-cyan-500 mx-auto mb-4 sm:mb-6 md:mb-8 shadow-lg"></div>
          <p className="text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed max-w-2xl mx-auto text-base sm:text-lg md:text-xl px-4">
            <span className="text-ff-green-600 dark:text-ff-green-400 opacity-80 font-mono">[</span>
            Ready to collaborate on a project, discuss gaming strategies, or just chat about art? Let's connect!
            <span className="text-ff-cyan-600 dark:text-ff-cyan-400 opacity-80 font-mono">]</span>
          </p>
        </div>

        {/* Content - Stack on mobile, Grid on desktop */}
        {/* Mobile: Horizontal Scroll Sections, Desktop: Grid */}
        <div className="space-y-6 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          {/* Social Media - Mobile: Horizontal Scroll */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-2xl lg:text-2xl font-bold text-ff-green-700 dark:text-ff-green-300 font-sixtyfour">
              SOCIAL
            </h3>
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
              {socialLinks.slice(0, 3).map((social, index) => (
                <div key={index} className="min-w-[200px] lg:min-w-0 bg-white dark:bg-ff-slate-800 border-2 border-ff-green-200 dark:border-ff-green-700 rounded-xl p-3 shadow-lg shadow-ff-slate-200 dark:shadow-ff-slate-900/50 transition-all duration-500">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-ff-green-500 to-ff-green-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-ff-green-500/30 dark:shadow-ff-green-500/50 ring-2 ring-ff-green-400/30 dark:ring-ff-green-400/50">
                      <span className="text-xl">{social.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-ff-slate-800 dark:text-ff-slate-200 truncate">{social.name}</h4>
                      <p className="text-xs text-ff-slate-600 dark:text-ff-slate-400">Connect</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gaming Platforms - Mobile: Horizontal Scroll */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-2xl lg:text-2xl font-bold text-ff-cyan-700 dark:text-ff-cyan-300 font-sixtyfour">
              GAMING
            </h3>
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
              {socialLinks.slice(3).map((social, index) => (
                <div key={index} className="min-w-[200px] lg:min-w-0 bg-white dark:bg-ff-slate-800 border-2 border-ff-cyan-200 dark:border-ff-cyan-700 rounded-xl p-3 shadow-lg shadow-ff-slate-200 dark:shadow-ff-slate-900/50 transition-all duration-500">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-ff-cyan-500 to-ff-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-ff-cyan-500/30 dark:shadow-ff-cyan-500/50 ring-2 ring-ff-cyan-400/30 dark:ring-ff-cyan-400/50">
                      <span className="text-xl">{social.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-ff-slate-800 dark:text-ff-slate-200 truncate">{social.name}</h4>
                      <p className="text-xs text-ff-slate-600 dark:text-ff-slate-400">Gaming</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info - Mobile: Compact */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-2xl lg:text-2xl font-bold text-ff-blue-700 dark:text-ff-blue-300 font-sixtyfour">
              INFO
            </h3>
            <div className="bg-white dark:bg-ff-slate-800 border-2 border-ff-blue-200 dark:border-ff-blue-700 rounded-xl p-4 shadow-lg shadow-ff-slate-200 dark:shadow-ff-slate-900/50 transition-all duration-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-ff-blue-500 to-ff-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-ff-blue-500/30 dark:shadow-ff-blue-500/50 ring-2 ring-ff-blue-400/30 dark:ring-ff-blue-400/50">
                  <span className="material-icons text-white text-lg">schedule</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-ff-slate-800 dark:text-ff-slate-200">Response Time</h4>
                  <p className="text-xs text-ff-slate-600 dark:text-ff-slate-400">Within 24 hours</p>
                </div>
              </div>
              <p className="text-xs text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed">
                I typically respond quickly to messages. For urgent gaming questions, Discord is fastest!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
