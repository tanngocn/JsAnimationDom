document.addEventListener("DOMContentLoaded",function(){
	var nuttrai=document.querySelector('.prev');
	var nutphai=document.querySelector('.next');
	var slides=document.querySelectorAll('.slides ul li');
	var current=0;
	var sumslide=slides.length;
	var trangthai="dangdungyen";
	var thoigian=setInterval(function(){
		nutnaodangxuly('nutphai');},4000);
	var nutnaodangxuly=function(nutnao){
		// Kiêm tra xem slide dang chuyển động hay đứng yên
		if(trangthai=="dangchuyendong") {
			return false;
		}
		trangthai="dangchuyendong";
		var trangthaigiua2slide= 0;
// Xác định slide ở vị trí hiện tại
var slidecurrent=slides[current];
if(nutnao=="nutphai"){
	if(current<(sumslide-1)) {	current++; }
	else   {current=0;}
}
else if(nutnao=="nuttrai")
{
	if(current>0)
	{
		current--;
	}
	else
	{
		current=sumslide-1;
	}
}
		// End xác dịnh vị trí slide hiện tại
		// Vị trí slide tiếp theo cần xử lý
		var slidenext=slides[current];
		// Nếu là nút next
		// add class hiệu ứng của bên phải
		if(nutnao=="nutphai")
		{
			slidecurrent.classList.add('dira');
			slidenext.classList.add('divao');
		}
		// Nếu là nút trái
		// Add class hiệu ứng của bên trái
		else if(nutnao=="nuttrai")
		{
			slidecurrent.classList.add('diraprev');	
			slidenext.classList.add('divaoprev');
		}
		var xlslidecurrent=function(){
			// Khi hiệu ứng của bất kì nút trái hay phải chạy xong thì đều xóa class active
			this.classList.remove('active');
				// Nếu là nút phải thì xóa class dira
				if(nutnao=="nutphai")
				{
					this.classList.remove('dira');
				}
						// Nếu là nút trai thì xóa class diraprev
						else if(nutnao=="nuttrai")
						{
							this.classList.remove('diraprev');
						}
						trangthaigiua2slide++;
						if(trangthaigiua2slide==2){ trangthai="dangdungyen";}
					}
					var xlslidenext=function(){
						if(nutnao=="nutphai")
						{
							this.classList.remove('divao');
						}
						else if(nutnao=="nuttrai")
						{
							this.classList.remove('divaoprev');
						}
						this.classList.add('active');
						trangthaigiua2slide++;
						if(trangthaigiua2slide==2){ trangthai="dangdungyen";}
					}
					slidecurrent.addEventListener('webkitAnimationEnd',xlslidecurrent);
					slidenext.addEventListener('webkitAnimationEnd',xlslidenext);
				}
				

				var nextslide=function(){
					clearInterval(thoigian);
					nutnaodangxuly('nutphai');
				};
	// End xong nuts phai
	// Xử lý nút bên trái
	var previousslide=function(){
		clearInterval(thoigian);
		nutnaodangxuly('nuttrai');
	}

		nutphai.addEventListener('click',nextslide);
		nuttrai.addEventListener('click',previousslide);

	},false)

