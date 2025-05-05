import { Fragment } from 'react'

import './App.css'

import { Hero } from './components/Hero'
import { AboutMe } from './components/AboutMe'
import { MyProjects } from './components/MyProjects'
import { Footer } from './components/Footer'
import { Explorer } from './components/Explorer'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'

import { Routes, Route } from 'react-router-dom'

function App() {
  	return (
		<Routes>
			<Route path='/' element={
				<div className='flex flex-col antialiased overflow-hidden'>
					<Hero />
					<AboutMe />
					<MyProjects />
					<Explorer />
					<Contact />
					<Footer />
				</div>
			} />

			{/* <Route path="/blog/:id" element={<Blog />} /> */}
		</Routes>
  	)
}

export default App
