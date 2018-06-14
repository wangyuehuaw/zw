var MAINJS = (function(){
	var mainjs = function(){

		this.init = function(){
			// loadHtml();
			// getAvg();
			//close();
			a()
			
		}
		function a(){
			//局部变量 {} function
			arr = []
			for(let i =0; i<10; i++){
				alert(i)
				arr.push(function(){
					console.log(i)
				})
			}
			//foreach()把循环遍历得到的元素当成参数传入到回调函数里面
			arr.forEach(function(func) {
				func()
			});
		}
		function addLisener(){
			if(document.getElementById("new-div")){
				var div = document.getElementById("new-div");
				//绑定监听器
				div.addEventListener("click",function(){
					if(div){
						document.getElementsByTagName("body").item(0).removeChild(div);
						//让界面可以滚动
						document.getElementsByTagName("body").item(0).style.overflow = "scroll"
					}
				})

			}
			
		}
		function close(){
			document.getElementById("btn").onclick = function(){
				var div = document.getElementById("new-div");
				//1、隐藏
				//div.style.display = "none";
				//直接移除
				//if语句后面如果执行的代码只有一行时，可以不加{}
				if(div){
					document.getElementsByTagName("body").item(0).removeChild(div);
					document.getElementsByTagName("body").item(0).style.overflow = "scroll"
				}				
			}
		}
		function create(){
				//动态创建div
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
				addLisener();

		}
		function loadHtml(){
			//把html代码赋值给temp
			var temp = '<input type="text" name="">'+
						'<input type="text" name="">'+
						'<input type="text" name="">'+
						'<br><button>+</button>'+
						'<div class="info"><p></p></div>'

			document.getElementsByClassName("container")[0].innerHTML = temp;
			//创建div
			
		}
		//获取平均数
		function getAvg(){
			document.getElementsByTagName("button")[0].onclick = function(){

				var x = document.getElementsByTagName("input")[0].value;
				var y = document.getElementsByTagName("input")[1].value;
				var z = document.getElementsByTagName("input")[2].value;
				//alert(avg(parseInt(x),parseInt(y),parseInt(z)));
				//在页面输出 write() innerHTML innerText
				var text = avg(parseInt(x),parseInt(y),parseInt(z));
				//document.write(text);
				//document.getElementsByClassName("info")[0].innerHTML = html;
				//把得到的平均数赋值给P
				document.getElementsByTagName("p")[0].innerText = text;
				
				create();
				document.getElementById("new-div").onclick = function(event){
					//设置默认值
					event = event?window.event:event;
					//阻止冒泡
					event.preventDefault;
					event.stopPropagation();
				}
			}
		}
		//求平均数avg
		function avg(x,y,z){
			var avg = (x+y+z)/3;
			return avg
		}

	}
	return new mainjs()
})()