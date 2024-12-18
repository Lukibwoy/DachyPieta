import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import { FaPhone } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

const Navbar = () => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen)
	}

	const closeMobileMenu = () => {
		setMobileMenuOpen(false)
	}

	const scrollToSection = id => {
		const element = document.getElementById(id)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
			closeMobileMenu()
		}
	}

	return (
		<nav id="/" className="md:p-0 p-2 relative z-10">
			{/* Desktop Navigation */}
			<div className="hidden md:flex items-center justify-between">
				<Logo />

				<div className="flex flex-col items-center justify-between space-y-2">
					<span className="text-lg font-semibold text-black flex items-center">
						<IoIosMail className="mr-2 text-green-400 text-2xl" />
						mar.pieta@wp.pl
					</span>
					<span className="text-lg font-semibold text-black flex items-center">
						<FaPhone className="mr-2 text-green-400" />
						+48 661 647 437
					</span>
				</div>

				<div className="md:space-x-5 lg:space-x-20 xxl:space-x-40 text-2xl mr-20 font-semibold">
					<button to="/" className="nav-link text-green-400 cursor-pointer">
						Start
					</button>
					<button onClick={() => scrollToSection('aboutus')} className="nav-link text-black cursor-pointer">
						O nas
					</button>
					<button onClick={() => scrollToSection('realizations')} className="nav-link text-black cursor-pointer">
						Realizacje
					</button>
					<button onClick={() => scrollToSection('offers')} className="nav-link text-black cursor-pointer">
						Oferta
					</button>
					<button onClick={() => scrollToSection('contact')} className="nav-link text-black cursor-pointer">
						Kontakt
					</button>
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
						className="md:hidden ml-5 absolute top-0 right-0 bg-gray-300 bg-opacity-10 h-screen backdrop-blur-md w-full z-10">
						<div className="flex items-center justify-between p-8">
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
						<div className="space-y-16 font-semibold h-full flex flex-col items-center text-lg pb-36">
							<RouterLink to="/" className="block text-green-400 cursor-pointer" onClick={closeMobileMenu}>
								START
							</RouterLink>
							<button onClick={() => scrollToSection('aboutus')} className="block text-white cursor-pointer">
								O NAS
							</button>
							<button onClick={() => scrollToSection('realizations')} className="block text-white cursor-pointer">
								REALIZACJE
							</button>
							<button onClick={() => scrollToSection('offers')} className="block text-white cursor-pointer">
								OFERTA
							</button>
							<button onClick={() => scrollToSection('contact')} className="block text-white cursor-pointer mb-8">
								KONTAKT
							</button>
							<div className="flex flex-col items-center justify-between space-y-4">
								<span className="text-lg font-semibold text-white flex items-center">
									<IoIosMail className="mr-2 text-green-400 text-2xl" />
									mar.pieta@wp.pl
								</span>
								<span className="text-lg font-semibold text-white flex items-center">
									<FaPhone className="mr-2 text-green-400" />
									+48 661 647 437
								</span>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}

export default Navbar
