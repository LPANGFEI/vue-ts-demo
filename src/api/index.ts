import { webSocketIp } from './interface';

let BASE_URL!: string;

const TEST: string = '192.168.22.204:8762';

const WEB_SOCKET_IP: webSocketIp = {
	webSocket: ''
};

switch (process.env.VUE_APP_ENV) {
	case 'serve':
		BASE_URL = '';
		break;
	case 'test':
		BASE_URL = `http://${TEST}/`;
		break;
	case 'build':
		BASE_URL = `http://${TEST}/`;
		WEB_SOCKET_IP.webSocket = `ws://${TEST}/xxx`;
		break;
	default:
		break;
}

export default {
	BASE_URL,
	TEST,
	WEB_SOCKET_IP
};
