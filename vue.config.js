module.exports = {
	publicPath: process.env.VUE_APP_PUBLIC_PATH,
	outputDir: process.env.VUE_APP_OUTPUT_DIR,
	assetsDir: 'static',
	indexPath: 'index.html',
	runtimeCompiler: false,
	productionSourceMap: false,
	devServer: {
		proxy: {
			'/api': {
				target: 'http://192.168.22.204:8762/',
				ws: true,
				changOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}
};
