// 引入express 模块
const express = require('express');
// 引入线程池 连接数据库
const pool = require('../pool.js');
// 创建 路由 API 
const router = express.Router();

// 1.创建登录路由