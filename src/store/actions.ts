import { ActionTree } from 'vuex';
import * as types from './mutation-types';
// import jwtDecode from 'jwt-decode';
// import routes from '../router/routes';

import filterRoutes from '../utils/filterRoutes';

const actions: ActionTree<any, any> = {
	// async setUser({ commit }, user: any) {
	// 	// 解析账户信息
	// 	const decoded: any = jwtDecode(user);
	// 	// 保存账户信息
	// 	commit(types.SET_USER, decoded);
	// 	// 获取账户权限
	// 	const { key } = decoded;
	// 	// 返回当前账户拥有权限的路由
	// 	const accessedRouters = filterRoutes(routes, key);
	// 	commit(types.SET_ROUTES, accessedRouters);
	// }
};

export default actions;
