import { NavLink } from "react-router-dom";

export function Explorer() {
    return (
        <div className='flex h-screen items-center justify-center' id="explorer">
            <div className='flex flex-col justify-center items-center gap-25 py-40' data-aos='zoom-in-down'>
                <div className='w-70 lg:w-6xl h-content bg-[#fbf5e7] rounded-2xl border-4 border-[#30322d] overflow-hidden shadow-lg'>
                    <div className='p-2.5 bg-[#c3e7e5] flex justify-between items-center'>
                        <p className='flex-grow text-center text-md lg:text-3xl'>Explorer</p>
                        <a className='w-8 rounded-[100%] bg-red-400 hover:bg-red-500 flex justify-center items-center border-4' href="#hero">‎</a>
                    </div>

                    <hr className='border-b-4' />

                    <div className='grid grid-cols-1 lg:grid-cols-4 p-5 gap-5 items-center'>
                        <NavLink to={"/blog/1"} className="border-4 rounded-lg p-2 flex flex-col gap-2 hover:bg-white">
                            <img className="h-55 lg:h-60 border-4 rounded-md" src="capybara_hero.jpg" alt="blog" />

                            <div className="flex gap-2 items-center justify-start p-2 w-full">
                                <img className="h-7" src="heart.png" alt="heart" />
                                <img className="h-6" src="share.png" alt="share" />
                            </div>

                            <h1 className="text-start flex text-xl"><span className="font-bold me-2">#kappp</span>blog post...</h1>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}