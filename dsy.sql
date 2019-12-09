SET NAMES UTF8;
DROP DATABASE IF EXISTS dsy;
CREATE DATABASE dsy CHARSET=UTF8;
USE dsy;



/* 用户信息表 */
CREATE TABLE dsy_user (
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(32),
    email VARCHAR(64),
    phone VARCHAR(16),
    company VARCHAR(128)
);

/* 插入用户信息数据 */
INSERT INTO dsy_user VALUES 
    (NULL,"马鹏程",940606,"ma_pengcheng@163.com",13568427694,"袋鼠云公司");
