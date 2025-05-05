export function Contact() {
    return (
        <div className='flex h-screen w-full items-center justify-center'>
            <div className='flex flex-col w-full justify-center items-center gap-25 p-10 lg:p-20' data-aos='zoom-in-down'>
                <div className='w-full lg:w-full h-content bg-[#fbf5e7] rounded-2xl border-4 border-[#30322d] overflow-hidden shadow-lg'>
                    <div className='p-2.5 bg-green-300 flex justify-between items-center'>
                        <p className='flex-grow text-center text-2xl lg:text-3xl'>Contact Me</p>
                        <a className='w-8 rounded-[100%] bg-red-400 hover:bg-red-500 flex justify-center items-center border-4' href="#hero">‎</a>
                    </div>

                    <hr className='border-b-4' />

                    <div className='flex flex-col lg:flex-row p-5 lg:p-15 gap-5 items-start'>
                        <div className="flex flex-col lg:w-full gap-2">
                            <h1 className="text-md text-center lg:text-start lg:text-3xl"><span className="font-bold">Gmail: </span>raphydhar.ibrahim1403@gmail.com</h1>
                            <h1 className="text-md text-center lg:text-start lg:text-3xl">
                              <span className="font-bold">LinkedIn: </span>
                              <a href="https://www.linkedin.com/in/raphydhar-ibrahim/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                                  https://www.linkedin.com/in/raphydhar-ibrahim/
                              </a>
                            </h1>
                        </div>

                        <div className="flex flex-col lg:w-full gap-2">
                            <h1 className="text-md text-center lg:text-3xl lg:text-start"><span className="font-bold">Contact Number: </span>{ '(+63) 945 817 0017' }</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
