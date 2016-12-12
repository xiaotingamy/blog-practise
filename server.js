
const path = require('path');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');

const compression = require('compression');
const expressControllers = require('express-controller');
const router = express.Router();
const ejs = require('ejs');

const webpackconfig = require('./client/webpack.config.js');
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

// 处理请求数据
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));

//curl请求api
request = require('request');
app.use(compression());

root = __dirname;
config = require('./server/core/Config');
model = require('./server/core/Model');
app.use(router);
client = config.load("client");

if (isDeveloping) {
	const compiler = webpack(webpackconfig);
	const middleware = webpackMiddleware(compiler, {
		publicPath: webpackconfig.output.publicPath,
		stats: {
			colors: true,
		    hash: false,
		    timings: true,
		    chunks: false,
		    chunkModules: false,
		    modules: false
		}
	})
	app.use(middleware);
	app.use(webpackHotMiddleware(compiler));
	app.get('*', function response(req, res){
		res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'client/dist/index.html')));
		res.end();
	})
} else {
	app.use(express.static(__dirname + '/client/dist'));
	app.get('*', function response(req, res) {
		res.sendFile(path.join(__dirname, 'client/dist/index.html'));
	});
}

// 视图配置
app.engine('html', ejs.__express);
app.set('views', __dirname + '/client/dist');
app.set('view engine', 'html');

//绑定控制器
expressControllers
    .setDirectory( __dirname + '/server/application/controllers')
    .bind(router);

app.listen(port, function onStart(err){
	if(err) {
		console.log(err)
	} else {
	    console.info('==> Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
	}
})