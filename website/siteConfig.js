/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
	{
		caption: 'User1',
		// You will need to prepend the image path with your baseUrl
		// if it is not '/', like: '/test-site/img/docusaurus.svg'.
		image: '/img/ppp.png',
		infoLink: 'https://www.facebook.com',
		pinned: true
	}
];

const siteConfig = {
	title: 'Performance Management System', // Title for your website.
	tagline: "Employee's Performance",
	url:
		'https://pmas.cfapps.io/app/evaluationform?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjY1OTMxMjMsImlkIjoiMTQ0MjEiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjYzOTM5LyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NjM5MzkvIn0.n6SwzLnjzsLNBEYJEF-7Fl8D49la65E7CdhBLMTJf5Y', // Your website URL
	baseUrl: '/', // Base URL for your project */
	// For github.io type URLs, you would set the url and baseUrl like:
	//   url: 'https://facebook.github.io',
	//   baseUrl: '/test-site/',

	// Used for publishing and more
	projectName: 'test-site',
	organizationName: 'facebook',
	// For top-level user or org sites, the organization is still the same.
	// e.g., for the https://JoelMarcey.github.io site, it would be set like...
	//   organizationName: 'JoelMarcey'

	// For no header links in the top nav bar -> headerLinks: [],
	headerLinks: [
		{ doc: 'copy-pmas', label: 'Docs' },
		{ doc: 'doc4', label: 'API' },
		{ page: 'help', label: 'Help' },
		{ blog: true, label: 'Blog' }
	],

	// If you have users set above, you add it here:
	users,

	/* path to images for header/footer */
	headerIcon: 'img/ppp.png',
	footerIcon: 'img/ppp.png',
	favicon: 'img/ppp.png',

	/* Colors for website */
	colors: {
		primaryColor: '#0058b7',
		secondaryColor: '#007bff'
	},

	/* Custom fonts for website */
	/*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

	// This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
	copyright: `Copyright © ${new Date().getFullYear()} Your Name or Your Company Name`,

	highlight: {
		// Highlight.js theme to use for syntax highlighting in code blocks.
		theme: 'default'
	},

	// Add custom scripts here that would be placed in <script> tags.
	scripts: ['https://buttons.github.io/buttons.js'],

	// On page navigation for the current documentation page.
	onPageNav: 'separate',
	// No .html extensions for paths.
	cleanUrl: true,

	// Open Graph and Twitter card images.
	ogImage: 'img/ppp.png',
	twitterImage: 'img/ppp.png'

	// Show documentation's last contributor's name.
	// enableUpdateBy: true,

	// Show documentation's last update time.
	// enableUpdateTime: true,

	// You may provide arbitrary config keys to be used as needed by your
	// template. For example, if you need your repo's URL...
	//   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
