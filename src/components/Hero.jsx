import React from 'react'
import { motion } from 'framer-motion'
import { assets } from "../assets/assets";

const Hero = () => {
  

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id='home'
      className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
    >
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>

        
        <div className='md:w-1/2 mb-10 md:mb-0'>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className='text-4xl md:text-6xl font-bold mb-4 text-white'
          >
            Hi, I'm  <span className='bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent'>
              Tanya Prajapati.
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='text-2xl md:text-4xl font-semibold mb-6 text-white typewriter'
          >
            MERN Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className='text-lg text-gray-300 mb-8'
          >
            I create responsive and interactive web applications using modern technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className='flex space-x-4'
          >
            <a
              href='#projects'
              className='px-6 py-3 bg-blue-300 rounded-lg font-medium hover:bg-blue-400 transition duration-300'
            >
              View My Work
            </a>
            <a
              href='#contact'
              className='px-6 py-3 border border-blue rounded-lg font-medium hover:bg-blue/50 transition duration-300'
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        
        <div className='md:w-1/2 flex justify-center'>
          <div className='relative flex items-center justify-center w-[260px] h-[260px]'>

            
            <motion.div
              className='absolute w-[300px] h-[300px]'
              style={{
                background: "conic-gradient(from 0deg, #b4c8f0, #c4b5fd, #93c5fd, #e0d7ff, #a5b4fc, #bfdbfe, #b4c8f0)",
                filter: "blur(1px)",
                WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 6px), black calc(100% - 6px))",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 6px), black calc(100% - 6px))",
              }}
              animate={{
                rotate: 360,
                borderRadius: [
                  "50%",
                  "60% 40% 55% 45% / 45% 55% 45% 55%",
                  "45% 55% 40% 60% / 55% 45% 55% 45%",
                  "50%",
                ],
                scale: [1, 1.02, 0.98, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            
            <motion.div
              className='absolute w-[290px] h-[290px] rounded-full border border-dashed border-blue-300/25'
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className='absolute w-[260px] h-[260px] rounded-full border border-dashed border-violet-300/20'
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
           
            
            {[
              { text: "FULL_STACK.exe",   pos: "top-[10px] left-1/2 -translate-x-1/2", delay: 0   },
              { text: "STATUS: AVAILABLE", pos: "bottom-[8px] left-1/2 -translate-x-1/2", delay: 1.3 },
            ].map((tag, i) => (
              <motion.div
                key={i}
                className={`absolute z-20 text-[9px] tracking-widesttext-indigo-300' font-mono ${tag.pos}`}
                animate={{ opacity: [0, 0.7, 0.7, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: tag.delay }}
              >
                {tag.text}
              </motion.div>
            ))}

            
            <motion.img
              src={assets.profileImg}
              alt='Tanya Prajapati'
              className='relative z-10 w-[200px] h-[200px] rounded-full object-cover object-top '
              style={{ border: "2px solid rgba(124,58,237,0.6)" }}
             animate={{
  boxShadow: [
    "0 0 0 2px rgba(147,197,253,0.6), 0 0 40px rgba(147,197,253,0.3), 0 0 80px rgba(196,181,253,0.15)",
    "0 0 0 3px rgba(196,181,253,0.9), 0 0 60px rgba(196,181,253,0.5), 0 0 100px rgba(147,197,253,0.25)",
    "0 0 0 2px rgba(147,197,253,0.6), 0 0 40px rgba(147,197,253,0.3), 0 0 80px rgba(196,181,253,0.15)",
  ],
}}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
            />

          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Hero;