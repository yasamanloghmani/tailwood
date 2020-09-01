module.exports = {
  theme: {
    boxShadow: {
      redshadow: '0 20px 25px -5px rgba(100, 0, 0, 0.1), 0 10px 10px -5px rgba(100, 0, 0, 0.04)',
    },
    extend: {
      opacity: {
        '20': '0.2',
        '50': '0.5',
        '80': '0.8',
      },
      width: {
        '48': '48px',
        "400": '400px'
      }
    },
    gridTemplateRows: {
      'gridLeftMenu': '100px 9fr',
    },
    screens: {
      sm: '550px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      'screen': ['Georgia','Cambria', 'serif'],
      'mobile': ['-apple-system', 'BlinkMacSystemFont'],
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontWeight: {
      thin : 200,
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
      extrabold: 900
    },

    colors: {
      purples :{
        dark: '#300030',
        med:'#580838',
        light: '#680840',
      },
      cyan: {
        dark: '#003333',
        med: '	#003f3f',
        light: '	#009090'
      },
      falling: {
        dark: '#	#24527b',
        med: '#2d72a2',
        light: '#6a92bb',
        gray: '#b5c9dd',
      },
      blue: {
        dark: '#001B3A',
        med: '#00224B',
        light: '#00316E',
        toolight: '#ebf8ff',
        header: '#a2d5f2'
      },
      logo: {
        green: '#84bca4',
        blue: '#07073a',
      }
      
    }
  },
  spacing: {
    '1': '5pxpx',
    '2': '10px',
    '3': '15px',
    '4': '20px',
    '5': '30px',
    '6': '35px',
    '7': '40px',
    '8': '45px',
    '9': '50px'
  },
  placeholderColor: {
    'primary': '#3490dc',
    'secondary': '#ffed4a',
    'danger': '#e3342f',
  }
}