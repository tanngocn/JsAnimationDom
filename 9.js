document.addEventListener("DOMContentLoaded",function(){

	var x= document.getElementById('nut');
	var y= document.getElementsByClassName('card');
	console.log(y[0]);
	x.onclick=function(){
		y[0].classList.toggle('dichphai');
	}
},false)

