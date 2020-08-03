import request from '@/interface/index';

export const getUser = () => {
	return request({
		url: 'http://jsonplaceholder.typicode.com/users',
		method: 'get'
	});
};
