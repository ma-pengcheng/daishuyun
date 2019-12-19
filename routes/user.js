// 引入express 模块
const express = require('express');
// 引入线程池 连接数据库
const pool = require('../pool.js');
// 创建 路由 API 
const router = express.Router();

// 1.创建用户名检测路由
<<<<<<< HEAD
router.get("/dsy/loginName/:uname", (request, response) => {
=======
<<<<<<< HEAD
router.get("/dsy/loginName/:uname", (request, response) => {
    var $uname = request.params.uname;
    pool.query("SELECT * FROM dsy_user WHERE uname=?", [$uname], (error, result) => {
        if (error) throw error;
        if (result.length > 0) {
            response.send("1");
        };
        if (result.length == 0) {
=======
router.get("/dsy/loginName/:uname",(request,response)=>{
>>>>>>> ec6dcfc288fd6aaf8b55a8cfef44991cb03a84f1
    var $uname = request.params.uname;
    pool.query("SELECT * FROM dsy_user WHERE uname=?", [$uname], (error, result) => {
        if (error) throw error;
        if (result.length > 0) {
            response.send("1");
        };
<<<<<<< HEAD
        if (result.length == 0) {
=======
        if(result.length == 0){
>>>>>>> 7dc9d03e9f91014cb20420db341ab252d4c2994c
>>>>>>> ec6dcfc288fd6aaf8b55a8cfef44991cb03a84f1
            response.send("0");
        }
    })
});
// 2.创建用户登录路由
<<<<<<< HEAD
router.get("/dsy/login/:uname&:upwd", (request, response) => {
=======
<<<<<<< HEAD
router.get("/dsy/login/:uname&:upwd", (request, response) => {
    var $uname = request.params.uname;
    var $upwd = request.params.upwd;
    pool.query("SELECT * FROM dsy_user WHERE uname=? AND upwd=?", [$uname, $upwd], (error, result) => {
        if (error) throw error;
        console.log(result);
        if (result.length > 0) {
            response.send("1");
        };
        if (result.length == 0) {
=======
router.get("/dsy/login/:uname&:upwd",(request,response)=>{
>>>>>>> ec6dcfc288fd6aaf8b55a8cfef44991cb03a84f1
    var $uname = request.params.uname;
    var $upwd = request.params.upwd;
    pool.query("SELECT * FROM dsy_user WHERE uname=? AND upwd=?", [$uname, $upwd], (error, result) => {
        if (error) throw error;
        console.log(result);
        if (result.length > 0) {
            response.send("1");
        };
<<<<<<< HEAD
        if (result.length == 0) {
=======
        if(result.length == 0){
>>>>>>> 7dc9d03e9f91014cb20420db341ab252d4c2994c
>>>>>>> ec6dcfc288fd6aaf8b55a8cfef44991cb03a84f1
            response.send("0");
        }
    })
});
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ec6dcfc288fd6aaf8b55a8cfef44991cb03a84f1
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
<<<<<<< HEAD
=======
=======
>>>>>>> 7dc9d03e9f91014cb20420db341ab252d4c2994c
>>>>>>> ec6dcfc288fd6aaf8b55a8cfef44991cb03a84f1
// 导出路由器
module.exports = router;