module.exports = {
    // モーチEor product
    mode: 'development',
    // エントリーポインチE
    entry: `./src/sample.jsx`,
    // 出力設宁E
    output: {
        path: `${__dirname}/build`,
        filename: 'main.js'
    },
    // 対象ファイル
    resolve: {
        extensions: ['.js', '.jsx']
    },
    // Webpack晁E使用モジュール
    module: {
        rules:
            [{
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }],
    },
};

