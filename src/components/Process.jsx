import React from 'react'
import { FaSearch, FaHammer, FaCheckCircle, FaListOl } from 'react-icons/fa'
import { BsFillCalendar2DateFill } from 'react-icons/bs'

export default function Process() {
	return (
		<div
			id="stepper"
			section
			name="stepper"
			className="relative w-screen h-full flex flex-col items-center justify-center px-4 py-2 md:px-16 mt-8 md:mt-16">
			<h3 className="text-2xl text-center md:text-2xl font-bold uppercase w-full mb-8">PROCES KROK PO KROKU</h3>
			<div className="grid grid-cols-1 md:grid-cols-5 md:gap-16 gap-8 w-full h-full m-4 md:m-8">
				<div className="flex flex-col items-center text-center">
					<FaSearch className="text-green-400 text-4xl mb-4 transform transition-transform duration-200 hover:scale-125" />
					<h4 className="text-lg md:text-xl font-semibold">Wybór</h4>
					<p className="text-sm md:text-lg text-black mt-4">Wybór rodzaju oraz modelu pokrycia dachowego przez klienta.</p>
				</div>
				<div className="flex flex-col items-center text-center">
					<FaListOl className="text-green-400 text-4xl mb-4 transform transition-transform duration-200 hover:scale-125" />
					<h4 className="text-lg md:text-xl font-semibold">Wycena</h4>
					<p className="text-sm md:text-lg text-black mt-4">Przedstawienie darmowej wyceny kompleksowej usługi.</p>
				</div>

				<div className="flex flex-col items-center text-center">
					<BsFillCalendar2DateFill className="text-green-400 text-4xl mb-4 transform transition-transform duration-200 hover:scale-125" />
					<h4 className="text-lg md:text-xl font-semibold">Planowanie</h4>
					<p className="text-sm md:text-lg text-black mt-4">Ustalenie terminu oraz podpisanie klarownej umowy.</p>
				</div>

				<div className="flex flex-col items-center text-center">
					<FaHammer className="text-green-400 text-4xl mb-4 transform transition-transform duration-200 hover:scale-125" />
					<h4 className="text-lg md:text-xl font-semibold">Realizacja</h4>
					<p className="text-sm md:text-lg text-black mt-4">Dostarczenie materiału oraz wykonanie montażu.</p>
				</div>

				<div className="flex flex-col items-center text-center">
					<FaCheckCircle className="text-green-400 text-4xl mb-4 transform transition-transform duration-200 hover:scale-125" />
					<h4 className="text-lg md:text-xl font-semibold">Zakończenie</h4>
					<p className="text-sm md:text-lg text-black mt-4">Przedstawienie klientowi finalnej realizacji.</p>
				</div>
			</div>
		</div>
	)
}
