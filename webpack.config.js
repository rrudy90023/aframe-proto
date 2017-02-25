var webpack = require('webpack');
var PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
	context: __dirname + '/client',
	devtool: PROD ? false : 'cheap-source-map',

	entry: {
		javascript: './js/App.js',
		html: PROD ? './index.prod.html' : './index.html'
	},

	output: {
		filename: PROD ? 'bundle.min.js' : 'bundle.js',
		path: __dirname + '/dist'
	},

	resolve: {
		alias: {
			// moment: __dirname+'node_modules/moment/min/moment.min',
			// react: __dirname+'/node_modules/react/dist/react-with-addons.min',
			// 'react-dom': __dirname+'/node_modules/react-dom/dist/react-dom.min'
		}
	},

	plugins: PROD ? [
		new webpack.optimize.UglifyJsPlugin({minimize: true}),
		new webpack.DefinePlugin({ "process.env": { NODE_ENV: JSON.stringify("production") } })
	] : [],

	module: {
		loaders: [
			{
				test: /\.styl$/,
				loader: 'style-loader!css-loader!stylus-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel-loader'],
			},
			{
				test: /\.html$/,
				loader: 'file?name=[name].[ext]',
			},
			{ test: /\.(png|woff|woff2|eot|ttf|svg|obj|mtl|dae|jpg)$/, loader: 'url-loader?limit=100000' }
		]
	}
}