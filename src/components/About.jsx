import React from 'react'
import { motion } from 'framer-motion'
import { href } from 'react-router-dom'

const stats = [
  { num: '1+', label: 'Years of Learning' },
  { num: '3+', label: 'Projects Built', href: '#projects' },
  { num: '8+', label: 'Technologies' },
  { num: '∞', label: 'Cups of Coffee' },
]

const techStack = [
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Tailwind CSS',
  'Git',
  'Java',
  'Bootstrap',
]

const About = () => {
  return (
    <section
      id='about'
      className='min-h-screen bg-[#111118] text-slate-200 py-20 px-6'
    >
      <div className='max-w-6xl mx-auto'>

        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-14'
        >
         

          <h2 className='text-4xl md:text-5xl font-semibold'>
            About{' '}
            <span className='bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent'>
              Me.
            </span>
          </h2>
        </motion.div>

        
     <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-14'>
  {stats.map((s, i) => (
    <motion.a
      href={s.href || '#'}
      key={i}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className='rounded-3xl p-6 text-center border border-blue-300/10 bg-[#0d1117] hover:-translate-y-1 transition-all duration-300 cursor-pointer'
    >
      <div className='text-3xl font-bold bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent mb-2'>
        {s.num}
      </div>

      <div className='text-[11px] uppercase tracking-widest text-slate-500'>
        {s.label}
      </div>
    </motion.a>
  ))}
</div>
        
        <div className='grid md:grid-cols-2 gap-10 items-start'>

          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className='rounded-3xl border border-white/10 bg-[#0d1117] p-8'>

              <p className='text-blue-300 text-sm uppercase tracking-[0.2em] mb-3'>
                MERN Stack Developer
              </p>

              <h3 className='text-4xl font-bold leading-tight mb-6'>
                Building modern web experiences with
                <span className='bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent'>
                  {' '}MERN Stack
                </span>
              </h3>

              <p className='text-white-400 leading-8 text-[15px] mb-8'>
                I’m a passionate MERN Stack Developer focused on building
                modern, responsive, and user-friendly web applications.
                 I enjoy turning ideas into real-world products
                and continuously improving my skills through projects,
                problem-solving, and learning new technologies.
              </p>

              
              <div className='flex flex-wrap gap-3'>
                {techStack.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className='px-4 py-2 rounded-full text-sm border border-blue-300/10 bg-blue-300/5 text-blue-300 hover:-translate-y-1 transition-all duration-300'
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='flex flex-col gap-4 '
          >

            
            <div className='bg-green-500/5 border border-green-500/20 rounded-3xl px-6 py-4 hover:-translate-y-1 transition-all duration-300'>
              <div className='flex items-center gap-4'>
                <span className='w-3 h-3 rounded-full bg-green-400 animate-pulse'></span>

                <span className='text-green-300 text-[15px]'>
                  Actively seeking internships & full-time roles
                </span>
              </div>
            </div>

            
            <div className='bg-blue-300/5 border border-blue-300/15 rounded-3xl px-6 py-4 hover:-translate-y-1 transition-all duration-300'>
              <div className='flex items-center gap-4'>
                <span className='text-2xl'>📚</span>

                <span className='text-[15px] text-blue-300'>
                  Currently learning
                  <span className='text-violet-300 font-medium'>
                    {' '}DevOps & DSA
                  </span>
                </span>
              </div>
            </div>

            
            <div className='bg-violet-300/5 border border-violet-300/15 rounded-3xl px-6 py-4 hover:-translate-y-1 transition-all duration-300'>
              <div className='flex items-center gap-4'>
                <span className='text-2xl'>🎓</span>

               
                  <span className='text-blue-300 font-medium'>
                    {' '}B.Tech CSE, 2026
                  </span>
                
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About