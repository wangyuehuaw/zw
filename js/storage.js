var STORAGEJS = (function(){
    var storagejs = function(){
        this.init = function(){
            //setLocalStorage();
            rememberPW();
            getLocalStorage()
            clear()
            once()
        }
        //首次弹出遮罩层
        function once(){
            if(window.localStorage){
                //判断是否存在缓存
                if (localStorage.getItem("ABC")){
                   return
                }else{//首次进入页面不会存在缓存，生成遮罩层遮罩层
                    var div = document.createElement("div")
                    //设置div的类名
                    div.id="new-div";
                    //设置属性 setAttribute("属性名称","属性值")
                    div.setAttribute("class","new-div")
                    //设置div样式
                    div.style.background = "black";
                    div.style.opacity = "0.5";
                    div.style.zIndex= "99";
                    div.style.width = "100%";
                    div.style.height = "100%";
                    div.style.top = "0";
                    div.style.position = "fixed";
                    //添加到body里面 appendChild()添加子元素
                    document.getElementsByTagName("body").item(0).appendChild(div);
                    document.getElementsByTagName("body").item(0).style.overflow = "hidden"
                    div.addEventListener("click",function(){
                        //点击关闭遮罩层
                        document.getElementsByTagName("body").item(0).removeChild(div);
                        document.getElementsByTagName("body").item(0).style.overflow="hidden"
                        //存放一个状态进入缓存，用来判断已关闭过遮罩层
                        localStorage.setItem("ABC","1")
                    })
                }
            }
        }
        //设置缓存
        function setLocalStorage(){
            //判断浏览器是否支持
            if(window.localStorage){
                console.log("您的浏览器支持localstorage")
            }
            var username = "123";
            //设置缓存setItem
            localStorage.setItem("USERNAME",username)
            //获取缓存 getItem
            if(localStorage.getItem("USERNAME")){
                var newusername = localStorage.getItem("USERNAME")
                console.log(newusername)
            }
            
        }
        //记住密码
        function rememberPW(){
            //点击登录时得到记住框的状态
            document.getElementsByTagName("button")[0].addEventListener("click",function(){
                var checkbox = document.getElementsByName("rememberpw")[0]
                 
            //判断是否打勾
            if(checkbox.checked){
                //如果选择记住密码则得到两个输入框的值
                var username = document.getElementsByName("username")[0].value
                var password = document.getElementsByName("password")[0].value
                //判断两个输入框是否为空
                if(username == null || username =="" ||password == null || password==""){
                    alert("输入有误，请重新输入！")
                    return
                }else{
                    //如果不为空，当点击登录时把密码用户名存到缓存里
                    
                    //判断浏览器是否支持
                    if(window.localStorage){
                        localStorage.setItem("username",username)
                        localStorage.setItem("password",password)
                        alert("保存成功！")
                    }
                }
            }else{//如果不打勾
                //判断有缓存
                if(localStorage.getItem("username") && localStorage.getItem("password")){
                    localStorage.getItem("username")
                    localStorage.getItem("password")
                }    
            }
            })
           
        }
        //取出缓存填充入输入框
        function getLocalStorage(){
            if(window.localStorage){
                //判断有缓存
                if(localStorage.getItem("username") && localStorage.getItem("password")){
                    //如果缓存存在，则把值赋给两个输入框
                    document.getElementsByName("username")[0].value = localStorage.getItem("username")
                    document.getElementsByName("password")[0].value = localStorage.getItem("password")
                    //把选择状态变成打勾
                    var checkbox = document.getElementsByName("rememberpw")[0]
                    checkbox.checked = true
                }
            }
        }
         //移除缓存
        function clear(){
            //移除缓存removeItem()
            document.getElementsByClassName("remove")[0].addEventListener("click",function(){
                if(window.localStorage){
                    if(localStorage.getItem("username") && localStorage.getItem("password")){
                    localStorage.getItem("username")
                    localStorage.getItem("password")
                    }
                }
            })
            
        }
        //清空缓存
        document.getElementsByClassName("class")[0].addEventListener("click",function(){
            if(window.localStorage){
                localStorage.clear()
            }
        })
    }
    return new storagejs()
})()