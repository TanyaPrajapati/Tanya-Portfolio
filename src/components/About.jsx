import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const stats = [
  { num: '1+', label: 'Years of Learning' },
  { num: '3', label: 'Projects Built'    },
  { num: '8', label: 'Technologies'      },
  { num: '∞',  label: 'Cups of Coffee'    },
]

const techStack = [
  { name: 'React',        color: 'blue'     },
  { name: 'Node.js',      color: 'lavender' },
  { name: 'Express',      color: 'lavender' },
  { name: 'MongoDB',      color: 'blue'     },
  { name: 'Tailwind CSS', color: 'blue'     },
  { name: 'Git',          color: 'lavender' },
  { name: 'Java',         color: 'lavender' },
  { name: 'Bootstrap',    color: 'blue'     },
]

const orbit1Icons = [
  { icon: '⚛️', label: 'React',   top: '-24px',    left: '50%',    tx: '-50%', bg: 'linear-gradient(135deg,#1e3a5f,#1e2d4a)', delay: 0   },
  { icon: '🟢', label: 'Node.js', bottom: '-24px', left: '50%',    tx: '-50%', bg: 'linear-gradient(135deg,#1a2e1a,#1e3a1e)', delay: 0.5 },
  { icon: '🍃', label: 'MongoDB', top: '50%',      right: '-24px', ty: '-50%', bg: 'linear-gradient(135deg,#2d1b1b,#3a1e1e)', delay: 1   },
]

const orbit2Icons = [
  { icon: '⚡', label: 'Express',      top: '-24px',    left: '50%',    tx: '-50%', bg: 'linear-gradient(135deg,#1a0a0a,#2e1515)', delay: 0.8 },
  { icon: '🎨', label: 'Tailwind CSS', bottom: '-24px', left: '50%',    tx: '-50%', bg: 'linear-gradient(135deg,#1a0e2e,#2d1b4e)', delay: 1.3 },
  { icon: '🌿', label: 'Git',          top: '50%',      right: '-24px', ty: '-50%', bg: 'linear-gradient(135deg,#2d1515,#3a1e1e)', delay: 1.8 },
  { icon: '☕', label: 'Java',         top: '50%',      left: '-24px',  ty: '-50%', bg: 'linear-gradient(135deg,#2d1a0a,#3a2510)', delay: 0.4 },
]

const orbit3Icons = [
  { icon: '🅱️', label: 'Bootstrap', top: '-24px', left: '50%', tx: '-50%', bg: 'linear-gradient(135deg,#1a0a2e,#2d0d4e)', delay: 1.0 },
]

const OrbitIcon = ({ ic, duration }) => (
  <motion.div
    className='absolute flex flex-col items-center gap-1'
    style={{
      top: ic.top,
      bottom: ic.bottom,
      left: ic.left,
      right: ic.right,
      transform: `${ic.tx ? `translateX(${ic.tx})` : ''} ${ic.ty ? `translateY(${ic.ty})` : ''}`,
    }}
    animate={{ rotate: duration > 0 ? -360 : 360 }}
    transition={{ duration: Math.abs(duration), repeat: Infinity, ease: 'linear' }}
  >
    <motion.div
      className='w-12 h-12 rounded-xl flex items-center justify-center text-2xl border border-white/8'
      style={{ background: ic.bg, boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: ic.delay }}
      whileHover={{ scale: 1.2 }}
    >
      {ic.icon}
    </motion.div>
    <span className='text-[9px] text-blue-300/70 tracking-widest font-mono'>{ic.label}</span>
  </motion.div>
)

