import React from 'react'

const Separator = ({ angle = 128 }) => {
	return (
		<div
			className={`w-full h-[3px] md:h-[6px] bg-green-300 relative overflow-hidden md:mt-16`}
			style={{
				clipPath: `polygon(0 0, 100% ${angle}%, 100% 100%, 0 ${100 - angle}%)`,
			}}>
			<div className="absolute top-0 left-0 w-full h-full bg-green-700 opacity-50"></div>
		</div>
	)
}

export default Separator
