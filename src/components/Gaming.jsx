import React, { useState, useMemo } from 'react'
import { useSectionScroll } from '../hooks/useSectionScroll'

const Gaming = ({ setActiveSection }) => {
  const [activeTab, setActiveTab] = useState('favorites')
  const gamingRef = useSectionScroll('gaming', setActiveSection)

  const favoriteGames = [
    { name: 'Final Fantasy XVI', genre: 'Action RPG', hours: 200, rating: 10, platform: 'PS5', color: 'from-ff-red-500 to-ff-pink-500' },
    { name: 'Final Fantasy XIV', genre: 'MMORPG', hours: 150, rating: 9, platform: 'PC', color: 'from-ff-pink-500 to-ff-gold-500' },
    { name: 'Final Fantasy VII Remake', genre: 'Action RPG', hours: 120, rating: 9, platform: 'PS5', color: 'from-ff-red-400 to-ff-red-600' },
    { name: 'Final Fantasy XV', genre: 'Action RPG', hours: 180, rating: 8, platform: 'PC', color: 'from-ff-gold-500 to-ff-gold-600' },
    { name: 'Final Fantasy X', genre: 'Turn-based RPG', hours: 80, rating: 10, platform: 'PC', color: 'from-ff-pink-400 to-ff-pink-600' },
    { name: 'Final Fantasy VI', genre: 'Turn-based RPG', hours: 160, rating: 10, platform: 'PC', color: 'from-ff-red-500 to-ff-red-600' }
  ]

  const achievements = [
    { title: 'Warrior of Light', description: 'Completed FFXVI main story', game: 'FF XVI', date: '2023', color: 'from-ff-red-500 to-ff-pink-500' },
    { title: 'Crystal Master', description: '100% completion in FFXIV', game: 'FF XIV', date: '2022', color: 'from-ff-pink-500 to-ff-gold-500' },
    { title: 'No Death Run', description: 'Completed FFVII Remake without dying', game: 'FF VII', date: '2023', color: 'from-ff-red-400 to-ff-red-600' },
    { title: 'Master Artist', description: 'Created 50+ custom characters', game: 'FF XIV', date: '2023', color: 'from-ff-gold-500 to-ff-gold-600' },
    { title: 'Trophy Hunter', description: 'Platinum trophy in FFXVI', game: 'FF XVI', date: '2023', color: 'from-ff-pink-400 to-ff-pink-600' },
    { title: 'Legendary Hero', description: 'Completed FFVI on highest difficulty', game: 'FF VI', date: '2024', color: 'from-ff-red-500 to-ff-red-600' }
  ]

  const gamingStats = [
    { stat: 'Total Hours', value: '1000+', icon: '⏰', color: 'from-ff-red-500 to-ff-red-600' },
    { stat: 'Games Completed', value: '50+', icon: '🏆', color: 'from-ff-pink-500 to-ff-pink-600' },
    { stat: 'Achievements', value: '200+', icon: '🎯', color: 'from-ff-gold-500 to-ff-gold-600' },
    { stat: 'Platforms', value: '5', icon: '🖥️', color: 'from-ff-red-400 to-ff-red-500' },
    { stat: 'Favorite Genre', value: 'RPG', icon: '⚔️', color: 'from-ff-pink-400 to-ff-pink-500' },
    { stat: 'Speed Runs', value: '15+', icon: '🏃', color: 'from-ff-gold-400 to-ff-gold-500' }
  ]

  const tabs = [
    { id: 'favorites', label: 'Favorite Games', icon: '🎮', color: 'from-ff-red-500 to-ff-pink-500' },
    { id: 'achievements', label: 'Achievements', icon: '🏆', color: 'from-ff-pink-500 to-ff-gold-500' },
    { id: 'stats', label: 'Gaming Stats', icon: '📊', color: 'from-ff-gold-500 to-ff-red-500' }
  ]

  return (
    <section
      id="gaming"
      ref={gamingRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20 font-body"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative elements - removed */}
      </div>

      {/* Subtle background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-ff-orange-50 to-ff-red-50 dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-orange-900/20"></div>

      {/* Decorative glows */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-ff-orange-500/10 dark:bg-ff-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-ff-red-500/10 dark:bg-ff-red-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold relative z-10 leading-tight font-sixtyfour mb-6">
            <span className="title-light dark:title-dark">
              GAMING PROFILE
            </span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-ff-orange-500 to-ff-red-500 mx-auto mb-6 sm:mb-8 shadow-lg"></div>
          <p className="text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed max-w-2xl mx-auto text-lg sm:text-xl px-4">
            <span className="text-ff-orange-600 dark:text-ff-orange-400 text-lg opacity-80 font-mono">[</span>
              From strategic RPGs to action-packed adventures, discover my gaming journey and achievements.
            <span className="text-ff-red-600 dark:text-ff-red-400 text-lg opacity-80 font-mono">]</span>
          </p>
        </div>

        {/* Content Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Favorite Games Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-orange-700 dark:text-ff-orange-300 font-sixtyfour text-center">
              FAVORITE GAMES
            </h3>

            {/* Game Cards */}
            <div className="space-y-4">
              {favoriteGames.slice(0, 3).map((game, index) => (
                <div key={index} className="relative overflow-hidden bg-gradient-to-br from-white via-ff-orange-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-orange-900/20 border-2 border-ff-orange-300 dark:border-ff-orange-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  {/* Decorative glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-orange-500/10 dark:bg-ff-orange-500/5 rounded-full blur-2xl"></div>

                  <div className="relative z-10">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-ff-orange-500 to-ff-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="material-icons text-white text-xl">sports_esports</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">{game.name}</h4>
                        <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">{game.genre} • {game.platform}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-between text-sm">
                      <span className="text-ff-orange-700 dark:text-ff-orange-300 font-mono font-bold">{game.hours}h played</span>
                      <span className="text-ff-red-700 dark:text-ff-red-300 font-mono font-bold">{game.rating}/10</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-red-700 dark:text-ff-red-300 font-sixtyfour text-center">
              ACHIEVEMENTS
            </h3>

            {/* Achievement Cards */}
            <div className="space-y-4">
              {achievements.slice(0, 3).map((achievement, index) => (
                <div key={index} className="relative overflow-hidden bg-gradient-to-br from-white via-ff-red-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-red-900/20 border-2 border-ff-red-300 dark:border-ff-red-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  {/* Decorative glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-red-500/10 dark:bg-ff-red-500/5 rounded-full blur-2xl"></div>

                  <div className="relative z-10">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-ff-red-500 to-ff-red-600 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="material-icons text-white text-xl">emoji_events</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">{achievement.title}</h4>
                        <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">{achievement.game} • {achievement.date}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gaming Stats Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-gold-700 dark:text-ff-gold-300 font-sixtyfour text-center">
              GAMING STATS
            </h3>

            {/* Stats Cards */}
            <div className="space-y-4">
              {gamingStats.slice(0, 4).map((stat, index) => (
                <div key={index} className="relative overflow-hidden bg-gradient-to-br from-white via-ff-gold-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-gold-900/20 border-2 border-ff-gold-300 dark:border-ff-gold-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-center">
                  {/* Decorative glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-gold-500/10 dark:bg-ff-gold-500/5 rounded-full blur-2xl"></div>

                  <div className="relative z-10">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-ff-gold-700 dark:text-ff-gold-300 mb-1">{stat.value}</div>
                    <div className="text-sm text-ff-slate-700 dark:text-ff-slate-300">{stat.stat}</div>
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
