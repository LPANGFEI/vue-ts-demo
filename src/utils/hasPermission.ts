/**
 * 判断是否有权限
 * @param {string} roles 当前角色
 * @param {any} route 当前路由对象
 **/
const hasPermission = (roles: string, route: any): boolean => {
	// meta.roles是否包含角色的key值，如果包含那么就是有权限
	if (route.meta && route.meta.roles) {
		return route.meta.roles.some((role: string) => role.indexOf(roles) >= 0);
	} else {
		// 默认不设置权限
		return true;
	}
};

export default hasPermission;
