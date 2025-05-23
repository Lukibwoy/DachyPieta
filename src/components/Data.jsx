import React, { useState, useEffect, useRef } from 'react'

export default function Data() {
	const [experienceCount, setExperienceCount] = useState(0)
	const [projectsCount, setProjectsCount] = useState(0)
	const [workersCount, setWorkersCount] = useState(0)
	const sectionRef = useRef(null)

	const animateCount = (target, setCount) => {
		let count = 0
		const step = target / 43
		const interval = setInterval(() => {
			count += step
			if (count >= target) {
				clearInterval(interval)
				setCount(target)
			} else {
				setCount(Math.round(count))
			}
		}, 30)
	}

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting) {
					animateCount(30, setExperienceCount)
					animateCount(1600, setProjectsCount)
					animateCount(8, setWorkersCount)
					observer.disconnect()
				}
			},
			{ threshold: 0.5 }
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => {
			if (sectionRef.current) {
				observer.disconnect()
			}
		}
	}, [])

	return (
		<div
			ref={sectionRef}
			className="relative w-screen flex flex-col md:flex-row items-start justify-start px-4 py-2 md:px-16 mt-8 md:mt-16">
			<div className="text-center w-full h-full my-4">
				<p className="text-green-400 text-5xl md:text-7xl mb-8 font-bold">{experienceCount}</p>
				<span className="font-semibold text-lg xxl:text-xl mt-16 uppercase">Lat doświadczenia</span>
			</div>

			<div className="text-center w-full h-full my-4">
				<p className="text-green-400 text-5xl md:text-7xl mb-8  font-bold">{projectsCount}+</p>
				<span className="font-semibold text-lg xxl:text-xl mt-16 uppercase">Zrealizowanych zleceń</span>
			</div>

			<div className="text-center w-full h-full my-4">
				<p className="text-green-400 text-5xl md:text-7xl mb-8  font-bold">{workersCount}</p>
				<span className="font-semibold text-lg xxl:text-xl mt-16 uppercase">Wykwalifikowanych dekarzy</span>
			</div>
		</div>
	)
}
