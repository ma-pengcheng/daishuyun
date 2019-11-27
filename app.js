// 引入express核心模块
const express = require('express');
// 引入express中间件body-parser(HTTP请求体解析中间件)
const bodyParser = require('body-parser');
// 引入路由器(暂留)

//创建服务器
let app = express();
// 利用 body-parser 中间件 解析用户的请求主体
app.use(bodyParser.urlencoded({
    extended:false
}));
// 设置服务器端口号
app.listen(6060,function(){
    console.log("App is Running at Port 6060");
});
// 托管静态资源到public目录下
app.use(express.static('./public'));
// 挂载(应用路由)暂留