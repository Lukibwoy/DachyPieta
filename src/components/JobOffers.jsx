import React from 'react'

const JobOffers = () => {
	return (
		<div
			id="joboffers"
			className="w-full h-auto flex flex-col items-center justify-center px-4 py-2 md:px-16 mt-8 md:mt-16 mb-64 md:mb-0">
			{' '}
			{/* Dodano mb-16 w mobile */}
			<div className="w-full flex flex-col items-center justify-center text-center">
				<h2 className="text-2xl md:text-3xl font-bold uppercase w-full mb-8">Oferty Pracy</h2>
				<div className="Cards flex flex-col md:flex-row justify-around items-center w-full h-full space-y-4 md:space-y-0 md:space-x-4">
					<div className="Card w-full md:w-1/3 h-full bg-white border-2 border-green-400 rounded-lg shadow-lg p-6 md:m-2">
						<h3 className="text-2xl font-semibold mb-4 text-center">Dekarz</h3>
						<h4 className="text-lg font-semibold mb-2">Wymagania:</h4>
						<ul className="text-left text-gray-800 mb-4">
							<li>- Min. 1 rok doświadczenia</li>
							<li>- Umiejętność montażu pokryć oraz konstrukcji dachowych</li>
							<li>- Dokładność i precyzja w wykonywaniu prac</li>
							<li>- Wymagane prawo jazdy kat.B</li>
						</ul>
						<h4 className="text-lg font-semibold mb-2">Oferujemy:</h4>
						<ul className="text-left text-gray-800 mb-4">
							<li className=" text-gray-800">- Atrakcyjne wynagrodzenie</li>
							<li className=" text-gray-800">- Umowę o pracę</li>
							<li className=" text-gray-800">- Stabilne zatrudnienie</li>
						</ul>
					</div>

					<div className="Card w-full md:w-1/3 h-full bg-white border-2 border-green-400 rounded-lg shadow-lg p-6 md:m-2">
						<h3 className="text-2xl font-semibold mb-4 text-center">Pomocnik Dekarza</h3>
						<h4 className="text-lg font-semibold mb-2">Wymagania:</h4>
						<ul className="text-left text-gray-800 mb-4">
							<li>- Chęć nauki i rozwoju</li>
							<li>- Dyspozycyjność i zaangażowanie</li>
							<li>- Umiejętność pracy w zespole</li>
							<li>- Wymagane prawo jazdy kat.B</li>
						</ul>
						<h4 className="text-lg font-semibold mb-2">Oferujemy:</h4>
						<ul className="text-left text-gray-800 mb-4">
							<li className=" text-gray-800">- Atrakcyjne wynagrodzenie</li>
							<li className=" text-gray-800">- Umowę o pracę</li>
							<li className=" text-gray-800">- Stabilne zatrudnienie</li>
						</ul>
					</div>
				</div>
				<p className="mt-6 text-lg">Zainteresowane osoby prosimy o kontakt pod wskazanym numerem telefonu:</p>
				<p className="font-semibold mt-2">+48 661 647 437</p>
			</div>
		</div>
	)
}

export default JobOffers
