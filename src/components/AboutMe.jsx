export function AboutMe() {
    return (
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
    )
}