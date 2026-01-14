import React from 'react'
import { useTheme } from '../hooks/useTheme'

export const ThemeToggle = ({ className = '', mobile = false }) => {
  const { isDark, toggleTheme } = useTheme()
  const bgColor = mobile 
    ? (isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(248, 250, 252, 0.8)')
    : (isDark ? '#1e293b' : '#f8fafc')
  
  const buttonClass = mobile
    ? "p-2 border-2 border-ff-red-200 dark:border-ff-slate-600 rounded-lg focus:outline-none hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-ff-red-200/30 dark:hover:shadow-ff-slate-600/30"
    : "w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 ease-out focus:outline-none shadow-lg ring-2 ring-ff-red-200 dark:ring-ff-slate-600 hover:shadow-xl hover:shadow-ff-red-200/30 dark:hover:shadow-ff-slate-600/30"

  return (
    <button
      onClick={toggleTheme}
      className={`${buttonClass} ${className}`}
      style={{ backgroundColor: bgColor }}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <span className="text-xl material-icons transition-all duration-300">
        {isDark ? (
          <span className="text-yellow-500 hover:text-yellow-400" style={{ filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.5))' }}>
            light_mode
          </span>
        ) : (
          <span className="text-indigo-600 hover:text-indigo-500" style={{ filter: 'drop-shadow(0 0 8px rgba(79, 70, 229, 0.5))' }}>
            dark_mode
          </span>
        )}
      </span>
    </button>
  )
}
