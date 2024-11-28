import React from 'react'
import dach1 from './images/dach1.jpeg'
import '../App.css'

const Header = () => {
	return (
		<header className="relative w-full h-3/4 z-0 flex items-center justify-center text-white">
			<img src={dach1} alt="Roof image" className="absolute top-0 left-0 w-full h-full object-cover" />

			<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

			<div className="flex items-center justify-between flex-col md:flex-row">
				<p className="relative text-2xl mt-10 md:mt-0"></p>
				<h1 className="relative text-4xl w-1/2 md:text-6xl xl:text-8xl font-bold">
					Dachy <br /> Konstrukcje drewniane
				</h1>
			</div>
		</header>
	)
}

export default Header
