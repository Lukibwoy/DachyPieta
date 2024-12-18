import React from 'react';
import image15 from './images/image15.jpeg';
import image3 from './images/image3.jpeg';

export default function Offers() {
	return (
		<div
			id="offers"
			className="relative w-full h-auto flex flex-col items-start justify-start px-4 py-2 md:px-16 md:flex-row mt-8 md:mt-16">
			<div className="w-full flex flex-col items-start justify-center text-center md:text-left">
				<h2 className="text-2xl md:text-3xl font-bold uppercase md:text-left w-full">Oferta</h2>
				<div className="Cards flex flex-col md:flex-row mt-8 w-full h-full">
					<div className="Card w-full md:w-1/3 h-full  bg-white border-solid border-2 hover:border-green-400 rounded-lg shadow-lg mt-2 p-4 md:p-4 md:m-2 xxl:m-4">
						<h3 className="text-xl font-semibold mb-4 text-center">Więźby dachowe</h3>
						<div className="overflow-hidden rounded-md mb-4">
							<img src={image15} alt="więźby dachowe" className="w-full h-1/3 object-cover transition-transform duration-300 hover:scale-110" />
						</div>
						<p className="text-lg text-gray-800 ">
							Oferujemy usługi ciesielskie, specjalizując się w wykonywaniu więźb dachowych. Dopasowujemy technologię do projektu, stosując tradycyjne i nowoczesne rozwiązania. Realizujemy więźby dla różnych typów dachów, kładąc nacisk na precyzję i dbałość o detale.
						</p>
					</div>

					<div className="Card w-full md:w-1/3 h-full  bg-white border-solid border-2 hover:border-green-400 rounded-lg shadow-lg mt-2 p-4 md:p-4 md:m-2 xxl:m-4">
						<h3 className="text-xl font-semibold mb-4 text-center">Pokrycia dachowe</h3>
						<div className="overflow-hidden rounded-md mb-4">
							<img src={image3} alt="pokrycia dachowe" className="w-full h-1/3 object-cover transition-transform duration-300 hover:scale-110" />
						</div>
						<p className="text-lg text-gray-800 ">
							Wykonujemy krycie dachów różnymi materiałami, w tym dachówką ceramiczną i cementową, blachą oraz blachodachówką. Zapewniamy fachowe doradztwo, uwzględniając kształt dachu, stopień skomplikowania konstrukcji oraz sposób odprowadzania wody.
						</p>
					</div>

					<div className="Card w-full md:w-1/3 h-full  bg-white border-solid border-2 hover:border-green-400 rounded-lg shadow-lg mt-2 p-4 md:p-4 md:m-2 xxl:m-4">
						<h3 className="text-xl font-semibold mb-4 text-center">Remonty dachów</h3>
						<div className="overflow-hidden rounded-md mb-4">
							<img src={image3} alt="remonty dachów" className="w-full h-1/3 object-cover transition-transform duration-300 hover:scale-110" />
						</div>
						<p className="text-lg text-gray-800 ">
							Zajmujemy się renowacją dachów, obejmującą wymianę uszkodzonych elementów, naprawę konstrukcji nośnych oraz modernizację pokrycia dachowego. Prace wykonujemy starannie, korzystając z wysokiej jakości materiałów, zapewniając trwałość i estetykę.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
