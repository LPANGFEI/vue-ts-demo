/**
 * 将数字取整为10的倍数
 * @param {number} num 需要取整的值
 * @param {number} prec 需要用0占位的数量
 * @param {boolean} ceil 是否向上取整
 */

const numberInteger = (num: number, prec: number, ceil: boolean): number => {
	const len: number = String(num).length;
	if (len <= prec) {
		return num;
	}
	const mult: number = Math.pow(10, prec);
	return ceil ? Math.ceil(num / mult) * mult : Math.floor(num / mult) * mult;
};

export default numberInteger;
