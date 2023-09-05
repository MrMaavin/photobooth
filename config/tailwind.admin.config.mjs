export default {
  content: [
    "./admin/**/*.php",
    "./login/**/*.php",
    "./manual/**/*.php",
    "./welcome/**/*.php",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'brand-1': 'var(--brand-1, #1B3FAA)',
        'brand-1-hover': 'var(--brand-1-hover, #153288)',
        'content-1': 'var(--content-1, #F1F5F8)',
        'brand-2': 'var(--brand-2, #E8EBF6)',
        'primary': 'var(--primary, #1b3faa)',
        'primary-light': 'var(--primary-light, #E8EBF6)',
        'secondary': 'var(--secondary, #5f78c3)',
        'tertiary': 'var(--tertiary, #8d9fd4)',
        'font': 'var(--font, #c9c9c9)',
        'secondary-font': 'var(--secondary-font, #333333)',
        'button-font': 'var(--button-font, #ffffff)',
        'start-font': 'var(--start-font, #333333)',
        'panel': 'var(--panel, #1b3faa)',
        'btn-border': 'var(--btn-border, #eeeeee)',
        'box': 'var(--box, #e8ebf6)',
        'gallery-button': 'var(--gallery-button, #ffffff)',
        'countdown': 'var(--border, #1b3faa)',
        'countdown-bg': 'var(--countdown-bg, #8d9fd4)',
        'cheese': 'var(--cheese, #aa1b3f)'
      },
      boxShadow: {
        "xl": "0 3px 20px #0000001c"
      },
      maxWidth: {
        "admin": "2000px"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      spacing: {
        '1/1': '100%',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '12/12': '100%',
        '14/12': '116.666667%',
        '16/12': '133%',
        '20/12': '166%',
      },
    },
  },
};

