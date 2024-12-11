import React from 'react'

import ruukki from './images/ruukki.png'
import pruszek from './images/pruszek.png'
import dachsystem from './images/dachsystem2.png'
import roben from './images/roben.png'
import budmat from './images/budmat.png'

const companyLogos = [
	{ src: ruukki, alt: 'Ruukki' },
	{ src: pruszek, alt: 'Pruszek' },
	{ src: dachsystem, alt: 'Dachsystem' },
	{ src: roben, alt: 'Roben' },
	{ src: budmat, alt: 'Budmat' },
]

export default function Contrahents() {
	return (
		<div className="mt-8 py-8">
			<h3 className="text-center text-3xl font-semibold text-black uppercase ">
				Współpracujemy z:
			</h3>
			<div className="relative overflow-hidden mt-6">
				<div className="flex md:animate-scroll animate-scroll-mobile gap-8 whitespace-nowrap">
					{companyLogos.map((logo, index) => (
						<img key={index} src={logo.src} alt={logo.alt} className="md:w-96 w-64 h-auto object-contain" />
					))}
					{companyLogos.map((logo, index) => (
						<img
							key={`duplicate-${index}`}
							src={logo.src}
							alt={logo.alt}
							className="md:w-96 w-64 h-auto object-contain"
						/>
					))}
				</div>
			</div>
		</div>
	)
}
