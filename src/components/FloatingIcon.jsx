import React from 'react'

export const FloatingIcon = ({
  src,
  alt,
  className = '',
  tooltip,
  animate = 'float-slow',
  borderColor = 'ff-red-200/50 dark:border-ff-red-600/30',
  invert = false
}) => (
  <div className={`absolute bg-slate-100 dark:bg-slate-800/90 rounded-xl flex items-center justify-center shadow-lg animate-${animate} hover:scale-110 transition-all duration-500 cursor-pointer group backdrop-blur-sm border border-${borderColor} p-2 ${className}`}>
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-contain group-hover:animate-pulse ${invert ? 'icon-invert-light' : ''}`}
      loading="lazy"
      decoding="async"
    />
    {tooltip && (
      <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-slate-800 dark:bg-slate-900 text-white text-xs font-medium px-3 py-2 rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-[9999] backdrop-blur-sm border border-slate-700 dark:border-slate-600">
        {tooltip}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800 dark:border-t-slate-900"></div>
      </div>
    )}
  </div>
)
