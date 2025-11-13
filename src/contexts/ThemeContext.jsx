import React, { createContext, useState, useEffect, useMemo, useCallback } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    } catch {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    } catch {}
    
    const root = document.documentElement
    root.classList.add('theme-transition')
    root.classList.toggle('dark', isDark)
    
    const timeoutId = setTimeout(() => root.classList.remove('theme-transition'), 500)
    return () => clearTimeout(timeoutId)
  }, [isDark])

  const toggleTheme = useCallback(() => setIsDark(prev => !prev), [])
  const setTheme = useCallback((theme) => setIsDark(theme === 'dark'), [])

  const value = useMemo(() => ({
    isDark,
    toggleTheme,
    setTheme,
    theme: isDark ? 'dark' : 'light'
  }), [isDark, toggleTheme, setTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// Export the context for use in the hook
export { ThemeContext }
