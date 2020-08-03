import Vue from 'vue';
import Component from 'vue-class-component';
Component.registerHooks(['beforeRouteEnter', 'beforeRouteLeave', 'beforeRouteUpdate']);

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

import axios from '@/interface/index';
import VueAxios from 'vue-axios';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/styles/index.scss';

Vue.use(VueAxios, axios);

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
