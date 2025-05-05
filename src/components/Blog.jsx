import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [useLocation().pathname]);

    return (
        <div className='flex h-content w-full justify-center'>
            <div className='flex flex-col justify-center items-center gap-25 w-full p-10'>
                <div className='w-full h-content bg-[#fbf5e7] rounded-2xl border-4 border-[#30322d] overflow-hidden shadow-lg'>
                    <div className='p-2.5 bg-purple-300 flex justify-between items-center'>
                        <p className='flex-grow text-center text-2xl lg:text-3xl'>Blog</p>
                        <NavLink to='/' className='w-8 rounded-[100%] bg-red-400 hover:bg-red-500 flex justify-center items-center border-4'>‎</NavLink>
                    </div>

                    <hr className='border-b-4' />

                    <img className="border-b-4 h-50 lg:h-100 object-cover w-full" src="/capybara_hero.jpg" alt="image" />
                        
                    <div className='flex flex-col p-10 gap-5'>
                        <div className="flex flex-col text-center items-center gap-5 mb-10">
                            <h1 className="text-6xl text-center">Blog Name</h1>
                            <hr className="w-1/4 border-2 rounded-2xl" />
                            <p className="text-2xl">July 14, 2025</p>
                        </div>

                        <p className="text-xl text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, nemo. Ipsa numquam laborum cum veniam nostrum, reiciendis doloremque assumenda! Magni laudantium quaerat, culpa veritatis doloribus molestiae eum. Possimus, placeat dolorem!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}