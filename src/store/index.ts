import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import createVuexAlong from 'vuex-along';

import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Store({
	state,
	getters,
	mutations,
	actions,
	// modules,
	plugins: [
		createVuexAlong({
			// 设置保存的集合名字，避免同站点下的多项目数据冲突
			name: 'vue-ts-demo',
			// local: {
			//   list: ["ma"],
			//   // 过滤模块 ma 数据， 将其他的存入 localStorage
			//   isFilter: true,
			// },
			// session: {
			//   // 保存模块 ma 中的 a1 到 sessionStorage
			//   list: ["ma.a1"],
			// },
			session: { list: [], isFilter: true }
		})
	]
});
