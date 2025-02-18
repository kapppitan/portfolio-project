import { Fragment } from 'react'

import './App.css'
import { Hero } from './components/Hero'
import { AboutMe } from './components/AboutMe'

function App() {
  return (
    <Fragment>
      <div className='flex flex-col antialiased'>
        <Hero />
        <AboutMe />    
      </div>
    </Fragment>
  )
}

export default App
