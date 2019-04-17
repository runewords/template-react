# 配置说明

## webpack-dev-server
> webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)

### 参数
* contentBase: 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要
* https: 默认情况下，dev-server 通过 HTTP 提供服务。也可以选择带有 HTTPS 的 HTTP/2 提供服务.默认使用了自签名证书，但是你可以提供自己的
* hotOnly: 热更新

### webpack-dev-middleware
> webpack-dev-middleware 是一个容器(wrapper)，它可以把 webpack 处理后的文件传递给一个服务器(server).
> webpack-dev-server 在内部使用了它.同时，它也可以作为一个单独的包来使用，以便进行更多自定义设置来实现更多的需求。(官网webpack-dev-middleware 配合 express server 的示例)
>> 启动的server本身内部可以处理很多东西


## --watch
> 开启webpack的监听模式
