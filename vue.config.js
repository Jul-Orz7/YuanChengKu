module.exports = {
    pages: {
    index: {
        //入口
        entry:"src/main.js",
    },
    },
      lintOnSave:false, //关闭语法检查
      //开启代理服务器（方式一）
    /* devServer: {
    proxy: 'http://localhost:5000'
    }, */
      //开启代理服务器（方式二）
    devServer: {
        proxy: {
        '/atguigu': {
            target: 'http://localhost:5000',
                    pathRewrite:{'^/atguigu':''},
            // ws: true, //用于支持websocket
            // changeOrigin: true //用于控制请求头中的host值
        },
        '/demo': {
            target: 'http://localhost:5001',
                    pathRewrite:{'^/demo':''},
            // ws: true, //用于支持websocket
            // changeOrigin: true //用于控制请求头中的host值
        }
        }
    },
    }
    //   devServer: {
    //     port: '9080',
    //     open: true,
    //     proxy: {
    //       '/api': {
    //         target: 'http://192.168.1.100:8080',//代理地址，这里设置的地址会代替axios中设置的baseURL
    //         secure: false, //如果是https接口需要进行此配置 
    //         changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
    //         //pathRewrite方法重写url
    //         pathRewrite: {
    //           '^/api': '/aaa' //如果没有pathRewrite属性 调用的接口就是http://cloud/api/xxx/xxxx 如果有 pathRewrite属性 调用的接口就是 http://cloud/aaa/xxx/xxxx
    //          }
    //         }
    //       }
    //     },
    //   }