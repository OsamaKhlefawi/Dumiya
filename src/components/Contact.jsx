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
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20 font-body"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative elements - removed */}
      </div>

      {/* Subtle background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-ff-green-50 to-ff-cyan-50 dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-green-900/20"></div>

      {/* Decorative glows */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-ff-green-500/10 dark:bg-ff-green-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-ff-cyan-500/10 dark:bg-ff-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold relative z-10 leading-tight font-sixtyfour mb-6">
            <span className="title-light dark:title-dark">
              GET IN TOUCH
            </span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-ff-green-500 to-ff-cyan-500 mx-auto mb-6 sm:mb-8 shadow-lg"></div>
          <p className="text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed max-w-2xl mx-auto text-lg sm:text-xl px-4">
            <span className="text-ff-green-600 dark:text-ff-green-400 text-lg opacity-80 font-mono">[</span>
            Ready to collaborate on a project, discuss gaming strategies, or just chat about art? Let's connect!
            <span className="text-ff-cyan-600 dark:text-ff-cyan-400 text-lg opacity-80 font-mono">]</span>
          </p>
        </div>

        {/* Content Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Social Media Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-green-700 dark:text-ff-green-300 font-sixtyfour text-center">
              SOCIAL MEDIA
          </h3>

            {/* Social Cards */}
            <div className="space-y-4">
              {socialLinks.slice(0, 3).map((social, index) => (
                <div key={index} className="relative overflow-hidden bg-gradient-to-br from-white via-ff-green-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-green-900/20 border-2 border-ff-green-300 dark:border-ff-green-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  {/* Decorative glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-green-500/10 dark:bg-ff-green-500/5 rounded-full blur-2xl"></div>

                  <div className="relative z-10 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-ff-green-500 to-ff-green-600 rounded-lg flex items-center justify-center shadow-lg">
                      <span className="text-2xl">{social.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">{social.name}</h4>
                      <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Connect & Chat</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

          {/* Gaming Platforms Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-cyan-700 dark:text-ff-cyan-300 font-sixtyfour text-center">
              GAMING PLATFORMS
            </h3>

            {/* Platform Cards */}
            <div className="space-y-4">
              {socialLinks.slice(3).map((social, index) => (
                <div key={index} className="relative overflow-hidden bg-gradient-to-br from-white via-ff-cyan-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-cyan-900/20 border-2 border-ff-cyan-300 dark:border-ff-cyan-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  {/* Decorative glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-cyan-500/10 dark:bg-ff-cyan-500/5 rounded-full blur-2xl"></div>

                  <div className="relative z-10 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-ff-cyan-500 to-ff-cyan-600 rounded-lg flex items-center justify-center shadow-lg">
                      <span className="text-2xl">{social.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">{social.name}</h4>
                      <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Gaming & Tracking</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-blue-700 dark:text-ff-blue-300 font-sixtyfour text-center">
              CONTACT INFO
            </h3>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="relative overflow-hidden bg-gradient-to-br from-white via-ff-blue-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-blue-900/20 border-2 border-ff-blue-300 dark:border-ff-blue-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                {/* Decorative glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-blue-500/10 dark:bg-ff-blue-500/5 rounded-full blur-2xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-ff-blue-500 to-ff-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                      <span className="material-icons text-white text-xl">schedule</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">Response Time</h4>
                      <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Within 24 hours</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed">
                    I typically respond quickly to messages. For urgent gaming questions, Discord is fastest!
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-white via-ff-pink-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-pink-900/20 border-2 border-ff-pink-300 dark:border-ff-pink-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                {/* Decorative glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-pink-500/10 dark:bg-ff-pink-500/5 rounded-full blur-2xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-ff-pink-500 to-ff-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                      <span className="material-icons text-white text-xl">favorite</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">Best For</h4>
                      <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">Collaboration & Chat</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed">
                    Art commissions, gaming discussions, and creative collaborations are always welcome!
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-white via-ff-gold-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-gold-900/20 border-2 border-ff-gold-300 dark:border-ff-gold-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                {/* Decorative glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-gold-500/10 dark:bg-ff-gold-500/5 rounded-full blur-2xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-ff-gold-500 to-ff-gold-600 rounded-lg flex items-center justify-center shadow-lg">
                      <span className="material-icons text-white text-xl">language</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">Languages</h4>
                      <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">English & More</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed">
                    Comfortable communicating in multiple languages for international collaborations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
