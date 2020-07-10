// Truy xuất các phẩn tử của html sử dụng loop
// Ko nên dùng tag name để truy xuất
var title= document.getElementsByTagName('h4');
for (var i = 0; i<title.length; i++) {
	title[i].innerHTML="<button  class='btn btn-primary' > Hello wolrd</button>";	
}
//Truy xuất id
var td2= document.getElementById('tieudecuoi');
td2.innerHTML="<button class='btn btn-warning'>Cảnh báo </button>"