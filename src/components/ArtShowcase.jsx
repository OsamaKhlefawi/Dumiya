import React, { useState, useEffect } from 'react'

export const ArtShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const artworks = [
    {
      title: 'Art',
      category: 'Digital Character Designer & Illustrator',
      color: 'from-purple-500 to-pink-500',
      icon: '🎨'
    },
    {
      title: 'Software Engineer',
      category: 'Building Interactive Experiences',
      color: 'from-blue-500 to-cyan-500',
      icon: '💻'
    },
    {
      title: 'Game Enthusiast',
      category: 'Exploring Virtual Worlds & Stories',
      color: 'from-orange-500 to-red-500',
      icon: '🎮'
    }
  ]

  useEffect(() => {
    if (isHovering) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % artworks.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [isHovering, artworks.length])

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 py-4">
      {/* Main Content Area */}
      <div className="flex items-center justify-center gap-6">
        {/* Canvas Frame */}
        <div
          className="relative w-56 h-56 sm:w-72 sm:h-72 flex-shrink-0"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Background Glow */}
          <div className={`absolute -inset-4 bg-gradient-to-br ${artworks[activeIndex].color} opacity-30 dark:opacity-20 blur-3xl transition-all duration-700`}></div>

          {/* Frame */}
          <div className="relative w-full h-full border-6 sm:border-8 border-ff-slate-800 dark:border-ff-slate-600 bg-gradient-to-br from-ff-slate-50 via-white to-ff-slate-100 dark:bg-ff-slate-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300">
            {/* Inner Border */}
            <div className="absolute inset-0 border-3 sm:border-4 border-ff-red-200 dark:border-ff-slate-700 rounded-xl transition-colors duration-300"></div>

            {/* Content */}
            <div className={`absolute inset-0 bg-gradient-to-br ${artworks[activeIndex].color} opacity-[0.12] dark:opacity-25 transition-all duration-700`}></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl sm:text-7xl animate-float drop-shadow-2xl">
                {artworks[activeIndex].icon}
              </div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-2 sm:top-3 left-2 sm:left-3 w-5 h-5 sm:w-6 sm:h-6 border-l-2 border-t-2 border-ff-red-400 dark:border-ff-slate-400/40 transition-colors duration-300"></div>
            <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-5 h-5 sm:w-6 sm:h-6 border-r-2 border-t-2 border-ff-red-400 dark:border-ff-slate-400/40 transition-colors duration-300"></div>
            <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 w-5 h-5 sm:w-6 sm:h-6 border-l-2 border-b-2 border-ff-red-400 dark:border-ff-slate-400/40 transition-colors duration-300"></div>
            <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 w-5 h-5 sm:w-6 sm:h-6 border-r-2 border-b-2 border-ff-red-400 dark:border-ff-slate-400/40 transition-colors duration-300"></div>
          </div>
        </div>

        {/* Sidebar Thumbnails */}
        <div className="hidden lg:flex flex-col gap-2.5">
          {artworks.map((artwork, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative w-12 h-12 rounded-lg transition-all duration-300 overflow-hidden ${
                index === activeIndex
                  ? 'scale-110 shadow-xl'
                  : 'opacity-70 hover:opacity-100 hover:scale-105'
              }`}
              aria-label={`View ${artwork.title}`}
            >
              {/* Background */}
              <div className={`absolute inset-0 transition-all duration-300 ${
                index === activeIndex
                  ? `bg-gradient-to-br ${artwork.color}`
                  : 'bg-gradient-to-br from-ff-red-50 to-ff-pink-50 dark:from-ff-slate-700 dark:to-ff-slate-800'
              }`}></div>

              {/* Border for inactive */}
              {index !== activeIndex && (
                <div className="absolute inset-0 border-2 border-ff-red-300 dark:border-ff-slate-500 rounded-lg transition-colors duration-300"></div>
              )}

              {/* Icon */}
              <div className="relative flex items-center justify-center h-full">
                <span className="text-2xl">{artwork.icon}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Title and Category */}
      <div className="text-center space-y-1">
        <h3 className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${artworks[activeIndex].color} bg-clip-text text-transparent transition-all duration-500`}>
          {artworks[activeIndex].title}
        </h3>
        <p className="text-xs text-slate-600 dark:text-slate-400">
          {artworks[activeIndex].category}
        </p>
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-2">
        {artworks.map((artwork, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === activeIndex
                ? `w-6 h-2 bg-gradient-to-r ${artwork.color}`
                : 'w-2 h-2 bg-ff-red-400 dark:bg-ff-slate-600 hover:bg-ff-red-500 dark:hover:bg-ff-slate-500'
            }`}
            aria-label={`View ${artwork.title}`}
          />
        ))}
      </div>
    </div>
  )
}
