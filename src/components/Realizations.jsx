import React, { useState } from 'react'

import image20 from './images/image20.jpeg'
import image9 from './images/image9.jpg'
import image10 from './images/image10.jpg'
import image11 from './images/image11.jpg'
import image12 from './images/image12.jpg'
import image13 from './images/image13.jpg'
import image33 from './images/image33.jpeg'
import wiezba1 from './images/wiezba1.jpeg'
import wiezba2 from './images/wiezba2.jpeg'
import imagesplit from './images/image_split.png'

const realizationsData = [
	{ image: image11, type: 'Blachodachówka', model: 'RUUKI MONTERREY GRAND', area: '250m2' },
	{ image: image20, type: 'Blachodachówka', model: 'RUUKI FRIGGE', area: '290m2' },
	{ image: image9, type: 'Blachodachówka', model: 'PRUSZYŃSKI SZAFIR', area: '230m2' },
	{ image: image10, type: 'Blachodachówka', model: 'RUUKI MONTERREY GRAND', area: '190m2' },
	{ image: image12, type: 'Blachodachówka', model: 'RUUKI CLASSIC DESIGN M', area: '216m2' },
	{ image: image13, type: 'Dachówka betonowa', model: 'BRAAS TEVIVA', area: '150m2' },
	{ image: image33, type: 'Blacha obróbkowa', model: '-', area: '-' },
	{ image: imagesplit, type: 'Blacha obróbkowa', model: '-', area: '-' },
	{ image: wiezba1, type: '-', model: '-', area: '-' },
	{ image: wiezba2, type: '-', model: '-', area: '-' },
]

export default function Realizations() {
	const [visibleCount, setVisibleCount] = useState(4)

	const handleShowMore = () => {
		setVisibleCount(prevCount => prevCount + 2)
	}

	return (
		<div
			id="realizations"
			className="relative w-screen flex flex-col items-start justify-start px-4 py-2 md:px-16 mt-8 md:mt-16">
			<h2 className="text-2xl md:text-3xl w-full font-bold uppercase text-center md:text-left">Nasze Realizacje</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-2 md:gap-2 gap-1 mt-8">
				{realizationsData.slice(0, visibleCount).map((item, index) => (
					<div key={index} className="relative group m-2 md:m-4">
						<img
							src={item.image}
							className="w-full h-full rounded-lg shadow-lg object-cover transition-all duration-300 group-hover:opacity-50"
							alt={`Nasze realizacje ${index + 1}`}
						/>
						<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg flex-col">
							{item.type !== '-' && (
								<p className="text-white font-bold text-sm md:text-lg">
									Rodzaj pokrycia: <span className="text-green-400">{item.type}</span>
								</p>
							)}

							{item.model !== '-' && (
								<p className="text-white font-bold text-sm md:text-lg">
									Model: <span className="text-green-400">{item.model}</span>
								</p>
							)}

							{item.area !== '-' && (
								<p className="text-white font-bold text-sm md:text-lg">
									Powierzchnia dachu: <span className="text-green-400">{item.area}</span>
								</p>
							)}
						</div>
					</div>
				))}
			</div>
			{visibleCount < realizationsData.length && (
				<button
					onClick={handleShowMore}
					className="mt-8 px-6 py-2 bg-green-400 text-white font-bold text-xl rounded-lg hover:bg-green-500 transition-colors self-center">
					Pokaż więcej
				</button>
			)}
		</div>
	)
}
