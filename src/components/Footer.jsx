import { useEffect, useState } from "react"

export function Footer() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {setTime(new Date())}, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-15 w-full fixed bottom-0">
            <div className="bg-[#c3e7e5] h-full w-full border-t-4 border-[#30322d] flex p-1 lg:px-4 items-center gap-1">
                <a className="border-[#30322d] bg-[#fbf5e7] hover:bg-white w-30 lg:w-40 border-2 lg:border-4 rounded-xl text-start text-md lg:text-md p-2 lg:py-1 flex items-center" href="#about-me">About Me</a>
                <a className="border-[#30322d] bg-[#fbf5e7] hover:bg-white w-30 lg:w-40 border-2 lg:border-4 rounded-xl text-start text-md lg:text-md p-2 lg:py-1 flex items-center" href="#projects">Projects</a>
                <a className="border-[#30322d] bg-[#fbf5e7] hover:bg-white w-30 lg:w-40 border-2 lg:border-4 rounded-xl text-start text-md lg:text-md p-2 lg:py-1 flex items-center" href="#explorer">Explorer</a>
                
                <div className="ml-auto flex gap-2 lg:gap-5 items-center">
                    <img className="h-5 lg:h-5" src="wifi.png" alt="wifi" />
                    <img className="h-6 lg:h-6" src="battery.png" alt="battery" />
                    <div className="border-1 lg:border-2 rounded-2xl h-10"></div>
                    <div className="flex flex-col text-end font-bold">
                        <h1 className="text-sm lg:text-sm">{ time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) }</h1>
                        <h1 className="text:sm lg:text-sm">{ time.toLocaleDateString() }</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}