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
      BackgroundPageTimberwolf: '#E4DFDA',
      FrenchViolet: '#731DD8',
      Verdigris: '#48A9A6',
      Black: '#000000',
      Burlywood: '#D4B483',
      FuzzyWuzzy: '#C1666B',
      PaleYellow: '#F6E3CC',
      OpenClosing: '#FF389C',
      HTMLTag: '#000000',
      White: '#fff',
      Grey: '#2c2f36',
      GreyDark: '#15161A',
      GreyDarkLighter: '#1D1E24',
      GreyDarkest: '#22232B',
      Green: '#00A651',
      BlueDefault: '#4F46E5',
      DarkPurple: '#23022E',
      Xiketic: '#0F0114',
      RussianViolet: '#2B033A',
      WhiteDarker: '#232227',
      WhiteDarkest: '#19171C'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}