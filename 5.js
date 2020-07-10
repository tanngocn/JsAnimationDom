// Function
// khong tham so
	xem=function(){
		var ten="Ngoc";
		return "Hello ban "+ten;
	}
	console.log(xem());
// Function co tham so
	tinh=function(ten,a,b,c,d,e){
		var tb= (a+b+c+d+e)/5;
		console.log("Diem trung binh cua " +ten+ "la " +tb);
	}
	tinh("ngoc",8,8,8,8,7);