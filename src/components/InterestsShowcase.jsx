import React, { useState, useEffect } from 'react'

export const InterestsShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const interests = [
    {
      name: 'Persona',
      image: '/assets/PersonaLogo.png',
      color: 'from-red-500 to-rose-600',
      bgColor: 'bg-red-500/10',
      invert: false
    },
    {
      name: 'Final Fantasy',
      image: '/assets/ffIcon.png',
      color: 'from-yellow-500 to-amber-600',
      bgColor: 'bg-yellow-500/10',
      invert: true
    },
    {
      name: 'Deltarune',
      image: '/assets/DeltaruneIcon.png',
      color: 'from-pink-500 to-fuchsia-600',
      bgColor: 'bg-pink-500/10',
      invert: false
    },
    {
      name: 'NieR',
      image: '/assets/nierIcon.png',
      color: 'from-slate-500 to-gray-600',
      bgColor: 'bg-slate-500/10',
      invert: false
    },
    {
      name: 'Omori',
      image: '/assets/omoriIcon.png',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-500/10',
      invert: true
    },
    {
      name: "JoJo's Bizarre Adventure",
      image: '/assets/jjbaIcon.png',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-500/10',
      invert: false
    },
    {
      name: 'Mob Psycho 100',
      image: '/assets/mpIcon.png',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-500/10',
      invert: false
    },
    {
      name: 'Dexter',
      image: '/assets/dexIcon.png',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-500/10',
      invert: false
    },
    {
      name: 'Hollow Knight',
      image: '/assets/hkIcon.png',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-500/10',
      invert: false
    },
    {
      name: 'Neon Genesis Evangelion',
      image: '/assets/evaIcon.png',
      color: 'from-cyan-500 to-teal-600',
      bgColor: 'bg-cyan-500/10',
      invert: false
    }
  ]

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % interests.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isPaused, interests.length])

  const getPosition = (index) => {
    const total = interests.length
    const diff = (index - activeIndex + total) % total

    if (diff === 0) return 'active'
    if (diff === 1 || diff === total - 1) return 'side'
    return 'hidden'
  }

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      {/* Main showcase area */}
      <div
        className="relative w-full h-64 sm:h-80 flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {interests.map((interest, index) => {
          const position = getPosition(index)

          return (
            <div
              key={interest.name}
              className={`absolute transition-all duration-700 ease-out ${
                position === 'active'
                  ? 'scale-100 opacity-100 z-30 translate-x-0'
                  : position === 'side'
                  ? 'scale-75 opacity-40 z-10'
                  : 'scale-50 opacity-0 z-0 pointer-events-none'
              } ${
                position === 'side' && ((index - activeIndex + interests.length) % interests.length === 1)
                  ? 'translate-x-32 sm:translate-x-40'
                  : position === 'side'
                  ? '-translate-x-32 sm:-translate-x-40'
                  : ''
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className={`relative ${interest.bgColor} backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-2 border-white/20 dark:border-white/10 shadow-2xl`}>
                <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
                  <img
                    src={interest.image}
                    alt={interest.name}
                    className={`w-full h-full object-contain ${interest.invert ? 'icon-invert-light' : ''} ${
                      position === 'active' ? 'animate-pulse-slow' : ''
                    }`}
                    loading="lazy"
                  />
                </div>

                {position === 'active' && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-2xl blur-xl -z-10 animate-pulse"></div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Active interest name */}
      <div className="mt-8 text-center">
        <h3 className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${interests[activeIndex].color} bg-clip-text text-transparent transition-all duration-500 font-ui`}>
          {interests[activeIndex].name}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-mono">
          {activeIndex + 1} / {interests.length}
        </p>
      </div>

      {/* Navigation dots */}
      <div className="flex gap-2 mt-6">
        {interests.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === activeIndex
                ? 'w-8 h-2 bg-gradient-to-r from-rose-500 to-pink-500'
                : 'w-2 h-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
            }`}
            aria-label={`View ${interests[index].name}`}
          />
        ))}
      </div>

      {/* Hint text */}
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 font-mono opacity-70">
        Hover to pause • Click dots to navigate
      </p>
    </div>
  )
}
