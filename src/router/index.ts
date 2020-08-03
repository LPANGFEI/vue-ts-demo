import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
// import jwtDecode from 'jwt-decode';

import routes from './routes';
import hasPermission from '../utils/hasPermission';

Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	// mode: 'history',
	base: process.env.BASE_URL
});

router.beforeEach((to: any, form: any, next: any) => {
	// const isLogin: boolean = localStorage.tsToken ? true : false;
	// meta标识的路由需要登陆token
	if (to.meta.requireAuth) {
		// // 是否登陆有token
		// if (isLogin) {
		// 	const decoded: any = jwtDecode(localStorage.tsToken);
		// 	const { key } = decoded;
		// 	// 权限判断
		// 	if (hasPermission(key, to)) {
		// 		next();
		// 	} else {
		// 		// 没有权限
		// 		next('/404');
		// 	}
		// } else {
		// 	// 返回登陆
		// 	next({
		// 		path: '/login',
		// 		// 将跳转的路由path作为参数，登录成功后跳转重定向到该路由
		// 		query: {
		// 			redirect: to.fullPath
		// 		}
		// 	});
		// }
	} else {
		// 其他可登录
		next();
	}
});

export default router;
