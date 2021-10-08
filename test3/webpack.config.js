const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin') // 生成html文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 每次打包都会先清空dist文件夹
// webpack所有配置信息都应该写在module.exports中
module.exports = {
    entry: './src/index.ts', // 入口
    output: {
        //指定打包文件目录
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        environment: {
            arrowFunction: false
        }
    },

    // 指定webpack打包时要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定的是规则生效的文件
                test: /\.ts$/,
                use: [
                    //配置babel
                    {
                        loader: 'babel-loader',
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    //指定环境的插件
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            "chrome": "88",
                                            "ie": "11"
                                        },
                                        // codejs版本
                                        "corejs": "3",
                                        // 表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ], // 使用loader
                exclude: /node_modules/
            }
        ]
    },
    // 配置插件
    plugins: [
        new HTMLWebpackPlugin({
            // title: 'this is my title',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    // 用来设置引用模块
    resolve: {
        extensions: ['.js', '.ts']
    }

}