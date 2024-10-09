import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : {
        themePrimary : '#6842FF',
        themeSecundary : '#1F222A',
        themeDark : '#121212',
        themeLight : '#FFFFFF',
        themeInative : '#BDBDBD',
        themeSuccess : '#24C467',
        themeError : '#FD6F70 '
      },
      fontFamily : {
        Poppins : "Poppins"
      }
    },
  },
  plugins: [],
}
export default config
