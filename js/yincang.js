
function yincang(item,son){
	var item=getClass(item);
	var son=getClass(son);
	for(var j=0;j<son.length;j++){
			
			son[j].style.display="none";
		}
	for(var i=0;i<item.length;i++){
		item[i].ind=i;
		
		item[i].onmouseover=function(){
			nodis();
			son[this.ind].style.display="block";
		}
		item[i].onmouseout=function(){
			nodis();
		}
	}
	function nodis(){
		for(var j=0;j<son.length;j++){
			
			son[j].style.display="none";
		}
	}
}

/*
getClass(className)
获取指定calss的对象的集合
className  指定的类名
range   指定的范围
如果传入范围就是指定的范围，不传就是document
*/

function getClass(className,range){
	//设置获取元素的范围
	var range=range?range:document;
	//var range=range||document;
	//判断浏览器
	if(document.getElementByClassName){
		//w3c
		return range.getElementsByClassName(className);

	}else{
		//IE6~8
		//arr保存指定的className对象
		var arr=[];

		//1.获取页面中所有的元素
		var all=range.getElementsByTagName('*');
		//2.挑选指定元素
		

		for(var i=0;i<all.length;i++){
		//函数：判断当前元素的classname是否包含指定的classname


			if(check(all[i].className,className)){
				arr.push(all[i]);
			}
		}
		//3.挑选完毕 将数组输出
		return arr;
	}
}

function check(obj,className){
	//检查obj中是否包含classname
	var arr=obj.split(' ');
	for(var i=0;i<arr.length;i++){
		if(arr[i]==className){
			return true;
		}
	}
	return false;
}




