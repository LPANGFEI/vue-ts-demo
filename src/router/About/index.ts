export default [
	{
		path: '/about',
		name: 'About',
		hidden: false,
		component: () => import('@/views/About/index.vue'),
		meta: {
			title: '关于',
			icon: 'el-icon-s-home',
			requireAuth: false
		}
	}
];
