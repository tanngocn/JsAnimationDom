document.addEventListener("DOMContentLoaded",function(){

	var x= document.getElementById('nut');
	var y= document.getElementsByClassName('card');
	var trangthai="lan1";
	x.onclick=function(){
		if(trangthai=="lan1"){
			y[0].classList.remove('chieuve');
				y[0].classList.add('chieudi');
			trangthai="lan2";
		}
		else if(trangthai=="lan2"){

			y[0].classList.remove('chieudi');
			y[0].classList.add('chieuve');
			trangthai="lan1";
		}
	}
},false)

