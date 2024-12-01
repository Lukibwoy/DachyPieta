import React from 'react'
import dach1 from './images/dach1.jpeg'
import '../App.css'

const Header = () => {
	return (
		<header className="relative w-full h-3/4 z-0 flex items-center justify-center text-white">
			<img src={dach1} alt="Roof image" className="absolute top-0 left-0 w-full h-full object-cover" />

			<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

			<div className="flex items-center justify-between flex-col md:flex-row">
				<h1 className="relative w-1/2  text-5xl md:text-6xl xl:text-8xl font-bold">
					Dachy <br /> Konstrukcje drewniane
				</h1>
			</div>
		</header>
	)
}

export default Header
