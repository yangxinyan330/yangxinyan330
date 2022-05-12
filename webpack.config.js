const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成html文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 每次构建前清除dist目录
// const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 把css打包并引入index.html
// const PurgecssPlugin = require('purgecss-webpack-plugin'); // 清除未使用的css
// const glob = require('glob-all');
// const VueLoaderPlugin = require('vue-loader/lib/plugin'); // 解析.vue文件+

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
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            // css配置
            {
                test: /\.(css|s[cs]ss|less)$/,
                // 从右往左加载
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
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
