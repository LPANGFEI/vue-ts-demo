import request from '@/interface/index';

export const login = (data: any) => {
	return request({
		url: '/vue-element-admin/user/login',
		method: 'post',
		data
	});
};

export const getInfo = (token: any) => {
	return request({
		url: '/vue-element-admin/user/info',
		method: 'get',
		params: { token }
	});
};

export const logout = () => {
	return request({
		url: '/vue-element-admin/user/logout',
		method: 'post'
	});
};
