import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Realizations from './components/Realizations'
import Data from './components/Data'
import Contact from './components/Contact'
const App = () => {
	return (
		<div className="w-full h-full overflow-x-hidden">
			<BrowserRouter>
				<Navbar />
				<Header />
				<AboutUs />	
				<Data />	
				<Realizations />	
				<Contact />	
				<Routes>
					{/* <Route path="/" element={<Home />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
