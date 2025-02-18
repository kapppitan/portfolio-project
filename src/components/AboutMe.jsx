import { useEffect } from "react"
import Aos from "aos"

export function AboutMe() {
    useEffect(() => {
        Aos.init({})
    }, [])

    return (
      <div className='flex h-screen items-center justify-center'>
        <div className='flex justify-center' id='about-me'>
          <div className='w-6xl h-150 bg-[#fbf5e7] rounded-2xl border-4 border-[#30322d] overflow-hidden' data-aos='zoom-in-down'>
            <div className='p-2.5 bg-[#c3e7e5] flex justify-between items-center'>
              <p className='flex-grow text-center text-2xl mt-2'>About Me</p>
              <a className='w-8 rounded-[100%] bg-red-400 flex justify-center items-center border-4' href="#hero">‎</a>
            </div>

            <hr className='border-b-4' />

            <div className='flex p-8 gap-8'>
              <div className="h-96 w-96 bg-[#fbf5e7] rounded-2xl border-4 border-[#30322d]">

              </div>

              <div className="w-full">
                <p className="text-3xl">Hello! I am</p>
                <h1 className="text-6xl">Raphy</h1>

                <hr className="w-auto border-2 border-[#30322d] my-4" />

                <p className="text-2xl">I am an aspiring programmer that focuses on full-stack development. Delivering both quality and functionality to my projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}