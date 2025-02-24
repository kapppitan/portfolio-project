export function Hero() {
    return (
        <div className='flex h-screen' id='hero'>
            {/* Navigation Bar */}
            <div className='absolute flex flex-col items-start p-20 gap-20'>
                <a className='w-25 outline-0 cursor-default text-center hover:bg-[#fbf5e7] rounded-lg p-2' href='#about-me'>
                    <img src="old-computer.png" alt="image" />
                    About Me
                </a>

                <a className='w-25 outline-0 hover:bg-[#fbf5e7] rounded-lg p-2' href="#projects">
                    <img src="open-folder.png" alt="image" />
                    <p className='font-medium'>My Projects</p>
                </a>

                <button className='w-25 outline-0 hover:bg-[#fbf5e7] rounded-lg p-2'>
                    <img src="globe-earth.png" alt="image" />
                    <p className='font-medium'>Explorer</p>
                </button>
            </div>

            {/* Hero */}
            <div className='flex flex-col w-screen items-center justify-center overflow-hidden'>
                <div className='w-4xl h-content bg-[#fbf5e7] rounded-2xl border-4 border-[#30322d] overflow-hidden shadow-lg'>
                    <div className='p-2.5 bg-[#c3e7e5] flex justify-between items-center'>
                        <p className='flex-grow text-center text-3xl mt-2'>The Raphysitory</p>
                        <button className='w-8 rounded-[100%] bg-red-400 flex justify-center items-center border-4' href="#hero">‎</button>
                    </div>

                    <hr className='border-b-4' />

                    <div className='flex p-8 gap-8'>
                        <img src="capybara.jpg" alt="image" className="h-70 w-96 bg-[#fbf5e7] rounded-2xl border-4 border-[#30322d]" />

                        <div className="w-full">
                            <div className="flex items-center mb-10">
                                <p className="text-6xl">Hi, I'm <span className="bold">Raphy!</span></p>
                            </div>

                            <p className="text-3xl mb-7">An aspiring programmer that focuses on full-stack development. Valuing both art and logic to give life into projects.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}