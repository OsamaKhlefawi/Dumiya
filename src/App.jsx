import React, { useState, Suspense, lazy } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'

// Lazy load components for better performance
const About = lazy(() => import('./components/About'))
const Gaming = lazy(() => import('./components/Gaming'))
const Art = lazy(() => import('./components/Art'))
const ShowsMovies = lazy(() => import('./components/ShowsMovies'))
const Experience = lazy(() => import('./components/Experience'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-rose-50/70 via-slate-50 to-orange-50/50 dark:bg-ff-slate-900 dark:from-ff-slate-900 dark:via-ff-slate-900 dark:to-ff-slate-900 text-ff-slate-800 dark:text-ff-slate-100 font-body transition-colors duration-500 relative overflow-hidden">
        {/* Gaming-themed background */}
        <BackgroundElements />
        
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        
        {/* Main content with proper margins for desktop and mobile */}
        <main className="lg:ml-16 pb-32 lg:pb-0 relative z-10">
          <Hero setActiveSection={setActiveSection} />
          <Suspense fallback={<LoadingSpinner />}>
            <About setActiveSection={setActiveSection} />
            <Gaming setActiveSection={setActiveSection} />
            <Art setActiveSection={setActiveSection} />
            <ShowsMovies setActiveSection={setActiveSection} />
            <Experience setActiveSection={setActiveSection} />
            <Contact setActiveSection={setActiveSection} />
          </Suspense>
        </main>
        
        <Suspense fallback={<div className="h-32" />}>
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  )
}

// Background elements component for better organization
const BackgroundElements = function BackgroundElements() {
  const glowRef = React.useRef(null)

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        // Direct DOM manipulation for instant response - no React re-render
        glowRef.current.style.background = `radial-gradient(500px circle at ${e.clientX}px ${e.clientY}px, rgba(239, 68, 68, 0.15), rgba(236, 72, 153, 0.08), transparent 60%)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Light mode: soft rose/cream gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50/60 via-slate-50 to-orange-50/40 dark:from-ff-slate-900 dark:via-ff-slate-900 dark:to-ff-slate-900"></div>
      
      {/* Light mode decorative shapes - soft rose/peach tones */}
      <div className="absolute inset-0 dark:opacity-0 transition-opacity duration-500">
        {/* Top left soft blob */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-rose-200/30 to-orange-100/20 rounded-full blur-3xl"></div>
        {/* Bottom right soft blob */}
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-gradient-to-tl from-rose-100/25 to-red-50/15 rounded-full blur-3xl"></div>
        {/* Center accent */}
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-orange-100/20 to-transparent rounded-full blur-2xl"></div>
      </div>
      
      {/* Dark mode gradient overlay */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100 bg-gradient-to-br from-ff-slate-900 via-ff-red-950/20 to-ff-pink-950/10 transition-opacity duration-500"></div>

      {/* Mouse-following red glow - DESKTOP ONLY - instant tracking via ref */}
      <div
        ref={glowRef}
        className="absolute inset-0 hidden lg:block"
        style={{
          background: 'radial-gradient(500px circle at 50% 50%, rgba(239, 68, 68, 0.15), rgba(236, 72, 153, 0.08), transparent 60%)'
        }}
      ></div>
      
      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-rose-100/20 dark:from-transparent dark:via-transparent dark:to-black/20"></div>

      {/* Grid design - red in both modes */}
      <div className="absolute inset-0">
        {/* Fine detail grid */}
        <div className="absolute inset-0 opacity-[0.30] dark:opacity-[0.25]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.4)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        {/* Main grid - thicker lines */}
        <div className="absolute inset-0 opacity-[0.25] dark:opacity-[0.20]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.5)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(239,68,68,0.5)_1.5px,transparent_1.5px)] bg-[size:120px_120px]"></div>
        </div>

        {/* Corner markers - red */}
        <div className="absolute top-8 left-8 w-10 h-10 border-t-[3px] border-l-[3px] border-ff-red-400/70 dark:border-ff-red-500/50"></div>
        <div className="absolute top-8 right-8 w-10 h-10 border-t-[3px] border-r-[3px] border-ff-red-400/70 dark:border-ff-red-500/50"></div>
        <div className="absolute bottom-8 left-8 w-10 h-10 border-b-[3px] border-l-[3px] border-ff-red-400/70 dark:border-ff-red-500/50"></div>
        <div className="absolute bottom-8 right-8 w-10 h-10 border-b-[3px] border-r-[3px] border-ff-red-400/70 dark:border-ff-red-500/50"></div>
        
      </div>
      
      {/* Ambient glow - soft rose in light, red in dark */}
      <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.08]">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-rose-300 to-orange-300 dark:from-ff-red-400 dark:to-ff-pink-400 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-red-200 to-rose-300 dark:from-ff-pink-400 dark:to-ff-red-400 rounded-full blur-[150px]"></div>
      </div>

    </div>
  )
}

// Loading spinner component for lazy loading
function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-ff-red-200 border-t-ff-red-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-ff-pink-500 rounded-full animate-spin animation-delay-500"></div>
      </div>
    </div>
  )
}

export default App

