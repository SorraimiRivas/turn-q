const { hairlineWidth } = require("nativewind/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			fontFamily: {
				p100: ["Poppins_100Thin"],
				p100I: ["Poppins_100Thin_Italic"],
				p200: ["Poppins_200ExtraLight"],
				p200I: ["Poppins_200ExtraLight_Italic"],
				p300: ["Poppins_300Light"],
				p300I: ["Poppins_300Light_Italic"],
				p400: ["Poppins_400Regular"],
				p400I: ["Poppins_400Regular_Italic"],
				p500: ["Poppins_500Medium"],
				p500I: ["Poppins_500Medium_Italic"],
				p600: ["Poppins_600SemiBold"],
				p600I: ["Poppins_600SemiBold_Italic"],
				p700: ["Poppins_700Bold"],
				p700I: ["Poppins_700Bold_Italic"],
				p800: ["Poppins_800ExtraBold"],
				p800I: ["Poppins_800ExtraBold_Italic"],
				p900: ["Poppins_900Black"],
				p900I: ["Poppins_900Black_Italic"],
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderWidth: {
				hairline: hairlineWidth(),
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
