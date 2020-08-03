import { MutationTree } from 'vuex';
import * as types from './mutation-types'

const mutations: MutationTree<any> = {
    [types.SET_USER](state: any, data: any): void {
        state.userData = data;
    },
	
    [types.SET_ROUTES](state: any, routes: any): void {
        state.routes = routes;
    }
}

export default mutations;
