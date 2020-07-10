document.addEventListener("DOMContentLoaded",function(){
	var nuttrai=document.querySelector('.prev');
	var nutphai=document.querySelector('.next');
	var slides=document.querySelectorAll('.slides ul li');
	var current=0;
	var sumslide=slides.length;
	var trangthai="dangdungyen";
	var nextslide=function(){
		if(trangthai=="dangchuyendong") {
			return false;
		}
		trangthai="dangchuyendong";
		var trangthaigiua2slide= 0;

		var slidecurrent=slides[current];
		if(current<(sumslide-1)){
			current+=1;

		}else{
			current=0;
		}
		var slidenext=slides[current];

			//  gọi hàm check xem đã chạy xong chưa
			var xlslidecurrent=function(){
				this.classList.remove('active');
				this.classList.remove('dira');
				trangthaigiua2slide++;
				if(trangthaigiua2slide==2){ trangthai="dangdungyen";}

			}
			var xlslidenext=function(){
				this.classList.remove('divao');
				this.classList.add('active');
				trangthaigiua2slide++;
				if(trangthaigiua2slide==2){ trangthai="dangdungyen";}

			}
			// Thêm class
			slidecurrent.classList.add('dira');
			slidenext.classList.add('divao');

		// Thêm sự kiện kiểm tra check chuyển động kết thúc
		slidecurrent.addEventListener('webkitAnimationEnd',xlslidecurrent);
		slidenext.addEventListener('webkitAnimationEnd',xlslidenext);
	};
	nutphai.addEventListener('click',nextslide);
	// End xong nuts phai
	// Xử lý nút bên trái
	var previousslide=function(){
		if(trangthai=="dangchuyendong") {
			return false;
		}
		trangthai="dangchuyendong";
		var trangthaigiua2slide= 0;
		var slidecurrent=slides[current];
		if(current>0){
			current--;
		}else{
			current=sumslide-1;
		}
		var slideprev=slides[current];
		//  gọi hàm check xem đã chạy xong chưa
		var xlslidecurrent=function(){
			this.classList.remove('active');
			this.classList.remove('diraprev');
			trangthaigiua2slide++;
			if(trangthaigiua2slide==2){ trangthai="dangdungyen";}

		}
		var xlslideprev=function(){
			this.classList.remove('divaoprev');
			this.classList.add('active');
			trangthaigiua2slide++;
			if(trangthaigiua2slide==2){ trangthai="dangdungyen";}

		}
		slidecurrent.classList.add('diraprev');	
		slideprev.classList.add('divaoprev');
		slidecurrent.addEventListener('webkitAnimationEnd',xlslidecurrent);
		slideprev.addEventListener('webkitAnimationEnd',xlslideprev);
	}
	nuttrai.addEventListener('click',previousslide);
	
	
},false)

