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
      <div className="min-h-screen bg-gradient-to-br from-ff-slate-200 via-ff-red-100/60 to-ff-pink-100/70 dark:bg-ff-slate-900 dark:from-ff-slate-900 dark:via-ff-slate-900 dark:to-ff-slate-900 text-ff-slate-800 dark:text-ff-slate-100 font-body transition-colors duration-500 relative overflow-hidden">
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
  const [mousePos, setMousePos] = React.useState({ x: 50, y: 50 })

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Light mode: rich warm gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-ff-red-100/40 via-ff-pink-50/30 to-ff-slate-100 dark:from-ff-slate-900 dark:via-ff-slate-900 dark:to-ff-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-ff-pink-100/30 via-transparent to-ff-red-100/20 dark:opacity-0"></div>
      
      {/* Dark mode gradient overlay */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100 bg-gradient-to-br from-ff-slate-900 via-ff-red-950/20 to-ff-pink-950/10 transition-opacity duration-500"></div>

      {/* Mouse-following gradient effect - stronger in light mode */}
      <div
        className="absolute inset-0 transition-opacity duration-500 opacity-60 dark:opacity-100"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}% ${mousePos.y}%, rgba(239, 68, 68, 0.12), rgba(236, 72, 153, 0.08), transparent 60%)`
        }}
      ></div>
      
      {/* Decorative shapes for light mode */}
      <div className="absolute inset-0 dark:opacity-0 opacity-100 transition-opacity duration-500">
        {/* Top right blob */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-ff-red-200/50 to-ff-pink-200/40 rounded-full blur-3xl"></div>
        {/* Bottom left blob */}
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-ff-pink-200/40 to-ff-red-100/30 rounded-full blur-3xl"></div>
        {/* Center accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-ff-red-100/20 to-transparent rounded-full"></div>
      </div>
      
      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-ff-slate-200/40 dark:from-transparent dark:via-transparent dark:to-black/20"></div>

      {/* Enhanced blueprint grid design - stronger in light mode */}
      <div className="absolute inset-0">
        {/* Fine detail grid */}
        <div className="absolute inset-0 opacity-[0.25] dark:opacity-[0.15]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.35)_0.5px,transparent_0.5px),linear-gradient(90deg,rgba(239,68,68,0.35)_0.5px,transparent_0.5px)] bg-[size:20px_20px]"></div>
        </div>

        {/* Main grid with stronger lines */}
        <div className="absolute inset-0 opacity-[0.20] dark:opacity-[0.12]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.5)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        </div>

        {/* Accent grid */}
        <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.10]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.4)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(236,72,153,0.4)_1.5px,transparent_1.5px)] bg-[size:200px_200px]"></div>
        </div>

        {/* Blueprint corner markers - stronger in light mode */}
        <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-ff-red-500/60 dark:border-ff-red-500/30"></div>
        <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-ff-red-500/60 dark:border-ff-red-500/30"></div>
        <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-ff-red-500/60 dark:border-ff-red-500/30"></div>
        <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-ff-red-500/60 dark:border-ff-red-500/30"></div>
        
        {/* Additional decorative elements for light mode */}
        <div className="absolute top-1/4 right-12 w-3 h-3 bg-ff-red-400/60 dark:bg-ff-red-500/20 rounded-full"></div>
        <div className="absolute top-1/3 right-16 w-2 h-2 bg-ff-pink-400/60 dark:bg-ff-pink-500/20 rounded-full"></div>
        <div className="absolute bottom-1/4 left-12 w-3 h-3 bg-ff-pink-400/60 dark:bg-ff-pink-500/20 rounded-full"></div>
        <div className="absolute bottom-1/3 left-16 w-2 h-2 bg-ff-red-400/60 dark:bg-ff-red-500/20 rounded-full"></div>
      </div>
      
      {/* Ambient glow - stronger in light mode */}
      <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08]">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-ff-red-400 to-ff-pink-400 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-ff-pink-400 to-ff-red-400 rounded-full blur-[150px]"></div>
      </div>

      {/* Light mode texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]"></div>

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

