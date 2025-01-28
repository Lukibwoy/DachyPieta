import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import JobOffers from './components/JobOffers'

const App = () => {
	return (
		<div className="main-container w-full h-full overflow-x-hidden">
			<BrowserRouter>
				<Navbar />
				<Routes>
					{/* Główna strona */}
					<Route path="/" element={<Home />} />

					{/* Strona ofert pracy */}
					<Route path="/joboffers" element={<JobOffers />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
