const config = {
  github: {
    username: 'Bamboooz',
    sortBy: 'stars',
    limit: 10,
    exclude: {
      forks: true,
      projects: ['bamboooz.github.io'],
    },
  },

  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: 'https://bamboooz.github.io',
    phone: '',
    email: 'bambusixmc@gmail.com',
  },

  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },

  skills: [
    'Python',
    'Java',
    'C#',
    'C',
    'Assembly',
    '.Net'
  ],

  themeConfig: {
    defaultTheme: 'dark',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    hideAvatarRing: false,

    themes: [
      'dark',
      'light',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  footer: `Buy me a coffe <a 
      class="text-primary" href="https://github.com/Bamboooz"
      target="_blank"
      rel="noreferrer"
    >here</a> ☕.`,
};

export default config;

