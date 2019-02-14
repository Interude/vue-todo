
const path = require('path')
const isDev = process.env.NODE_ENV === 'development'
const webpack = require('webpack')
//此处
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin')
const config={
    target:'web',
entry: path.join(__dirname,'src/index.js'),
output:{
    filename:'bundle.js',
    path:path.join(__dirname,'dist')
},
module:{
    rules:[
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.jsx$/,
            loader: 'babel-loader'
        },
        {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        },
        // {
        //     test: /\.css$/,
        //     //loader:'css-loader'
        //     use:[

        //         'style-loader',
        //         'css-loader'
        //     ]    
        // },
        {
              test:/\.styl$/,
              use:[
                'style-loader',
                'css-loader',
                {
                    loader:'postcss-loader',
                    options:{
                        sourceMap:true,
                    }
                },
                'stylus-loader'
              ]
                  
              
        },
        {
            test:/\.(gif|jpg|jpeg|png|svg)$/,
            use:[
                {
                    loader:'url-loader',
                    options:{
                        limit:1024,
                        name:'[name]-img.[ext]'
                    }
                }
            ]
        }
        
    ]
},
plugins: [
    new VueLoaderPlugin(),
    new HTMLPlugin(),
    new webpack.DefinePlugin({
        'process.env':{
            NODE_ENV:isDev ? '"development"':'"production"'
        }
    })
]
    
}

if(isDev){
    config.devtool = '#cheap-moudle-eval-source-map'
    config.devServer={
        port:'9527',
        host:'0.0.0.0',
        overlay:{
            error:true
        },
        hot:true
    }

    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )

}

module.exports = config