import React, { useState } from 'react'

// Mac OS 9 Classic Theme Example
export const MacOS9Example = () => {
  const [openWindows, setOpenWindows] = useState(['finder'])

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#5b9dd9] via-[#7ab5e8] to-[#99cdf7] relative overflow-hidden">
      {/* Desktop Pattern */}
      <div className="absolute inset-0 opacity-5"
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '4px 4px' }}>
      </div>

      {/* Menu Bar - Classic Mac */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white to-[#e8e8e8] border-b border-black/20 flex items-center px-2 text-sm z-50 shadow-sm">
        {/* Apple Menu */}
        <div className="flex items-center gap-4 font-['Chicago',_'Charcoal',_monospace]">
          <button className="px-2 hover:bg-blue-600 hover:text-white font-bold">🍎</button>
          <button className="px-2 hover:bg-blue-600 hover:text-white font-bold">File</button>
          <button className="px-2 hover:bg-blue-600 hover:text-white font-bold">Edit</button>
          <button className="px-2 hover:bg-blue-600 hover:text-white font-bold">View</button>
          <button className="px-2 hover:bg-blue-600 hover:text-white font-bold">Special</button>
          <button className="px-2 hover:bg-blue-600 hover:text-white font-bold">Help</button>
        </div>

        {/* Right Side - App Name & Time */}
        <div className="ml-auto flex items-center gap-3 text-xs font-['Chicago',_monospace]">
          <span className="font-bold">Portfolio</span>
          <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>

      {/* Desktop Icons - Right Side (Mac Style) */}
      <div className="absolute top-12 right-4 space-y-4 z-10">
        {[
          { name: 'Hard Drive', icon: '💾' },
          { name: 'Trash', icon: '🗑️' },
          { name: 'Projects', icon: '📁' },
        ].map((item) => (
          <button
            key={item.name}
            className="flex flex-col items-center w-20 text-center group"
          >
            <div className="text-4xl mb-1 group-hover:brightness-110">{item.icon}</div>
            <div className="text-xs text-white font-bold px-1 rounded group-hover:bg-blue-600"
                 style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
              {item.name}
            </div>
          </button>
        ))}
      </div>

      {/* Finder Window */}
      {openWindows.includes('finder') && (
        <div className="absolute top-24 left-16 w-[600px] bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Title Bar with Stripes */}
          <div className="h-6 bg-gradient-to-b from-[#f0f0f0] to-[#d0d0d0] border-b border-gray-400 flex items-center justify-between px-2"
               style={{
                 backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(0,0,0,0.05) 1px, rgba(0,0,0,0.05) 2px)'
               }}>
            {/* Traffic Lights */}
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-gradient-to-b from-red-400 to-red-600 border border-red-700 shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500 border border-yellow-600 shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-gradient-to-b from-green-400 to-green-600 border border-green-700 shadow-sm"></div>
            </div>

            {/* Window Title */}
            <div className="flex-1 text-center text-xs font-bold text-gray-700 font-['Chicago',_monospace]">
              About Dumiya
            </div>
            <div className="w-12"></div>
          </div>

          {/* Toolbar */}
          <div className="bg-gradient-to-b from-[#e8e8e8] to-[#d8d8d8] border-b border-gray-400 px-3 py-2 flex gap-2">
            {['◀', '▶', '↻', '🏠', '⭐'].map((icon, i) => (
              <button
                key={i}
                className="px-3 py-1 bg-gradient-to-b from-white to-[#e0e0e0] border border-gray-400 rounded shadow-sm hover:shadow-md text-sm"
              >
                {icon}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="bg-white p-6 h-80 overflow-auto">
            <div className="flex items-start gap-4">
              {/* Profile Picture Placeholder */}
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg border-2 border-gray-400 flex items-center justify-center text-4xl">
                👤
              </div>

              {/* Info */}
              <div className="flex-1 space-y-3">
                <h2 className="text-xl font-bold font-['Chicago',_monospace]">DUMIYA</h2>
                <p className="text-sm">Developer • Gamer • Artist</p>

                <div className="bg-gray-100 border border-gray-300 rounded p-3 text-xs space-y-2 font-mono">
                  <div className="flex gap-2">
                    <span className="font-bold">Type:</span>
                    <span>Portfolio Folder</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold">Contains:</span>
                    <span>Projects, Art, Experience</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold">Modified:</span>
                    <span>Today</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <button className="px-4 py-2 bg-gradient-to-b from-white to-[#e0e0e0] border-2 border-gray-400 rounded shadow hover:shadow-md text-sm font-bold">
                    View Projects
                  </button>
                  <button className="px-4 py-2 bg-gradient-to-b from-white to-[#e0e0e0] border-2 border-gray-400 rounded shadow hover:shadow-md text-sm font-bold">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="bg-gradient-to-b from-[#e8e8e8] to-[#d0d0d0] border-t border-gray-400 px-3 py-1 text-xs font-['Monaco',_monospace] flex justify-between">
            <span>3 items</span>
            <span>120 KB available</span>
          </div>
        </div>
      )}

      {/* Feature Callouts - Hidden in preview */}
      <div className="hidden absolute bottom-4 left-4 bg-white/95 border-2 border-gray-400 rounded-lg p-4 w-72 text-xs shadow-xl">
        <div className="font-bold mb-2 flex items-center gap-2 font-['Chicago',_monospace]">
          <span>🍎</span> Mac OS 9 Theme Features:
        </div>
        <ul className="space-y-1 list-disc list-inside text-xs">
          <li>Classic Platinum interface</li>
          <li>Striped title bars</li>
          <li>Traffic light window controls</li>
          <li>Apple menu bar</li>
          <li>Finder-style navigation</li>
          <li>Classic Mac fonts (Chicago, Charcoal)</li>
          <li>Desktop icons on right side</li>
          <li>Gradient buttons & toolbars</li>
        </ul>
      </div>
    </div>
  )
}
