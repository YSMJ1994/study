var path = require('path');
var htmlWebpackPlugin= require('html-webpack-plugin');

module.exports = {
	entry:{
		page1:'./src/script/main.js',
		page2:'./src/script/a.js'	
	},
	output:{
		path: path.resolve(__dirname, './dist/'),
		filename:'[name]-[hash].js'
	},
	plugins:[
		new htmlWebpackPlugin({
			template:'index.html'
		})
	]
}