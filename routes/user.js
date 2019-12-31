// 引入express 模块
const express = require('express');
// 引入线程池 连接数据库
const pool = require('../pool.js');
// 创建 路由 API 
const router = express.Router();

// 1.创建用户名检测路由
router.get("/dsy/loginName/:uname", (request, response) => {
    var $uname = request.params.uname;
    pool.query("SELECT * FROM dsy_user WHERE uname=?", [$uname], (error, result) => {
        if (error) throw error;
        if (result.length > 0) {
            response.send("1");
        };
        if (result.length == 0) {
            response.send("0");
        }
    })
});
// 2.创建用户登录路由
router.get("/dsy/login/:uname&:upwd", (request, response) => {
    var $uname = request.params.uname;
    var $upwd = request.params.upwd;
    pool.query("SELECT * FROM dsy_user WHERE uname=? AND upwd=?", [$uname, $upwd], (error, result) => {
        if (error) throw error;
        if (result.length > 0) {
            response.send("1");
        };
        if (result.length == 0) {
            response.send("0");
        }
    })
});
// 3.注册用户路由
router.post("/dsy/regUser", (request, response) => {
        var obj = request.body;
        pool.query("INSERT INTO dsy_user SET ?", [obj], (error, result) => {
            if (error) throw error;
            if (result.affectedRows == 1) {
                response.send("1");
            };
            if (result.affectedRows == 0) {
                response.send("0");
            }
        })
    })
// 4.用户姓名查询路由
router.get("/dsy/getUser/:uname", (request, response) => {
    var $uname = request.params.uname;
    pool.query("SELECT * FROM xz_user WHERE uname=?", [$uname], (error, result) => {
        if (error) throw error;
        if (result.length == 0) {
            response.send("0");
        }
        if (result.length > 0) {
            response.send("1");
        }
    })
});
// 5.需求用户
router.post("/dsy/fomUser", (request, response) => {
    var obj = request.body;
    pool.query("INSERT INTO dsy_client SET ?", [obj], (error, result) => {
        if (error) throw error;
        if (result.affectedRows == 1) {
            response.send("1");
        };
        if (result.affectedRows == 0) {
            response.send("0");
        }
    })
})
// 导出路由器
module.exports = router;