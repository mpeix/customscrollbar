/*To bundle only the scroll functionality*/
const path = require("path");

//Plugins
const TerserPlugin = require("terser-webpack-plugin");

module.exports = env => {
    console.log(env.MODE);
  return {
    mode: env.MODE,
    context: path.resolve(__dirname, "app"),
    //For multipage application, every page has his entry point
    entry: path.resolve(__dirname, "app/js/scroll/scroll.js"),
    output: {
      path: path.resolve(__dirname, "public/scroll"),
      filename: "main.js",
      auxiliaryComment: "Scroll output webpack comment"
    },
    module: {
      rules: [
        /* 
                BABEL Loader
            */
        {
          test: /\.js*/,
          include: [path.resolve(__dirname, "app/js/scroll")],
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              cacheDirectory: (__dirname, "cache_webpack")
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
