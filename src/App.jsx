import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex h-screen'>
        <div className='absolute flex flex-col items-start p-8 gap-20'>
          <button className='size-20 outline-0 cursor-pointer'>
            <img src="old-computer.png" alt="image" />
            <p className='font-medium'>About Me</p>
          </button>

          <button className='size-20 outline-0 cursor-pointer'>
            <img src="open-folder.png" alt="image" />
            <p className='font-medium'>My Projects</p>
          </button>
        </div>

        <div className='flex flex-col w-full items-center justify-center'>
          <div className='text-start bg-[#fbf5e7] p-10 rounded-2xl border-4 border-[#30322d]'>
            <h1 className='text-2xl'>Welcome to the</h1>
            <h1 className='text-9xl'>Raphysitory</h1>
            <p className='text-end'>a portfolio by Raphydhar-Neezamme J. Ibrahim</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
