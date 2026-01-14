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
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20 font-body"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative elements - removed */}
      </div>

      {/* Subtle background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-ff-red-50 to-ff-pink-50 dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-red-900/20"></div>

      {/* Decorative glows */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-ff-red-500/10 dark:bg-ff-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-ff-pink-500/10 dark:bg-ff-pink-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold relative z-10 leading-tight font-sixtyfour mb-6">
            <span className="title-light dark:title-dark">
              EXPERIENCE
            </span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-ff-red-500 to-ff-pink-500 mx-auto mb-6 sm:mb-8 shadow-lg"></div>
          <p className="text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed max-w-2xl mx-auto text-lg sm:text-xl px-4">
            <span className="text-ff-red-600 dark:text-ff-red-400 text-lg opacity-80 font-mono">[</span>
              My professional journey, creative projects, and continuous learning in gaming and digital art.
            <span className="text-ff-pink-600 dark:text-ff-pink-400 text-lg opacity-80 font-mono">]</span>
          </p>
        </div>

        {/* Content Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Work Experience Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-red-700 dark:text-ff-red-300 font-sixtyfour text-center">
              WORK EXPERIENCE
            </h3>

            {/* Experience Cards */}
            <div className="space-y-4">
              {workExperience.map((job, index) => (
                <div key={index} className="relative overflow-hidden bg-gradient-to-br from-white via-ff-red-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-red-900/20 border-2 border-ff-red-300 dark:border-ff-red-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  {/* Decorative glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-red-500/10 dark:bg-ff-red-500/5 rounded-full blur-2xl"></div>

                  <div className="relative z-10">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-ff-red-500 to-ff-red-600 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="material-icons text-white text-xl">work</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">{job.title}</h4>
                        <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">{job.company} • {job.period}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-pink-700 dark:text-ff-pink-300 font-sixtyfour text-center">
              PROJECTS
            </h3>

            {/* Project Cards */}
            <div className="space-y-4">
              {projects.slice(0, 3).map((project, index) => (
                <div key={index} className="relative overflow-hidden bg-gradient-to-br from-white via-ff-pink-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-pink-900/20 border-2 border-ff-pink-300 dark:border-ff-pink-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  {/* Decorative glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-pink-500/10 dark:bg-ff-pink-500/5 rounded-full blur-2xl"></div>

                  <div className="relative z-10">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-ff-pink-500 to-ff-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="material-icons text-white text-xl">rocket_launch</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">{project.title}</h4>
                        <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">{project.type} • {project.year}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Stats Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ff-gold-700 dark:text-ff-gold-300 font-sixtyfour text-center">
              ACHIEVEMENTS
            </h3>

            {/* Certification Cards */}
            <div className="space-y-4">
              {certifications.slice(0, 2).map((cert, index) => (
                <div key={index} className="relative overflow-hidden bg-gradient-to-br from-white via-ff-gold-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-gold-900/20 border-2 border-ff-gold-300 dark:border-ff-gold-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  {/* Decorative glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-ff-gold-500/10 dark:bg-ff-gold-500/5 rounded-full blur-2xl"></div>

                  <div className="relative z-10">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-ff-gold-500 to-ff-gold-600 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="material-icons text-white text-xl">emoji_events</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-ff-slate-800 dark:text-ff-slate-200">{cert.name}</h4>
                        <p className="text-sm text-ff-slate-600 dark:text-ff-slate-400">{cert.issuer} • {cert.year}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-ff-slate-700 dark:text-ff-slate-300 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="relative overflow-hidden bg-gradient-to-br from-white via-ff-blue-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-blue-900/20 border-2 border-ff-blue-300 dark:border-ff-blue-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-center">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-ff-blue-500/10 dark:bg-ff-blue-500/5 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="text-2xl font-bold text-ff-blue-700 dark:text-ff-blue-300 mb-1">3+</div>
                  <div className="text-xs text-ff-slate-700 dark:text-ff-slate-300">Years Experience</div>
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-white via-ff-green-50 to-white dark:from-ff-slate-800 dark:via-ff-slate-850 dark:to-ff-green-900/20 border-2 border-ff-green-300 dark:border-ff-green-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-center">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-ff-green-500/10 dark:bg-ff-green-500/5 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="text-2xl font-bold text-ff-green-700 dark:text-ff-green-300 mb-1">20+</div>
                  <div className="text-xs text-ff-slate-700 dark:text-ff-slate-300">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
