window.onload=function(){

	var aa=document.getElementsByClassName('banner-11');
	
	var max=document.getElementsByClassName('dakuai-bottom-middle')[0];
	var lis=document.getElementsByClassName('banner-22');
	var tabs=document.getElementsByClassName('banner-55')[0];
	var left=document.getElementsByClassName('banner-44')[0];
	var right=document.getElementsByClassName('banner-66')[0];
	var num=0;
	var flag=true;

	   //初始化
		for(var i=0;i<aa.length;i++){
			if(i==0){
				tabs.style.display='none';
				continue;
			}else{
				animate(aa[i],{opacity:0});;
			}
		}
		var t;

		//自动轮播
		t=setInterval(fn,2000);
        
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

		}


        //鼠标点击停止效果
		max.onmouseover=function(){
			clearInterval(t);
			tabs.style.display='block';	
		}

		 //鼠标离开开始轮播效果
		max.onmouseout=function(){
			t=setInterval(fn,2000);
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
      }
      twos[i].onmouseout=function(){
        for(var j=0;j<sss.length;j++){
          sss[j].style.display='none';
        }
      }
    }

	// 选项卡区
			yincang('item','son');
var sune=document.getElementById('dl2bb');
var suner=document.getElementsByClassName('sun')[0];
suner.style.display='none'
sune.onmouseover=function(){
	suner.style.display="block";
		}
	sune.onmouseout=function(){
		suner.style.display="none";
		}

var ewmm=document.getElementById('dl2bc');
var ewme=document.getElementsByClassName('ewm')[0];
ewme.style.display='none'
ewmm.onmouseover=function(){
	ewme.style.display="block";
		}



	ewmm.onmouseout=function(){
		ewme.style.display="none";
	
		}



var tpp=document.getElementsByClassName('ydtp');

for(var i=0;i<tpp.length;i++){
	tpp[i].index=i;
	tpp[i].onmouseover=function(){
		animate(tpp[this.index],{right:50})
	};
	tpp[i].onmouseout=function(){
		animate(tpp[this.index],{right:0})
	};
}


  var dqx=document.getElementById('sou1aa');
  var dqz=document.getElementsByClassName('dq')[0];
  dqz.style.display='none';
  dqx.onmouseover=function(){
  dqz.style.display="block";
  }
  dqx.onmouseout=function(){
  	dqz.style.display='none'
  }


 // 充值 颜色变换
 var hs1=document.getElementsByClassName('bs');
 var hi1=hs1.length;
 for(i=0;i<hi1;i++){
 	hs1[i].index=i;
 	hs1[i].onclick=function(){
 		for (j=0;j<hi1;j++){
   	hs1[j].style.background='#fff';

   }
   	hs1[this.index].style.background='#E40077';
    
   }
   
 }


 var yct=document.getElementsByClassName('ht');
   
  
   var obj=$('.jdlb')[0];
   jiedianlunbo(obj,4);


    var gb=$('.gdc')[0];
    var gc=$('.gbc');

for(var i=0;i<gc.length;i++){
	 gc[i].ab=i;
    gc[i].onmouseover=function(){   	
       animate(gc[this.ab],{left:-60});
   }
   gc[i].onmouseout=function(){
   	animate(gc[this.ab],{left:0});
   }
  }
}




