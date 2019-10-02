import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'Index',
			component: () =>
				import(/* webpackChunkName: "Index" */ './views/Index.vue'),
			redirect: '/button',
			meta: { title: 'Index' },
		},
		{
			path: '/page',
			name: 'Page',
			component: () =>
				import(/* webpackChunkName: "Page" */ './views/Page.vue'),
			meta: { title: 'Page' },
		},
		{
			path: '/button',
			name: 'Button',
			component: () =>
				import(/* webpackChunkName: "Button" */ './views/Button.vue'),
			meta: { title: 'Button' },
		},
		{
			path: '/link',
			name: 'Link',
			component: () =>
				import(/* webpackChunkName: "Link" */ './views/Link.vue'),
			meta: { title: 'Link' },
		},
		{
			path: '/checkbox',
			name: 'Checkbox',
			component: () =>
				import(
					/* webpackChunkName: "Checkbox" */ './views/Checkbox.vue'
				),
			meta: { title: 'Checkbox' },
		},
		{
			path: '/radio',
			name: 'Radio',
			component: () =>
				import(/* webpackChunkName: "Radio" */ './views/Radio.vue'),
			meta: { title: 'Radio' },
		},
	],
});
