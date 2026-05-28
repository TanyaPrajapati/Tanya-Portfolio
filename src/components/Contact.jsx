import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'


const EMAILJS_SERVICE_ID  = 'service_wrx4fh6'
const EMAILJS_TEMPLATE_ID = 'template_rkrz8sc'
const EMAILJS_PUBLIC_KEY  = 'qIPq_l-sxzRSPJGN4'

const contactDetails = [
  { icon: '✉️', label: 'Email',    value: 'tanya@gmail.com',        href: 'mailto:pankhuri7890@gmail.com'                },
  { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/tanya',  href: 'https://www.linkedin.com/in/tanyaprajapati88/'         },
  { icon: '🐙', label: 'GitHub',   value: 'github.com/tanya',       href: 'https://github.com/TanyaPrajapati/'              },
  { icon: '📍', label: 'Location', value: 'India 🇮🇳 · Open to Remote', href: null                               },
]

const Contact = () => {
  const formRef = useRef()
  const [form, setForm]       = useState({ name: '', email: '', message: '' })
  const [status, setStatus]   = useState('idle')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) return

    setStatus('loading')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error(err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id='contact' className='min-h-screen bg-[#0d0d14] text-slate-200 py-20 px-6'>
      <div className='max-w-6xl mx-auto'>

       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-16'
        >
        
          <h2 className='text-4xl md:text-5xl font-semibold'>
            Contact{' '}
            <span className='bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent'>
              Me.
            </span>
          </h2>
        </motion.div>

        
        <div className='grid md:grid-cols-2 gap-12 items-start'>

          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='flex flex-col gap-6'
          >
            <p className='text-slate-400 text-sm leading-relaxed font-light'>
              I'm actively looking for internships and entry-level opportunities.
              Whether you have a project in mind, a question, or just want to say hi —
              my inbox is always open. I'll get back to you as soon as possible! 
            </p>

            
            <div className='flex flex-col gap-3 mt-2'>
              {contactDetails.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : '_self'}
                      rel='noreferrer'
                      className='flex items-center gap-4 p-4 rounded-xl border border-blue-300/10 bg-blue-300/5 hover:border-blue-300/30 hover:bg-blue-300/10 transition-all duration-300 group'
                    >
                      <div className='w-10 h-10 rounded-lg border border-blue-300/20 bg-blue-300/10 flex items-center justify-center text-lg flex-shrink-0 group-hover:border-blue-300/40 transition-all duration-300'>
                        {item.icon}
                      </div>
                      <div>
                        <p className='text-[10px] uppercase tracking-widest text-slate-500 font-mono'>{item.label}</p>
                        <p className='text-sm text-slate-300 group-hover:text-blue-300 transition-colors duration-300'>{item.value}</p>
                      </div>
                      <span className='ml-auto text-slate-600 group-hover:text-blue-300 transition-colors duration-300 text-sm'>↗</span>
                    </a>
                  ) : (
                    <div className='flex items-center gap-4 p-4 rounded-xl border border-blue-300/10 bg-blue-300/5'>
                      <div className='w-10 h-10 rounded-lg border border-blue-300/20 bg-blue-300/10 flex items-center justify-center text-lg flex-shrink-0'>
                        {item.icon}
                      </div>
                      <div>
                        <p className='text-[10px] uppercase tracking-widest text-slate-500 font-mono'>{item.label}</p>
                        <p className='text-sm text-slate-300'>{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            
            <div className='flex items-center gap-3 bg-green-500/8 border border-green-500/20 rounded-xl px-4 py-3 mt-2'>
              <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0'
                style={{ boxShadow: '0 0 0 4px rgba(34,197,94,0.2)' }} />
              <span className='text-xs text-green-300'>Available for internships &amp; full-time roles</span>
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='bg-[#0d1117] border border-blue-300/15 rounded-2xl overflow-hidden'
            >
              <div className='p-6 flex flex-col gap-5'>

                
                <div className='flex flex-col gap-1.5'>
                  <label className='text-[10px] uppercase tracking-widest text-slate-500 font-mono'>
                    your name
                  </label>
                  <input
                    type='text'
                    name='from_name'
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder='Name'
                    required
                    className='w-full bg-[#111118] border border-blue-300/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none font-mono transition-all duration-300 focus:border-blue-300/40 focus:bg-[#0d1117]'
                  />
                </div>

                
                <div className='flex flex-col gap-1.5'>
                  <label className='text-[10px] uppercase tracking-widest text-slate-500 font-mono'>
                    your email
                  </label>
                  <input
                    type='email'
                    name='from_email'
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder='you@example.com'
                    required
                    className='w-full bg-[#111118] border border-blue-300/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none font-mono transition-all duration-300 focus:border-blue-300/40 focus:bg-[#0d1117]'
                  />
                </div>

                
                <div className='flex flex-col gap-1.5'>
                  <label className='text-[10px] uppercase tracking-widest text-slate-500 font-mono'>
                    message
                  </label>
                  <textarea
                    name='message'
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder='Hi Tanya, I would like to...'
                    required
                    rows={5}
                    className='w-full bg-[#111118] border border-blue-300/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none font-mono resize-none transition-all duration-300 focus:border-blue-300/40 focus:bg-[#0d1117]'
                  />
                </div>

                
                <motion.button
                  type='submit'
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full py-3 rounded-xl text-sm font-mono tracking-wide border transition-all duration-300 flex items-center justify-center gap-2'
                  style={{
                    background: status === 'success'
                      ? 'rgba(134,239,172,0.15)'
                      : status === 'error'
                      ? 'rgba(248,113,113,0.15)'
                      : 'linear-gradient(135deg, rgba(147,197,253,0.15), rgba(196,181,253,0.15))',
                    borderColor: status === 'success'
                      ? 'rgba(134,239,172,0.4)'
                      : status === 'error'
                      ? 'rgba(248,113,113,0.4)'
                      : 'rgba(147,197,253,0.3)',
                    color: status === 'success'
                      ? '#86efac'
                      : status === 'error'
                      ? '#f87171'
                      : '#e2e8f0',
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    opacity: status === 'loading' ? 0.7 : 1,
                  }}
                >
                  {status === 'idle'    && <> 📨 Send Message </>}
                  {status === 'loading' && <> ⏳ Sending... </>}
                  {status === 'success' && <> ✅ Message Sent! </>}
                  {status === 'error'   && <> ❌ Failed. Try Again </>}
                </motion.button>

              </div>
            </form>
          </motion.div>

        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='text-center text-xs text-slate-600 font-mono mt-16'
        >
           typically reply within 24 hours • let's build something together
        </motion.p>

      </div>
    </section>
  )
}

export default Contact