import { useState, useEffect } from 'react'

const Cookie = () => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const consent = localStorage.getItem('cookieConsent')
		if (!consent) {
			setIsVisible(true)
		}
	}, [])

	const handleAccept = () => {
		localStorage.setItem('cookieConsent', 'accepted')
		setIsVisible(false)
	}

	const handleReject = () => {
		localStorage.setItem('cookieConsent', 'rejected')
		setIsVisible(false)
	}

	if (!isVisible) return null

	return (
		<div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-2 rounded-t-xl z-50 w-full">
			<div className="p-2 w-full flex justify-around items-center mx-auto flex-col md:flex-row">
				<p className="text-sm text-gray-700">
					Klikając „Akceptuj”, wyrażasz zgodę na przechowywanie plików cookie na Twoim urządzeniu w celu usprawnienia
					korzystania z nawigacji strony, analiz jej użytkowania oraz wsparcia naszych działań marketingowych.
				</p>
				<div className="mt-3 flex justify-end gap-4">
					<button className="px-4 py-2 border rounded text-gray-700" onClick={handleReject}>
						Odrzuć
					</button>
					<button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleAccept}>
						Akceptuj
					</button>
				</div>
			</div>
		</div>
	)
}

export default Cookie
