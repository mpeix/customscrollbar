/*To bundle only the scroll functionality*/
const path = require("path");

//Plugins
const TerserPlugin = require("terser-webpack-plugin");

//https://tech.trivago.com/2015/12/17/export-multiple-javascript-module-formats/

module.exports = env => {
  return {
    devtool: env.dev ? 'inline-source-map' : false,
    context: path.resolve(__dirname, "app"),
    //For multipage application, every page has his entry point
    entry: path.resolve("./app/js/scroll/myScroll.js"),
    output: {
      path: path.resolve(__dirname, "scripts"),
      filename: "main.js",
      auxiliaryComment: "Scroll output webpack comment",
      libraryTarget:'var',
      library:'MyScroll'
    },
    module: {
      rules: [
        /* BABEL Loader */
        {
          test: /\.js*/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        },
        /* SASS LOADER */
        {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: [
            'style-loader', 
            'css-loader',
            'sass-loader',                        
          ]
        }    
      ]
    },
    optimization: {
      minimize: true,
      //TerserPlugin minifies javascript
      minimizer: [new TerserPlugin()]
    }
  };
};
