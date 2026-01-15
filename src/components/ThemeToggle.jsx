import React from 'react'
import { useTheme } from '../hooks/useTheme'

export const ThemeToggle = ({ className = '', mobile = false }) => {
  const { isDark, toggleTheme } = useTheme()
  
  return (
    <button
      onClick={toggleTheme}
      className={`group relative overflow-hidden transition-all duration-300 ease-out focus:outline-none ${className}`}
      style={{
        width: mobile ? '40px' : '48px',
        height: mobile ? '40px' : '48px',
        borderRadius: '12px',
        background: isDark 
          ? 'linear-gradient(135deg, #292524 0%, #1c1917 100%)' 
          : 'linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%)',
        boxShadow: isDark
          ? '0 4px 20px rgba(239, 68, 68, 0.15), inset 0 1px 0 rgba(255,255,255,0.05)'
          : '0 4px 20px rgba(99, 102, 241, 0.2), inset 0 1px 0 rgba(255,255,255,0.8)',
        border: 'none',
      }}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {/* Hover glow effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: isDark
            ? 'radial-gradient(circle at center, rgba(251, 191, 36, 0.15) 0%, transparent 70%)'
            : 'radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
        }}
      />
      
      {/* Icon container */}
      <div className="relative flex items-center justify-center w-full h-full">
        <span 
          className="material-icons transition-all duration-300 group-hover:scale-110"
          style={{ 
            fontSize: mobile ? '20px' : '24px',
            color: isDark ? '#fbbf24' : '#4338ca',
            filter: isDark 
              ? 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.6))' 
              : 'drop-shadow(0 0 6px rgba(67, 56, 202, 0.5))',
          }}
        >
          {isDark ? 'light_mode' : 'dark_mode'}
        </span>
      </div>
      
    </button>
  )
}
