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
  position: 'Full Stack Developer',
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: '🍜',
      text: 'Fueled by Pho',
    },
    {
      emoji: '🌎',
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
      link: 'https://facebook.com',
      icon: 'fa fa-facebook',
      label: 'facebook',
    },
    {
      link: 'https://instagram.com',
      icon: 'fa fa-instagram',
      label: 'instagram',
    },
    {
      link: 'https://github.com/infiniteoo',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://linkedin.com',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://twitter.com',
      icon: 'fa fa-twitter',
      label: 'twitter',
    },
  ],
  bio:
    "Hello! I'm Troy. I'm a full stack developer in search of my next gig. I'm a certified developer thanks to the University of Minnesota. I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  skills: {
    proficientWith: [
      'javascript',
      'react',
      'git',
      'github',
      'bootstrap',
      'html5',
      'css3',
      'figma',
    ],
    exposedTo: ['nodejs', 'python', 'adobe illustrator'],
  },
  hobbies: [
    {
      label: 'reading',
      emoji: '📖',
    },
    {
      label: 'theater',
      emoji: '🎭',
    },
    {
      label: 'movies',
      emoji: '🎥',
    },
    {
      label: 'cooking',
      emoji: '🌶',
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
      title: 'PalletPlaques',
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
