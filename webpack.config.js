const webpack = require('webpack');
const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
   devServer:{
      host:'localhost',
      port:'80',
      hot:true
   },
   entry:{
      index:'./app/index.js',
      about:'./app/about.js'
   },
   output:{
      path: path.join(__dirname, 'build'),
      filename:'[name].js'
   },
   plugins:[
      // new HtmlWebpackPlugin({
      //    title: 'Webpack demo',
      //  }),
      new webpack.HotModuleReplacementPlugin()
   ]
}