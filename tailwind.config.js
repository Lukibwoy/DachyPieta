module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			xxl: '1536px',
		},
		extend: {
			animation: {
				scroll: 'scroll 10s linear infinite',
				'scroll-mobile': 'scroll 6s linear infinite',
				'spin-slow': 'spin 3s linear infinite',
				'spin-fast': 'spin 0.5s linear infinite',
			},
			keyframes: {
				scroll: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' },
				},
			},
		},
	},
	plugins: [],
}
