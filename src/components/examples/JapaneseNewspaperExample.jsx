import React, { useState } from 'react'

// Japanese Newspaper Theme Example
export const JapaneseNewspaperExample = () => {
  const [selectedArticle, setSelectedArticle] = useState('main')

  return (
    <div className="w-full min-h-screen bg-[#f5f1e8] relative overflow-auto">
      {/* Traditional Japanese newspaper texture */}
      <div className="absolute inset-0 opacity-5"
           style={{
             backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 3px),
                               repeating-linear-gradient(90deg, transparent, transparent 2px, #000 2px, #000 3px)`,
             backgroundSize: '20px 20px'
           }}>
      </div>

      {/* Masthead - Traditional Japanese Newspaper Header */}
      <div className="border-b-4 border-black bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        {/* Red Bar - Traditional accent */}
        <div className="h-2 bg-gradient-to-r from-red-600 via-red-700 to-red-600"></div>

        <div className="px-6 py-4">
          <div className="flex items-start justify-between">
            {/* Main Title - Vertical Japanese Style */}
            <div className="flex gap-4 items-start">
              <div className="writing-mode-vertical text-right">
                <h1 className="text-5xl font-bold tracking-wider" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                  <span className="text-red-700">ポ</span>
                  <span className="text-red-700">ー</span>
                  <span className="text-red-700">ト</span>
                  <span className="text-red-700">フ</span>
                  <span className="text-red-700">ォ</span>
                  <span className="text-red-700">リ</span>
                  <span className="text-red-700">オ</span>
                </h1>
              </div>
              <div className="border-l-2 border-black pl-4">
                <h2 className="text-2xl font-bold mb-1">DUMIYA PORTFOLIO</h2>
                <p className="text-xs text-gray-600">デベロッパー・アーティスト・ゲーマー</p>
                <p className="text-xs font-mono mt-1">Vol. 2025 | {new Date().toLocaleDateString('ja-JP')}</p>
              </div>
            </div>

            {/* Date & Issue Number */}
            <div className="text-right border-l-2 border-black pl-4">
              <div className="text-xs font-mono mb-1">ISSUE #001</div>
              <div className="text-2xl font-bold">{new Date().getDate()}</div>
              <div className="text-xs">{new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="border-t-2 border-black bg-gray-100 px-6 py-2 flex gap-6 text-sm font-bold">
          <button className="hover:text-red-700 transition-colors">【総合】OVERVIEW</button>
          <button className="hover:text-red-700 transition-colors">【技術】TECH</button>
          <button className="hover:text-red-700 transition-colors">【作品】WORKS</button>
          <button className="hover:text-red-700 transition-colors">【連絡】CONTACT</button>
        </div>
      </div>

      {/* Main Content - Multi-column Layout */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Top Banner Ad Style */}
        <div className="border-4 border-black bg-white p-3 mb-6 text-center font-bold">
          <span className="text-red-700 text-lg">★</span>
          <span className="text-sm mx-2">FEATURED DEVELOPER</span>
          <span className="text-red-700 text-lg">★</span>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Main Story */}
          <div className="col-span-2 space-y-6">
            {/* Headline Article */}
            <article className="border-4 border-black bg-white p-6">
              <div className="border-b-2 border-black pb-2 mb-4">
                <div className="text-xs font-bold mb-1 text-red-700">【特集】FEATURE STORY</div>
                <h2 className="text-3xl font-bold leading-tight mb-2">
                  革新的なウェブ開発者が語る<br/>
                  創造性とテクノロジーの融合
                </h2>
                <h3 className="text-xl font-semibold text-gray-700">
                  "Innovative Web Developer Discusses the Fusion of Creativity and Technology"
                </h3>
              </div>

              <div className="flex gap-4">
                {/* Main Image Placeholder */}
                <div className="w-48 h-48 border-2 border-black flex items-center justify-center bg-gray-100 flex-shrink-0">
                  <div className="text-center p-4">
                    <div className="text-6xl mb-2">👤</div>
                    <div className="text-xs font-bold">DUMIYA</div>
                    <div className="text-xs">Developer</div>
                  </div>
                </div>

                {/* Article Text */}
                <div className="flex-1 space-y-3 text-sm leading-relaxed">
                  <p className="font-bold">
                    本日、注目の若手開発者であるDumiyaが、ゲーム開発とアートデザインの分野での
                    革新的なアプローチについて語った。
                  </p>
                  <p>
                    In an exclusive interview, rising developer Dumiya discusses their innovative approach
                    to web development, combining technical expertise with artistic vision. Their unique
                    portfolio showcases a blend of gaming aesthetics and modern web technologies.
                  </p>
                  <p>
                    "The intersection of art and technology has always fascinated me," says Dumiya.
                    "Every project is an opportunity to push boundaries and create experiences that
                    resonate with users on multiple levels."
                  </p>
                </div>
              </div>

              {/* Stats Box */}
              <div className="mt-4 border-t-2 border-black pt-4 grid grid-cols-3 gap-4 text-center">
                <div className="border-r border-black">
                  <div className="text-2xl font-bold text-red-700">5+</div>
                  <div className="text-xs">YEARS EXPERIENCE</div>
                </div>
                <div className="border-r border-black">
                  <div className="text-2xl font-bold text-red-700">50+</div>
                  <div className="text-xs">PROJECTS COMPLETED</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-700">100%</div>
                  <div className="text-xs">CLIENT SATISFACTION</div>
                </div>
              </div>
            </article>

            {/* Secondary Articles - 2 columns */}
            <div className="grid grid-cols-2 gap-4">
              <article className="border-2 border-black bg-white p-4">
                <div className="text-xs font-bold mb-2 text-red-700">【技術】TECHNOLOGY</div>
                <h3 className="text-lg font-bold mb-2 leading-tight">
                  React & Modern Web Framework Mastery
                </h3>
                <p className="text-xs leading-relaxed">
                  Specializing in React, Vue, and cutting-edge JavaScript frameworks.
                  Expertise in creating responsive, performant web applications.
                </p>
                <div className="mt-3 pt-3 border-t border-gray-300">
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2 py-1 bg-black text-white">React</span>
                    <span className="px-2 py-1 bg-black text-white">Node.js</span>
                    <span className="px-2 py-1 bg-black text-white">Tailwind</span>
                  </div>
                </div>
              </article>

              <article className="border-2 border-black bg-white p-4">
                <div className="text-xs font-bold mb-2 text-red-700">【芸術】CREATIVE</div>
                <h3 className="text-lg font-bold mb-2 leading-tight">
                  Digital Art & Design Philosophy
                </h3>
                <p className="text-xs leading-relaxed">
                  Creating visual experiences inspired by gaming culture, anime aesthetics,
                  and contemporary digital art movements.
                </p>
                <div className="mt-3 pt-3 border-t border-gray-300">
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2 py-1 bg-red-700 text-white">Illustration</span>
                    <span className="px-2 py-1 bg-red-700 text-white">UI/UX</span>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-4">
            {/* Profile Box */}
            <div className="border-2 border-black bg-white p-4">
              <div className="border-b-2 border-black pb-2 mb-3">
                <div className="text-xs font-bold text-red-700">【人物】PROFILE</div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex gap-2">
                  <span className="font-bold min-w-[60px]">名前:</span>
                  <span>DUMIYA</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold min-w-[60px]">職業:</span>
                  <span>Web Developer</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold min-w-[60px]">専門:</span>
                  <span>Full Stack</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold min-w-[60px]">趣味:</span>
                  <span>Gaming, Art</span>
                </div>
              </div>
            </div>

            {/* Interests Box */}
            <div className="border-2 border-black bg-white p-4">
              <div className="border-b-2 border-black pb-2 mb-3">
                <div className="text-xs font-bold text-red-700">【趣味】INTERESTS</div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                  <span>🎮</span>
                  <span>Persona Series</span>
                </div>
                <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                  <span>⚔️</span>
                  <span>Final Fantasy</span>
                </div>
                <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                  <span>🎭</span>
                  <span>JoJo's Bizarre Adventure</span>
                </div>
                <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                  <span>🤖</span>
                  <span>Evangelion</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🦋</span>
                  <span>Hollow Knight</span>
                </div>
              </div>
            </div>

            {/* Quote Box */}
            <div className="border-2 border-black bg-red-700 text-white p-4">
              <div className="text-xs font-bold mb-2">【名言】QUOTE</div>
              <p className="text-sm italic leading-relaxed">
                "Code is poetry, design is art, and together they create experiences that matter."
              </p>
              <div className="text-right text-xs mt-2">- Dumiya</div>
            </div>

            {/* Contact Box */}
            <div className="border-2 border-black bg-black text-white p-4">
              <div className="text-xs font-bold mb-3">【連絡】CONTACT</div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <span>Email Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>💼</span>
                  <span>Open for Work</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🌐</span>
                  <span>Portfolio Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-6 border-t-4 border-black pt-4 text-center">
          <div className="text-xs text-gray-600">
            © 2025 DUMIYA PORTFOLIO PRESS | 株式会社ポートフォリオ | All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  )
}
