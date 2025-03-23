import React, { useState } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import { FaPhone } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { Link } from 'react-scroll'

const Navbar = () => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
	const navigate = useNavigate()

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen)
	}

	const closeMobileMenu = () => {
		setMobileMenuOpen(false)
	}

	// Navigate to home and scroll
	const handleNavigateHome = target => {
		navigate('/') // Redirect to home page
		setTimeout(() => {
			// Scroll to target section
			const element = document.getElementById(target)
			if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}, 100) // Timeout ensures page loads before scrolling
		closeMobileMenu() // Close mobile menu after navigation
	}

	return (
		<nav id="/" className="md:p-0 p-2 relative z-20 bg-white">
			{/* Desktop Navigation */}
			<div className="hidden md:flex items-center justify-between">
				<Logo />

				<div className="flex flex-col items-center justify-between space-y-2">
					{/* Animacja dla maila */}
					<motion.span
						className="text-sm lg:text-lg font-semibold text-black flex items-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5, duration: 0.5 }}
					>
						<IoIosMail className="mr-2 text-green-400 text-2xl" />
						dachypieta@gmail.com
					</motion.span>

					{/* Animacja dla telefonu */}
					<motion.span
						className="text-sm lg:text-lg font-semibold text-black flex items-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5, duration: 0.5 }}
					>
						<FaPhone className="mr-2 text-green-400" />
						+48 661 647 437
					</motion.span>
				</div>

				<div className="md:space-x-4 lg:space-x-14 xl:space-x-16 xxl:space-x-40 text-lg xxl:text-2xl md:mr-2 lg:mr-8 xxl:mr-20 font-semibold">
					<span onClick={() => handleNavigateHome('start')} className="nav-link text-green-400 cursor-pointer">
						Start
					</span>
					<span onClick={() => handleNavigateHome('aboutus')} className="nav-link text-black cursor-pointer">
						O nas
					</span>
					<span onClick={() => handleNavigateHome('realizations')} className="nav-link text-black cursor-pointer">
						Realizacje
					</span>
					<span onClick={() => handleNavigateHome('offers')} className="nav-link text-black cursor-pointer">
						Oferta
					</span>

					<span onClick={() => handleNavigateHome('contact')} className="nav-link text-black cursor-pointer">
						Kontakt
					</span>
					<RouterLink to="/joboffers" className="nav-link text-green-400 cursor-pointer">
						Oferty Pracy
					</RouterLink>
				</div>
			</div>

			{/* Mobile Navigation */}
			<div className="md:hidden flex items-center justify-between">
				<Logo className="w-2/3" />

				<motion.button
					className="p-2 focus:outline-none text-3xl text-green-400"
					onClick={toggleMobileMenu}
					initial={false}
					animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}>
					☰
				</motion.button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						key="mobileMenu"
						initial={{ opacity: 0, x: '-100%' }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: '-100%' }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
						className="md:hidden ml-5 absolute top-0 right-0 bg-gray-900 bg-opacity-50 h-screen backdrop-blur-md w-full z-10">
						<div className="flex items-center justify-between p-8 sticky">
							<motion.button
								className="text-black focus:outline-none text-3xl relative left-full top-8"
								onClick={closeMobileMenu}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3, ease: 'easeInOut' }}>
								✕
							</motion.button>
						</div>
						<div className="space-y-12 font-semibold h-full flex flex-col items-center text-lg pb-36">
							<span onClick={() => handleNavigateHome('start')} className="text-green-400 cursor-pointer">
								START
							</span>
							<span onClick={() => handleNavigateHome('aboutus')} className="text-white cursor-pointer">
								O NAS
							</span>
							<span onClick={() => handleNavigateHome('realizations')} className="text-white cursor-pointer">
								REALIZACJE
							</span>
							<span onClick={() => handleNavigateHome('offers')} className="text-white cursor-pointer">
								OFERTA
							</span>
							<span onClick={() => handleNavigateHome('contact')} className="text-white cursor-pointer">
								KONTAKT
							</span>
							<div className="flex flex-col items-center justify-between space-y-4">
								<RouterLink to="/joboffers" className=" cursor-pointer mb-8 text-green-300" onClick={closeMobileMenu}>
									OFERTY PRACY
								</RouterLink>
								{/* Animacja dla maila */}
								<motion.span
									className="text-lg font-semibold text-white flex items-center"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.7, duration: 0.5 }}
								>
									<IoIosMail className="mr-2 text-green-400 text-2xl" />
									dachypieta@gmail.com
								</motion.span>

								{/* Animacja dla telefonu */}
								<motion.span
									className="text-lg font-semibold text-white flex items-center"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.5, duration: 0.5 }}
								>
									<FaPhone className="mr-2 text-green-400" />
									+48 661 647 437
								</motion.span>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}

export default Navbar
