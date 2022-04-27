const path = require('path');
const IS_PROD = ['production', 'test', 'development'].includes(process.env.NODE_ENV);
const resolve = dir => path.join(__dirname, dir);
const CompressionWebpackPlugin = require('compression-webpack-plugin'); // 开启gzip压缩， 按需引用
const productionGzipExtensions = ['js', 'css'];
module.exports = {
    devServer: {
        hot: true,// 自动保存
        open: true,// 自动启动
        port: 8080,// 默认端口号
        host: '0.0.0.0'
    },
    publicPath: './',
    assetsDir: 'static',
    lintOnSave: true,
    productionSourceMap: false,
    parallel: require('os').cpus().length > 1,
    css: {
        // 使用 css 分离插件 mini-css-extract-plugin，不然骨架屏组件里的 <style> 不起作用，
        // extract: true,
        // 是否使用css分离插件 ExtractTextPlugin
        extract: IS_PROD,
        // 开启 CSS source maps  打包时不生成.map文件?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
        },
        // 为所有的 CSS 及其预处理文件开启 CSS Modules。
        // 这个选项不会影响 `*.vue` 文件。
        requireModuleExtension: true
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './src/assets/less/varibles.less'),
                path.resolve(__dirname, './src/assets/less/mixin.less')
            ]
        }
    },
    chainWebpack: config => {
        config.plugins.delete('preload'); // TODO: need test
        config.plugins.delete('prefetch'); // TODO: need test
        config.resolve.symlinks(true); // 修复热更新失效

        config.resolve.alias // 添加别名
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'))
            .set('@views', resolve('src/views'))
            .set('@store', resolve('src/store'));

        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end();
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end();
    },
    configureWebpack: config => {

        process.env.NODE_ENV === 'production' ? { 'element-ui': 'element-ui' } : undefined;

        // 开启 gzip 压缩
        // 需要 yarn add -D compression-webpack-plugin
        const plugins = [];
        if (IS_PROD) {
            // eslint-disable-next-line camelcase
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;

            plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp(
                        '\\.(' + productionGzipExtensions.join('|') + ')$'
                    ),
                    threshold: 10240,
                    minRatio: 0.8
                })
            );
            // 分离第三方包 减少大小
            config.optimization = {
                splitChunks: {
                    cacheGroups: {
                        // cacheGroups 下可以可以配置多个组，每个组根据test设置条件，符合test条件的模块
                        commons: {
                            name: 'chunk-commons',
                            test: resolve('src/components'),
                            minChunks: 3, //  被至少用三次以上打包分离
                            priority: 5, // 优先级
                            reuseExistingChunk: true // 表示是否使用已有的 chunk，如果为 true 则表示如果当前的 chunk 包含的模块已经被抽取出去了，那么将不会重新生成新的。
                        },
                        // eslint-disable-next-line camelcase
                        node_vendors: {
                            name: 'chunk-vendors',
                            chunks: 'initial', // 只打包初始时依赖的第三方
                            test: /[\\/]node_modules[\\/]/,
                            priority: 10
                        },
                        vantUI: {
                            name: 'chunk-vantUI', // 单独将 vantUI 拆包
                            priority: 20, // 数字大权重到，满足多个 cacheGroups 的条件时候分到权重高的
                            test: /[\\/]node_modules[\\/]_?vant(.*)/
                        }
                    }
                }
            };
        }
        config.plugins = [...config.plugins, ...plugins];
    }
};
