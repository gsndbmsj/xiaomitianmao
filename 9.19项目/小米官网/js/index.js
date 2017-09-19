
/*
* @Author: Administrator
* @Date:   2017-09-19 23:48:18
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-20 01:42:35
*/
window.onload=function(){
	bannerLeft=document.getElementsByClassName('banner-left')[0]
	console.log(bannerLeft)
	bannerLeftImage=document.getElementsByClassName('banner-left-image')[0]
	console.log(bannerLeftImage)
	lis=bannerLeftImage.getElementsByTagName('li')
	console.log(lis)
	navCenter1=document.getElementsByClassName('nav-center1')
	console.log(navCenter1)

	for(let i=0;i<lis.length;i++){
	lis[i].onmouseover=function(){
		navCenter1[i].style.display='block';	
	}
	lis[i].onmouseout=function(){
		navCenter1[i].style.display='none';
	}

}

let btnlist=document.getElementsByClassName('btn-list')[0]
let lis1=btnlist.getElementsByTagName('li')
let imglist=document.getElementsByClassName('img-list')[0]
let img1=imglist.getElementsByTagName('li')
let banner=document.getElementsByClassName('banner')[0]

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



 let jiantou=document.getElementsByClassName('hezi2')[0]
 let jiantou1=document.getElementsByClassName('hezi1')[0]
 jiantou.onclick=function(){
 	move()
 }

 jiantou1.onclick=function(){
	num--;
	if(num<0){
		num=img1.length-1
	}
	for(let z=0;z<img1.length;z++){
  				img1[z].style.display='none';
  				lis1[z].style.background='rgba(255, 255, 255, 0.4)';

  			}
  				img1[num].style.display='block'; 	
  				lis1[num].style.background='#fff';	
}


}