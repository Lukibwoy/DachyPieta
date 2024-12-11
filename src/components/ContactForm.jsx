import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import komin from './images/komin.jpeg'

export default function ContactForm() {
	const initialValues = {
		name: '',
		email: '',
		message: '',
		file: null,
	}

	const validationSchema = Yup.object({
		name: Yup.string()
			.min(2, 'Imię i nazwisko musi mieć co najmniej 2 znaki')
			.max(100, 'Imię i nazwisko może mieć maksymalnie 100 znaków')
			.required('Pole jest wymagane'),
		email: Yup.string().email('Nieprawidłowy format email').required('Pole jest wymagane'),
		message: Yup.string().max(1000, 'Treść może mieć maksymalnie 1000 znaków').required('Pole jest wymagane'),
		file: Yup.mixed()
			.test(
				'fileSize',
				'Plik jest za duży (maks. 5MB)',
				value => !value || value.size <= 5242880 
			)
			.test(
				'fileType',
				'Nieprawidłowy format pliku (akceptowane: .jpg, .png, .pdf)',
				value => !value || ['image/jpeg', 'image/png', 'application/pdf'].includes(value.type)
			),
	})

	const handleSubmit = (values, { resetForm }) => {
		console.log('Wysłano:', values)
		alert(`Wysłano wiadomość od ${values.name}. Załącznik: ${values.file?.name || 'Brak'}`)
		resetForm()
	}

	return (
		<div className="relative w-screen h-full flex flex-col items-start justify-start px-4 py-2 md:px-16 mt-8 md:mt-24	 md:flex-row mb-64 md:mb-0">
			<div className="left-side w-full md:w-1/2 h-3/4">
				<h2 className="text-2xl md:text-3xl font-bold uppercase text-center md:text-left w-full mb-4">
					FORMULARZ KONTAKTOWY
				</h2>
				<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
					{({ setFieldValue, isSubmitting }) => (
						<Form className="flex flex-col space-y-4">
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-gray-700">
									Imię i nazwisko
								</label>
								<Field
									type="text"
									id="name"
									name="name"
									placeholder="Twoje imię i nazwisko"
									className="mt-1 block w-full border hover:border-green-400 rounded-md shadow-sm p-2"
								/>
								<ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
							</div>

							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700">
									Email
								</label>
								<Field
									type="email"
									id="email"
									name="email"
									placeholder="Twój email"
									className="mt-1 block w-full border hover:border-green-400 rounded-md shadow-sm p-2"
								/>
								<ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
							</div>

							<div>
								<label htmlFor="message" className="block text-sm font-medium text-gray-700">
									Treść wiadomości
								</label>
								<Field
									as="textarea"
									id="message"
									name="message"
									placeholder="Wpisz swoją wiadomość (max 1000 znaków)"
									className="mt-1 block w-full border hover:border-green-400 rounded-md shadow-sm p-2"
									rows="5"
								/>
								<ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
							</div>

							<div>
								<label htmlFor="file" className="block text-sm font-medium text-gray-700">
									* Załącz projekt dachu (obsługiwane formaty: PNG, JPG oraz JPEG).
								</label>
								<input
									type="file"
									id="file"
									name="file"
									className="mt-1 block w-full border hover:border-green-400 rounded-md shadow-sm p-2"
									onChange={event => {
										setFieldValue('file', event.target.files[0])
									}}
								/>
								<ErrorMessage name="file" component="div" className="text-red-500 text-sm mt-1" />
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="bg-green-400 w-64 flex justify-center text-white px-4 py-2 rounded-md shadow hover:bg-green-700 disabled:opacity-50">
								Wyślij
							</button>
						</Form>
					)}
				</Formik>
			</div>
			<div className="right-side w-full md:w-1/2 h-3/4 flex justify-center items-center md:mt-0 mt-8 ">
				<img src={komin} alt="komin" className="w-full md:w-2/3 h-auto rounded-lg shadow-md" />
			</div>
		</div>
	)
}
