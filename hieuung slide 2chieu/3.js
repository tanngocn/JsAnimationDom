// Xử dụng toán tử 3 ngôi
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
current=(nutnao=="nutphai")? ((current<(sumslide-1))?current+1:0):((current>0)?current-1:sumslide-1);
var slidenext=slides[current];
slidecurrent.classList.add((nutnao=="nutphai")?('dira'):('diraprev'));
slidenext.classList.add((nutnao=="nutphai")?('divao'):('divaoprev'));
var xlslidecurrent=function(){
			// Khi hiệu ứng của bất kì nút trái hay phải chạy xong thì đều xóa class active
			this.classList.remove('active');
				// Nếu là nút phải thì xóa class dira
				this.classList.remove((nutnao=="nutphai")?('dira'):('diraprev'));
				trangthaigiua2slide++;
				trangthai=(trangthaigiua2slide==2)?('dangdungyen'):trangthai;
			}
			var xlslidenext=function(){
						// sử dụng toán tử 3 ngôi
						this.classList.remove((nutnao=="nutphai")?('divao'):('divaoprev'));
						this.classList.add('active');
						trangthaigiua2slide++;
						trangthai=(trangthaigiua2slide==2)?('dangdungyen'):trangthai;
					}
					slidecurrent.addEventListener('webkitAnimationEnd',xlslidecurrent);
					slidenext.addEventListener('webkitAnimationEnd',xlslidenext);
				}
				var nextslide=function(){
					clearInterval(thoigian);
					nutnaodangxuly('nutphai');
				};
				var previousslide=function(){
					clearInterval(thoigian);
					nutnaodangxuly('nuttrai');
				}
				nutphai.addEventListener('click',nextslide);
				nuttrai.addEventListener('click',previousslide);

			},false)

