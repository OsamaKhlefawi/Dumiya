import React from 'react'
import { useSectionScroll } from '../hooks/useSectionScroll'

const Gaming = ({ setActiveSection }) => {
  const gamingRef = useSectionScroll('gaming', setActiveSection)

  const favoriteGames = [
    { name: 'Final Fantasy XVI', genre: 'Action RPG', hours: 200, rating: 10, platform: 'PS5', color: 'from-ff-red-500 to-ff-pink-500' },
    { name: 'Final Fantasy XIV', genre: 'MMORPG', hours: 150, rating: 9, platform: 'PC', color: 'from-ff-pink-500 to-ff-gold-500' },
    { name: 'Final Fantasy VII Remake', genre: 'Action RPG', hours: 120, rating: 9, platform: 'PS5', color: 'from-ff-red-400 to-ff-red-600' },
    { name: 'Final Fantasy XV', genre: 'Action RPG', hours: 180, rating: 8, platform: 'PC', color: 'from-ff-gold-500 to-ff-gold-600' },
    { name: 'Final Fantasy X', genre: 'Turn-based RPG', hours: 80, rating: 10, platform: 'PC', color: 'from-ff-pink-400 to-ff-pink-600' },
    { name: 'Final Fantasy VI', genre: 'Turn-based RPG', hours: 160, rating: 10, platform: 'PC', color: 'from-ff-red-500 to-ff-red-600' }
  ]

  // Backloggd Profile Info
  const backloggdProfile = {
    username: 'YourUsername', // Replace with your Backloggd username
    url: 'https://www.backloggd.com/u/YourUsername/', // Replace with your profile URL
    stats: {
      played: '150+',
      playing: '5',
      backlog: '50+',
      rating: '4.2'
    }
  }

  const gameDevProjects = [
    { 
      title: 'Project RPG', 
      description: 'A turn-based RPG inspired by classic JRPGs', 
      tech: 'Unity, C#', 
      status: 'In Development',
      progress: 60
    },
    { 
      title: 'Platformer Adventure', 
      description: 'A 2D platformer with puzzle elements', 
      tech: 'Godot, GDScript', 
      status: 'Planning',
      progress: 20
    },
    { 
      title: 'Dungeon Crawler', 
      description: 'A procedurally generated roguelike', 
      tech: 'Unreal Engine, C++', 
      status: 'Prototype',
      progress: 35
    }
  ]

  return (
    <section
      id="gaming"
      ref={gamingRef}
      className="min-h-screen relative overflow-hidden pt-20 pb-8 sm:py-20 md:py-24 font-body"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative elements - removed */}
      </div>

      {/* Decorative glows - consistent in both modes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-ff-orange-400/5 dark:bg-ff-orange-500/8 rounded-full blur-3xl transition-colors duration-500"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-ff-red-400/5 dark:bg-ff-red-500/8 rounded-full blur-3xl transition-colors duration-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold relative z-10 leading-tight font-sixtyfour mb-4 sm:mb-6">
            <span className="title-light dark:title-dark">
              GAMING PROFILE
            </span>
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-ff-orange-500 to-ff-red-500 mx-auto mb-4 sm:mb-6 md:mb-8 shadow-lg"></div>
          <p className="text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed max-w-2xl mx-auto text-base sm:text-lg md:text-xl px-4">
            <span className="text-ff-orange-600 dark:text-ff-orange-400 opacity-80 font-mono">[</span>
              Explore my favorite games, backlog wishlist, and game development projects.
            <span className="text-ff-red-600 dark:text-ff-red-400 opacity-80 font-mono">]</span>
          </p>
        </div>

        {/* Mobile: Compact Cards, Desktop: Bento Layout */}
        <div className="space-y-6 lg:space-y-12">
          {/* Mobile: Single Column, Desktop: Grid */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Mobile: Full Width, Desktop: 2/3 */}
            <div className="w-full lg:col-span-2 space-y-4 lg:space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-ff-orange-700 dark:text-ff-orange-300 font-sixtyfour">
                🎮 FAVORITE GAMES
              </h3>
              {/* Mobile: Horizontal Scroll, Desktop: Grid */}
              <div className="flex lg:grid lg:grid-cols-2 gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
                {favoriteGames.map((game, index) => (
                  <div key={index} className="min-w-[280px] lg:min-w-0 bg-white/90 backdrop-blur-sm dark:bg-ff-slate-800/95 border-2 border-ff-orange-200 dark:border-ff-orange-700 rounded-xl p-4 shadow-lg shadow-ff-red-200/50 dark:shadow-ff-slate-900/50 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-2">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-white/20"
                        style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }}>
                        <span className="material-icons text-white text-lg">sports_esports</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm text-ff-slate-800 dark:text-ff-slate-200 truncate">{game.name}</h4>
                        <p className="text-xs text-ff-slate-600 dark:text-ff-slate-400 truncate">{game.genre}</p>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-ff-orange-700 dark:text-ff-orange-300 font-mono font-bold">{game.hours}h</span>
                      <span className="text-ff-red-700 dark:text-ff-red-300 font-mono font-bold">⭐{game.rating}/10</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: Full Width, Desktop: 1/3 */}
            <div className="w-full lg:w-auto space-y-4 lg:space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-ff-red-700 dark:text-ff-red-300 font-sixtyfour">
                📚 BACKLOGGD
              </h3>
              
              <div className="bg-white/90 backdrop-blur-sm dark:bg-ff-slate-800/95 border-2 border-ff-red-200 dark:border-ff-red-700 rounded-xl p-4 shadow-lg shadow-ff-red-200/50 dark:shadow-ff-slate-900/50 transition-all duration-500">
                <div className="space-y-3">
                  {/* Profile Header */}
                  <div className="text-center">
                    <div 
                      className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full flex items-center justify-center shadow-lg ring-2 ring-white/20 mb-2 sm:mb-3"
                      style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)' }}>
                      <span className="text-2xl sm:text-3xl">📚</span>
                    </div>
                    <h4 className="font-bold text-base sm:text-lg text-ff-slate-800 dark:text-ff-slate-200">
                      @{backloggdProfile.username}
                    </h4>
                    <p className="text-xs text-ff-slate-600 dark:text-ff-slate-400 mt-1">My Gaming Profile</p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="bg-white/60 dark:bg-ff-slate-700/50 rounded-lg p-2 sm:p-3 text-center border border-ff-red-200 dark:border-ff-red-800">
                      <div className="text-xl sm:text-2xl font-bold text-ff-red-700 dark:text-ff-red-300">{backloggdProfile.stats.played}</div>
                      <div className="text-xs text-ff-slate-600 dark:text-ff-slate-400">Played</div>
                    </div>
                    <div className="bg-white/60 dark:bg-ff-slate-700/50 rounded-lg p-2 sm:p-3 text-center border border-ff-orange-200 dark:border-ff-orange-800">
                      <div className="text-xl sm:text-2xl font-bold text-ff-orange-700 dark:text-ff-orange-300">{backloggdProfile.stats.playing}</div>
                      <div className="text-xs text-ff-slate-600 dark:text-ff-slate-400">Playing</div>
                    </div>
                    <div className="bg-white/60 dark:bg-ff-slate-700/50 rounded-lg p-2 sm:p-3 text-center border border-ff-gold-200 dark:border-ff-gold-800">
                      <div className="text-xl sm:text-2xl font-bold text-ff-gold-700 dark:text-ff-gold-300">{backloggdProfile.stats.backlog}</div>
                      <div className="text-xs text-ff-slate-600 dark:text-ff-slate-400">Backlog</div>
                    </div>
                    <div className="bg-white/60 dark:bg-ff-slate-700/50 rounded-lg p-2 sm:p-3 text-center border border-ff-pink-200 dark:border-ff-pink-800">
                      <div className="text-xl sm:text-2xl font-bold text-ff-pink-700 dark:text-ff-pink-300">⭐{backloggdProfile.stats.rating}</div>
                      <div className="text-xs text-ff-slate-600 dark:text-ff-slate-400">Avg Rating</div>
                    </div>
                  </div>

                  {/* View Profile Button */}
                  <a 
                    href={backloggdProfile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-ff-red-500 to-ff-red-600 hover:from-ff-red-600 hover:to-ff-red-700 dark:from-ff-red-600 dark:to-ff-red-700 dark:hover:from-ff-red-700 dark:hover:to-ff-red-800 text-white font-bold py-2.5 sm:py-3 px-4 rounded-lg text-sm sm:text-base text-center transition-all duration-300 shadow-md shadow-ff-red-500/20 dark:shadow-ff-red-900/50 hover:shadow-lg hover:shadow-ff-red-500/30 dark:hover:shadow-ff-red-900/70"
                  >
                    View Full Profile →
                  </a>

                  {/* Optional: Uncomment to embed iframe */}
                  {/* <div className="mt-4">
                    <iframe 
                      src={backloggdProfile.url}
                      className="w-full h-96 rounded-lg border-2 border-ff-red-300 dark:border-ff-red-700"
                      title="Backloggd Profile"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Game Dev Projects - Mobile: Horizontal Scroll */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-ff-gold-700 dark:text-ff-gold-300 font-sixtyfour">
              💻 GAME DEV
            </h3>
            <div className="flex lg:grid lg:grid-cols-3 gap-4 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
              {gameDevProjects.map((project, index) => (
                <div key={index} className="min-w-[300px] lg:min-w-0 bg-white/90 backdrop-blur-sm dark:bg-ff-slate-800/95 border-2 border-ff-gold-200 dark:border-ff-gold-700 rounded-xl p-4 shadow-lg shadow-ff-red-200/50 dark:shadow-ff-slate-900/50 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-white/20"
                      style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
                      <span className="material-icons text-white">code</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-ff-slate-800 dark:text-ff-slate-200">{project.title}</h4>
                      <p className="text-xs text-ff-slate-600 dark:text-ff-slate-400">{project.tech}</p>
                    </div>
                  </div>
                  <p className="text-xs text-ff-slate-700 dark:text-ff-slate-300 mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="px-2 py-1 rounded bg-ff-gold-200 dark:bg-ff-gold-900/30 text-ff-gold-700 dark:text-ff-gold-300 font-mono font-bold">{project.status}</span>
                      <span className="text-ff-gold-700 dark:text-ff-gold-300 font-mono font-bold">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-ff-slate-200 dark:bg-ff-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-ff-gold-500 to-ff-gold-600 h-2 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gaming


