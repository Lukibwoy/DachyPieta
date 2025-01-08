const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const app = express()
const PORT = 5000

// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Storage for uploaded files
const upload = multer({ dest: 'uploads/' })

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'dachypieta@gmail.com', // Replace with your Gmail address
		pass: 'mqth aquc ccvs skod', // Replace with your Gmail password or app-specific password
	},
	tls: {
		rejectUnauthorized: false,
	},
})

// Endpoint to handle form submission
app.post('/send', upload.single('file'), async (req, res) => {
	const { name, email, message } = req.body
	const file = req.file

	if (!name || !email || !message) {
		return res.status(400).send('All fields are required')
	}

	// Mail options
	const mailOptions = {
		from: email,
		to: 'xxx@gmail.com', // Replace with your receiving email
		subject: `Nowa wiadomość od ${name}`,
		text: `Otrzymałeś nową wiadomość od użytkownika ${name} (${email}):\n\n${message}`,
		attachments: file
			? [
					{
						filename: file.originalname,
						path: file.path,
					},
			  ]
			: [],
	}

	try {
		await transporter.sendMail(mailOptions)

		// Remove the uploaded file after sending the email
		if (file) {
			fs.unlinkSync(file.path)
		}

		res.status(200).send('Email sent successfully')
	} catch (error) {
		console.error('Error sending email:', error)
		res.status(500).send('Error sending email')
	}
})

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})
