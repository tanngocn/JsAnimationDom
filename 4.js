// Toan tu rut gon
var x=4;
x+=3;//7
x*=2;//7*2
x/=2;//14/2
x-=2;//7-2
x%=2;//5%2
console.log(x);
//Dau nhay
console.log("Hom nay la "+x+ "ngay troi \"rat dep\" ");

// For in
// Kieu Object trong js
var dongho ={
	ten:'rolex',
	gia:'100cu',
	mau:'den',
	xemngay:function(){ return "Hom nay la ngay 30/1/2019";}
}
var x;
for (x in dongho){
	console.log(dongho[x]);
}