/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        mono: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        body: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#FFF4E8',
        'secondary': '#5E270B',
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      boxShadow: {
        'default': 'inset 0px 0px 0px 1px #ffffff, 0px 4.33px 4.33px 0px #5E270B66',
        'custom': '0px 4px 4px 0px #5E270B66',
        'custom-light': 'inset 0px 0px 0px 1px #ffffff',
        'secondary': '0px 2.33px 5.33px -2px #5E270B66',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-110%)' },
        },
        mobileScroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-500%)' },
        },
      },
      animation: {
        scroll: 'scroll 40s linear 0s infinite',
        mobileScroll: 'mobileScroll 25s linear 0s infinite',
      },
    },
  },
  plugins: [],
}; 