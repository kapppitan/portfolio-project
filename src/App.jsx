import './App.css'

function App() {
  return (
    <>
      <div className='flex flex-col antialiased'>
        <div className='flex h-screen' id='hero'>
          {/* Navigation Bar */}
          <div className='absolute flex flex-col items-start p-8 gap-20'>
            <a className='w-25 outline-0 cursor-pointer text-center hover:bg-[#fbf5e7] rounded-lg p-2' href='#about-me'>
              <img src="old-computer.png" alt="image" />
              About Me
            </a>

            <button className='w-25 outline-0 cursor-pointer hover:bg-[#fbf5e7] rounded-lg p-2'>
              <img src="open-folder.png" alt="image" />
              <p className='font-medium'>My Projects</p>
            </button>
          </div>

          {/* Hero */}
          <div className='flex flex-col w-screen items-center justify-center overflow-hidden'>
            <div className='text-start bg-[#fbf5e7] p-10 rounded-2xl border-4 border-[#30322d]'>
              <h1 className='text-2xl'>Welcome to the</h1>
              <h1 className='text-9xl'>Raphysitory</h1>
              <p className='text-end'>a portfolio by Raphydhar-Neezamme J. Ibrahim</p>
            </div>
          </div>
        </div>

        {/* Dialogs */}
        <div className='flex h-screen items-center justify-center'>
          <div className='flex justify-center' id='about-me'>
            <div className='w-6xl h-150 bg-[#fbf5e7] rounded-2xl border-4 border-[#30322d] overflow-hidden'>
              <div className='p-2.5 bg-[#c3e7e5] flex justify-between items-center'>
                <p className='flex-grow text-center'>About Me</p>
                <a className='w-8 rounded-[100%] bg-red-400 flex justify-center items-center border-4' href="#hero">‎</a>
              </div>

              <hr className='border-b-4' />

              <div className='p-4'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident cumque enim corporis natus! Nobis doloribus quasi perspiciatis, numquam ex aliquam obcaecati provident. Placeat distinctio impedit, voluptatum modi nisi possimus eligendi.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
