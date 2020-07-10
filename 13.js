// Xử lý menu togger
document.addEventListener("DOMContentLoaded",function(){
var x= document.getElementsByClassName('one');
var y= document.getElementsByClassName('list')
for (var i = 0; i < x.length; i++) {
	x[i].onclick=function(){
			if((this.classList[1]=="thaymau")){
				this.classList.remove('thaymau');
				var ts= this.getAttribute('data-nd');
				console.log(ts);
				var list=document.getElementById(ts);
				 list.classList.remove('hienra');
			}
			else{
				for (var k =0; k < x.length; k++) {
				x[k].classList.remove('thaymau');
			}
			// Xóa tất cả các nút màu trắng
			// Xử lý hiệu ứng icon
			this.classList.toggle('thaymau');
			// Xử lý nội dung list
			var ts= this.getAttribute('data-nd');
			var list= document.getElementById(ts);
			for (var c=0; c<y.length; c++) {
				 y[c].classList.remove('hienra');
			}
			list.classList.toggle('hienra');
			}
			
		}
}
},false)

