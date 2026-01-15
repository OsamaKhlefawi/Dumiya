import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Gaming', href: '#gaming' },
    { name: 'Art', href: '#art' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { name: 'Discord', icon: '💬', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'Trakt', icon: '📺', url: '#' },
    { name: 'Backlogged', icon: '🎮', url: '#' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-ff-slate-100 via-ff-red-100 to-ff-purple-100 dark:from-ff-slate-900 dark:via-ff-red-900/50 dark:to-ff-purple-900/50 text-ff-slate-800 dark:text-white font-body border-t-2 border-ff-red-300 dark:border-ff-red-700">
      {/* Decorative glow */}
      <div className="absolute top-0 left-10 w-64 h-64 bg-indigo-200/10 dark:bg-ff-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-purple-200/10 dark:bg-ff-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div 
                className="w-10 h-10 flex items-center justify-center border-2 border-white/20 rounded-lg shadow-lg"
                style={{ background: 'linear-gradient(135deg, #ef4444, #9333ea)' }}>
                <span className="text-xl">🌸</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-display font-bold bg-gradient-to-r from-ff-red-600 to-ff-purple-600 dark:from-ff-red-400 dark:to-ff-purple-400 bg-clip-text text-transparent">
                  GamerArtist
                </span>
                <span className="text-xs text-ff-slate-700 dark:text-ff-slate-400 font-mono">v1.0.0</span>
              </div>
            </div>
            <p className="text-ff-slate-800 dark:text-ff-slate-300 mb-4 max-w-md font-body text-sm sm:text-base">
              A passionate gamer and digital artist creating immersive experiences through creativity,
              strategy, and artistic vision. Join me on this journey of pixels and imagination.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-ff-slate-200/50 dark:bg-ff-slate-700/30 backdrop-blur-sm border-2 border-ff-slate-300 dark:border-ff-slate-600 flex items-center justify-center text-sm sm:text-base hover:bg-gradient-to-br hover:from-ff-red-500 hover:to-ff-pink-500 hover:border-ff-red-400 dark:hover:border-ff-red-500 hover:scale-110 transition-all duration-200 group rounded-lg shadow-lg"
                  title={social.name}
                >
                  <span className="group-hover:scale-110 transition-transform duration-200">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-display font-bold text-ff-slate-800 dark:text-ff-slate-200 mb-3">Quick Links</h3>
            <ul className="space-y-1.5">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className="text-ff-slate-700 dark:text-ff-slate-300 hover:text-ff-red-600 dark:hover:text-ff-red-400 transition-all duration-200 font-body text-sm hover:translate-x-1 inline-block transform"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-display font-bold text-ff-slate-800 dark:text-ff-slate-200 mb-3">Contact</h3>
            <div className="space-y-1.5 text-xs text-ff-slate-700 dark:text-ff-slate-300 font-body">
              <p>📧 gamerartist@example.com</p>
              <p>📱 +1 (555) 123-4567</p>
              <p>🌐 www.gamerartist.com</p>
              <p>📍 Digital Realm, Internet</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 border-ff-red-300 dark:border-ff-red-700 mt-6 sm:mt-8 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="text-ff-slate-700 dark:text-ff-slate-300 text-xs font-body text-center sm:text-left">
              © {currentYear} GamerArtist. All rights reserved.
              <span className="block sm:inline sm:ml-2 text-xs font-mono">Built with React & Tailwind CSS</span>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 text-xs text-ff-slate-700 dark:text-ff-slate-300 font-body">
              <span className="hover:text-ff-red-600 dark:hover:text-ff-red-400 transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-ff-red-600 dark:hover:text-ff-red-400 transition-colors cursor-pointer">Terms of Service</span>
              <span className="text-ff-red-700 dark:text-ff-red-300 font-mono font-bold">v1.0.0</span>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center space-x-2 text-ff-slate-700 dark:text-ff-slate-300 text-xs font-mono">
            <span>🌸</span>
            <span>Welcome to the world of gaming and art</span>
            <span>🌸</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
