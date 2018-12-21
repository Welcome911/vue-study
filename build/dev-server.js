const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');

const app = new express();

const compiler = webpack(config);
const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
});
const hotMiddleware = require('webpack-hot-middleware')(compiler);
app.use(devMiddleware);
app.use(hotMiddleware);
app.listen(9000, function(){
	console.log('listen on port 9000.');
})
