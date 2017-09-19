/*
* @Author: Administrator
* @Date:   2017-09-18 17:49:20
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-20 00:30:26
*/
window.onload=function(){
let cedaohang=document.getElementById('cedaohang')
let cedahang2=document.getElementById('cedaohang2')
let lis=cedahang2.getElementsByTagName('li')
let cedaohang1=document.getElementsByClassName('cedaohang1')


let btnlist=document.getElementsByClassName('btn-list')[0]
let lis1=btnlist.getElementsByTagName('li')
let imglist=document.getElementsByClassName('img-list')[0]
let img1=imglist.getElementsByTagName('li')
let banner=document.getElementsByClassName('banner')[0]
 
for(let i=0;i<lis.length;i++){
	lis[i].onmouseover=function(){
		cedaohang1[i].style.display='block';	
	}
	lis[i].onmouseout=function(){
		cedaohang1[i].style.display='none';
	}

}

 


let a=setInterval(move,2000);
let num=0;
function move(){
	num++;
	if(num==img1.length){
  		num=0;
  	}
	 
  	 for(let z=0;z<img1.length;z++){
  				img1[z].style.display='none';
  				lis1[z].style.background='rgba(255, 255, 255, 0.4)';

  			}
  				img1[num].style.display='block'; 	
  				lis1[num].style.background='#fff';		 
 
}


for(let j=0;j<lis1.length;j++){
  	lis1[j].onclick=function(){
  		for(let x=0;x<img1.length;x++){
  				img1[x].style.display='none';
  				lis1[x].style.background='rgba(255, 255, 255, 0.4)';


  			}
  				img1[j].style.display='block';
  				lis1[j].style.background='#fff';	
  				num=i 			 
  		}
  }


  //鼠标移入
    
    banner.onmousemove=function(){
    	clearInterval(a);
    }
    banner.onmouseout=function(){
    	a=setInterval(move,2000)
    }

    
    
}


//点击轮播改变banner图片
    // for(let i=0;i<lis1.length;i++){
    // 	lis1[i].onclick=function(){
    // 		for(let z=0;z<img1.length;z++){
  		// 		img1[z].style.display='none';
  		// 		lis1[z].style.background='rgba(255, 255, 255, 0.4)';

  		// 	}
  		// 		img1[num].style.display='block'; 	
  		// 		lis1[num].style.background='#fff';
  		// 		num=i

    // 	}
    // }



 
// let t=setInterval(move,3000); 
// let num=0;

// function move(){
// 	num++
// 	if(num==img1.length){
// 		num=0;
// 	}
// 	for(let j=0;j<lis1.length;j++){
// 	lis1[j].onclick=function(){
// 		for(let x=0;x<img1.length;x++){
// 				img1[x].style.display='none';

// 			}
// 				img1[j].style.display='block'; 			 
// 		}
// }







//窗口  点击   只考虑两个图片
// for(let j=0;j<lis1.length;j++){
// 	lis1[j].onclick=function(){
// 		let now=0;
// 		img1[now].style.display='none'; 
		 
// 		img1[j].style.display='block'; 
// 		now=i;
		
			 
// 		}
// }

// 
// 
// 


// for(var j=0;j<lis1.length;j++){
// 	lis1[j].index=j
//   	lis1[j].onclick=function(){
//   		let now=0;
//   		img1[now].style.display='none'; 
		 
//  		img1[this.index].style.display='block'; 
//   		now=this.index;
		
			 
//   		}
//   }


// for(var j=0;j<lis1.length;j++){
// 	lis1[j].index=j
//   	lis1[j].onclick=(function(j){
//   		return function(){
//   		let now=0;
//   		img1[now].style.display='none'; 
		 
//  		img1[this.index].style.display='block'; 
//   		now=this.index;
		
			 
//   		}
//   }
//      })(i)













	 


