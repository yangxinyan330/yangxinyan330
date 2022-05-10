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
        ]
    ]
};
