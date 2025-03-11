import { Fragment } from 'react'

import './App.css'

import { Hero } from './components/Hero'
import { AboutMe } from './components/AboutMe'
import { MyProjects } from './components/MyProjects'
import { Footer } from './components/Footer'

function App() {
  return (
    <Fragment>
      <div className='flex flex-col antialiased overflow-hidden'>
        <Hero />
        <AboutMe />
        <MyProjects />
      </div>
    </Fragment>
  )
}

export default App
