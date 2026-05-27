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
      { name: 'React', icon: '⚛️', progress: 90 },
      { name: 'HTML', icon: '🌐', progress: 95 },
      { name: 'CSS', icon: '🎀', progress: 92 },
      { name: 'JavaScript', icon: '🟡', progress: 88 },
      { name: 'Tailwind CSS', icon: '🎨', progress: 90 },
      { name: 'Bootstrap', icon: '🅱️', progress: 80 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: '#86efac',
    glow: 'rgba(134,239,172,0.15)',
    border: 'rgba(134,239,172,0.2)',
    skills: [
      { name: 'Node.js', icon: '🟢', progress: 82 },
      { name: 'Express', icon: '⚡', progress: 80 },
      { name: 'Java', icon: '☕', progress: 60 },
      { name: 'REST APIs', icon: '🔗', progress: 85 },
    ],
  },
  {
    title: 'Database',
    icon: '🗄️',
    color: '#c4b5fd',
    glow: 'rgba(196,181,253,0.15)',
    border: 'rgba(196,181,253,0.2)',
    skills: [
      { name: 'MongoDB', icon: '🍃', progress: 78 },
      { name: 'MySQL', icon: '🐬', progress: 60 },
    ],
  },
  {
    title: 'Tools & Others',
    icon: '🛠️',
    color: '#fbbf24',
    glow: 'rgba(251,191,36,0.15)',
    border: 'rgba(251,191,36,0.2)',
    skills: [
      { name: 'Git', icon: '🌿', progress: 85 },
      { name: 'GitHub', icon: '🐙', progress: 88 },
      { name: 'VS Code', icon: '💙', progress: 95 },
      { name: 'Postman', icon: '📮', progress: 70 },
      { name: 'Docker', icon: '🐋', progress: 50 },
      { name: 'Kubernetes', icon: '☸️', progress: 40 },
    ],
  },
]

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
      className='relative rounded-2xl p-6 border transition-all duration-300 overflow-hidden'
      style={{
        background: hovered ? category.glow : 'rgba(13,17,23,0.8)',
        borderColor: hovered ? category.color : category.border,
        boxShadow: hovered
          ? `0 0 30px ${category.glow}, 0 0 60px ${category.glow}`
          : 'none',
      }}
    >
      
      <div
        className='absolute top-0 right-0 w-24 h-24 rounded-full pointer-events-none'
        style={{
          background: `radial-gradient(circle, ${category.glow} 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0.4,
          transition: 'opacity 0.3s',
        }}
      />

      
      <div className='flex items-center gap-3 mb-6'>
        <div
          className='w-12 h-12 rounded-xl flex items-center justify-center text-2xl border'
          style={{
            background: category.glow,
            borderColor: category.border,
            boxShadow: hovered ? `0 0 16px ${category.glow}` : 'none',
            transition: '0.3s',
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

          <p className='text-xs text-slate-500 font-mono'>
            {category.skills.length} skills
          </p>
        </div>

        <motion.div
          className='ml-auto h-[1px] rounded-full'
          style={{ background: category.color }}
          animate={{
            width: hovered ? 40 : 20,
            opacity: hovered ? 1 : 0.3,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      
      <div
        className='w-full h-px mb-6'
        style={{
          background: `linear-gradient(90deg, ${category.color}44, transparent)`,
        }}
      />

      
      <div className='flex flex-col gap-5'>
        {category.skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: index * 0.1 + i * 0.05,
            }}
            className='group'
          >
            
            <div className='flex items-center justify-between mb-2'>
              <div className='flex items-center gap-2'>
                <span className='text-lg'>{skill.icon}</span>

                <span className='text-sm text-slate-300 font-mono group-hover:text-white transition-colors duration-200'>
                  {skill.name}
                </span>
              </div>

              <span
                className='text-[11px] font-mono'
                style={{ color: category.color }}
              >
                {skill.progress}%
              </span>
            </div>

            
            <div className='w-full h-2 bg-[#111827] rounded-full overflow-hidden border border-[#1f2937]'>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className='h-full rounded-full'
                style={{
                  background: `linear-gradient(90deg, ${category.color}, white)`,
                  boxShadow: `0 0 10px ${category.color}`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      
      <div className='mt-6 flex gap-1'>
        {category.skills.map((_, i) => (
          <motion.div
            key={i}
            className='h-1 rounded-full flex-1'
            style={{ background: category.color }}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: hovered ? 1 : 0.3 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.1 + i * 0.08,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section
      id='skills'
      className='min-h-screen bg-[#0d0d14] text-slate-200 py-20 px-6'
    >
      <div className='max-w-6xl mx-auto'>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-16'
        >
         

          <h2 className='text-4xl md:text-5xl font-semibold'>
            My{' '}
            <span className='bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent'>
              Skills.
            </span>
          </h2>
        </motion.div>

        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {categories.map((category, i) => (
            <CategoryCard
              key={i}
              category={category}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills