// hiệu ứng sử dụng addclass
document.addEventListener("DOMContentLoaded",function(){
var x= document.getElementsByClassName('nut1');
var y= document.getElementsByClassName('slidebar');
var z= document.getElementsByClassName('nen');
var t=document.getElementsByClassName('content');
var s= document.getElementsByClassName('trang');
	for (var i = 0; i <x.length; i++) {
		x[i].onclick=function(){
			for (var k = 0; k<x.length; k++) {
				x[k].classList.remove('thaydoi');
			}
			this.classList.add('thaydoi');
			y[0].classList.remove('vetrai')
			z[0].classList.add('hienra');
			t[0].classList.add('dichphai')
			s[0].classList.add('dich');

		}
		z[i].onclick=function(){
			x[0].classList.remove('thaydoi');
			this.classList.remove('hienra');
			t[0].classList.remove('dichphai');
			s[0].classList.remove('dich');
			y[0].classList.add('vetrai')
		}
	}
},false)

