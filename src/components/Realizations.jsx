import React from 'react'

import image3 from './images/image3.jpeg'
import image8 from './images/image8.jpeg'
import image9 from './images/image9.jpg'
import image10 from './images/image10.jpg'
import image11 from './images/image11.jpg'

export default function Realizations() {
	return (
		<div id="realizations" className="relative w-screen flex flex-col items-start justify-start px-4 py-2 md:px-16 mt-8 md:mt-16">
			<h2 className="text-2xl md:text-3xl w-full font-bold uppercase text-center md:text-left">Nasze Realizacje</h2>
			<div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 md:gap-2 gap-1 mt-8">
				<div className="relative group m-2">
					<img src={image11} className="w-full h-full rounded-lg shadow-lg object-cover transition-all duration-300 group-hover:opacity-50" alt="Nasze realizacje" />
					<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg flex-col">
						<p className="text-white font-bold text-lg">Blachodachówka: <span className='text-green-400'> RUUKI FRIGGE</span></p>
						<p className="text-white font-bold text-lg">Powierzchnia: <span className='text-green-400'>120m2</span></p>
					</div>
				</div>
				<div className="relative group m-2">
					<img src={image8} className="w-full h-full rounded-lg shadow-lg object-cover transition-all duration-300 group-hover:opacity-50" alt="Nasze realizacje" />
					<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg flex-col">
						<p className="text-white font-bold text-lg">Blachodachówka: <span className='text-green-400'> RUUKI FRIGGE</span></p>
						<p className="text-white font-bold text-lg">Powierzchnia: <span className='text-green-400'>120m2</span></p>
					</div>
				</div>
				<div className="relative group m-2">
					<img src={image9} className="w-full h-full rounded-lg shadow-lg object-cover transition-all duration-300 group-hover:opacity-50" alt="Nasze realizacje" />
					<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg flex-col">
						<p className="text-white font-bold text-lg">Blachodachówka: <span className='text-green-400'> RUUKI FRIGGE</span></p>
						<p className="text-white font-bold text-lg">Powierzchnia: <span className='text-green-400'>120m2</span></p>
					</div>
				</div>
				<div className="relative group m-2">
					<img src={image10} className="w-full h-full rounded-lg shadow-lg object-cover transition-all duration-300 group-hover:opacity-50" alt="Nasze realizacje" />
					<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg flex-col">
						<p className="text-white font-bold text-lg">Blachodachówka: <span className='text-green-400'> RUUKI FRIGGE</span></p>
						<p className="text-white font-bold text-lg">Powierzchnia: <span className='text-green-400'>120m2</span></p>
					</div>
				</div>
				
				
			</div>
		</div>
	)
}
