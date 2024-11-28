import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const Navbar = () => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen)
	}

	const closeMobileMenu = () => {
		setMobileMenuOpen(false)
	}

	return (
		<nav id="/" className="md:p-0 p-2 relative z-10">
			{/* Desktop Navigation */}
			<div className="hidden md:flex items-center justify-between">
				<Logo />

				<div className="md:space-x-5 lg:space-x-20 xxl:space-x-40 text-2xl mr-20 font-semibold">
	<RouterLink to="/" className="nav-link text-green-400 cursor-pointer">
		Start
	</RouterLink>
	<ScrollLink to="aboutus" smooth={true} duration={500} className="nav-link text-black cursor-pointer">
		O nas
	</ScrollLink>
	<ScrollLink to="realizations" smooth={true} duration={500} className="nav-link text-black cursor-pointer">
		Realizacje
	</ScrollLink>
	<ScrollLink to="offer" smooth={true} duration={500} className="nav-link text-black cursor-pointer">
		Oferta
	</ScrollLink>
	<ScrollLink to="contact" smooth={true} duration={500} className="nav-link text-black cursor-pointer">
		Kontakt
	</ScrollLink>
</div>

			</div>

			{/* Mobile Navigation */}
			<div className="md:hidden flex items-center justify-between">
				<Logo />
				<motion.button
					className=" p-2 focus:outline-none text-3xl text-green-400"
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
						className="md:hidden ml-5 absolute top-0 right-0 bg-gradient-to-r from-white via-gray-100 to-gray-200 white w-full z-10">
						<div className="flex items-center justify-between p-8">
							<motion.button
								className="text-black focus:outline-none text-3xl relative left-full top-2"
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
							<ScrollLink
								to="aboutus"
								smooth={true}
								duration={500}
								className="block text-black cursor-pointer"
								onClick={closeMobileMenu}>
								O NAS
							</ScrollLink>
							<ScrollLink
								to="realizations"
								smooth={true}
								duration={500}
								className="block text-black cursor-pointer"
								onClick={closeMobileMenu}>
								REALIZACJE
							</ScrollLink>
							<ScrollLink
								to="offer"
								smooth={true}
								duration={500}
								className="block text-black cursor-pointer"
								onClick={closeMobileMenu}>
								OFERTA
							</ScrollLink>
							<ScrollLink
								to="contact"
								smooth={true}
								duration={500}
								className="block text-black cursor-pointer"
								onClick={closeMobileMenu}>
								KONTAKT
							</ScrollLink>
							
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}

export default Navbar
