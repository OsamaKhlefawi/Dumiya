import React, { useState } from 'react'

// Full Windows 98 Portfolio Theme Example
export const Windows98FullExample = () => {
  const [openWindows, setOpenWindows] = useState(['about'])
  const [minimized, setMinimized] = useState([])

  const windows = {
    about: { title: 'About Me', icon: '📄', color: 'from-[#000080] to-[#1084d0]' },
    gaming: { title: 'Gaming Projects', icon: '🎮', color: 'from-[#000080] to-[#1084d0]' },
    art: { title: 'Art Gallery', icon: '🎨', color: 'from-[#000080] to-[#1084d0]' },
    contact: { title: 'Contact.exe', icon: '📧', color: 'from-[#000080] to-[#1084d0]' },
  }

  return (
    <div className="w-full min-h-screen bg-[#008080] p-0 font-['MS_Sans_Serif',_Arial,_sans-serif]">
      {/* Desktop Background with Tiled Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,.05) 2px, rgba(0,0,0,.05) 4px)',
      }}></div>

      {/* Desktop Icons - Left Side */}
      <div className="absolute top-4 left-4 space-y-4 z-10">
        {Object.entries(windows).map(([key, win]) => (
          <button
            key={key}
            onDoubleClick={() => setOpenWindows([...openWindows, key])}
            className="flex flex-col items-center w-20 p-2 text-center hover:bg-[#000080]/20 rounded group"
          >
            <div className="text-4xl mb-1">{win.icon}</div>
            <div className="text-xs text-white font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] group-hover:bg-[#000080] group-hover:px-1 break-words">
              {win.title}
            </div>
          </button>
        ))}
      </div>

      {/* Windows - Stacked in Center */}
      <div className="relative z-20 p-8">
        {openWindows.includes('about') && (
          <div className="absolute top-20 left-20 w-[500px] bg-[#c0c0c0] rounded-sm shadow-2xl"
               style={{ boxShadow: 'inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey, inset 2px 2px #fff' }}>
            {/* Title Bar */}
            <div className="bg-gradient-to-r from-[#000080] to-[#1084d0] px-2 py-1 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <span>📄</span> About Me
              </div>
              <div className="flex gap-1">
                <button className="w-5 h-5 bg-[#c0c0c0] text-xs flex items-center justify-center shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff]">_</button>
                <button className="w-5 h-5 bg-[#c0c0c0] text-xs flex items-center justify-center shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff]">□</button>
                <button className="w-5 h-5 bg-[#c0c0c0] text-xs flex items-center justify-center shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff]">✕</button>
              </div>
            </div>

            {/* Menu Bar */}
            <div className="bg-[#c0c0c0] border-b border-white px-2 py-1 flex gap-3 text-xs">
              <span className="hover:bg-[#000080] hover:text-white px-2 cursor-pointer">File</span>
              <span className="hover:bg-[#000080] hover:text-white px-2 cursor-pointer">Edit</span>
              <span className="hover:bg-[#000080] hover:text-white px-2 cursor-pointer">View</span>
              <span className="hover:bg-[#000080] hover:text-white px-2 cursor-pointer">Help</span>
            </div>

            {/* Content */}
            <div className="bg-white p-6 m-2 h-64 overflow-auto" style={{
              boxShadow: 'inset -1px -1px #fff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px grey'
            }}>
              <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span>👤</span> DUMIYA
              </h2>
              <p className="text-sm mb-3">
                Web Developer • Gamer • Artist
              </p>
              <div className="border border-gray-400 p-3 bg-gray-50 text-xs space-y-2">
                <p>📍 Location: [Your Location]</p>
                <p>💼 Status: Available for work</p>
                <p>🎓 Education: [Your Education]</p>
              </div>
            </div>

            {/* Status Bar */}
            <div className="bg-[#c0c0c0] px-2 py-1 border-t border-white text-xs flex gap-2">
              <div className="flex-1 shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#0a0a0a] px-2">Ready</div>
            </div>
          </div>
        )}
      </div>

      {/* Taskbar */}
      <div className="fixed bottom-0 left-0 right-0 h-10 bg-[#c0c0c0] flex items-center px-1 gap-1 z-50"
           style={{ boxShadow: 'inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf' }}>

        {/* Start Button */}
        <button className="bg-[#c0c0c0] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff,inset_-2px_-2px_grey,inset_2px_2px_#dfdfdf] hover:shadow-[inset_1px_1px_#0a0a0a,inset_-1px_-1px_#fff] px-3 py-1 font-bold text-sm flex items-center gap-2">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z' fill='%23ff0000'/%3E%3C/svg%3E"
               className="w-4 h-4" alt="Start" />
          Start
        </button>

        {/* Taskbar Separator */}
        <div className="w-px h-6 bg-gray-600"></div>

        {/* Open Windows */}
        <div className="flex-1 flex gap-1">
          {openWindows.map((key) => (
            <button
              key={key}
              className="bg-[#c0c0c0] shadow-[inset_1px_1px_#0a0a0a,inset_-1px_-1px_#fff] px-3 py-1 text-xs flex items-center gap-2 max-w-[140px]"
            >
              <span>{windows[key].icon}</span>
              <span className="truncate">{windows[key].title}</span>
            </button>
          ))}
        </div>

        {/* System Tray */}
        <div className="shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#0a0a0a] px-3 py-1 flex items-center gap-3 text-xs">
          <span>🔊</span>
          <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>

      {/* Feature Callouts - Hidden in preview */}
      <div className="hidden absolute top-4 right-4 bg-yellow-100 border-2 border-yellow-400 p-3 w-64 text-xs shadow-lg">
        <div className="font-bold mb-2 flex items-center gap-2">
          <span>💡</span> Windows 98 Theme Features:
        </div>
        <ul className="space-y-1 text-xs list-disc list-inside">
          <li>Start Menu navigation</li>
          <li>Each section as a window</li>
          <li>Minimize/maximize/close</li>
          <li>Desktop icons</li>
          <li>Classic dialogs & forms</li>
          <li>System tray with time</li>
          <li>Right-click context menus</li>
        </ul>
      </div>
    </div>
  )
}
