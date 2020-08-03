export default [
	{
		path: '/test',
		name: 'Test',
		hidden: false,
		component: () => import('@/views/Test/index.vue'),
		meta: {
			title: '测试',
			icon: 'el-icon-s-home',
			requireAuth: false
		}
	}
];
