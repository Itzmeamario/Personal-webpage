module.exports = {
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/preset-react",
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["last 2 versions"]
                }
              }
            ]
          ],
          plugins: [
            // Stage 0
            "@babel/plugin-proposal-function-bind",

            // Stage 1
            "@babel/plugin-proposal-export-default-from",
            "@babel/plugin-proposal-logical-assignment-operators",
            ["@babel/plugin-proposal-optional-chaining", { loose: false }],
            [
              "@babel/plugin-proposal-pipeline-operator",
              { proposal: "minimal" }
            ],
            [
              "@babel/plugin-proposal-nullish-coalescing-operator",
              { loose: false }
            ],
            "@babel/plugin-proposal-do-expressions",

            // Stage 2
            ["@babel/plugin-proposal-decorators", { legacy: true }],
            "@babel/plugin-proposal-function-sent",
            "@babel/plugin-proposal-export-namespace-from",
            "@babel/plugin-proposal-numeric-separator",
            "@babel/plugin-proposal-throw-expressions",

            // Stage 3
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-syntax-import-meta",
            ["@babel/plugin-proposal-class-properties", { loose: true }],
            "@babel/plugin-proposal-json-strings"
          ]
        }
      }
    ]
  }
};
