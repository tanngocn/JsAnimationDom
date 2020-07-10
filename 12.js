document.addEventListener("DOMContentLoaded",function(){
	var x= document.getElementsByClassName('n1');
	for (var i =0; i <x.length; i++) {
		x[i].onclick=function(){
			console.log(this.getAttribute('data-tq'));
		}
	}

},false)

