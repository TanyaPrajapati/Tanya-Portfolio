import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    title: 'Wonderlust',
    description: 'A travel web application where users can explore destinations, view travel listings, and get inspiration for trips. Built with full-stack functionality and responsive UI.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/TanyaPrajapati/WonderLust',
    live: 'https://wonderlust-fflt.onrender.com',
    icon: '🌍',
    color: '#93c5fd',
    glow: 'rgba(147,197,253,0.15)',
    status: 'Completed',
  },
  {
    title: 'UniEvents',
    description: 'A college event management platform where students can explore, register, and manage events with admin control and real-time updates.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/TanyaPrajapati/UniEvents',
    live: 'https://uni-events-tan.vercel.app/',
    icon: '🎓',
    color: '#c4b5fd',
    glow: 'rgba(196,181,253,0.15)',
    status: 'Completed',
  },
  {
    title: 'Portfolio Website',
    description: 'My personal developer portfolio showcasing projects, skills, animations, and modern UI built using React and Framer Motion.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/TanyaPrajapati/Tanya-Portfolio',
    live: 'https://your-portfolio.vercel.app',
    icon: '💼',
    color: '#86efac',
    glow: 'rgba(134,239,172,0.15)',
    status: 'Completed',
  },
]
const statusColors = {
  Completed:   { bg: 'rgba(134,239,172,0.1)', border: 'rgba(134,239,172,0.3)', text: '#86efac', dot: '#86efac' },
  'In Progress': { bg: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.3)',  text: '#fbbf24', dot: '#fbbf24' },
}

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false)
  const sc = statusColors[project.status]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className='relative rounded-2xl p-6 border flex flex-col gap-4 transition-all duration-300'
      style={{
        background: hovered ? project.glow : 'rgba(13,17,23,0.8)',
        borderColor: hovered ? project.color : 'rgba(147,197,253,0.1)',
        boxShadow: hovered ? `0 0 40px ${project.glow}` : 'none',
      }}
    >
      {/* Top corner glow */}
      <div
        className='absolute top-0 right-0 w-28 h-28 rounded-full pointer-events-none'
        style={{
          background: `radial-gradient(circle, ${project.glow} 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0.3,
          transition: 'opacity 0.3s',
        }}
      />

      {/* Project number watermark */}
      <span
        className='absolute bottom-4 right-6 font-mono font-bold pointer-events-none select-none'
        style={{ fontSize: '5rem', color: project.color, opacity: 0.04, lineHeight: 1 }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Header */}
      <div className='flex items-start justify-between gap-3'>
        <div className='flex items-center gap-3'>
          <div
            className='w-12 h-12 rounded-xl flex items-center justify-center text-2xl border flex-shrink-0'
            style={{
              background: project.glow,
              borderColor: `${project.color}44`,
              boxShadow: hovered ? `0 0 16px ${project.glow}` : 'none',
              transition: 'box-shadow 0.3s',
            }}
          >
            {project.icon}
          </div>
          <div>
            <h3
              className='font-semibold text-lg tracking-wide transition-colors duration-300'
              style={{ color: hovered ? project.color : '#e2e8f0' }}
            >
              {project.title}
            </h3>
            {/* Status badge */}
            <span
              className='text-[9px] px-2 py-0.5 rounded-full border tracking-widest uppercase font-mono inline-flex items-center gap-1'
              style={{ background: sc.bg, borderColor: sc.border, color: sc.text }}
            >
              <span
                className='w-1.5 h-1.5 rounded-full'
                style={{
                  background: sc.dot,
                  boxShadow: project.status === 'In Progress' ? `0 0 4px ${sc.dot}` : 'none',
                  animation: project.status === 'In Progress' ? 'pulse 2s infinite' : 'none',
                }}
              />
              {project.status}
            </span>
          </div>
        </div>

        {/* Links */}
        <div className='flex gap-2 flex-shrink-0'>
          {project.github && (
            <a
              href={project.github}
              target='_blank'
              rel='noreferrer'
              className='w-9 h-9 rounded-lg border flex items-center justify-center text-sm transition-all duration-200 hover:scale-110'
              style={{
                background: 'rgba(147,197,253,0.05)',
                borderColor: 'rgba(147,197,253,0.15)',
              }}
              title='GitHub'
            >
              🐙
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target='_blank'
              rel='noreferrer'
              className='w-9 h-9 rounded-lg border flex items-center justify-center text-sm transition-all duration-200 hover:scale-110'
              style={{
                background: 'rgba(147,197,253,0.05)',
                borderColor: 'rgba(147,197,253,0.15)',
              }}
              title='Live Demo'
            >
              🚀
            </a>
          )}
        </div>
      </div>

      {/* Divider */}
      <div
        className='w-full h-px'
        style={{ background: `linear-gradient(90deg, ${project.color}44, transparent)` }}
      />

      {/* Description */}
      <p className='text-sm text-slate-400 leading-relaxed font-light'>
        {project.description}
      </p>

      {/* Tags */}
      <div className='flex flex-wrap gap-2 mt-auto'>
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className='text-[11px] px-3 py-1 rounded-full border font-mono tracking-wide transition-all duration-200'
            style={{
              background: hovered ? `${project.color}15` : 'rgba(147,197,253,0.05)',
              borderColor: hovered ? `${project.color}44` : 'rgba(147,197,253,0.1)',
              color: hovered ? project.color : '#94a3b8',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom animated bar */}
      <motion.div
        className='absolute bottom-0 left-0 h-[2px] rounded-b-2xl'
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
        animate={{ width: hovered ? '100%' : '0%' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id='projects' className='min-h-screen bg-[#111118] text-slate-200 py-20 px-6'>
      <div className='max-w-6xl mx-auto'>

        {/* Label + Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-16'
        >
          <p className='text-xs tracking-[0.2em] uppercase text-blue-300 font-mono mb-2'>
            // what i have built
          </p>
          <h2 className='text-4xl md:text-5xl font-semibold'>
            My{' '}
            <span className='bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent'>
              Projects.
            </span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='flex justify-center mt-14'
        >
          <a
            href='https://github.com/yourusername'
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-3 px-6 py-3 rounded-xl text-sm border font-mono tracking-wide transition-all duration-300 hover:-translate-y-1'
            style={{
              background: 'rgba(147,197,253,0.05)',
              borderColor: 'rgba(147,197,253,0.2)',
              color: '#93c5fd',
            }}
          >
            🐙 View All Projects on GitHub
          </a>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='text-center text-xs text-slate-600 font-mono mt-8'
        >
          // more projects coming soon • currently building in public
        </motion.p>

      </div>
    </section>
  )
}

export default Projects