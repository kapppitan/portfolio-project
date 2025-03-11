import { useEffect, useState } from "react";
import Aos from "aos";

export function AboutMe() {
  useEffect(() => {
    Aos.init({});
  }, []);

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  return (
    <div className='flex h-content items-center justify-center' id="about-me">
      <div className='flex flex-col justify-center items-center gap-25 py-10 lg:py-40' data-aos='zoom-in-down'>
        {/* About Me */}
        <div className='w-70 lg:w-6xl h-content bg-[#fbf5e7] rounded-2xl border-4 border-[#30322d] overflow-hidden shadow-lg'>
          <div className='p-2.5 bg-[#c3e7e5] flex justify-between items-center'>
            <p className='flex-grow text-center text-1xl lg:text-3xl'>About Me</p>
            <a className='w-8 rounded-[100%] bg-red-400 flex justify-center items-center border-4' href="#hero">‎</a>
          </div>

          <hr className='border-b-4' />

          <div className='flex flex-col p-5 lg:p-15 gap-25 items-center'>
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <img src="capybara.jpg" alt="image" className="h-50 flex lg:hidden bg-[#fbf5e7] rounded-2xl border-4 border-[#30322d]" />

              <div className="w-full">
                <p className="text-sm lg:text-3xl">My name is</p>
                <h1 className="text-1xl lg:text-5xl font-bold">Raphydhar-Neezamme J. Ibrahim</h1>

                <hr className="w-auto border-2 rounded-full border-[#30322d] my-4" />

                <p className="text-sm lg:text-3xl">I began programming during my senior high school year. Discovering that programming can be a form of art, hence I began to learn game development which branched my learning from level design and creating my own game assets.</p>
              </div>

              <img src="capybara.jpg" alt="image" className="h-70 w-96 hidden lg:flex bg-[#fbf5e7] rounded-2xl border-4 border-[#30322d]" />
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className='w-70 lg:w-6xl bg-[#fbf5e7] rounded-2xl border-4 border-[#30322d] overflow-hidden shadow-lg'>
          <div className='p-2.5 bg-[#f6d7d4] flex justify-between items-center'>
            <p className='flex-grow text-center text-1xl lg:text-3xl'>More About Me</p>
            <a className='w-8 rounded-[100%] bg-red-400 flex justify-center items-center border-4' href="#hero">‎</a>
          </div>

          <hr className='border-b-4' />

          <div className='flex flex-col p-5 lg:p-15 gap-5 lg:items-center lg:w-full'>
            <div className="flex lg:hidden gap-2">
              <button className="p-2 outline-2 rounded font-bold w-15" onClick={handlePrev}> { "<" } </button>
              <button className="p-2 outline-2 rounded font-bold w-15" onClick={handleNext}> { ">" } </button>
              <p className="p-2 ps-2 outline-2 rounded w-full bg-white">http://skills.com</p>
            </div>

            <div className="grid-cols-3 grid gap-8 h-fit">
              <div className={`border-4 border-[#30322d] rounded-2xl p-10 shadow-lg flex flex-col items-center lg:h-130 w-58 lg:w-fit ${index === 0 ? 'block' : 'hidden'} lg:flex`}>
                <img src="backend.png" alt="image" className="w-15 lg:w-30 mb-10" />

                <h1 className="text-2xl lg:text-3xl text-center mb-5 font-bold">Backend <br /> Development</h1>
                <p className="text-sm lg:text-2xl text-center">Logic can be difficult to implement! But with enough time I can tailor the functionalities according to your needs!</p>
              </div>

              <div className={`border-4 border-[#30322d] rounded-2xl p-10 shadow-lg flex flex-col items-center lg:h-130 w-58 lg:w-fit ${index === 1 ? 'block' : 'hidden'} lg:flex`}>
                <img src="frontend.png" alt="image" className="w-15 lg:w-30 mb-10" />

                <h1 className="text-2xl lg:text-3xl text-center mb-5 font-bold">Frontend <br /> Development</h1>
                <p className="text-sm lg:text-2xl text-center">A project can go on without design, but it doesn't have to! I enjoy designing the projects I tackle.</p>
              </div>

              <div className={`border-4 border-[#30322d] rounded-2xl p-10 shadow-lg flex flex-col items-center lg:h-130 w-58 lg:w-fit ${index === 2 ? 'block' : 'hidden'} lg:flex`}>
                <img src="3d.png" alt="image" className="w-15 lg:w-30 mb-10" />

                <h1 className="text-2xl lg:text-3xl text-center mb-5 font-bold">3D <br /> Modelling</h1>
                <p className="text-sm lg:text-2xl text-center">I create my own ∋D assets to make everything in a game or website feel that they belong on the same palette.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}