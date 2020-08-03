export default [
	{
		path: '/',
		name: 'Home',
		hidden: false,
		component: () => import('@/views/Home/index.vue'),
		meta: {
			title: '首页',
			icon: 'el-icon-s-home',
			requireAuth: false
		}
	}
];
