 // Xử lý cuộn chuột có xác định vị trí đối tượng

 document.addEventListener("DOMContentLoaded",function(){
		// Cho khoảng cách di chuyển của khối dịch vụ
		var kcdichuyen=400;
// Xử lý bên thanh menu
		var x= document.querySelector('.menu');
		var vitrix=x.offsetTop;//Xác định vị trí của menu x năm ở đâu
		var trangthaix= 'duoi100';
// Xử lý bên khôi dịch vụ k3
		var dv= document.querySelector('.k3');
		var vitridv= dv.offsetTop;// Xác định vị trí của khối dịch vụ để cho nó kích hoạt
		var pvhddv=vitridv+kcdichuyen;//Phạm vi mà khối dịch vụ có thể di chuyển
		var trangthaik3='duoi';
// Xử lý load hiệu ứng
		var kt= document.querySelectorAll('.s3')
		var trangthai="duoi";
	window.addEventListener('scroll',function(){
			for (var i = 0; i<kt.length; i++) {
			var vt =kt[i].offsetTop;
			kt[i].addEventListener('scroll',function(){
				vtxp=0;
				vtht=this.offsetTop;
				console.log(vtht);
					for (vtxp = 0;vtht=vtht.previousElementSibling;vtxp++) {
					}
					kt[vtxp].classList.add('hienra')
			})
		}

		// Xử lý hiệu ứng cho khối menu khi cuộn chuột
			if(window.pageYOffset>vitrix){
				if(trangthaix=="duoi100"){
					x.classList.add('changecolor');
					trangthaix="tren100";
				}
			}else if(window.pageYOffset<vitrix){
				if(trangthaix=="tren100"){
					x.classList.remove('changecolor');
					trangthaix="duoi100";
				}
			}
			// ============================
		//Xử lý hiệu ứng cho khối dịch vụ khi cuộn chuột
			if((window.pageYOffset >vitridv) &&(window.pageYOffset<pvhddv) ){
				if(trangthaik3=="duoi"){
					dv.classList.add('codinh');
					trangthaik3="tren";
				}
			}else if((window.pageYOffset <vitridv)||(window.pageYOffset>pvhddv)){
				if(trangthaik3=="tren"){
					dv.classList.remove('codinh');
					trangthaik3="duoi";
				}
			}
			
	})

},false)

