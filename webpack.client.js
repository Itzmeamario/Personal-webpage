const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

const config = {
  // Tell webpack the root file of our
  // server application
  entry: "./src/client/index.js",

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(`${__dirname}/src/client`, "public")
  }
};

module.exports = merge(baseConfig, config);
