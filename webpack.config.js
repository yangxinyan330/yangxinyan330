const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 可将css代码打包成一个单独的css文件
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    // 模式 开发模式
    mode: 'development',
    // 入口文件 main.js
    entry: {
        main: './src/main.js'
    },
    // 输出
    output: {
        // 输出到 dist文件夹
        path: path.resolve(__dirname, './dist'),
        // js文件下
        filename: 'js/chunk-[contenthash].js',
        // 每次打包前自动清除旧的dist
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 选择模板 public/index.html
            template: './public/index.html',
            // 打包后的名字
            // filename: 'index.html',
            filename: 'styles/chunk-[contenthash].css',
            ignoreOrder: true,
            // js文件插入 body里
            inject: 'body',
        }),
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            // css配置
            {
            // 匹配文件后缀的规则
                test: /\.(css|s[cs]ss)$/,
                use: [
                    // loader执行顺序是从右到左
                    MiniCssExtractPlugin.loader,
                    'less-loader',
                    // {
                    //   loader: 'sass-resources-loader',
                    //   options: {
                    //     resources: [
                    //       // 放置全局引入的公共scss文件
                    //     ],
                    //   },
                    // },
                ],
            },
            // js配置
            {
                // 匹配js后缀文件
                test: /\.js$/,
                // 排除node_modules中的js
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ],
            },
            // 图片配置
            {
                // 匹配文件后缀的规则
                test: /\.(png|jpe?g|gif|svg|webp)$/,
                type: 'asset',
                parser: {
                    // 转base64的条件
                    dataUrlCondition: {
                        maxSize: 25 * 1024, // 25kb
                    }
                },
                generator: {
                    // 打包到 dist/image 文件下
                    filename: 'images/[contenthash][ext][query]',
                },
            },
            // vue配置
            {
                test: /\.vue$/,
                use: 'vue-loader',
            }
        ]
    }
};
