import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Message } from 'element-ui';
import router from '@/router';
import api from '@/api';
import { showFullScreenLoading, tryHideFullScreenLoading } from './loading';

/**
 * axios请求
 * 请求拦截器 负责将客户端标识token值存储并放置在头部提交给服务端
 * 响应拦截器 负责全局处理业务请求的网络或者业务错误
 */

// 创建axios实例
const service = axios.create({
	// 请求超时
	timeout: 10000,
	// 默认请求地址
	baseURL: api.BASE_URL
});

// 请求拦截
service.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// 加载动画
		showFullScreenLoading();
		// 设置token
		localStorage.tsToken && (config.headers.Authorization = localStorage.tsToken);
		return config;
	},
	(err: any) => {
		return Promise.reject(err);
	}
);

// 响应拦截
service.interceptors.response.use(
	(response: AxiosResponse) => {
		//结束加载动画
		tryHideFullScreenLoading();
		return response;
	},
	(err: any) => {
		let errMsg!: string;
		// 判断err的类型
		if (err && err.response.status) {
			switch (err.response.status) {
				case 401:
					errMsg = '登陆状态失效，请重新登陆！';
					localStorage.removeItem('tsToken');
					router.push('/login');
					break;
				case 403:
					errMsg = '拒绝访问';
					break;
				case 408:
					errMsg = '请求超时';
					break;
				case 500:
					errMsg = '服务器内部错误';
					break;
				case 501:
					errMsg = '服务未实现';
					break;
				case 502:
					errMsg = '网关错误';
					break;
				case 503:
					errMsg = '服务不可用';
					break;
				case 504:
					errMsg = '网关超时';
					break;
				case 505:
					errMsg = 'HTTP版本不受支持';
					break;
				default:
					errMsg = err.response.data.msg;
					break;
			}
		} else {
			errMsg = err;
		}
		// 饿了么错误提示
		Message.error(errMsg);
		return Promise.reject(errMsg);
	}
);

export default service;
