// module.exports = {
//     presets: [
//         ['@vue/cli-plugin-babel/preset', { useBuiltIns: 'usage', corejs: 3 }]
//     ],
//     plugins: [
//         [
//             'component',
//             {
//                 'libraryName': 'element-ui',
//                 'styleLibraryName': 'theme-chalk'
//             }
//         ]
//     ]
// };
module.exports = {
    presets: [
        // 配置规则
        '@vue/app',
        '@babel/preset-env',
        '@vue/babel-preset-jsx'
    ],
    // 配置插件
    // plugins: ['@babel/plugin-transform-runtime']
    plugins: [
        [
            'component',
            {
                'libraryName': 'element-ui',
                'styleLibraryName': 'theme-chalk'
            }
        ],
        '@babel/plugin-proposal-optional-chaining'// 在此处配置
    ]
};
