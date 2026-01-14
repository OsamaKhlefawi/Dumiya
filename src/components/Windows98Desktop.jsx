import React, { useState } from 'react'

export const Windows98Desktop = () => {
  const [openWindow, setOpenWindow] = useState('mycomputer')
  const [isDragging, setIsDragging] = useState(false)

  const desktopIcons = [
    { id: 'mycomputer', name: 'My Computer', icon: '💻', section: 'skills' },
    { id: 'gaming', name: 'Gaming', icon: '🎮', section: 'gaming' },
    { id: 'art', name: 'Art Gallery', icon: '🎨', section: 'art' },
    { id: 'shows', name: 'Media', icon: '📺', section: 'shows' },
    { id: 'recyclebin', name: 'Recycle Bin', icon: '🗑️', section: 'old-ideas' }
  ]

  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Three.js', icon: '🎲' },
    { name: 'Tailwind', icon: '💨' },
    { name: 'Git', icon: '📦' }
  ]

  const interests = [
    'Persona', 'Final Fantasy', 'Deltarune', 'NieR', 'Omori',
    "JoJo's Bizarre Adventure", 'Mob Psycho 100', 'Dexter',
    'Hollow Knight', 'Neon Genesis Evangelion'
  ]

  return (
    <div className="relative w-full h-full min-h-[500px] bg-[#008080] p-4 rounded-lg shadow-2xl border-4 border-[#c0c0c0] overflow-hidden">
      {/* Desktop Icons */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {desktopIcons.map((icon) => (
          <button
            key={icon.id}
            onClick={() => setOpenWindow(icon.id)}
            className="flex flex-col items-center gap-1 p-2 rounded hover:bg-[#000080]/20 transition-colors group"
          >
            <div className="text-4xl drop-shadow-lg">{icon.icon}</div>
            <span className="text-xs text-white font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] group-hover:bg-[#000080] group-hover:px-1">
              {icon.name}
            </span>
          </button>
        ))}
      </div>

      {/* Windows 98 Window */}
      {openWindow && (
        <div className="absolute top-8 left-8 right-8 bottom-16 bg-[#c0c0c0] rounded-sm shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#dfdfdf,inset_-2px_-2px_grey,inset_2px_2px_#fff] flex flex-col max-w-md mx-auto">
          {/* Title Bar */}
          <div className="bg-gradient-to-r from-[#000080] to-[#1084d0] px-1 py-1 flex items-center justify-between cursor-move">
            <div className="flex items-center gap-2">
              <span className="text-lg">{desktopIcons.find(i => i.id === openWindow)?.icon}</span>
              <span className="text-white font-bold text-sm">
                {desktopIcons.find(i => i.id === openWindow)?.name}
              </span>
            </div>
            <button
              onClick={() => setOpenWindow(null)}
              className="w-6 h-6 bg-[#c0c0c0] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff,inset_-2px_-2px_grey,inset_2px_2px_#dfdfdf] hover:shadow-[inset_1px_1px_#0a0a0a,inset_-1px_-1px_#fff] flex items-center justify-center font-bold text-xs active:shadow-[inset_1px_1px_#0a0a0a,inset_-1px_-1px_#fff]"
            >
              ✕
            </button>
          </div>

          {/* Menu Bar */}
          <div className="bg-[#c0c0c0] border-b border-[#fff] shadow-[0_1px_0_#808080]">
            <div className="flex gap-2 px-2 py-1 text-xs">
              <span className="hover:bg-[#000080] hover:text-white px-2 cursor-pointer">File</span>
              <span className="hover:bg-[#000080] hover:text-white px-2 cursor-pointer">Edit</span>
              <span className="hover:bg-[#000080] hover:text-white px-2 cursor-pointer">View</span>
              <span className="hover:bg-[#000080] hover:text-white px-2 cursor-pointer">Help</span>
            </div>
          </div>

          {/* Window Content */}
          <div className="flex-1 bg-white p-4 overflow-auto m-1 shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#0a0a0a,inset_-2px_-2px_#dfdfdf,inset_2px_2px_grey]">
            {openWindow === 'mycomputer' && (
              <div>
                <h3 className="font-bold mb-3 text-sm flex items-center gap-2">
                  <span>💾</span> My Skills & Tools
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-1 p-2 hover:bg-[#000080]/10 cursor-pointer border border-transparent hover:border-dotted hover:border-[#000080]"
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-xs text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {openWindow === 'gaming' && (
              <div>
                <h3 className="font-bold mb-3 text-sm flex items-center gap-2">
                  <span>🎮</span> Favorite Games
                </h3>
                <div className="space-y-2">
                  {interests.filter(i => ['Persona', 'Final Fantasy', 'Deltarune', 'NieR', 'Omori', 'Hollow Knight'].includes(i)).map((game) => (
                    <div
                      key={game}
                      className="flex items-center gap-2 p-2 hover:bg-[#000080] hover:text-white cursor-pointer"
                    >
                      <span>📁</span>
                      <span className="text-sm">{game}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {openWindow === 'shows' && (
              <div>
                <h3 className="font-bold mb-3 text-sm flex items-center gap-2">
                  <span>📺</span> Favorite Shows
                </h3>
                <div className="space-y-2">
                  {interests.filter(i => ["JoJo's Bizarre Adventure", 'Mob Psycho 100', 'Dexter', 'Neon Genesis Evangelion'].includes(i)).map((show) => (
                    <div
                      key={show}
                      className="flex items-center gap-2 p-2 hover:bg-[#000080] hover:text-white cursor-pointer"
                    >
                      <span>📁</span>
                      <span className="text-sm">{show}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {openWindow === 'art' && (
              <div>
                <h3 className="font-bold mb-3 text-sm flex items-center gap-2">
                  <span>🎨</span> Art & Creative Work
                </h3>
                <div className="text-sm text-gray-700 space-y-2">
                  <p>✨ Digital Illustration</p>
                  <p>🖌️ Character Design</p>
                  <p>🎭 Concept Art</p>
                  <p>📸 Photo Editing</p>
                </div>
              </div>
            )}

            {openWindow === 'recyclebin' && (
              <div>
                <h3 className="font-bold mb-3 text-sm flex items-center gap-2">
                  <span>🗑️</span> Recycle Bin
                </h3>
                <div className="text-sm text-gray-500 italic space-y-2">
                  <p>💭 Old project ideas...</p>
                  <p>🚫 Abandoned concepts</p>
                  <p>📝 Draft sketches</p>
                  <p className="text-xs mt-4">*Nothing here is truly deleted, just resting*</p>
                </div>
              </div>
            )}
          </div>

          {/* Status Bar */}
          <div className="bg-[#c0c0c0] border-t border-[#fff] px-2 py-1 shadow-[inset_0_1px_0_#808080]">
            <div className="flex items-center gap-2">
              <div className="flex-1 shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#0a0a0a] px-1 text-xs">
                {interests.length} items
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#c0c0c0] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff,inset_-2px_-2px_grey,inset_2px_2px_#dfdfdf] flex items-center px-2 gap-2">
        {/* Start Button */}
        <button className="bg-[#c0c0c0] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff,inset_-2px_-2px_grey,inset_2px_2px_#dfdfdf] hover:shadow-[inset_1px_1px_#0a0a0a,inset_-1px_-1px_#fff] px-3 py-1 font-bold text-sm flex items-center gap-1 active:shadow-[inset_1px_1px_#0a0a0a,inset_-1px_-1px_#fff]">
          <span className="text-lg">⊞</span>
          Start
        </button>

        {/* Open Windows */}
        <div className="flex-1 flex gap-1">
          {openWindow && (
            <button
              onClick={() => setOpenWindow(openWindow)}
              className="bg-[#c0c0c0] shadow-[inset_1px_1px_#0a0a0a,inset_-1px_-1px_#fff] px-3 py-1 text-xs flex items-center gap-2 max-w-[150px]"
            >
              <span>{desktopIcons.find(i => i.id === openWindow)?.icon}</span>
              <span className="truncate">{desktopIcons.find(i => i.id === openWindow)?.name}</span>
            </button>
          )}
        </div>

        {/* System Tray */}
        <div className="shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#0a0a0a] px-2 py-1 flex items-center gap-2 text-xs">
          <span>🔊</span>
          <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
    </div>
  )
}
