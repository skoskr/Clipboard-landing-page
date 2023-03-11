/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		container: {
			center: true,
			screens: {
				lg: "900px",
				xl: "900px",
				"2xl": "900px",
			},
		},

		extend: {
			fontFamily: {
				baijam: ['Bai Jamjuree', 'sans-serif'],
			},

			colors: {
				strongcyan: "hsl(171, 66%, 44%)",
				lightblue: "hsl(233, 100%, 69%)",
				darkgrayishblue: "hsl(210, 10%, 33%)",
				grayishblue: "hsl(201, 11%, 66%)",
			},

			spacing: {
				128: "32rem",
				160: "40rem",
				18: "4.05rem"
			},
		},
	},
	plugins: [],
};
