/*To bundle only the scroll functionality*/
const path = require("path");
//Plugins
const TerserPlugin = require("terser-webpack-plugin");

//https://tech.trivago.com/2015/12/17/export-multiple-javascript-module-formats/

const outputVar = (env) => ({
  path: path.resolve(__dirname, "scripts"),
      filename: env.env === 'test' ? "myscroll.dev.js" : "myscroll.js",
      auxiliaryComment: "Scroll output webpack comment",
      libraryTarget:'var',
      library:'MyScroll'
});

const outputCommonJS = (env) => ({
  path: path.resolve(__dirname, "scripts"),
  filename: env.env === 'test' ? "main.dev.js" : "main.js",
  auxiliaryComment: "Scroll output webpack comment",
  libraryTarget:'commonjs2',
  library:'MyScroll'
});

module.exports = env => {
  return {
    mode: env.env === 'test' ? 'development' : 'production',
    devtool: env.env === 'test' ? 'inline-source-map' : false,
    context: path.resolve(__dirname, "app"),
    //For multipage application, every page has his entry point
    entry: path.resolve("./app/js/scroll/myScroll.js"),
    output: env.config && env.config === 'var' ? outputVar(env) : outputCommonJS(env),
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
