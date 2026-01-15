import React, { useState, useEffect } from 'react'
import { useTheme } from '../hooks/useTheme'

export const ArtShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [progressKey, setProgressKey] = useState(0)
  const { isDark } = useTheme()

  const roles = [
    {
      title: 'Artist',
      subtitle: 'Digital Creator',
      description: 'Character Design & Illustration',
      icon: '🎨',
      accentColor: '#ef4444',
    },
    {
      title: 'Developer',
      subtitle: 'Code Craftsman',
      description: 'Building Interactive Experiences',
      icon: '💻',
      accentColor: '#f59e0b',
    },
    {
      title: 'Gamer',
      subtitle: 'Virtual Explorer',
      description: 'Stories & Adventures',
      icon: '🎮',
      accentColor: '#ea580c',
    }
  ]

  useEffect(() => {
    if (isHovering) return
    setProgressKey(prev => prev + 1)
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % roles.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isHovering, roles.length, activeIndex])

  const activeRole = roles[activeIndex]

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated Background Glow */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px] transition-all duration-1000"
        style={{ 
          background: `radial-gradient(circle, ${activeRole.accentColor}${isDark ? '30' : '40'} 0%, transparent 70%)`,
          opacity: isDark ? 0.25 : 0.35
        }}
      />

      {/* Main Card Container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Card with Outer Ring */}
        <div className="relative mb-6">
          {/* Outer Ring - Rotating */}
          <div 
            className="absolute -inset-4 rounded-3xl border-2 border-dashed animate-spin-slow"
            style={{ 
              borderColor: activeRole.accentColor,
              animationDuration: '20s',
              opacity: isDark ? 0.2 : 0.3
            }}
          />
          
          {/* Main Display Card */}
          <div 
            className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden transition-all duration-500"
            style={{
              background: isDark 
                ? 'linear-gradient(145deg, #1c1917 0%, #0c0a09 100%)' 
                : 'linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 100%)',
              boxShadow: isDark
                ? `0 25px 60px -15px ${activeRole.accentColor}30, 0 10px 30px -10px rgba(0,0,0,0.5)`
                : `0 25px 60px -15px ${activeRole.accentColor}40, 0 10px 30px -10px rgba(0,0,0,0.1)`,
            }}
          >
            {/* Accent gradient overlay */}
            <div 
              className="absolute inset-0 transition-all duration-700"
              style={{
                background: `linear-gradient(135deg, ${activeRole.accentColor}${isDark ? '15' : '12'} 0%, ${activeRole.accentColor}${isDark ? '08' : '05'} 100%)`
              }}
            />

            {/* Grid Pattern */}
            <div 
              className="absolute inset-0"
              style={{ opacity: isDark ? 0.06 : 0.03 }}
            >
              <div 
                className="absolute inset-0 bg-[size:20px_20px]"
                style={{
                  backgroundImage: `linear-gradient(${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.4)'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.4)'} 1px, transparent 1px)`
                }}
              />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center p-6">
              {/* Icon with glow */}
              <div className="relative mb-4">
                <div 
                  className="absolute inset-0 blur-xl scale-150"
                  style={{ 
                    background: activeRole.accentColor,
                    opacity: isDark ? 0.4 : 0.5
                  }}
                />
                <span className="relative text-6xl lg:text-7xl drop-shadow-lg animate-float">
                  {activeRole.icon}
                </span>
              </div>

              {/* Title */}
              <h3 
                className="text-2xl lg:text-3xl font-bold mb-1 tracking-tight"
                style={{ 
                  color: isDark ? '#ffffff' : '#1c1917',
                  textShadow: isDark ? '0 2px 10px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.1)'
                }}
              >
                {activeRole.title}
              </h3>

              {/* Subtitle with accent */}
              <div 
                className="text-sm font-semibold tracking-widest uppercase mb-2"
                style={{ color: activeRole.accentColor }}
              >
                {activeRole.subtitle}
              </div>

              {/* Description */}
              <p 
                className="text-xs text-center max-w-[180px]"
                style={{ color: isDark ? '#a8a29e' : '#78716c' }}
              >
                {activeRole.description}
              </p>
            </div>

            {/* Corner Accents */}
            <div 
              className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 rounded-tl-lg transition-colors duration-500"
              style={{ borderColor: activeRole.accentColor }}
            />
            <div 
              className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 rounded-tr-lg transition-colors duration-500"
              style={{ borderColor: activeRole.accentColor }}
            />
            <div 
              className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 rounded-bl-lg transition-colors duration-500"
              style={{ borderColor: activeRole.accentColor }}
            />
            <div 
              className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 rounded-br-lg transition-colors duration-500"
              style={{ borderColor: activeRole.accentColor }}
            />
          </div>
        </div>

        {/* Role Selector Pills */}
        <div className="flex items-center gap-3">
          {roles.map((role, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'scale-105'
                  : 'hover:scale-102'
              }`}
              style={{
                background: index === activeIndex 
                  ? `linear-gradient(135deg, ${role.accentColor}${isDark ? '25' : '20'} 0%, ${role.accentColor}${isDark ? '15' : '10'} 100%)`
                  : 'transparent',
                border: index === activeIndex 
                  ? `2px solid ${role.accentColor}${isDark ? '50' : '60'}`
                  : '2px solid transparent',
                boxShadow: index === activeIndex 
                  ? `0 4px 15px ${role.accentColor}${isDark ? '25' : '30'}`
                  : 'none',
                opacity: index === activeIndex ? 1 : 0.6
              }}
              aria-label={`View ${role.title}`}
            >
              <span className="text-lg">{role.icon}</span>
              <span 
                className="text-sm font-semibold transition-colors duration-300"
                style={{ 
                  color: index === activeIndex 
                    ? (isDark ? '#ffffff' : '#1c1917')
                    : (isDark ? '#a8a29e' : '#78716c')
                }}
              >
                {role.title}
              </span>
              
              {/* Active indicator dot */}
              {index === activeIndex && (
                <div 
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                  style={{ background: role.accentColor }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div
          className="mt-4 w-48 h-1 rounded-full overflow-hidden"
          style={{ background: isDark ? '#44403c' : '#e7e5e4' }}
        >
          {!isHovering && (
            <div
              key={progressKey}
              className="h-full rounded-full"
              style={{
                background: activeRole.accentColor,
                animation: 'progress 4s linear forwards'
              }}
            />
          )}
          {isHovering && (
            <div
              className="h-full rounded-full"
              style={{
                background: activeRole.accentColor,
                width: '100%'
              }}
            />
          )}
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  )
}
