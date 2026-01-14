import React, { useState } from 'react'

// Windows XP Theme Example
export const WindowsXPExample = () => {
  const [openWindow, setOpenWindow] = useState('mycomputer')
  const [startMenuOpen, setStartMenuOpen] = useState(false)

  return (
    <div className="w-full min-h-screen relative overflow-hidden"
         style={{
           background: 'linear-gradient(to bottom, #5a9fd4 0%, #306eba 100%)',
         }}>

      {/* Bliss Wallpaper Effect */}
      <div className="absolute inset-0"
           style={{
             backgroundImage: 'radial-gradient(ellipse at center bottom, rgba(144,238,144,0.3) 0%, transparent 70%)',
           }}></div>

      {/* Desktop Icons */}
      <div className="absolute top-4 left-4 space-y-4 z-10">
        {[
          { name: 'My Computer', icon: '🖥️' },
          { name: 'My Documents', icon: '📁' },
          { name: 'Portfolio', icon: '💼' },
          { name: 'Recycle Bin', icon: '🗑️' },
        ].map((item) => (
          <button
            key={item.name}
            onDoubleClick={() => setOpenWindow('mycomputer')}
            className="flex flex-col items-center w-20 p-2 text-center rounded hover:bg-blue-400/30 group"
          >
            <div className="text-4xl mb-1 drop-shadow-lg">{item.icon}</div>
            <div className="text-xs text-white font-semibold px-1 rounded group-hover:bg-blue-600"
                 style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
              {item.name}
            </div>
          </button>
        ))}
      </div>

      {/* Window */}
      {openWindow && (
        <div className="absolute top-16 left-24 w-[550px] bg-white rounded-lg shadow-2xl overflow-hidden"
             style={{
               boxShadow: '0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)'
             }}>

          {/* Title Bar - Luna Blue */}
          <div className="h-8 bg-gradient-to-r from-[#0054e3] via-[#3d95ff] to-[#0054e3] px-2 flex items-center justify-between rounded-t-lg">
            <div className="flex items-center gap-2 text-white font-semibold text-sm drop-shadow">
              <span className="text-lg">🖥️</span>
              <span>My Computer</span>
            </div>
            <div className="flex gap-1">
              <button className="w-6 h-5 bg-gradient-to-b from-[#3d95ff] to-[#0054e3] hover:from-[#5aa7ff] hover:to-[#2d7eef] rounded flex items-center justify-center text-white text-xs shadow-sm">_</button>
              <button className="w-6 h-5 bg-gradient-to-b from-[#3d95ff] to-[#0054e3] hover:from-[#5aa7ff] hover:to-[#2d7eef] rounded flex items-center justify-center text-white text-xs shadow-sm">□</button>
              <button className="w-6 h-5 bg-gradient-to-b from-[#ff5a5a] to-[#d93636] hover:from-[#ff7a7a] hover:to-[#e94646] rounded flex items-center justify-center text-white text-xs shadow-sm">✕</button>
            </div>
          </div>

          {/* Menu Bar */}
          <div className="bg-gradient-to-b from-[#f0f4ff] to-[#dce8ff] border-b border-[#9cb3d5] px-2 py-1 flex gap-3 text-sm">
            <span className="hover:bg-blue-100 px-2 py-1 cursor-pointer rounded">File</span>
            <span className="hover:bg-blue-100 px-2 py-1 cursor-pointer rounded">Edit</span>
            <span className="hover:bg-blue-100 px-2 py-1 cursor-pointer rounded">View</span>
            <span className="hover:bg-blue-100 px-2 py-1 cursor-pointer rounded">Favorites</span>
            <span className="hover:bg-blue-100 px-2 py-1 cursor-pointer rounded">Tools</span>
            <span className="hover:bg-blue-100 px-2 py-1 cursor-pointer rounded">Help</span>
          </div>

          {/* Toolbar */}
          <div className="bg-gradient-to-b from-[#f7f9ff] to-[#e8f0ff] border-b border-[#c5d5e8] px-3 py-2 flex gap-2">
            <button className="px-3 py-1 bg-gradient-to-b from-white to-[#e8f0ff] hover:from-[#fff] hover:to-[#d0e0ff] border border-[#5a9fd4] rounded shadow-sm text-sm flex items-center gap-1">
              <span>◀</span> Back
            </button>
            <button className="px-3 py-1 bg-gradient-to-b from-white to-[#e8f0ff] hover:from-[#fff] hover:to-[#d0e0ff] border border-[#5a9fd4] rounded shadow-sm text-sm">
              🔍 Search
            </button>
            <button className="px-3 py-1 bg-gradient-to-b from-white to-[#e8f0ff] hover:from-[#fff] hover:to-[#d0e0ff] border border-[#5a9fd4] rounded shadow-sm text-sm">
              📁 Folders
            </button>
          </div>

          {/* Sidebar & Content */}
          <div className="flex h-80">
            {/* Left Sidebar - Tasks */}
            <div className="w-48 bg-gradient-to-b from-[#4a8dd4] to-[#3574c5] p-4 space-y-4">
              <div className="bg-white/20 rounded-lg p-3">
                <h3 className="text-white font-bold text-sm mb-2">System Tasks</h3>
                <div className="space-y-2 text-xs text-white">
                  <div className="hover:underline cursor-pointer">View About Me</div>
                  <div className="hover:underline cursor-pointer">See Projects</div>
                  <div className="hover:underline cursor-pointer">Contact Info</div>
                </div>
              </div>

              <div className="bg-white/20 rounded-lg p-3">
                <h3 className="text-white font-bold text-sm mb-2">Other Places</h3>
                <div className="space-y-2 text-xs text-white">
                  <div className="hover:underline cursor-pointer">📁 My Documents</div>
                  <div className="hover:underline cursor-pointer">🖼️ My Pictures</div>
                  <div className="hover:underline cursor-pointer">🎵 My Music</div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-white p-6">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <span>💾</span> Dumiya's Portfolio
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'About', icon: '📄', type: 'File Folder' },
                    { name: 'Projects', icon: '💼', type: 'File Folder' },
                    { name: 'Skills', icon: '🛠️', type: 'File Folder' },
                    { name: 'Contact', icon: '📧', type: 'Application' },
                  ].map((item) => (
                    <button
                      key={item.name}
                      className="flex items-center gap-3 p-3 hover:bg-blue-50 border border-transparent hover:border-blue-300 rounded"
                    >
                      <span className="text-3xl">{item.icon}</span>
                      <div className="text-left">
                        <div className="font-semibold text-sm">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.type}</div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Welcome!</strong> This portfolio contains information about my work, skills, and projects. Double-click any folder to explore.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="bg-gradient-to-b from-[#f0f4ff] to-[#dce8ff] border-t border-[#9cb3d5] px-3 py-1 text-xs flex justify-between">
            <span>4 objects</span>
            <span>My Computer</span>
          </div>
        </div>
      )}

      {/* Start Menu */}
      {startMenuOpen && (
        <div className="absolute bottom-12 left-0 w-96 bg-gradient-to-b from-[#245edb] to-[#3f8cf3] rounded-tr-lg shadow-2xl overflow-hidden">
          <div className="flex h-[400px]">
            {/* Left Side - Branding */}
            <div className="w-16 bg-gradient-to-b from-[#4a8dd4] to-[#2d5faa] flex items-end p-2">
              <div className="text-white font-bold text-xs transform -rotate-90 origin-bottom-left whitespace-nowrap">
                Dumiya Portfolio
              </div>
            </div>

            {/* Right Side - Menu Items */}
            <div className="flex-1 bg-white">
              <div className="p-2 space-y-1">
                {[
                  { name: 'About Me', icon: '👤' },
                  { name: 'Projects', icon: '💼' },
                  { name: 'Skills', icon: '🛠️' },
                  { name: 'Contact', icon: '📧' },
                ].map((item) => (
                  <button
                    key={item.name}
                    className="w-full flex items-center gap-3 px-3 py-2 hover:bg-blue-100 rounded text-left"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-semibold">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Taskbar - XP Luna */}
      <div className="fixed bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-[#3d95ff] to-[#0054e3] flex items-center px-2 gap-2 z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.3)]">
        {/* Start Button */}
        <button
          onClick={() => setStartMenuOpen(!startMenuOpen)}
          className="bg-gradient-to-b from-[#5cdb5c] to-[#2d982d] hover:from-[#6fff6f] hover:to-[#3dbb3d] px-4 py-1 rounded-lg shadow-lg font-bold text-white text-sm flex items-center gap-2"
        >
          <span className="text-lg">⊞</span>
          start
        </button>

        {/* Quick Launch */}
        <div className="h-8 w-px bg-white/30"></div>
        <div className="flex gap-1">
          <button className="w-8 h-8 bg-blue-500/30 hover:bg-blue-400/50 rounded flex items-center justify-center">🌐</button>
          <button className="w-8 h-8 bg-blue-500/30 hover:bg-blue-400/50 rounded flex items-center justify-center">📧</button>
        </div>

        {/* Open Windows */}
        <div className="flex-1 flex gap-1 ml-2">
          {openWindow && (
            <button className="bg-gradient-to-b from-[#5aa7ff] to-[#2d7eef] px-4 py-1 rounded shadow flex items-center gap-2 text-white text-sm font-semibold">
              <span>🖥️</span>
              My Computer
            </button>
          )}
        </div>

        {/* System Tray */}
        <div className="flex items-center gap-2 bg-[#0e7dd1] px-3 py-1 rounded text-white text-xs">
          <span>🔊</span>
          <span>📶</span>
          <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>

      {/* Feature Callouts - Hidden in preview */}
      <div className="hidden absolute top-4 right-4 bg-white/95 border-2 border-blue-400 rounded-lg p-4 w-72 text-xs shadow-2xl">
        <div className="font-bold mb-2 flex items-center gap-2 text-blue-600">
          <span>🪟</span> Windows XP Theme Features:
        </div>
        <ul className="space-y-1 list-disc list-inside">
          <li>Luna Blue theme</li>
          <li>Gradient taskbar & windows</li>
          <li>Start menu with user panel</li>
          <li>Task pane in windows</li>
          <li>Rounded corners</li>
          <li>Bliss wallpaper aesthetic</li>
          <li>XP-style icons</li>
          <li>Quick launch toolbar</li>
        </ul>
      </div>
    </div>
  )
}
