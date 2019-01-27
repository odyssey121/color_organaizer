const path = require('path')
const webpack = require('webpack')


module.exports = {
	watch:true,
	mode:'development',
	entry: './src/index.js',
	output: {
		path: __dirname+'/dist/assets',
		filename: 'bundle.js',
		sourceMapFilename: 'bundle.map'
	},
	devtool: '#source-map',
	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: [{
			loader: 'babel-loader',
			query: {
				presets: ['env', 'stage-0','react']
			}}]
		},
		{
			test:/\.css$/,
			use:['style-loader','css-loader',{
				loader:'postcss-loader',
				options:{
						plugins:()=>[require('autoprefixer')]	
				}}]
		}]
		
			}
}