import { useEffect, useState } from "react";
import Aos from "aos";

export function AboutMe() {
	useEffect(() => {
		Aos.init({});
	}, []);

	const [index, setIndex] = useState(0);
	const [tab, setTab] = useState(1);

	const handleNext = () => {
		setIndex((prevIndex) => (prevIndex + 1) % 3);
	};

	const handlePrev = () => {
		setIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
	};

	return (
		<div className="flex h-content items-center justify-center" id="about-me">
			<div
				className="flex flex-col w-full justify-center items-center p-10 lg:p-20"
				data-aos="zoom-in-down"
			>
				<div className="w-full lg:w-full bg-[#fbf5e7] rounded-t-2xl border-4 border-[#30322d] overflow-hidden shadow-lg">
					<div className="p-2.5 bg-[#c3e7e5] flex justify-between items-center">
						<p className="flex-grow text-center text-1xl lg:text-3xl">
						About Me
						</p>
						<a
						className="w-8 rounded-[100%] bg-red-400 hover:bg-red-500 flex justify-center items-center border-4"
						href="#hero"
						>
						‎
						</a>
					</div>
				</div>

				<div className="w-full h-content lg:h-full border-4 border-t-0 rounded-b-2xl bg-[#fbf5e7] p-3 flex flex-col lg:flex-row gap-4">
					<div className="flex lg:flex-col w-full lg:w-75 gap-2">
						<button
						className="border-4 border-[#30322d] rounded-2xl p-3 text-2xl hover:bg-white lg:text-start w-full"
						onClick={() => setTab(1)}
						>
						Synopsis
						</button>
						<button
						className="border-4 border-[#30322d] rounded-2xl p-3 text-2xl hover:bg-white lg:text-start w-full"
						onClick={() => setTab(2)}
						>
						My Skills
						</button>
						<button
						className="border-4 border-[#30322d] rounded-2xl p-3 text-2xl hover:bg-white lg:text-start w-full"
						onClick={() => setTab(3)}
						>
						Experience
						</button>
					</div>

					<div className="border-2 border-[#30322d] rounded-2xl"></div>

					<div className="w-full">
						{/* About Me */}
						{tab === 1 && (
							<div
								className="flex flex-col px-5 lg:p-5 gap-5"
								id="about-me-content"
							>
								<div className="flex flex-col">
								<h1 className="text-lg lg:text-2xl font-bold">My name is</h1>
								<h1 className="text-2xl lg:text-5xl font-bold">
									Raphydhar-Neezamme J. Ibrahim
								</h1>
								</div>

								<hr className="border-2 rounded-2xl" />

								<div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
								<img
									className="rounded-2xl border-4 h-50 w-50 lg:w-100 lg:h-100"
									src="image.jpg"
									alt="aboutme"
								/>
								<p className="text-lg lg:text-4xl text-justify mb-5">
									I began programming during my senior high school year.
									Discovering that programming can be a form of art, hence I
									began to learn game development which branched my learning
									from level design and creating my own game assets.
									<br />
									<br />
									Personally, I like capybaras, the color orange, horror
									contents, and playing videogames on my spare time.
								</p>
								</div>
							</div>
						)}

						{/* My SKills */}
						{tab === 2 && (
						<div className="flex flex-col gap-2 lg:gap-5 px-5 pb-5 lg:p-5 justify-center">
							<div className="border-4 p-5 rounded-2xl flex gap-5">
							<img
								className="h-10 lg:h-25"
								src="frontend.png"
								alt="frontend"
							/>
							<div className="flex flex-col gap-2">
								<h1 className="text-xl lg:text-3xl font-bold">
								Front-end development
								</h1>
								<p className="text-justify lg:text-xl">
								Design is as important as function in a project. Luckily,
								I am more inclined towards design on projects I work on,
								believing that a good frontend is what keeps the user from
								having a good experience with a software product.
								</p>
							</div>
							</div>

							<div className="border-4 p-5 rounded-2xl flex gap-5">
							<img
								className="h-10 lg:h-25"
								src="backend.png"
								alt="frontend"
							/>
							<div className="flex flex-col gap-2">
								<h1 className="text-xl lg:text-3xl font-bold">
								Backend development
								</h1>
								<p className="text-justify lg:text-xl">
								Although experienced, there is always room for improvement
								when it comes to backend development. I can shorten this
								code, I can optimize this physics, but most importantly I
								find creative ways on programming features! Just like the
								tab system in this About Me section.
								</p>
							</div>
							</div>

							<div className="border-4 p-5 rounded-2xl flex gap-5">
							<img className="h-10 lg:h-25" src="3d.png" alt="frontend" />
							<div className="flex flex-col gap-2">
								<h1 className="text-xl lg:text-3xl font-bold">
								3D modeling
								</h1>
								<p className="text-justify lg:text-xl">
								The moment I decided I wanted to make games is the moment
								I began learning 3D modeling. I can model low-poly models
								from mesh to textured form. Recently, I have been learning
								advanced 3D modeling to transition from low-poly models to
								high resolution ones.
								</p>
							</div>
							</div>
						</div>
						)}

						{tab === 3 && (
							<div className="flex flex-col px-5 pb-5 lg:p-5 gap-5">
								{/* <h1 className="text-5xl text-center lg:text-start">Experience</h1> */}

								<div className="flex flex-col lg:flex-row gap-5">
									<img className="border-4 rounded-2xl h-100" src="kas.jpg" alt="placeholder_image" />

									<div className="flex flex-col gap-5">
										<h1 className="text-5xl text-center lg:text-start lg:text-6xl font-bold">Kalpana Articode Solution</h1>
										<p className="text-justify text-2xl lg:text-3xl">Kalpana Articode Solution's vision was to deliver quality in their IT solutions. We were tasked with programming the complaints desk of Western Mindanao State University. I was tasked with the backend of the system assisted by my groupmates in both documentation and frontend design. It was a challenging system since it was bigger than we anticipated, but after multiple trial and error we delivered something sufficient.</p>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
