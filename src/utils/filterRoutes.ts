import hasPermission from './hasPermission';

/**
 *  递归过滤异步路由表，返回符合用户角色权限的路由表
 *  @param {any[]} routes 所有路由表
 *  @param {string} roles 当前角色
 */
const filterRoutes = (routes: any[], roles: string): any => {
	const accessedRouters: any = routes.filter((route: any) => {
		if (hasPermission(roles, routes)) {
			if (route.children && route.children.length) {
				route.children = filterRoutes(route.children, roles);
			}
			return true;
		}
		return false;
	});
	return accessedRouters;
};

export default filterRoutes;