const About = () => {
  return (
    <section id='about' className='min-h-screen bg-[#111118] text-slate-200 py-20 px-6'>
      <div className='max-w-6xl mx-auto'>

        {/* ── Label + Title ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className='text-xs tracking-[0.2em] uppercase text-blue-300 font-mono mb-2'>
            // who am i
          </p>
          <h2 className='text-4xl md:text-5xl font-semibold mb-12'>
            About{' '}
            <span className='bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent'>
              Me.
            </span>
          </h2>
        </motion.div>

        {/* ── Stat Cards ── */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mb-12'>
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className='rounded-2xl p-5 text-center border border-blue-300/15 bg-gradient-to-br from-blue-300/5 to-violet-300/5 hover:border-blue-300/40 hover:-translate-y-1 transition-all duration-300'
            >
              <div className='text-3xl font-bold bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent mb-1'>
                {s.num}
              </div>
              <div className='text-[11px] uppercase tracking-widest text-slate-400'>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Main Grid ── */}
        <div className='grid md:grid-cols-2 gap-10 items-start'>

          {/* ── LEFT: Floating icons + badges ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='flex flex-col items-center gap-4'
          >
            <div className='relative w-[360px] h-[360px] flex items-center justify-center'>

              {/* Center glow */}
              <motion.div
                className='absolute w-[120px] h-[120px] rounded-full'
                style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.15), rgba(196,181,253,0.08), transparent 70%)' }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Orbit rings */}
              {[160, 260, 340].map((size, i) => (
                <div
                  key={i}
                  className='absolute rounded-full border border-dashed border-blue-300/12'
                  style={{ width: size, height: size }}
                />
              ))}

              {/* Center logo */}
              <motion.div
                className='relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl border border-blue-300/25'
                style={{
                  background: 'linear-gradient(135deg, rgba(147,197,253,0.15), rgba(196,181,253,0.1))',
                  boxShadow: '0 0 40px rgba(147,197,253,0.15)',
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                💻
              </motion.div>

              {/* Orbit 1 */}
              <motion.div
                className='absolute w-[160px] h-[160px] rounded-full'
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              >
                {orbit1Icons.map((ic, i) => (
                  <OrbitIcon key={i} ic={ic} duration={12} />
                ))}
              </motion.div>

              {/* Orbit 2 */}
              <motion.div
                className='absolute w-[260px] h-[260px] rounded-full'
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              >
                {orbit2Icons.map((ic, i) => (
                  <OrbitIcon key={i} ic={ic} duration={-18} />
                ))}
              </motion.div>

              {/* Orbit 3 */}
              <motion.div
                className='absolute w-[340px] h-[340px] rounded-full'
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
              >
                {orbit3Icons.map((ic, i) => (
                  <OrbitIcon key={i} ic={ic} duration={22} />
                ))}
              </motion.div>

            </div>

            {/* Badges */}
            <div className='flex flex-col gap-3 w-full max-w-[340px]'>
              <div className='flex items-center gap-3 bg-green-500/8 border border-green-500/20 rounded-xl px-4 py-3'>
                <span className='w-2 h-2 rounded-full bg-green-400 shadow-[0_0_0_4px_rgba(34,197,94,0.2)] animate-pulse flex-shrink-0'></span>
                <span className='text-xs text-green-300'>Actively seeking internships &amp; full-time roles</span>
              </div>
              <div className='flex items-center gap-3 bg-blue-300/5 border border-blue-300/15 rounded-xl px-4 py-3'>
                <span>📚</span>
                <span className='text-xs text-blue-300'>
                  Currently learning{' '}
                  <span className='text-violet-300 font-medium'>System Design &amp; DSA</span>
                </span>
              </div>
              <div className='flex items-center gap-3 bg-violet-300/5 border border-violet-300/15 rounded-xl px-4 py-3'>
                <span>🎓</span>
                <span className='text-xs text-violet-300'>
                  Final Year —{' '}
                  <span className='text-blue-300 font-medium'>B.Tech CSE, 2026</span>
                </span>
              </div>
            </div>

          </motion.div>

          {/* ── RIGHT: Terminal + stack ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Terminal */}
            <div className='bg-[#0d1117] border border-blue-300/15 rounded-2xl overflow-hidden font-mono text-sm'>
              <div className='flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-white/5'>
                <span className='w-3 h-3 rounded-full bg-[#ff5f57]'></span>
                <span className='w-3 h-3 rounded-full bg-[#febc2e]'></span>
                <span className='w-3 h-3 rounded-full bg-[#28c840]'></span>
                <span className='mx-auto text-[11px] text-slate-600 tracking-widest'>tanya.js</span>
              </div>
              <div className='p-6 leading-7 text-[13px]'>
                <p className='text-slate-600'>// about me</p>
                <p>
                  <span className='text-violet-300'>const </span>
                  <span className='text-pink-400'>tanya</span>
                  <span className='text-slate-200'> = {'{'}</span>
                </p>
                <p className='pl-5'>
                  <span className='text-violet-300'>name</span>
                  <span className='text-slate-200'>: </span>
                  <span className='text-blue-300'>"Tanya Prajapati"</span>
                  <span className='text-slate-200'>,</span>
                </p>
                <p className='pl-5'>
                  <span className='text-violet-300'>role</span>
                  <span className='text-slate-200'>: </span>
                  <span className='text-blue-300'>"Aspiring Full Stack Developer"</span>
                  <span className='text-slate-200'>,</span>
                </p>
                <p className='pl-5'>
                  <span className='text-violet-300'>education</span>
                  <span className='text-slate-200'>: </span>
                  <span className='text-blue-300'>"B.Tech CSE — 2026 (Final Year)"</span>
                  <span className='text-slate-200'>,</span>
                </p>
                <p className='pl-5'>
                  <span className='text-violet-300'>seeking</span>
                  <span className='text-slate-200'>: </span>
                  <span className='text-blue-300'>"Internship / Entry-Level Role"</span>
                  <span className='text-slate-200'>,</span>
                </p>
                <p className='pl-5 mt-2'>
                  <span className='text-violet-300'>passion</span>
                  <span className='text-slate-200'>: </span>
                  <span className='text-blue-300'>"Building fast, beautiful</span>
                </p>
                <p className='pl-10'>
                  <span className='text-blue-300'>products that matter"</span>
                  <span className='text-slate-200'>,</span>
                </p>
                <p className='pl-5 mt-2'>
                  <span className='text-violet-300'>strengths</span>
                  <span className='text-slate-200'>: [</span>
                </p>
                <p className='pl-10'>
                  <span className='text-blue-300'>"Quick Learner"</span>
                  <span className='text-slate-200'>, </span>
                  <span className='text-blue-300'>"Problem Solver"</span>
                  <span className='text-slate-200'>,</span>
                </p>
                <p className='pl-10'>
                  <span className='text-blue-300'>"Team Player"</span>
                </p>
                <p className='pl-5'>
                  <span className='text-slate-200'>],</span>
                </p>
                <p className='pl-5 mt-2'>
                  <span className='text-violet-300'>funFact</span>
                  <span className='text-slate-200'>: </span>
                  <span className='text-blue-300'>"I debug better at midnight 🌙"</span>
                  <span className='text-slate-200'>,</span>
                </p>
                <p className='pl-5 mt-2'>
                  <span className='text-pink-400'>greet</span>
                  <span className='text-slate-200'>: () =&gt; </span>
                  <span className='text-blue-300'>"Let's build something amazing!"</span>
                </p>
                <p><span className='text-slate-200'>{'};'}</span></p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className='mt-6'>
              <p className='text-[11px] uppercase tracking-[0.15em] text-slate-400 mb-3'>
                Tech Stack
              </p>
              <div className='flex flex-wrap gap-2'>
                {techStack.map((t, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 hover:-translate-y-1 cursor-default
                      ${t.color === 'blue'
                        ? 'bg-blue-300/8 border-blue-300/20 text-blue-300 hover:bg-blue-300/15 hover:border-blue-300/50'
                        : 'bg-violet-300/8 border-violet-300/20 text-violet-300 hover:bg-violet-300/15 hover:border-violet-300/50'
                      }`}
                  >
                    {t.name}
                  </motion.span>
                ))}
              </div>

         
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About