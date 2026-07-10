/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
  			sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			/* Johri-inspired heritage pink + gerua palette */
  			blush: '#edcdc2',       /* main body background — Johri pink */
  			blushSoft: '#f4dcd0',   /* softer variant */
  			blushDeep: '#d9a898',   /* deeper pink for hover states */
  			cream: '#f7ebe0',       /* warm off-white */
  			rose: {
  				DEFAULT: '#8b2c26',   /* deep burgundy / primary heading */
  				light: '#a53a30',
  				dark: '#6d1e19',
  			},
  			gerua: {
  				DEFAULT: '#c96a2a',   /* saffron / secondary accent */
  				light: '#e08a4c',
  				dark: '#a54f18',
  				glow: '#f0a35e',
  			},
  			ink: '#2a1815',         /* near-black warm */
  			sand: '#e8d4c1',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  		},
  		keyframes: {
  			'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
  			'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
  			'fade-up': { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
  			'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
  			'scroll-bounce': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(8px)' } },
  			'shimmer': { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-up': 'fade-up 0.9s ease-out both',
  			'fade-in': 'fade-in 1.2s ease-out both',
  			'scroll-bounce': 'scroll-bounce 2s ease-in-out infinite',
  			'shimmer': 'shimmer 3s linear infinite',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
