import React from 'react'
import { FaHammer } from 'react-icons/fa'
import dach1 from './images/dach1.jpeg'
import '../App.css'
import { useTypewriter } from 'react-simple-typewriter'

const Header = () => {
	const scrollToAboutUs = () => {
		const section = document.getElementById('aboutus')
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' })
		}
	}

	const [typeEffect] = useTypewriter({
		words: ['Dekarskie ', 'Ciesielskie'],
		loop: {},
		typeSpeed: 80,
		deleteSpeed: 40,
	})

	return (
		<header className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center text-white">
			<img src={dach1} alt="Roof image" className="absolute top-0 left-0 w-full h-full object-cover" />

			<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

			<div className="relative flex flex-col md:flex-row items-center justify-around w-full px-8 md:px-16">
				<h1 className="text-5xl md:text-6xl w-1/2 h-full xl:text-8xl font-bold text-center md:text-left">
					Usługi
					<br />
					<span>{typeEffect}</span>
					<br />
				</h1>

				{/* Przycisk z podpisem przesunięty w dół */}
				<div className="transform md:translate-y-32 translate-y-16 flex flex-col items-center">
					<button
						onClick={scrollToAboutUs}
						className="w-24 h-24 md:w-36 md:h-36 flex items-center justify-center  text-white font-bold text-xl md:text-6xl rounded-full  
          transition-all duration-500 ease-in-out">
						<FaHammer className="w-full h-full animate-spin-slow hover:animate-spin-fast" />
					</button>
					<p
						onClick={scrollToAboutUs}
						className="text-center text-green-400 text-3xl xxl:text-4xl font-bold mt-4 cursor-pointer">
						Poznaj Nas!
					</p>
				</div>
			</div>
		</header>
	)
}

export default Header
