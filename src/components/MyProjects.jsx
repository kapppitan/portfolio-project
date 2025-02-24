import { useEffect } from "react"
import Aos from "aos"

export function MyProjects() {
    useEffect(() => {
        Aos.init({})
    }, [])

    return (
        <div className='flex h-content items-center justify-center' id="projects">
            <div className='flex flex-col justify-center items-center gap-25 py-40' data-aos='zoom-in-down'>
                <div className='w-6xl h-content bg-[#fbf5e7] rounded-2xl border-4 border-[#30322d] overflow-hidden shadow-lg'>
                    <div className='p-2.5 bg-[#c3e7e5] flex justify-between items-center'>
                        <p className='flex-grow text-center text-3xl mt-2'>Projects Explorer</p>
                        <a className='w-8 rounded-[100%] bg-red-400 flex justify-center items-center border-4' href="#hero">‎</a>
                    </div>

                    <hr className='border-b-4' />

                    <div className='flex flex-col p-15 gap-5 items-center'>
                        <p className="text-5xl">Page Not Found</p>
                        <p className="text-3xl">Still under construction!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}