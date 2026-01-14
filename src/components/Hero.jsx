import React, { useMemo } from "react";
import { useSectionScroll } from '../hooks/useSectionScroll'
import { ArtShowcase } from './ArtShowcase'

const Hero = ({ setActiveSection }) => {
  const heroRef = useSectionScroll('home', setActiveSection)

  const icons = useMemo(() => [
    { src: '/assets/PersonaLogo.png', alt: 'Persona', tooltip: 'Persona', className: 'top-5 left-4 lg:top-5 lg:left-4 w-16 h-16 lg:w-20 lg:h-20', animate: 'float-slow', borderColor: 'ff-red-200/50 dark:border-ff-red-600/30', invert: false },
    { src: '/assets/DeltaruneIcon.png', alt: 'Deltarune', tooltip: 'Deltarune', className: 'top-4 right-22 lg:top-4 lg:right-22 w-14 h-14 lg:w-18 lg:h-18', animate: 'float-medium', borderColor: 'ff-pink-200/50 dark:border-ff-pink-600/30', invert: false },
    { src: '/assets/jjbaIcon.png', alt: "JoJo's Bizarre Adventure", tooltip: "JoJo's Bizarre Adventure", className: 'top-26 right-63 lg:top-26 lg:right-63 w-14 h-14 lg:w-18 lg:h-18', animate: 'float-fast', borderColor: 'ff-orange-200/50 dark:border-ff-orange-600/30', invert: false },
    { src: '/assets/nierIcon.png', alt: 'NieR', tooltip: 'NieR', className: 'top-40 -right-10 lg:top-40 lg:-right-10 w-16 h-16 lg:w-20 lg:h-20', animate: 'float-slow', borderColor: 'ff-slate-200/50 dark:border-ff-slate-600/30', invert: false },
    { src: '/assets/omoriIcon.png', alt: 'Omori', tooltip: 'Omori', className: 'bottom-13 -left-5 lg:bottom-13 lg:-left-5 w-18 h-14 lg:w-22 lg:h-17', animate: 'float-medium', borderColor: 'ff-indigo-200/50 dark:border-ff-indigo-600/30', invert: true },
    { src: '/assets/ffIcon.png', alt: 'Final Fantasy', tooltip: 'Final Fantasy', className: 'bottom-4 right-15 lg:bottom-4 lg:right-15 w-20 h-16 lg:w-26 lg:h-20 z-10', animate: 'float-fast', borderColor: 'ff-gold-200/50 dark:border-ff-gold-600/30', invert: true },
    { src: '/assets/mpIcon.png', alt: 'MP', tooltip: 'Mob Psycho 100', className: 'top-22 left-24 lg:top-22 lg:left-24 w-14 h-14 lg:w-17 lg:h-17', animate: 'float-slow', borderColor: 'ff-purple-200/50 dark:border-ff-purple-600/30', invert: false },
    { src: '/assets/dexIcon.png', alt: 'DEX', tooltip: 'Dexter', className: 'top-32 right-17 lg:top-32 lg:right-17 w-16 h-14 lg:w-20 lg:h-16', animate: 'float-medium', borderColor: 'ff-blue-200/50 dark:border-ff-blue-600/30', invert: false },
    { src: '/assets/hkIcon.png', alt: 'Hollow Knight', tooltip: 'Hollow Knight', className: 'bottom-50 right-4 lg:bottom-50 lg:right-4 w-12 h-12 lg:w-15 lg:h-15', animate: 'float-fast', borderColor: 'ff-green-200/50 dark:border-ff-green-600/30', invert: false },
    { src: '/assets/evaIcon.png', alt: 'EVA', tooltip: 'Neon Genesis Evangelion', className: 'bottom-20 left-20 lg:bottom-20 lg:left-20 w-14 h-14 lg:w-17 lg:h-17', animate: 'float-slow', borderColor: 'ff-cyan-200/50 dark:border-ff-cyan-600/30', invert: false }
  ], [])



  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20 font-body"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative elements - removed */}
      </div>

      {/* Subtle background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-ff-pink-50 to-ff-red-50 dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-pink-900/20"></div>

      {/* Decorative glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-ff-red-500/10 dark:bg-ff-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-ff-pink-500/10 dark:bg-ff-pink-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Layout - Mobile First, Desktop Asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              {/* Final Fantasy title with magic glow */}
              <div className="relative">
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold relative z-10 leading-tight font-sixtyfour"
                >
                  <span className="title-light dark:title-dark">
                    DUMIYA'S
                  </span>
                </h1>
                {/* Magic glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-ff-red-300 to-ff-pink-300 opacity-20 blur-xl animate-pulse"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-ff-red-200 to-ff-pink-200 opacity-30 blur-md"></div>
              </div>

              <div className="relative">
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold relative z-10 leading-tight font-sixtyfour"
                >
                  <span className="title-light dark:title-dark">
                    PORTFOLIO
                  </span>
                </h2>
                {/* Magic underline with glow effect */}
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-ff-red-400 to-ff-pink-400 opacity-80"></div>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-ff-red-300 to-ff-pink-300 opacity-60 animate-pulse"></div>
              </div>
            </div>

            <p className="text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-lg sm:text-xl">
              <span className="text-ff-red-600 dark:text-ff-red-400 text-lg opacity-80 font-mono">[</span>
                Passionate about gaming and art — always exploring new worlds and new ways to create.
              <span className="text-ff-pink-600 dark:text-ff-pink-400 text-lg opacity-80 font-mono">]</span>
            </p>
          </div>

          {/* Right Column - Interests Showcase */}
          <div className="lg:col-span-5 flex items-center justify-center order-first lg:order-last">
            <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px]">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-ff-red-500/10 to-ff-pink-500/10 dark:from-ff-red-600/20 dark:to-ff-pink-600/20 rounded-full blur-3xl"></div>

              {/* Art Showcase */}
              <div className="relative w-full h-full">
                <ArtShowcase />
              </div>
            </div>
          </div>
        </div>

        {/* Animated Scroll indicator */}
        <div className="absolute -bottom-16 sm:-bottom-18 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 sm:space-y-3">
            {/* Scroll arrow */}
            <div className="text-ff-red-600 dark:text-ff-red-300 text-2xl sm:text-3xl opacity-70 animate-bounce">
              <span className="material-icons">keyboard_arrow_down</span>
            </div>
            <div className="text-ff-red-600 dark:text-ff-red-400 text-xs font-mono opacity-60 tracking-wider">
              SCROLL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
