/**
 * 时间格式转换
 * @param {number|string} time 需要转换的时间戳
 * @param {string} format 转换的时间格式
 **/
const formatDate = (time: number | string, format: string): string => {
	const t: Date = new Date(time);
	const tf = (i: number | string): string => {
		return (i < 10 ? '0' : '') + i;
	};
	return format.replace(
		/yyyy|MM|dd|HH|mm|ss/g,
		(a: string): string => {
			switch (a) {
				case 'yyyy':
					return tf(t.getFullYear());
				case 'MM':
					return tf(t.getMonth() + 1);
				case 'mm':
					return tf(t.getMinutes());
				case 'dd':
					return tf(t.getDate());
				case 'HH':
					return tf(t.getHours());
				case 'ss':
					return tf(t.getSeconds());
				default:
					return '';
			}
		}
	);
};

export default formatDate;
