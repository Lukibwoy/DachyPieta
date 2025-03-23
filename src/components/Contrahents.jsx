import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'

import ruukki from './images/ruukki.png'
import pruszek from './images/pruszek.png'
import dachsystem from './images/dachsystem2.png'
import roben from './images/roben.png'
import budmat from './images/budmat.png'
import velux from './images/velux.png'
import fakro from './images/fakro.png'

const companyLogos = [
	{ src: ruukki, alt: 'Ruukki', scale: 1 },
	{ src: pruszek, alt: 'Pruszek', scale: 1 },
	{ src: dachsystem, alt: 'Dachsystem', scale: 0.5 },
	{ src: roben, alt: 'Roben', scale: 1 },
	{ src: budmat, alt: 'Budmat', scale: 1 },
	{ src: velux, alt: 'Velux', scale: .6 },
	{ src: fakro, alt: 'Fakro', scale: 1 },
]

export default function Contrahents() {
	return (
		<div className="mt-8 py-8 z-100">
			<h3 className="text-center text-3xl font-semibold text-black uppercase">Współpracujemy z:</h3>

			<Swiper
				spaceBetween={10}
				slidesPerView={2}
				loop={true}
				autoplay={{
					delay: 1000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
				breakpoints={{
					640: { slidesPerView: 2 },
					1024: { slidesPerView: 4 },
				}}
				className="mt-8">
				{companyLogos.map((logo, index) => (
					<SwiperSlide key={index} className="flex items-center justify-center">
						<img
							src={logo.src}
							alt={logo.alt}
							className={`h-auto md:w-80 w-96`} 
							style={{ transform: `scale(${logo.scale})` }}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
