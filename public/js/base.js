window.onload = function() {
    // 轮播图
    /*2019.12.9发现问题，无法重用js代码(主要原因HTML结构稍微有所不同，所需要获取的元素不同，在另一个页面获取不到时就会报错，暂时办法加if判断后获取)*/
    //1.获取元素
    var scroll = document.querySelector(".scroll");
    var scrollImg = document.querySelector(".scroll-img");
    var left = document.querySelector(".left");
    var right = document.querySelector(".right");
    var pointer = document.querySelector(".pointer")
    var im = document.querySelector(".im")
    var dataCaseTab = document.querySelector(".data_tab");
    if (dataCaseTab) {
        var dataTabs = dataCaseTab.querySelectorAll("span");
    }

    var num = 0; //控制轮播的图片的播放
    var circle = 0; // 控制小圆圈的播放
    var flag = true; //节流阀 控制函数的执行

    //2.鼠标经过轮播图模块，左右按钮显示
    scroll.addEventListener("mouseover", function() {
        left.style.display = "block";
        right.style.display = "block";
        // 清除定时器
        clearInterval(timer);
        timer = null;
    })

    //3.鼠标离开轮播图模块，左右按钮隐藏
    scroll.addEventListener("mouseout", function() {
        left.style.display = "none";
        right.style.display = "none";
        // 开启定时器 以为存在变量的提升，所以这里不需要写var
        timer = setInterval(function() {
            // 手动调用点击事件
            right.click();
        }, 3000)
    })

    //4.动态生成小圆圈
    var lis = scrollImg.children;
    for (var i = 0; i < lis.length; i++) {
        // 生成元素li，并赋值给变量li
        var li = document.createElement("li");
        //在为pointer里面生成li的同时，为li添加自定义属性index，取值为数组元素下标 为了与图片所在的li对应
        li.setAttribute("index", i);
        //在pointer中添加元素li
        pointer.appendChild(li);
        //5.为小圆圈添加事件，利用排他思想
        li.addEventListener("click", function() {
            if (flag) {
                flag = false; // 关闭节流阀
                for (var i = 0; i < pointer.children.length; i++) {
                    pointer.children[i].className = "";
                    if (dataTabs) {
                        dataTabs[i].className = "";
                    }
                }
                //为当前点击的li添加current属性
                this.className = "current";
                // 获取点击事件的li的index属性
                var index = this.getAttribute("index");
                if (dataTabs) {
                    dataTabs[index].className = "current";
                }

                // 当通过点击小圆圈播放图片时需要实时改变num和circle,为的是可以衔接其他方法的播放
                num = index;
                circle = index;
                // 6.点击圆圈 移动图片
                // ul 的移动距离为小圆圈的索引号 乘以图片的宽度(im.offsetWidth)
                animate(scrollImg, -index * im.offsetWidth, function() {
                    flag = true; // 开启节流阀
                })
            }

        })
    }

    //  为了实现无缝滚动需要复制第一张图片并添加到最后一张
    // 把pointer里面的第一个li设置为current
    pointer.children[0].className = "current";
    // 克隆第一张图片，添加到最后
    var first = scrollImg.children[0].cloneNode(true);
    scrollImg.appendChild(first);

    // 7.右侧按钮的点击事件
    right.addEventListener("click", function() {
            if (flag) {
                flag = false; // 关闭节流阀
                // 如果图片走到了最后复制的那一张照片，此时我们的ul 要快速复原left为0
                if (num == lis.length - 1) {
                    scrollImg.style.left = 0;
                    num = 0;
                }
                //第四次点击 num的值在这里才变为4
                num++;
                animate(scrollImg, -num * im.offsetWidth, function() {
                    flag = true; //开启节流阀
                })
                circle++;
                // 8.点击右侧按钮，小圆圈根据一起变化
                // 当circle==4时需要显示pointer.children[0],所以需要清0
                if (circle == lis.length - 1) {
                    circle = 0;
                }
                for (var i = 0; i < pointer.children.length; i++) {
                    pointer.children[i].className = "";
                    if (dataTabs) {
                        dataTabs[i].className = "";
                    }

                }
                pointer.children[circle].className = "current";
                if (dataTabs) {
                    dataTabs[circle].className = "current";
                }

            }
        })
        // 9.左侧按钮的点击事件
    left.addEventListener("click", function() {
        if (flag) {
            flag = false; //关闭节流阀
            if (num == 0) {
                num = lis.length - 1;
                // 重置到最后一张图片，注意重置left时的边距(left)的值（正还是负）
                scrollImg.style.left = -num * im.offsetWidth + "px";
            }
            num--;
            // 这里面的符号不用变；因为左键使num的值减少了，移动的目标值就增大了，所以右移
            animate(scrollImg, -num * im.offsetWidth, function() {
                flag = true; //开启节流阀
            });
            circle--;
            if (circle < 0) {
                circle = pointer.children.length - 1;
            }
            // 点击左侧按钮，小圆圈根据一起变化
            for (var i = 0; i < pointer.children.length; i++) {
                pointer.children[i].className = "";
                if (dataTabs) {
                    dataTabs[i].className = "";
                }
            }
            pointer.children[circle].className = "current";
            if (dataTabs) {
                dataTabs[circle].className = "current";
            }

        }
    })

    //  10.自动播放轮播图
    var timer = setInterval(function() {
        // 手动调用点击事件
        right.click();
    }, 3000)

    // 轮播函数
    function animate(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            var step = (target - obj.offsetLeft) / 20;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer);
                callback && callback();
            } else {
                obj.style.left = obj.offsetLeft + step + "px";
            }
        }, 30)
    };
    // 合作客户logo展示
    var customerUndrop = document.querySelectorAll(".home_customer_drop");
    var customerMore = document.querySelector('.home_customer_more');
    var flag = true;
    customerMore.addEventListener("click", function() {
            if (flag) {
                for (var i = 0; i < customerUndrop.length; i++) {
                    customerUndrop[i].style.display = "block";
                }
                customerMore.className = "home_customer_more unfold";
                flag = false;
            } else {
                for (var i = 0; i < customerUndrop.length; i++) {
                    customerUndrop[i].style.display = "none";
                }
                customerMore.className = "home_customer_more";
                flag = true;
            }

        })
        // 侧边电梯栏
    var homePass = document.querySelector(".home_pass");
    var homePivot = document.querySelector(".home_pivot");
    var homeCase = document.querySelector(".home_case");
    var homeNews = document.querySelector(".home_news");
    var homeCus = document.querySelector(".home_customer");
    var homeForm = document.querySelector(".home_form");
    var lift = document.querySelector(".lift")
    var liftItem = document.querySelectorAll(".lift>ul>li");
    var liftas = document.querySelectorAll(".lift>ul>li>a");
    document.addEventListener("scroll", move)

    function move() {
        var sd = window.pageYOffset;
        if(sd<400){
            for (var i = 0; i < liftItem.length; i++) {
                liftItem[i].className = "";
                liftas[i].style.color = "";
            }
            lift.style.opacity = 0;
        }else{
            lift.style.opacity = 1
        }
        // 数栈介绍
        if (sd >= 400 && sd < 950) {
            for (var i = 0; i < liftItem.length; i++) {
                liftItem[i].className = "";
                liftas[i].style.color = "";
            }
            liftItem[0].className = "list_item";
            liftas[0].style.color = "#fff";
        };
        // 数据中台
        if (sd >= 950 && sd < 1840) {
            for (var i = 0; i < liftItem.length; i++) {
                liftItem[i].className = "";
                liftas[i].style.color = "";
            }
            liftItem[1].className = "list_item";
            liftas[1].style.color = "#fff";
        };
        // 客户案例
        if (sd >= 1840 && sd < 2500) {
            for (var i = 0; i < liftItem.length; i++) {
                liftItem[i].className = "";
                liftas[i].style.color = "";
            }
            liftItem[2].className = "list_item";
            liftas[2].style.color = "#fff";
        };
        // 新闻动态
        if (sd >= 2500 && sd < 3100) {
            for (var i = 0; i < liftItem.length; i++) {
                liftItem[i].className = "";
                liftas[i].style.color = "";
            }
            liftItem[3].className = "list_item";
            liftas[3].style.color = "#fff";
        };
        // 合作客户
        if (sd >= 3100 && sd < 3800) {
            for (var i = 0; i < liftItem.length; i++) {
                liftItem[i].className = "";
                liftas[i].style.color = "";
            }
            liftItem[4].className = "list_item";
            liftas[4].style.color = "#fff";
        };
        if (sd >= 3800) {
            for (var i = 0; i < liftItem.length; i++) {
                liftItem[i].className = "";
                liftas[i].style.color = "";
            }
            liftItem[5].className = "list_item";
            liftas[5].style.color = "#fff";
        }
    }
}