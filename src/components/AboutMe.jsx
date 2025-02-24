import { useEffect } from "react"
import Aos from "aos"

export function AboutMe() {
  useEffect(() => {
      Aos.init({})
  }, [])

  return (
    <div className='flex h-content items-center justify-center' id="about-me">
      <div className='flex flex-col justify-center items-center gap-25 py-40' data-aos='zoom-in-down'>
        <div className='w-6xl h-content bg-[#fbf5e7] rounded-2xl border-4 border-[#30322d] overflow-hidden shadow-lg'>
          <div className='p-2.5 bg-[#c3e7e5] flex justify-between items-center'>
            <p className='flex-grow text-center text-3xl mt-2'>About Me</p>
            <a className='w-8 rounded-[100%] bg-red-400 flex justify-center items-center border-4' href="#hero">‎</a>
          </div>

          <hr className='border-b-4' />

          <div className='flex flex-col p-15 gap-25 items-center'>
            <div className="flex gap-8 items-center">
              <div className="w-full">
                <p className="text-3xl">My name is</p>
                <h1 className="text-5xl">Raphydhar-Neezamme J. Ibrahim</h1>

                <hr className="w-auto border-2 rounded-full border-[#30322d] my-4" />

                <p className="text-3xl">I began programming during my senior high school year. Discovering that programming can be a form of art, hence I began to learn game development which branched my learning from level design and creating my own game assets.</p>
              </div>

              <img src="capybara.jpg" alt="image" className="h-70 w-96 bg-[#fbf5e7] rounded-2xl border-4 border-[#30322d]" />
            </div>
          </div>
        </div>

        <div className='w-7xl h-content bg-[#fbf5e7] rounded-2xl border-4 border-[#30322d] overflow-hidden shadow-lg'>
          <div className='p-2.5 bg-[#f6d7d4] flex justify-between items-center'>
            <p className='flex-grow text-center text-3xl mt-2'>www.Skillz.com</p>
            <a className='w-8 rounded-[100%] bg-red-400 flex justify-center items-center border-4' href="#hero">‎</a>
          </div>

          <hr className='border-b-4' />

          <div className='flex flex-col p-15 gap-25 items-center'>
            <div className="grid-cols-3 grid gap-8">
              <div className="border-4 border-[#30322d] rounded-2xl p-10 shadow-lg flex flex-col items-center h-130">
                <img src="backend.png" alt="image" className="w-30 mb-10" />

                <h1 className="text-3xl text-center mb-5">Backend <br /> Development</h1>
                <p className="text-2xl text-center">Logic can be difficult to implement! But with enough time I can tailor the functionalities according to your needs!</p>
              </div>

              <div className="border-4 border-[#30322d] rounded-2xl p-10 shadow-lg flex flex-col items-center h-130">
                <img src="frontend.png" alt="image" className="w-30 mb-10" />

                <h1 className="text-3xl text-center mb-5">Frontend <br /> Development</h1>
                <p className="text-2xl text-center">A project can go on without design, but why settle for less! I enjoy designing themes and I integrate creative magic to the projects I tackle.</p>
              </div>

              <div className="border-4 border-[#30322d] rounded-2xl p-10 shadow-lg flex flex-col items-center h-130">
                <img src="3d.png" alt="image" className="w-30 mb-10" />

                <h1 className="text-3xl text-center mb-5">∋D <br /> Modelling</h1>
                <p className="text-2xl text-center">I create my own ∋D assets to make everything in a game or website feel that they belong on the same palette.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}