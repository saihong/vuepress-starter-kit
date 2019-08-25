module.exports = {
	title: 'VuePress Starter Kit',
	head: [
		['link', { rel: 'icon', href: `/favicon.png` }]
	],
	ga: '',
	description: 'This is your page description.',
	themeConfig: {
		repo: 'https://github.com/bencodezen/vuepress-starter-kit',
		editLinks: true,
		editLinkText: 'Edit this page',
		lastUpdated: 'Last updated',
		nav: [
			{
				text: 'Home',
				link: '/'
			},
			{
				text: 'Basic Page',
				link: '/basic/'
			},
			{
				text: 'Component Example',
				link: '/component-example'
			},
			{
				text: '讀書報告',
				items: [
					{
						text: '打造超人大腦',
						link: '/books/#section-introduction'
					},
					{
						text: '訂閱經濟',
						link: '/books/#some-more-content'
					}
				]
			},
			{
				text: 'Contact',
				items: [
					{
						text: 'Twitter',
						link: 'https://www.twitter.com/'
					},
					{
						text: 'Email',
						link: 'mailto:hello@email.com'
					}
				]
			}
		],
		docsDir: 'docs'
	}
}
