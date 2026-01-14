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
      <div className="min-h-screen bg-gradient-to-br from-ff-slate-50 via-ff-red-50 to-ff-pink-100 dark:from-ff-slate-900 dark:via-ff-red-900 dark:to-ff-pink-900 text-ff-slate-800 dark:text-ff-slate-200 font-body transition-colors duration-300 relative overflow-hidden">
        {/* Gaming-themed background */}
        <BackgroundElements />
        
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        
        {/* Main content with proper left margin for desktop */}
        <main className="lg:ml-16 relative z-10">
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
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ff-slate-50 via-ff-red-50 to-ff-pink-100 dark:from-ff-slate-900 dark:via-ff-red-900 dark:to-ff-pink-900"></div>

      {/* Mouse-following gradient effect */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}% ${mousePos.y}%, rgba(239, 68, 68, 0.06), rgba(236, 72, 153, 0.04), transparent 60%)`,
          opacity: 0.6
        }}
      ></div>
      <div
        className="absolute inset-0 transition-opacity duration-500 dark:opacity-0 opacity-100"
        style={{
          background: `radial-gradient(300px circle at ${mousePos.x}% ${mousePos.y}%, rgba(254, 226, 226, 0.3), rgba(251, 207, 232, 0.15), transparent 60%)`
        }}
      ></div>
      <div
        className="absolute inset-0 transition-opacity duration-500 opacity-0 dark:opacity-100"
        style={{
          background: `radial-gradient(300px circle at ${mousePos.x}% ${mousePos.y}%, rgba(239, 68, 68, 0.1), rgba(236, 72, 153, 0.06), transparent 60%)`
        }}
      ></div>
      
      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 dark:to-black/10"></div>

      {/* Enhanced blueprint grid design */}
      <div className="absolute inset-0">
        {/* Fine detail grid */}
        <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.2]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.3)_0.5px,transparent_0.5px),linear-gradient(90deg,rgba(239,68,68,0.3)_0.5px,transparent_0.5px)] bg-[size:20px_20px]"></div>
        </div>

        {/* Main grid with stronger lines */}
        <div className="absolute inset-0 opacity-[0.12] dark:opacity-[0.18]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.5)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        </div>

        {/* Accent grid */}
        <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.15]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.4)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(236,72,153,0.4)_1.5px,transparent_1.5px)] bg-[size:200px_200px]"></div>
        </div>

        {/* Blueprint corner markers */}
        <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-rose-400/20 dark:border-rose-400/30"></div>
        <div className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-rose-400/20 dark:border-rose-400/30"></div>
        <div className="absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-rose-400/20 dark:border-rose-400/30"></div>
        <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-rose-400/20 dark:border-rose-400/30"></div>
      </div>
      
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-rose-300 to-pink-300 dark:from-rose-600 dark:to-pink-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-tl from-pink-300 to-rose-300 dark:from-pink-600 dark:to-rose-600 rounded-full blur-[120px]"></div>
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

