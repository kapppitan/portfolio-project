import { useEffect } from "react"
import Aos from "aos"

export function MyProjects() {
    useEffect(() => {
        Aos.init({})
    }, [])

    return (
        <div className='flex h-content items-center justify-center' id="projects">
            <div className='flex flex-col justify-center items-center gap-25 p-10 lg:p-20 w-full' data-aos='zoom-in-down'>
                <div className='w-full h-content bg-[#fbf5e7] rounded-2xl border-4 border-[#30322d] overflow-hidden shadow-lg items-center'>
                    <div className='p-2.5 bg-amber-200 flex justify-between items-center'>
                        <p className='flex-grow text-center text-md lg:text-3xl'>Projects</p>
                        <a className='w-8 rounded-[100%] bg-red-400 hover:bg-red-500 flex justify-center items-center border-4' href="#hero">‎</a>
                    </div>

                    <div className="border-b-4 border-t-4 p-5 gap-5 flex flex-col">
                        <div className="flex gap-2 w-full">
                            <div className="border-4 rounded-lg px-5 text-2xl lg:py-2 lg:px-5 lg:text-2xl flex w-full items-center gap-5 hover:bg-white">
                                <img className="h-5" src="search.png" alt="search" />
                                Search
                            </div>

                            <img className="border-4 rounded-lg h-15 p-3 hover:bg-white" src="filter.png" alt="filter" />
                        </div>

                        <div className="flex gap-2 text-sm lg:text-lg">
                            <p className="px-5 py-2 border-4 rounded-lg bg-yellow-200 font-bold">projects</p>
                            <p className="px-5 py-2 border-4 rounded-lg font-bold">i have</p>
                            <p className="px-5 py-2 border-4 rounded-lg font-bold">worked on</p>
                            <p className="px-5 py-2 border-4 rounded-lg font-bold">recently</p>
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <div className="border-b-4 p-5 lg:p-15 flex gap-10 w-full flex-col lg:flex-row items-center lg:items-stretch">
                            <img className="border-4 rounded-xl h-50 w-50 lg:w-fit lg:h-100" src="travelers.png" />
                            <div className="flex flex-col gap-5 text-center lg:text-start">
                                <div className="gap-2 flex flex-col">
                                    <h1 className="text-6xl">The Travelers { '(A Blog)' }</h1>
                                    <p className="text-2xl text-neutral-500">By Raphy J. Ibrahim</p>
                                </div>

                                <div className="text-2xl text-justify px-10 py-5 lg:px-0">
                                    A blogging website dedicated to BSIT Industry Tour 2025. It contains our journey from day 1 to day 8 of the tour to Luzon.
                                </div>

                                <div className="flex w-full items-center gap-5 mt-auto">
                                    <a className="text-center w-full border-4 rounded-lg p-2 text-xl bg-yellow-200 hover:bg-yellow-300" href="https://the-travelers.netlify.app/">Preview</a>
                                    <a className="text-center w-full border-4 rounded-lg p-2 text-xl bg-yellow-200 hover:bg-yellow-300" href="https://github.com/kapppitan/kap-blog">GitHub</a>
                                    <img className="h-10" src="bookmark.png" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="border-b-4 p-5 lg:p-15 flex gap-10 w-full flex-col lg:flex-row items-center lg:items-stretch">
                            <img className="border-4 rounded-xl h-50 w-50 lg:w-fit lg:h-100 bg-cover" src="calculator.jpeg" />
                            <div className="flex flex-col gap-5 text-center lg:text-start">
                                <div className="gap-2 flex flex-col">
                                    <h1 className="text-6xl">A Cute Calculator</h1>
                                    <p className="text-2xl text-neutral-500">By Raphy J. Ibrahim</p>
                                </div>

                                <div className="text-2xl text-justify px-10 py-5 lg:px-0">
                                    A simple calculator we made as a project during our 4th year, I went with a cute theme for this calculator. I worked as the frontend for this one while my partner for this activity worked on the backend.
                                </div>

                                <div className="flex w-full items-center gap-5 mt-auto">
                                    <a className="text-center w-full border-4 rounded-lg p-2 text-xl bg-yellow-200 hover:bg-yellow-300" href="https://ibrahim-aguilo-calculator.netlify.app/">Preview</a>
                                    <a className="text-center w-full border-4 rounded-lg p-2 text-xl bg-yellow-200 hover:bg-yellow-300" href="https://github.com/kapppitan/calculator">GitHub</a>
                                    <img className="h-10" src="bookmark.png" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="p-5 lg:p-15 flex gap-10 w-full flex-col lg:flex-row items-center lg:items-stretch">
                            <img className="border-4 rounded-xl h-50 w-50 lg:w-fit lg:h-100 bg-cover" src="therental.jpeg" />
                            <div className="flex flex-col gap-5 text-center lg:text-start">
                                <div className="gap-2 flex flex-col">
                                    <h1 className="text-6xl">The Rental Store</h1>
                                    <p className="text-2xl text-neutral-500">By Raphy J. Ibrahim</p>
                                </div>

                                <div className="text-2xl text-justify px-10 py-5 lg:px-0">
                                    This is an ongoing project of mine. This website will house the archives for my horror games, I themed it after the old VHS and 90s vibes.
                                </div>

                                <div className="flex w-full items-center gap-5 mt-auto">
                                    <a className="text-center w-full border-4 rounded-lg p-2 text-xl bg-yellow-200 hover:bg-yellow-300" href="https://therentalstore.netlify.app/">Preview</a>
                                    <a className="text-center w-full border-4 rounded-lg p-2 text-xl bg-yellow-200 hover:bg-yellow-300" href="https://github.com/kapppitan/the-rental">GitHub</a>
                                    <img className="h-10" src="bookmark.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}