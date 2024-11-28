import pieta from './images/pietalogo.png'
export default function Logo() {
	return (
		<div className="logo h-36 w-36 ml-7">
			<img src={pieta} alt="logo" className="rounded-full" />
		</div>
	)
}
