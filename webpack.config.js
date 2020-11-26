const path = require(`path`);

module.exports = {
    mode: `development`,

    watch: true,
    entry: `./src/index.tsx`,

    output: {

        filename: `bundle.js`,
        path: path.join(
            __dirname, `./public`)
    },
    devtool: `source-map`,
    

    module: {
        rules: [
          {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader'
          
          }  
        ]
        ,
    },
    devServer: {
        contentBase: path.join(__dirname, `public`),
        compress: false,
        open: true,
        port: 1337,
        historyApiFallback: true,

    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    }
};