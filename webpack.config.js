var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer'); // 自动添加浏览器前缀
var webpack=require('webpack');
module.exports = {
	entry: {
		main : './src/root.js'
	},
	output: {
		path: path.join(__dirname,'disk'),
		filename: '[name].bundle.js',
		// publicPath: '/disk/',
		publicPath: 'https://wuxiaozhou.coding.me/cnode-react/disk/',
		chunkFilename: '[name].[chunkhash:5].chunk.js'//利用hash做浏览器缓存
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
					presets: ['es2015','react']
				},
				include: __dirname,
				exclude: /node_modules/
			},{
				test: /\.css$/,
				loaders: ['style','css','postcss']
			},{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract('style-loader','css-loader?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:5]!postcss-loader!less-loader')
			},{
				test: /\.(woff|svg|eot|ttf)$/, 
				loader: 'url-loader?limit=50000&name=fonts/[name].[hash:5].[ext]'
			},{
				test: /\.(gif|jpg|png)$/,
				loader: 'url-loader?limit=8192&name=images/[name].[hash:5].[ext]'
			}
		]
	},
	postcss: function () { // postcss 插件
        return [autoprefixer];
    },
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('common.js'),//智能提取公共部分，以提供我们浏览器的缓存复用，我们需要手动在html上去加载common.js，并且是必须要最先加载。CommonsChunkPlugin是在有多个entry时使用的，即在有多个入口文件时，这些入口文件可能会有一些共同的代码，我们便可以将这些共同的代码抽取出来成独立的文件。
		new ExtractTextPlugin("[name].css"),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),//代码压缩，只在生产环境使用
		new webpack.DefinePlugin({
			"process.env": { 
				NODE_ENV: JSON.stringify("production") 
			}
		})
		// new HtmlWebpackPlugin({
		// 	title: 'CNode:Node.js专业中文社区',
		// 	filename: 'haha.html'
		// })
	],
	resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
