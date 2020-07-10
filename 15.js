document.addEventListener("DOMContentLoaded",function(){
 var trangthai="duoi300";
 var y= document.querySelector('.menu');
	window.addEventListener('scroll',function() {
		/* Act on the event */
		if(window.pageYOffset>=300){
				if(trangthai=="duoi300"){
					y.classList.add('thunho');
					trangthai='tren300';
				}
		}
		else if(window.pageYOffset<300){
					if(trangthai=="tren300"){
						y.classList.remove('thunho');
						trangthai="duoi300";
					}
				}
	});
},false)

