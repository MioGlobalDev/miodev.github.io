import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Bluesky',
    url: `https://bsky.app/profile/${config.bluesky}`,
    icon: 'bluesky',
  },
  {
    label: 'Twitter',
    url: `https://www.X.com/${config.Twitter}`,
    icon: 'Twitter',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
