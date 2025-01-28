import React from 'react'
import Header from './Header'
import AboutUs from './AboutUs'
import Realizations from './Realizations'
import Data from './Data'
import Separator from './Separator'
import Offers from './Offers'
import Process from './Process'
import Contrahents from './Contrahents'
import ContactForm from './ContactForm'

const Home = () => {
	return (
		<div path="/">
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
			<ContactForm />
		</div>
	)
}

export default Home
