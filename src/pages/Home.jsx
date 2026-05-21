import React from 'react'
import Hero from '../components/Hero'
import AboutMe from '../components/About'
import Skill from '../components/Skill'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Skill />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home