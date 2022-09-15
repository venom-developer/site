const fs = require('fs');

/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  title: 'Animesh Sahu',
  description: 'My website for documenting myself',

  lang: 'en-US',
  base: '/site/',
  outDir: '../dist',

  // Temporarily disabled due to: https://github.com/vuejs/vitepress/issues/1345
  // cleanUrls: 'with-subfolders',

  appearance: true,
  ignoreDeadLinks: true,

  buildEnd: (cfg) => {
    return fs.promises.rmdir(cfg.srcDir + '/node_modules');
  },

  markdown: {
    theme: 'material-palenight',
    lineNumbers: true,
  },

  themeConfig: {
    outlineTitle: 'Table of Contents',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Animeshz/site' },
      // Better on footer
      // { icon: 'twitter', link: '...' },
      // { icon: 'linkedin', link: '...' },
      // { icon: 'reddit', link: '...' },
      // { icon: 'patreon', link: '...' },
      // { icon: 'rss', link: '...' },
    ],
    editLink: { pattern: 'https://github.com/Animeshz/site/edit/main/content/:path' },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Awesome', link: '/awesome/' },
      { text: 'Notes', link: '/notes/' },
      { text: 'Point of Interest', link: '/point-of-interest/' },
      { text: 'Setup', link: '/setup/' },
      { text: 'Contact', link: '/contact/' },
    ],
    sidebar: {
      '/blog/': mcol(sidebar_blog()),
      '/awesome/': mcol(sidebar_awesome()),
      '/notes/': mcol(sidebar_notes()),
      '/point-of-interest/': mcol(sidebar_point_of_interest()),
      '/setup/': mcol(sidebar_setup()),
      '/contact/': mcol(sidebar_contact()),

      // Must be at bottom, so other branches are not matched
      '/': mcol(sidebar_root()),
    }
  }
};

export default config;

function mcol(target) {
  if (target.length > 1) {
    target.forEach(v => v.collapsible = true);
  }
  return target;
}

function sidebar_root() {
  return [
    {
      text: 'Home',
      items: [],
    },
  ];
}

function sidebar_blog() {
  return [
    {
      text: 'Linux Related',
      items: [
        { text: 'Linux (1/2) - A near surface exploration', link: '/blog/linux-1' },
        { text: 'Linux (2/2) - A deep dive', link: '/blog/linux-2' },
      ],
    },
  ];
}

function sidebar_awesome() {
  return [
    {
      text: 'Awesome',
      items: [
        { text: 'Awesome Blogs', link: '/awesome/blogs' },
        { text: 'Awesome Learning Resources', link: '/awesome/resources' },
        { text: 'Awesome Life Lessions', link: '/awesome/life-lessions' },
        { text: 'Awesome Web', link: '/awesome/web' },
      ],
    },
  ];
}

function sidebar_notes() {
  return [
    {
      text: 'Notes',
      items: [
        { text: 'Troubleshooting Notes', link: '/notes/troubleshooting' },
      ]
    },
    {
      text: 'Linux',
      items: [
        { text: 'Linux Setup', link: '/notes/linux/linux-setup' },
        { text: 'Random Stuffs', link: '/notes/linux/linux-random-stuffs' },
        { text: 'Troubleshooting', link: '/notes/linux/linux-troubleshooting' },
        // { text: 'Nix', link: '/notes/Linux/nix' },
      ]
    },
  ];
}

function sidebar_point_of_interest() {
  return [
    {
      text: 'Home',
      items: [],
    },
  ];
}

function sidebar_setup() {
  return [
    {
      text: 'Home',
      items: [],
    },
  ];
}

function sidebar_contact() {
  return [
    {
      text: 'Home',
      items: [],
    },
  ];
}