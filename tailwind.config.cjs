module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: {
			  DEFAULT: {
				css: {
					maxWidth: '128ch',
					marginTop: '0em',
					h1: {
						fontSize: '36px',
						marginTop: '0em',
						marginBottom: '0em',
					  },
					h2: {
						fontSize: '30px',
						marginTop: '0em',
						marginBottom: '0em',
					  },
					h3: {
						fontSize: '24px',
						marginTop: '0em',
						marginBottom: '0em',
					  },
					h4: {
						fontSize: '20px',
						marginTop: '0em',
						marginBottom: '0em',
					  },
					h5: {
						fontSize: '18px',
						marginTop: '0em',
						marginBottom: '0em',
					  },
					h6: {
					  fontSize: '16px',
					  marginTop: '0em',
					  marginBottom: '0em',
					},
				  p: {
					fontSize: '16px',
					color: '#4a5568',
					marginTop: '0em',
					marginBottom: '0em',
					fontFamily: {
						montserrat: ['Montserrat Variable', 'sans-serif'],
					  },
				  },
				  a: {
					color: '#3182ce',
					textDecoration: 'none',
					'&:hover': {
					  color: '#2b6cb0',
					},
				  },
				},
				
			  },
			},
		  },	  
		fontFamily: {
			'montserrat': ['Montserrat Variable', 'sans-serif'],
		  }
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
};
