const path = require("path");
module.exports={
    mode:'production',
    devServer:{
        open:true,
        openPage:"index.html",
        contentBase:path.join(__dirname,'public'),
        watchContentBase:true,
        port:8080
    },
    entry : './src/main.js',
    output : {
        filename : 'bundle.js',
        path : path.resolve( __dirname, 'public','dist'),
        publicPath: '/dist/'
    },
    devtool : 'inline-source-map',
    performance: {
        maxEntrypointSize: 500000,
        maxAssetSize: 500000,
    },
}
