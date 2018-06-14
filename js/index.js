var INDEXJS = (function(){
	var indexjs = function(){
		//全局变量
		
		//初始化函数
		this.init = function(){
			document.getElementsByTagName("button")[0].onclick = function(){
				create();
			}
			close();
		}
		function close(){
			document.getElementsByClassName("btn")[0].onclick = function(){
				var div = document.getElementById("firstdiv");
				//移除div
				if(div){
					document.getElementsByTagName("body")[0].removeChild(div);
				}
				
			}
		}
		function create(){
			//创建div
			var div = document.createElement("div");
			div.id = "firstdiv"
			div.style.background = "black";
			div.style.opacity = "0.5";
			div.style.zIndex= "99";
			div.style.width = "100%";
			div.style.height = "100%";
			div.style.top = "0";
			div.style.position = "fixed";
			//得到body appendChild()添加元素
			//document.getElementsByTagName("body").item(0)
			document.getElementsByTagName("body")[0].appendChild(div);
		}
		function loadhtml(){
			var temp =  '第一个数：<input type="text" name="">'+
						'<br>第二个数：<input type="text" name="" id="">'+
						'<br><button>+</button><button>-</button><button>*</button><button>/</button>'+
						'<br>计算结果：<input type="text" name="">'
			//通过类名得到div
			//innerHTML方法可以往标签里赋标签 innerText传字符串
			document.getElementsByClassName("container")[0].innerHTML = temp;
			document.getElementsByTagName("p")[0].innerText = "555";
		}
		function click(){
			var x = document.getElementsByTagName("input")[0];
			var y = document.getElementsByTagName("input")[1];
			var z = document.getElementsByTagName("input")[2];
			document.getElementsByTagName("button")[0].onclick = function(){
				//得到输入框的值
				//两数相加，并转成整形 parseInt()
				//把运算结果传值给第三个输入框
				z.value = add(parseInt(x.value),parseInt(y.value));
			}
			document.getElementsByTagName("button")[1].onclick = function(){
				//得到输入框的值
				//两数相加，并转成整形 parseInt()
				//把运算结果传值给第三个输入框
				z.value = add(parseInt(x.value),parseInt(y.value));
			}
			document.getElementsByTagName("button")[2].onclick = function(){
				//得到输入框的值
				//两数相加，并转成整形 parseInt()
				//把运算结果传值给第三个输入框
				z.value = add(parseInt(x.value),parseInt(y.value));
			}
			document.getElementsByTagName("button")[3].onclick = function(){
				//得到输入框的值
				//两数相加，并转成整形 parseInt()
				//把运算结果传值给第三个输入框
				z.value = division(parseInt(x.value),parseInt(y.value));
			}
		}
		//加法
		function add(x,y){
			return x+y
		}
		//除法
		function division(x,y){
			if(y==0){
				return
			}
			return x/y
		}

	}
	return new indexjs()
})()//()自执行