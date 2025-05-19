import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import JobOffers from './components/JobOffers'
import LiftOffers from './components/LiftOffers'
import tlostrony from './components/images/tlostrony.jpg'

const App = () => {
	return (
		<div className="relative w-full min-h-screen overflow-x-hidden">
			{/* Tło strony z przezroczystością */}
			<div
				className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
				style={{
					backgroundImage: `url(${tlostrony})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					position: 'fixed', // Zapewnia pełnoekranowe tło
					width: '100vw',
					height: '100vh',
					opacity: 0.2, // Tutaj ustawiamy przezroczystość tła
					zIndex: -1, // Upewniamy się, że tło jest w tle
				}}></div>

			<BrowserRouter>
				<Navbar />
				<div className="relative z-10">
					<Routes>	
						<Route path="/" element={<Home />} />
						<Route path="/joboffers" element={<JobOffers />} />
						<Route path="/liftoffers" element={<LiftOffers />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
