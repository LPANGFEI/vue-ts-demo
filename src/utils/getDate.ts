/*
 *	获取 今日/昨日/本周/上周 的开始结束时间
 *	getToday 获取今日的开始结束时间
 *  getYesterday 获取昨日的开始结束时间
 * 	getCurrWeekDays	获取本周的开始结束时间
 * 	getLastWeekDays	获取上周的开始结束时间
 *
 */

import moment from 'moment';
import { datas } from './interface';

// 获取今日的开始结束时间
export const getToday = (): datas => {
	const dataObj: datas = {
		startTime: '',
		endTime: ''
	};
	dataObj.startTime = moment(
		moment()
			.startOf('day')
			.valueOf()
	).format('YYYY-MM-DD HH:mm:ss');
	dataObj.endTime = moment(moment().valueOf()).format('YYYY-MM-DD HH:mm:ss');
	return dataObj;
};

// 获取昨日的开始结束时间
export const getYesterday = (): datas => {
	const dataObj: datas = {
		startTime: '',
		endTime: ''
	};
	dataObj.startTime = moment(
		moment()
			.add(-1, 'days')
			.startOf('day')
			.valueOf()
	).format('YYYY-MM-DD HH:mm:ss');
	dataObj.endTime = moment(
		moment()
			.add(-1, 'days')
			.endOf('day')
			.valueOf()
	).format('YYYY-MM-DD HH:mm:ss');
	return dataObj;
};

// 获取本周的开始结束时间
export const getCurrWeekDays = (): datas => {
	const dataObj: datas = {
		startTime: '',
		endTime: ''
	};
	dataObj.startTime = moment(
		moment()
			.week(moment().week())
			.startOf('week')
			.add(1, 'days')
			.valueOf()
	).format('YYYY-MM-DD HH:mm:ss');
	dataObj.endTime = moment(
		moment()
			.week(moment().week())
			.endOf('week')
			.add(1, 'days')
			.valueOf()
	).format('YYYY-MM-DD HH:mm:ss');
	return dataObj;
};

// 获取上周的开始结束时间
export const getLastWeekDays = (): datas => {
	const dataObj: datas = {
		startTime: '',
		endTime: ''
	};
	dataObj.startTime = moment(
		moment()
			.week(moment().week() - 1)
			.startOf('week')
			.add(1, 'days')
			.valueOf()
	).format('YYYY-MM-DD HH:mm:ss');
	dataObj.endTime = moment(
		moment()
			.week(moment().week() - 1)
			.endOf('week')
			.add(1, 'days')
			.valueOf()
	).format('YYYY-MM-DD HH:mm:ss');
	return dataObj;
};
