/**
 * 判断数据是否为空
 * @param {any} value 需要判断的数据
 **/
const isEmpty = (value: any): boolean => {
	return value === undefined || value === null || (typeof value === 'object' && Object.keys(value).length === 0) || (typeof value === 'string' && value.trim().length === 0);
};

export default isEmpty;
