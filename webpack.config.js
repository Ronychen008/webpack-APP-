const path = require('path')
const VueLoaderPlugin =require("vue-loader/lib/plugin")
module.exports = {
    entry: path.join(__dirname, './src/main.js'),   //入口文件，表示webpack要打包哪个文件
    output: {      //输出文件的相关配置
        path: path.join(__dirname, './dist'),  // 指定打包好的文件输出到哪个目录下
        filename: 'bundle.js'    //这是指定输出文件的名称
    },
    module: {   //这个节点用于配置所有第三方模块加载器
        rules: [           //所有第三方模块的匹配规则
            {test: /\.css$/, use: ['style-loader', 'css-loader']},//配置处理.css文件的第三方模块
            {test: /\.(jpg|jpeg|gif|bmp|png)$/, use: 'url-loader'},//配置处理url地址的第三方模块，与他同时下载的file-loader不用匹配，是url内部依赖的
            {test: /\.vue$/, use: 'vue-loader'},
            {test: /\.ttf$/, use: 'file-loader'}
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
};