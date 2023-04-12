// 引入一个包
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// webpack所有的配置信息都应该写在这里
module.exports = {
  // 入口文件
  entry: "./src/index.ts",

  // 指定打包文件所在的目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, "dist"),

    // 打包后的文件名
    filename: "bundle.js",
  },
  // 指定webpack打包时要使用的模块

  module: {
    // 指定要加载的规则
    rules: [
      {
        // 指定规则生效的文件
        test: /\.ts$/,
        // 要使用的
        use: [
          {
            loader: "babel-loader",
            // 配置babel
            options: {
              //设置预定义环境
              presets: [
                [
                  // 指定环境插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 需要兼容的目标浏览器
                    targets: {
                      "chrome": "88",
                      
                    },
                    // 指定corejs版本
                    corejs: "3",
                    // 使用corejs的方式： usage为按需加载
                    "useBuiltIns":"usage"
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        // 要排除的文件
        exclude: /node-modules/,
      },
    ],
  },
  // 配置webpack的插件
  plugins: [
    new HTMLWebpackPlugin({
      title: "我们一起阳光彩虹小白马",
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  mode: "production",
  resolve: {
    extensions: [".js", ".ts"],
  },
};
