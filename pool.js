//引入mysql模块
const mysql = require('mysql');
// 建立连接池
let pool = mysql.createPool({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'',
    database:'dsy',
    connectionLimit:15
})
//导出
module.exports = pool;