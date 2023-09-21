import self from '../img/self.jfif'
import mock1 from '../img/mock1.png'
import mock2 from '../img/mock2.png'
import mock3 from '../img/mock3.png'
import mock4 from '../img/mock4.png'
import mock5 from '../img/mock5.png'

export let colors = ['rgb(20, 146, 255)', 'rgb(255, 134, 20)']

export const info = {
  firstName: 'Troy',
  lastName: 'Dorman',
  initials: 'td',
  position: 'a Full Stack Developer',
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: '🍜',
      text: 'Fueled by Pho',
    },
    {
      emoji: '🌳',
      text: 'Pacific Northwest, USA',
    },
    {
      emoji: '💼',
      text: 'Looking for Work',
    },
    {
      emoji: '📧',
      text: 'troydorman@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://www.facebook.com/troydorman2025',
      icon: 'fa fa-facebook',
      label: 'facebook',
    },
    {
      link: 'https://troypics.netlify.app',
      icon: 'fa fa-camera-retro',
      label: 'photo_portfolio',
    },
    {
      link: 'https://github.com/infiniteoo',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/troydorman2025',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://twitter.com/troydorman_',
      icon: 'fa fa-twitter',
      label: 'twitter',
    },
  ],
  bio:
    "Hello! I'm Troy. I'm a certified full-stack developer trained at the University of Minnesota, and I am in search of my next opportunity. Currently, I'm primarly engaged in creating automated technologies centered in the logistics, warehousing and production industries. I enjoy coding, listening to EDM, audiobooks, and playing Starfield.  You should hire me!",
  skills: {
    proficientWith: [
      'javascript/css/html',
      'react/jsx',
      'next.js',
      'node.js/express',
      'tailwindcss',
      'aws/cloud',
      'linux admin/nginx',
      'react-native',
      '',
    ],
    exposedTo: ['java', 'python', 'golang', 'c#'],
  },
  hobbies: [
    {
      label: 'gaming',
      emoji: '🎮',
    },
    {
      label: 'trance/edm',
      emoji: '🎼',
    },
    {
      label: 'cats',
      emoji: '🐈',
    },
    {
      label: 'photography',
      emoji: '📷',
    },
  ],
  portfolio: [
    {
      title: 'PalletTest',
      live: 'https://pallettest.com',
      source: 'https://github.com/infiniteoo',
      image: mock1,
    },
    {
      title: 'Report It',
      live: 'https://',
      source: 'https://github.com/infiniteoo',
      image: mock2,
    },
    {
      title: 'PowerDing',
      live: 'https://',
      source: 'https://github.com/infiniteoo',
      image: mock3,
    },
    {
      title: 'Portfolio 2024',
      live: 'https://',
      source: 'https://github.com/infiniteoo',
      image: mock4,
    },
    {
      title: 'Timeline Monitor',
      live: 'https://www.linemon.com',
      source: 'https://github.com/infiniteoo',
      image: mock5,
    },
  ],
}
