/*
	getClass(className)
	获取指定class的对象的集合
	className   指定的类名
	range  指定的范围：如果传入这个范围，就是指定范围
	如果不传范围，就是document
*/
// function getClass(className,range){
// 	//判断浏览器
// 	//var range=range||document;
// 	var range=range?range:document;
// 	if(document.getElementsByClassName){		/*判断是否有这个属性*/
// 		//w3c
// 		return range.getElementsByClassName(className);
// 	}else{
// 		//ie6~8
// 		//arr 保存指定的className对象
// 		var arr=[];
// 		//1.获取所有元素
// 		var all=range.getElementsByTagName("*");
// 		//2.挑选指定元素
// 		for(var i=0;i<all.length;i++){
// 			//判断当前函数的className是否包含指定的className
// 			if(checkClass(all[i].className,className)){
// 				arr.push(all[i]);
// 			}
// 		}
// 	}
//	//3.挑选结束，输出数组
// 	return arr;
// }

/*
	判断obj里面是否包含classname；
	obj当前元素的className
	"one  two"
	classname 指定的classname
	"one"

*/

/*function checkClass(obj,className){
	var arr=obj.split(" ");
	for(var i=0;i<arr.length;i++){
		if(arr[i]==className){
			return true;
		}
	}
	return false;
}*/





/*function getClass(className){
	if(document.getElementsByClassName){
		return document.getElementsByClassName(className);
	}else{
		var all=document.getElementsByTagName("*");
		var arr=[];
		for(var i=0;i<all.length;i++){
			if(arr[i].className==className){
				arr.push(all[i]);
			}
		}
	}
	return arr;
}*/




/*function getClass(className,range){
	var range=range?range:document;
	if(document.getElementsByClassName){
		return document.getElementsByClassName(className);
	}else{
		var arr=[];
		var all=document.getElementsByTagName("*");
		for(var i=0;i<all.length;i++){
			if(checkClass(all[i].className,className)){
				arr.push(all[i]);
			}
		}
	}
	return arr;
}
function checkClass(obj,className){
	var arr=obj.split(" ");
	for(var i=0;i<arr.length;i++){
		if(arr[i]==className){
			return true;
		}
	}
	return false;
}*/


/*function getClass(className,range){
	var range=range||document;
	if(document.getElementsByClassName){
		return document.getElementsByClassName(className);
	}else{
		var arr=[];
		var all=document.getElementsByTagName("*");
		for(var i=0;i<all.length;i++){
			if(checkClass(all[i].className,className)){
				arr.push(all[i]);
			}
		}
	}
	return arr;
}
function checkClass(obj,className){
	var arr=obj.split(" ");
	for(var i=0;i<arr.length;i++){
		if(arr[i]==className){
			return true;
		}
	}
	return false;
}*/



function getClass(className,range){
	var range=range?range:document;
	if(document.getElementsByClassName){
		return range.getElementsByClassName(className);
	}else{
		var arr=[];
		var all=range.getElementsByTagName("*");
		for(var i=0;i<all.length;i++){
			if(checkClass(all[i].className,className)){
				arr.push(all[i]);
			}
		}
	}
	return arr;
}
function checkClass(obj,classname){
	var arr=obj.split(" ");
	for(var i=0;i<arr.length;i++){
		if(arr[i]==classname){
			return true;
		}
	}
	return false;
}






//函数重载
/*
	getContent(obj,[val])
	获取或者是设置对象的文本
	obj 指定的对象
	val 要设置的内容
*/
function getContent(obj,val){
	if(obj.innerText){
		if(val==undefined){
			return obj.innerText;
		}else{
			obj.innerText=val;
		}
	}else{
		if(val==undefined){
			return obj.textContent;
		}else{
			obj.textContent=val;
		}
	}
}






//兼容性问题

/*
getStyle(obj,attr)
获取指定元素指定的样式
obj 指定的元素
attr 指定的样式
*/

function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr]; 
	}
}







/*
	$("")
	.one 获取类名
	#one 获取id 
	div 获取标签
*/
function $(selecter,range){
    if(typeof selecter=="string"){
      var ranges=range||document;
      if(selecter.charAt(0)=="."){
        return getClass(selecter.slice(1),ranges);
      }else if(selecter.charAt(0)=="#"){
        return document.getElementById(selecter.slice(1));
      }else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
        return ranges.getElementsByTagName(selecter);
      }else if(/^<[a-z][a-z1-6]{0,10}>$/.test(selecter)){
        var newObj=document.createElement(selecter.slice(1,-1));
        // newObj.style.cssText="";
        // newObj.className="";
        // rang.appendChild(newObj);
        // rang.insertBefore(newObj);
        // rang.insertAfter(newObj);
        return newObj;
      }
    }else if(typeof selecter=="function"){
      addEvent(window,"load",selecter);
    }
}

 
 function getChilds(obj,type){
           	var childs=obj.childNodes;
           	var arr=[];
           	if(type){
           		for(var i=0;i<obj.length;i++){
           			if(childs[i].nodeType==1||(childs[i].nodeType==3&&!(/^\s+$/.test(childs[i].nodeValue)))){
           				arr.push(childs[i]);
           			}
           		}
           		return arr;
           	}
           	for(var i=0;i<childs.length;i++){
           		if(childs[i].nodeType==1){
           			arr.push(childs[i]);
           		}
           	}
           	return arr;
           }
           function firstElement(obj){
           	return getChilds(obj)[0];
           }
           function lastElement(obj){
             var  len=getChilds(obj).length;
             return getChilds(obj)[len-1];
           }
           function randomElement(obj,type,num){
           	return getChilds(obj,type)[num];

           }

   // 节点轮播 
function jiedianlunbo(obj,num){
  var box=$(".box",obj)[0];
  var as=$("a",box);
  var width=284;
  
  var btn=$(".btn",obj)[0];
  var btnL=$(".btnL",btn)[0];
  var btnR=$(".btnR",btn)[0];
  var flag=true;
  var t;
  t=setInterval(move,3000);

  obj.onmouseover=function(){
    clearInterval(t);
    animate(btn,{opacity:1});
  }
  obj.onmouseout=function(){
    t=setInterval(move,3000);
    animate(btn,{opacity:0});
  }
  btnL.onclick=function(){
        if(flag){
          flag=false;
          mover();
        }
  }
  btnR.onclick=function(){
        if(flag){
          flag=false;
          move();
        }
  }
  function move(){
    animate(box,{left:-num*width},function(){
      for(var i=0;i<num;i++){
        var first=firstElement(box);
        box.appendChild(first);
      }
      box.style.left="0";
      flag=true;
    });
  }
  function mover(){
    for(var i=0;i<num;i++){
      var last=lastElement(box);
      var first=firstElement(box);
      box.insertBefore(last,first);
    }
    box.style.left=-num*width+"px";
    animate(box,{left:0},function(){
      flag=true;
    });
  }
}

