window.onload=function(){
	var aa=document.getElementsByClassName('banner-11');
	
	var max=document.getElementsByClassName('dakuai-bottom-middle')[0];
	var lis=document.getElementsByClassName('banner-22');
	var tabs=document.getElementsByClassName('banner-55')[0];
	var left=document.getElementsByClassName('banner-44')[0];
	var right=document.getElementsByClassName('banner-66')[0];
	var num=0;
	var flag=true;
	//var getColor=['#E65B08','#FFBACC','#DEDEDE','#B9DFF2','#E8F6FF']





	   //初始化
		for(var i=0;i<aa.length;i++){
			if(i==0){
				tabs.style.display='none';//这儿初始化时为什么不能写left，right
				continue;
			}else{
				animate(aa[i],{opacity:0});;
			}
		}
		var t;



		//自动轮播
		t=setInterval(fn,1000);





        
		function fn(){
			num++;
			if(num==aa.length){
				num=0;
			}
			for(var i=0;i<aa.length;i++){
				animate(aa[i],{opacity:0},function(){
				flag=true;
			});
				lis[i].style.background='#D0D2D3'
			}
			animate(aa[num],{opacity:1});;
			lis[num].style.background='#DC0368'
			//max.style.borderColor=getColor[num];
		}







		function fnL(){
			num--;
			if(num<0){
				num=aa.length-1;		
			}
			for(var i=0;i<aa.length;i++){
				animate(aa[i],{opacity:0},function(){
				flag=true;
			});
				lis[i].style.background='#D0D2D3'
			}
			animate(aa[num],{opacity:1});
			lis[num].style.background='#DC0368';
			//max.style.borderColor=getColor[num];

		}






        //鼠标点击停止效果
		max.onmouseover=function(){
			clearInterval(t);
			tabs.style.display='block';	
		}






		 //鼠标离开开始轮播效果
		max.onmouseout=function(){
			t=setInterval(fn,1000);
		    tabs.style.display='none';	
		}





		 //右侧箭头点击停止效果
		right.onclick=function(){
			if(flag){
			flag=false;
             fn();
           }
		}





		 //左侧箭头点击停止效果
		left.onclick=function(){
			if(flag){
			flag=false;
             fnL();
         }
		}






		//圆点点击效果
		for(var i=0;i<lis.length;i++){
	     lis[i].index=i;
            lis[i].onmouseover=function(){
            	num=this.index;
            	for(var j=0;j<aa.length;j++){
                     animate(aa[j],{opacity:0})
                     lis[j].style.background='#D0D2D3'
            	}
         animate(aa[this.index],{opacity:1});
         lis[this.index].style.background='#DC0368';
            }
		}
		
		










	var twos=document.getElementsByClassName('banner-99');
    var sss=document.getElementsByClassName('banner-88');
    for(var j=0;j<twos.length;j++){
          sss[j].style.display='none';
      }

    for(var i=0;i<twos.length;i++){
      twos[i].index=i;
      twos[i].onmouseover=function(){
        for(var j=0;j<sss.length;j++){
          sss[j].style.display='none';
        }
        sss[this.index].style.display='block';
        //alert(i);
      }
      // alert(1);
      twos[i].onmouseout=function(){
        for(var j=0;j<sss.length;j++){
          sss[j].style.display='none';
        }
      }
      // alert(2);
    }
 	}