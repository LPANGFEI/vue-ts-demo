import { Loading } from 'element-ui';
import _ from 'lodash';

let needLoadingRequestCount: number = 0;
let loading!: object;

const startLoading = () => {
	console.log('========== 开始loading ==========');
	loading = Loading.service({
		lock: true,
		text: 'Loading...',
		// spinner: 'el-icon-loading',
		background: 'rgba(0, 0, 0, 0.7)'
	});
};

const endLoading = () => {
	console.log('========== 结束loading ==========');
	(loading as any).close();
};

const tryCloseLoading = () => {
	if (needLoadingRequestCount === 0) {
		endLoading();
	}
};

export const showFullScreenLoading = () => {
	if (needLoadingRequestCount === 0) {
		startLoading();
	}
	needLoadingRequestCount++;
};

export const tryHideFullScreenLoading = () => {
	if (needLoadingRequestCount <= 0) return;
	needLoadingRequestCount -= 1;
	if (needLoadingRequestCount === 0) {
		_.debounce(tryCloseLoading, 300)();
	}
};
