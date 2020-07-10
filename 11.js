document.addEventListener("DOMContentLoaded",function(){
		var x= document.getElementsByClassName('one');
		var y= document.getElementsByClassName('list');
		x[0].onclick=function(){
			console.log('click chưa');
			this.classList.toggle('changecolor');
			y[0].classList.toggle('hienra');
		}
},false)

