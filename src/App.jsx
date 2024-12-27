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
import ContactForm from './components/ContactForm'
import Separator from './components/Separator'
import Footer from './components/Footer'
import Contrahents from './components/Contrahents'
import Offers from './components/Offers'
import Process from './components/Process'

const App = () => {
	return (
		<div className="main-container w-full h-full overflow-x-hidden ">
			<BrowserRouter>
				<Navbar />
				<Header />
				<AboutUs />
				<Data />
				<Separator />
				<Realizations />
				<Separator />
				<Offers />
				<Process />
				<Separator />
				<Contrahents />
				<Separator />
				<ContactForm />
				<Footer />
				<Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
