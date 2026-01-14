import React, { useState, useMemo } from 'react'
import { useSectionScroll } from '../hooks/useSectionScroll'

const Experience = ({ setActiveSection }) => {
  const [activeTab, setActiveTab] = useState('work')
  const experienceRef = useSectionScroll('experience', setActiveSection)

  const workExperience = [
    {
      title: 'Digital Artist & Illustrator',
      company: 'Freelance',
      period: '2022 - Present',
      description: 'Creating custom artwork for clients, including character designs, landscapes, and concept art. Specializing in digital painting and illustration.',
      skills: ['Digital Painting', 'Character Design', 'Concept Art', 'Client Communication'],
      icon: '🎨'
    },
    {
      title: 'Gaming Content Creator',
      company: 'Personal Brand',
      period: '2021 - Present',
      description: 'Developing gaming content, strategies, and community engagement. Building a following around gaming expertise and creative content.',
      skills: ['Content Creation', 'Community Management', 'Gaming Strategy', 'Social Media'],
      icon: '🎮'
    },
    {
      title: 'Creative Designer',
      company: 'Art Collective',
      period: '2023 - Present',
      description: 'Collaborating with other artists on joint projects, exhibitions, and creative workshops. Contributing to group art installations.',
      skills: ['Collaboration', 'Project Management', 'Creative Direction', 'Team Leadership'],
      icon: '👥'
    }
  ]

  const projects = [
    {
      title: 'Fantasy Character Series',
      type: 'Art Project',
      year: '2024',
      description: 'A collection of 20+ fantasy characters with detailed backstories and world-building elements.',
      technologies: ['Photoshop', 'Procreate', 'Character Design'],
      status: 'Completed',
      icon: '⚔️'
    },
    {
      title: 'Gaming Strategy Guide',
      type: 'Content Creation',
      year: '2023',
      description: 'Comprehensive strategy guide for popular RPG games, including walkthroughs and tips.',
      technologies: ['Content Writing', 'Gaming Analysis', 'Video Editing'],
      status: 'Ongoing',
      icon: '📚'
    },
    {
      title: 'Digital Art Workshop',
      type: 'Educational',
      year: '2024',
      description: 'Online workshop teaching digital art fundamentals to beginners and intermediate artists.',
      technologies: ['Teaching', 'Digital Art', 'Online Education'],
      status: 'Planning',
      icon: '🎓'
    },
    {
      title: 'Gaming Community Hub',
      type: 'Community',
      year: '2023',
      description: 'Discord server and online community for gamers and artists to connect and collaborate.',
      technologies: ['Community Management', 'Discord', 'Social Media'],
      status: 'Active',
      icon: '🏠'
    }
  ]

  const certifications = [
    {
      name: 'Adobe Creative Suite Certification',
      issuer: 'Adobe',
      year: '2023',
      description: 'Professional certification in Photoshop, Illustrator, and other Adobe creative tools.',
      icon: '🏆'
    },
    {
      name: 'Digital Art Fundamentals',
      issuer: 'Art Institute',
      year: '2022',
      description: 'Comprehensive course covering digital art principles, techniques, and best practices.',
      icon: '🎨'
    },
    {
      name: 'Game Design Principles',
      issuer: 'Gaming Academy',
      year: '2023',
      description: 'Advanced course in game design, mechanics, and player experience optimization.',
      icon: '🎮'
    },
    {
      name: 'Community Management',
      issuer: 'Social Media Institute',
      year: '2024',
      description: 'Professional certification in building and managing online communities.',
      icon: '👥'
    }
  ]

  const tabs = [
    { id: 'work', label: 'Work Experience', icon: '💼' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'certifications', label: 'Certifications', icon: '🏆' }
  ]

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="min-h-screen relative overflow-hidden pt-20 pb-8 sm:py-20 md:py-24 font-body"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative elements - removed */}
      </div>

      {/* Decorative glows - consistent in both modes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-ff-red-400/5 dark:bg-ff-red-500/8 rounded-full blur-3xl transition-colors duration-500"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-ff-pink-400/5 dark:bg-ff-pink-500/8 rounded-full blur-3xl transition-colors duration-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold relative z-10 leading-tight font-sixtyfour mb-4 sm:mb-6">
            <span className="title-light dark:title-dark">
              EXPERIENCE
            </span>
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-ff-red-500 to-ff-pink-500 mx-auto mb-4 sm:mb-6 md:mb-8 shadow-lg"></div>
          <p className="text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed max-w-2xl mx-auto text-base sm:text-lg md:text-xl px-4">
            <span className="text-ff-red-600 dark:text-ff-red-400 opacity-80 font-mono">[</span>
              My professional journey, creative projects, and continuous learning in gaming and digital art.
            <span className="text-ff-pink-600 dark:text-ff-pink-400 opacity-80 font-mono">]</span>
          </p>
        </div>

        {/* Mobile: Horizontal Scroll Sections, Desktop: Grid */}
        <div className="space-y-6 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          {/* Work Experience - Mobile: Horizontal Scroll */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-2xl lg:text-2xl font-bold text-ff-red-700 dark:text-ff-red-300 font-sixtyfour">
              WORK
            </h3>
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
              {workExperience.map((job, index) => (
                <div key={index} className="min-w-[280px] lg:min-w-0 bg-white dark:bg-ff-slate-800 border-2 border-ff-red-300 dark:border-ff-red-700 rounded-xl p-4 shadow-lg shadow-ff-slate-300 dark:shadow-ff-slate-900/50 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-2">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-white/20"
                      style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)' }}>
                      <span className="material-icons text-white text-lg">work</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-ff-slate-800 dark:text-ff-slate-200 truncate">{job.title}</h4>
                      <p className="text-xs text-ff-slate-600 dark:text-ff-slate-400 truncate">{job.company} • {job.period}</p>
                    </div>
                  </div>
                  <p className="text-xs text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects - Mobile: Horizontal Scroll */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-2xl lg:text-2xl font-bold text-ff-pink-700 dark:text-ff-pink-300 font-sixtyfour">
              PROJECTS
            </h3>
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
              {projects.slice(0, 3).map((project, index) => (
                <div key={index} className="min-w-[280px] lg:min-w-0 bg-white dark:bg-ff-slate-800 border-2 border-ff-pink-300 dark:border-ff-pink-700 rounded-xl p-4 shadow-lg shadow-ff-slate-300 dark:shadow-ff-slate-900/50 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-2">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-white/20"
                      style={{ background: 'linear-gradient(135deg, #ec4899, #db2777)' }}>
                      <span className="material-icons text-white text-lg">rocket_launch</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-ff-slate-800 dark:text-ff-slate-200 truncate">{project.title}</h4>
                      <p className="text-xs text-ff-slate-600 dark:text-ff-slate-400 truncate">{project.type} • {project.year}</p>
                    </div>
                  </div>
                  <p className="text-xs text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements - Mobile: Compact */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-2xl lg:text-2xl font-bold text-ff-gold-700 dark:text-ff-gold-300 font-sixtyfour">
              ACHIEVEMENTS
            </h3>
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
              {certifications.slice(0, 2).map((cert, index) => (
                <div key={index} className="min-w-[280px] lg:min-w-0 bg-white dark:bg-ff-slate-800 border-2 border-ff-gold-300 dark:border-ff-gold-700 rounded-xl p-4 shadow-lg shadow-ff-slate-300 dark:shadow-ff-slate-900/50 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-2">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-white/20"
                      style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
                      <span className="material-icons text-white text-lg">emoji_events</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-ff-slate-800 dark:text-ff-slate-200 truncate">{cert.name}</h4>
                      <p className="text-xs text-ff-slate-600 dark:text-ff-slate-400 truncate">{cert.issuer} • {cert.year}</p>
                    </div>
                  </div>
                  <p className="text-xs text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white dark:bg-ff-slate-800 border-2 border-ff-blue-200 dark:border-ff-blue-700 rounded-xl p-3 text-center shadow-lg shadow-ff-slate-300 dark:shadow-ff-slate-900/50 transition-all duration-500">
                <div className="text-xl font-bold text-ff-blue-700 dark:text-ff-blue-300 mb-1">3+</div>
                <div className="text-xs text-ff-slate-700 dark:text-ff-slate-300">Years</div>
              </div>
              <div className="bg-white dark:bg-ff-slate-800 border-2 border-ff-green-200 dark:border-ff-green-700 rounded-xl p-3 text-center shadow-lg shadow-ff-slate-300 dark:shadow-ff-slate-900/50 transition-all duration-500">
                <div className="text-xl font-bold text-ff-green-700 dark:text-ff-green-300 mb-1">20+</div>
                <div className="text-xs text-ff-slate-700 dark:text-ff-slate-300">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
