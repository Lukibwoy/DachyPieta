import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import { FaPhone } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { Link } from 'react-scroll'; // Import react-scroll

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
          <Link to="start" smooth={true} duration={500} className="nav-link text-green-400 cursor-pointer">
            Start
          </Link>
          <Link to="aboutus" smooth={true} duration={500} className="nav-link text-black cursor-pointer">
            O nas
          </Link>
          <Link to="realizations" smooth={true} duration={500} className="nav-link text-black cursor-pointer">
            Realizacje
          </Link>
          <Link to="offers" smooth={true} duration={500} className="nav-link text-black cursor-pointer">
            Oferta
          </Link>
          <Link to="contact" smooth={true} duration={500} className="nav-link text-black cursor-pointer">
            Kontakt
          </Link>
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
              <RouterLink to="/" className="text-green-400 cursor-pointer" onClick={closeMobileMenu}>
                START
              </RouterLink>
              <Link to="aboutus" smooth={true} duration={500} className="text-white cursor-pointer" onClick={closeMobileMenu}>
                O NAS
              </Link>
              <Link to="realizations" smooth={true} duration={500} className="text-white cursor-pointer" onClick={closeMobileMenu}>
                REALIZACJE
              </Link>
              <Link to="offers" smooth={true} duration={500} className="text-white cursor-pointer" onClick={closeMobileMenu}>
                OFERTA
              </Link>
              <Link to="contact" smooth={true} duration={500} className="text-white cursor-pointer" onClick={closeMobileMenu}>
                KONTAKT
              </Link>
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
