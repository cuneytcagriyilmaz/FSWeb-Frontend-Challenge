import { useState } from 'react'
import './App.css'
import Mode from './coponents/mode/Mode'
import Header from './coponents/header/Header'
import Hero from './coponents/hero/Hero'
import Skills from './coponents/skills/Skills'
import Profile from './coponents/profile/Profile'
import Projects from './coponents/projects/Projects'
import Footer from './coponents/footer/Footer'

function App() {

  return (
    <div className='main-container'>
      <Mode />
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
