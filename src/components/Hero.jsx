export function Hero() {
    return (
        <div className='flex h-screen' id='hero'>
            {/* Navigation Bar */}
            <div className='absolute flex flex-col items-start p-8 gap-20'>
                <a className='w-25 outline-0 cursor-default text-center hover:bg-[#fbf5e7] rounded-lg p-2' href='#about-me'>
                    <img src="old-computer.png" alt="image" />
                    About Me
                </a>

                <button className='w-25 outline-0 hover:bg-[#fbf5e7] rounded-lg p-2'>
                    <img src="open-folder.png" alt="image" />
                    <p className='font-medium'>My Projects</p>
                </button>

                <button className='w-25 outline-0 hover:bg-[#fbf5e7] rounded-lg p-2'>
                    <img src="globe-earth.png" alt="image" />
                    <p className='font-medium'>Explorer</p>
                </button>
            </div>

            {/* Hero */}
            <div className='flex flex-col w-screen items-center justify-center overflow-hidden'>
                <div className='text-start bg-[#fbf5e7] p-15 rounded-2xl border-4 border-[#30322d]'>
                <h1 className='text-3xl'>Welcome to the</h1>
                <h1 className='text-9xl'>Raphysitory</h1>
                <p className='text-end'>a portfolio by Raphydhar-Neezamme J. Ibrahim</p>
                </div>
            </div>
        </div>
    )
}