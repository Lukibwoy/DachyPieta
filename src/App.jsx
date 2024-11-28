import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Realizations from './components/Realizations'
const App = () => {
	return (
		<div className="w-full h-full">
			<BrowserRouter>
				<Navbar />
				<Header />
				<Realizations />	
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
