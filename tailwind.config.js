module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '36rem': '36rem',
      }
    },
    fontFamily: {
      Body: ['Lato'],
      UbuntuMono: ['Ubuntu Mono']

    },
    colors: {
      NavBar: '#14161A',
      NavbarBorder: '#45E68A',
      BackgroundPageDefault: '#191B1F',
      BackgroundPageDefaultDarker: '#121316',
      PaleYellow: '#F6E3CC',
      OpenClosing: '#F8F8F2',
      HTMLTag: '#89C0D9',
      White: '#fff',
      BlueDefault: '#4F46E5',
      DarkPurple: '#23022E',
      Xiketic: '#0F0114',
      RussianViolet: '#2B033A'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}