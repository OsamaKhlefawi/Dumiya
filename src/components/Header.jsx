import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { useTheme } from '../hooks/useTheme'
import { ThemeToggle } from './ThemeToggle'

const Header = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const { isDark } = useTheme()
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = useMemo(() => [
    { id: 'home', label: 'Home', icon: 'home', description: 'Welcome to my portfolio' },
    { id: 'about', label: 'About', icon: 'person', description: 'Learn about my journey' },
    { id: 'gaming', label: 'Gaming', icon: 'sports_esports', description: 'My gaming achievements' },
    { id: 'art', label: 'Art', icon: 'palette', description: 'Digital art portfolio' },
    { id: 'shows-movies', label: 'Shows', icon: 'movie', description: 'Favorite entertainment' },
    { id: 'experience', label: 'Experience', icon: 'work', description: 'Work & projects' },
    { id: 'contact', label: 'Contact', icon: 'email', description: 'Get in touch' }
  ], [])

  const mobileNavItems = useMemo(() => [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'about', label: 'About', icon: 'person' },
    { id: 'gaming', label: 'Gaming', icon: 'sports_esports' },
    { id: 'art', label: 'Art', icon: 'palette' },
    { id: 'shows-movies', label: 'Shows', icon: 'movie' },
    { id: 'experience', label: 'Work', icon: 'work' },
    { id: 'contact', label: 'Contact', icon: 'email' }
  ], [])

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  const handleKeyDown = useCallback((event, sectionId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      scrollToSection(sectionId)
    }
  }, [scrollToSection])

  return (
    <>
      {/* CSS Fix for mobile/desktop separation */}
      <style>{`
        @media (max-width: 1023px) {
          nav.hidden.lg\\:block,
          div.hidden.lg\\:block {
            display: none !important;
          }
        }
        @media (min-width: 1024px) {
          div.lg\\:hidden {
            display: none !important;
          }
        }
      `}</style>

      {/* Desktop Navigation */}
      <nav 
        ref={navRef}
        className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
      >
        <div className="space-y-3">
          {navItems.map((item) => (
            <div key={item.id} className="group relative">
              <div
                className={`w-16 h-16 shadow-lg rounded-r-lg ${
                  activeSection === item.id ? 'shadow-xl' : ''
                }`}
                style={{
                  backgroundColor: activeSection === item.id
                    ? (isDark ? 'rgb(68 64 60)' : 'rgb(253 164 175)')
                    : (isDark ? 'rgb(28 25 23)' : 'rgb(255 255 255)')
                }}
              ></div>
              
              <button
                className={`absolute left-0 top-0 w-16 h-16 rounded-r-lg transition-all duration-300 ${
                  activeSection === item.id ? 'scale-110' : 'hover:scale-110'
                }`}
                style={{
                  backgroundColor: activeSection === item.id 
                    ? (isDark ? 'rgb(68 64 60)' : 'rgb(253 164 175)') 
                    : (isDark ? 'rgb(28 25 23)' : 'rgb(255 255 255)')
                }}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {activeSection === item.id && (
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"></div>
                )}
                <div className="flex items-center justify-center h-full">
                  <span className={`material-icons ${
                    activeSection === item.id 
                      ? 'text-rose-600 dark:text-rose-400' 
                      : 'text-ff-slate-600 dark:text-ff-slate-300'
                  }`}>{item.icon}</span>
                </div>
              </button>
              
              {hoveredItem === item.id && (
                <div className="absolute left-20 top-1/2 -translate-y-1/2 bg-white dark:bg-ff-slate-800 px-4 py-2.5 rounded-xl shadow-xl min-w-max z-50 border border-ff-slate-200 dark:border-ff-slate-700">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold text-ff-slate-800 dark:text-ff-slate-200">{item.label}</div>
                    {activeSection === item.id && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 font-medium">
                        current
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {/* Separator */}
          <div className="w-12 mx-2 h-px bg-ff-stone-300 dark:bg-ff-stone-600"></div>
          
          {/* Theme Toggle integrated into nav */}
          <div className="pl-2">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* MOBILE NAVIGATION - ONLY VISIBLE ON MOBILE */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <header 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10000,
            backgroundColor: isDark ? '#0c0a09' : '#ffffff',
            borderBottom: isDark ? '1px solid #44403c' : '1px solid #e7e5e4',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            height: '56px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', height: '100%', width: '100%' }}>
            <h1 style={{ fontSize: '18px', fontWeight: 'bold', color: isDark ? '#ffffff' : '#0c0a09' }}>
              Dumiya
            </h1>
            <ThemeToggle mobile />
          </div>
        </header>

        {/* Mobile Bottom Nav - FORCE VISIBLE */}
        <nav 
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            backgroundColor: isDark ? '#0c0a09' : '#ffffff',
            borderTop: isDark ? '1px solid #44403c' : '1px solid #e7e5e4',
            boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
            height: '64px',
            paddingBottom: 'env(safe-area-inset-bottom, 0px)'
          }}
        >
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-around', 
            height: '100%',
            padding: '0 8px'
          }}>
            {mobileNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  console.log('Navigating to:', item.id)
                  scrollToSection(item.id)
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  color: activeSection === item.id 
                    ? (isDark ? '#f87171' : '#dc2626')
                    : (isDark ? '#a8a29e' : '#78716c'),
                  transition: 'color 0.2s'
                }}
              >
                <span className="material-icons" style={{ fontSize: '24px', marginBottom: '2px' }}>
                  {item.icon}
                </span>
                <span style={{ fontSize: '11px', fontWeight: 500 }}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header
