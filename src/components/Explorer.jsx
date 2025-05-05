import { Routes, Route, NavLink } from "react-router-dom";

export function Explorer() {
    return (
        <div className='flex h-content w-full items-center justify-center' id="explorer">
            <div className='flex flex-col w-full justify-center items-center gap-25 p-10 lg:p-20' data-aos='zoom-in-down'>
                <div className='w-full lg:w-full h-content bg-[#fbf5e7] rounded-2xl border-4 border-[#30322d] overflow-hidden shadow-lg'>
                    <div className='p-2.5 bg-purple-300 flex justify-between items-center'>
                        <p className='flex-grow text-center text-2xl lg:text-3xl'>Certificates</p>
                        <a className='w-8 rounded-[100%] bg-red-400 hover:bg-red-500 flex justify-center items-center border-4' href="#hero">‎</a>
                    </div>

                    <hr className='border-b-4' />

                    <div className='flex flex-col lg:grid lg:grid-cols-4 p-5 gap-5 items-center'>
                        <div className="border-4 rounded-lg p-5 lg:p-5 flex flex-col gap-2 hover:bg-purple-50 bg-purple-100">
                            <img className="w-full border-4 rounded-md" src="cert1.jpg" />

                            <div className="flex gap-2 items-center justify-start p-2 w-full">
                                <img className="h-7" src="heart.png" alt="heart" />
                                <img className="h-6" src="share.png" alt="share" />
                            </div>

                            <h1 className="text-start flex text-xl px-2"><span className="font-bold me-2">#kappp</span>cybercrime</h1>
                        </div>

                        <div className="border-4 rounded-lg p-5 lg:p-5 flex flex-col gap-2 hover:bg-purple-50 bg-purple-100">
                            <img className="w-full border-4 rounded-md" src="cert2.jpg" />

                            <div className="flex gap-2 items-center justify-start p-2 w-full">
                                <img className="h-7" src="heart.png" alt="heart" />
                                <img className="h-6" src="share.png" alt="share" />
                            </div>

                            <h1 className="text-start flex text-xl px-2"><span className="font-bold me-2">#kappp</span>c programming</h1>
                        </div>

                        <div className="border-4 rounded-lg p-5 lg:p-5 flex flex-col gap-2 hover:bg-purple-50 bg-purple-100">
                            <img className="w-full border-4 rounded-md" src="cert3.jpg" />

                            <div className="flex gap-2 items-center justify-start p-2 w-full">
                                <img className="h-7" src="heart.png" alt="heart" />
                                <img className="h-6" src="share.png" alt="share" />
                            </div>

                            <h1 className="text-start flex text-xl px-2"><span className="font-bold me-2">#kappp</span>data structures</h1>
                        </div>

                        <a href='https://drive.google.com/drive/folders/1AWR2sWiQyk0HP5gHbLonNpz6hY__LbAD?usp=sharing' className="text-2xl border-4 rounded-lg p-5 h-full w-full items-center justify-center lg:p-5 flex flex-col gap-2 hover:bg-purple-50 bg-purple-100">
                            Browse More...
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}