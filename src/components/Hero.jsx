export function Hero() {
  return (
    <div className="flex h-screen" id="hero">
      {/* Navigation Bar */}
      <div className="absolute flex lg:flex-col p-5 lg:p-20 gap-5 lg:gap-20 w-full items-center lg:items-start justify-center pt-15">
        <a
          className="w-15 lg:w-25 outline-0 cursor-default text-center hover:bg-[#fbf5e7] rounded-lg p-2"
          href="#about-me"
        >
          <img src="old-computer.png" alt="image" />
          About
        </a>

        <a
          className="w-15 lg:w-25 outline-0 cursor-default text-center hover:bg-[#fbf5e7] rounded-lg p-2"
          href="#projects"
        >
          <img src="open-folder.png" alt="image" />
          <p className="font-medium">Projects</p>
        </a>

        <a
          className="w-15 lg:w-25 outline-0 cursor-default text-center hover:bg-[#fbf5e7] rounded-lg p-2"
          href="#explorer"
        >
          <img src="globe-earth.png" alt="image" />
          <p className="font-medium">Certificates</p>
        </a>
      </div>

      {/* Hero */}
      <div className="flex flex-col w-screen items-center justify-center overflow-hidden">
        <div className="w-70 lg:w-1/2 h-content bg-[#fbf5e7] rounded-2xl border-4 border-[#30322d] overflow-hidden shadow-lg">
          <div className="p-2.5 bg-[#c3e7e5] flex justify-between items-center">
            <p className="flex-grow text-center text-1xl lg:text-3xl">
              The Raphysitory
            </p>
            <button className="w-8 rounded-[100%] bg-red-400 flex justify-center items-center border-4">
              ‎
            </button>
          </div>

          <hr className="border-b-4" />

          <div className="flex flex-col lg:flex-row p-4 lg:p-8 gap-4 lg:gap-8 items-center">
            <img
              src="capybara_hero.jpg"
              alt="image"
              className="h-25 w-25 lg:h-70 lg:w-70 bg-[#fbf5e7] rounded-2xl border-4 border-[#30322d]"
            />

            <div className="w-full">
              <div className="flex items-center mb-2 lg:mb-8">
                <p className="text-2xl lg:text-5xl text-center w-full font-bold">
                  Hi, I'm <span className="bold">Raphy!</span>
                </p>
              </div>

              <p className="text-sm lg:text-3xl text-justify">
                An aspiring game developer. I strive to merge feature and
                functions together to breathe life into the project I tackle!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
