import React, { useState } from 'react'
import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Frontend',
    icon: '🖥️',
    color: '#93c5fd',
    glow: 'rgba(147,197,253,0.15)',
    border: 'rgba(147,197,253,0.2)',
    skills: [
      { name: 'React',        icon: '⚛️', level: 'Intermediate' },
      { name: 'HTML',         icon: '🌐', level: 'Advanced'     },
      { name: 'CSS',          icon: '🎀', level: 'Advanced'     },
      { name: 'JavaScript',   icon: '🟡', level: 'Intermediate' },
      { name: 'Tailwind CSS', icon: '🎨', level: 'Intermediate' },
      { name: 'Bootstrap',    icon: '🅱️', level: 'Intermediate' },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: '#86efac',
    glow: 'rgba(134,239,172,0.15)',
    border: 'rgba(134,239,172,0.2)',
    skills: [
      { name: 'Node.js',  icon: '🟢', level: 'Intermediate' },
      { name: 'Express',  icon: '⚡', level: 'Intermediate' },
      { name: 'Java',     icon: '☕', level: 'Intermediate'     },
      { name: 'REST APIs',icon: '🔗', level: 'Intermediate' },
    ],
  },
  {
    title: 'Database',
    icon: '🗄️',
    color: '#c4b5fd',
    glow: 'rgba(196,181,253,0.15)',
    border: 'rgba(196,181,253,0.2)',
    skills: [
      { name: 'MongoDB', icon: '🍃', level: 'Intermediate' },
      { name: 'MySQL',   icon: '🐬', level: 'Intermediate'     },
    ],
  },
  {
    title: 'Tools & Others',
    icon: '🛠️',
    color: '#fbbf24',
    glow: 'rgba(251,191,36,0.15)',
    border: 'rgba(251,191,36,0.2)',
    skills: [
      { name: 'Git',    icon: '🌿', level: 'Intermediate' },
      { name: 'GitHub', icon: '🐙', level: 'Intermediate' },
      { name: 'VS Code',icon: '💙', level: 'Advanced'     },
      { name: 'Postman',icon: '📮', level: 'Beginner'     },
    ],
  },
]

const levelColors = {
  Beginner:     { bg: 'rgba(251,191,36,0.1)',  border: 'rgba(251,191,36,0.3)',  text: '#fbbf24' },
  Intermediate: { bg: 'rgba(147,197,253,0.1)', border: 'rgba(147,197,253,0.3)', text: '#93c5fd' },
  Advanced:     { bg: 'rgba(134,239,172,0.1)', border: 'rgba(134,239,172,0.3)', text: '#86efac' },
}

const CategoryCard = ({ category, index }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className='relative rounded-2xl p-6 border transition-all duration-300'
      style={{
        background: hovered ? category.glow : 'rgba(13,17,23,0.8)',
        borderColor: hovered ? category.color : category.border,
        boxShadow: hovered ? `0 0 30px ${category.glow}, 0 0 60px ${category.glow}` : 'none',
      }}
    >
      {/* Top corner glow */}
      <div
        className='absolute top-0 right-0 w-24 h-24 rounded-full pointer-events-none'
        style={{
          background: `radial-gradient(circle, ${category.glow} 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0.4,
          transition: 'opacity 0.3s',
        }}
      />

      {/* Card header */}
      <div className='flex items-center gap-3 mb-6'>
        <div
          className='w-12 h-12 rounded-xl flex items-center justify-center text-2xl border'
          style={{
            background: category.glow,
            borderColor: category.border,
            boxShadow: hovered ? `0 0 16px ${category.glow}` : 'none',
            transition: 'box-shadow 0.3s',
          }}
        >
          {category.icon}
        </div>
        <div>
          <h3
            className='text-lg font-semibold tracking-wide'
            style={{ color: hovered ? category.color : '#e2e8f0' }}
          >
            {category.title}
          </h3>
          <p className='text-xs text-slate-500 font-mono'>{category.skills.length} skills</p>
        </div>

        {/* Animated line */}
        <motion.div
          className='ml-auto h-[1px] rounded-full'
          style={{ background: category.color }}
          animate={{ width: hovered ? 40 : 20, opacity: hovered ? 1 : 0.3 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Divider */}
      <div
        className='w-full h-px mb-6'
        style={{ background: `linear-gradient(90deg, ${category.color}44, transparent)` }}
      />

      {/* Skills list */}
      <div className='flex flex-col gap-3'>
        {category.skills.map((skill, i) => {
          const lc = levelColors[skill.level]
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
              className='flex items-center justify-between group'
            >
              <div className='flex items-center gap-2'>
                <span className='text-lg'>{skill.icon}</span>
                <span className='text-sm text-slate-300 font-mono group-hover:text-white transition-colors duration-200'>
                  {skill.name}
                </span>
              </div>
              <span
                className='text-[9px] px-2 py-0.5 rounded-full border tracking-widest uppercase font-mono'
                style={{
                  background: lc.bg,
                  borderColor: lc.border,
                  color: lc.text,
                }}
              >
                {skill.level}
              </span>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom skill count bar */}
      <div className='mt-6 flex gap-1'>
        {category.skills.map((_, i) => (
          <motion.div
            key={i}
            className='h-1 rounded-full flex-1'
            style={{ background: category.color }}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: hovered ? 1 : 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 + i * 0.08 }}
          />
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section id='skills' className='min-h-screen bg-[#0d0d14] text-slate-200 py-20 px-6'>
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
            // what i know
          </p>
          <h2 className='text-4xl md:text-5xl font-semibold'>
            My{' '}
            <span className='bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent'>
              Skills.
            </span>
          </h2>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='flex gap-6 mb-12 flex-wrap'
        >
          {Object.entries(levelColors).map(([level, lc]) => (
            <div key={level} className='flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full' style={{ background: lc.text }} />
              <span className='text-xs font-mono' style={{ color: lc.text }}>{level}</span>
            </div>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {categories.map((category, i) => (
            <CategoryCard key={i} category={category} index={i} />
          ))}
        </div>

        

      </div>
    </section>
  )
}

export default Skills