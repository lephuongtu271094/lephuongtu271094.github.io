function num0() {
	document.getElementById("ketqua").value += +0 ;
} 
function num1() {
	document.getElementById("ketqua").value += +1 ;
} 
function num2() {
	document.getElementById("ketqua").value += +2 ;
} 
function num3() {
	document.getElementById("ketqua").value += +3 ;
} 
function num4() {
	document.getElementById("ketqua").value += +4 ;
}
 function num5() {
	document.getElementById("ketqua").value += +5 ;
}
 function num6() {
	document.getElementById("ketqua").value += +6 ;
} 
function num7() {
	document.getElementById("ketqua").value += +7 ;
} 
function num8() {
	document.getElementById("ketqua").value += +8 ;
} 
function num9() {
	document.getElementById("ketqua").value += +9 ;
} 
function cong(){
	document.getElementById("ketqua").value += "+" ;
}
function tru(){
	document.getElementById("ketqua").value += "-" ;
}
function nhan(){
	document.getElementById("ketqua").value += "*" ;
}
function chia(){
	document.getElementById("ketqua").value += "/" ;
}
function cham(){
	document.getElementById("ketqua").value += "." ;
}
function phantram(){
	document.getElementById("ketqua").value += "%" ;
}
function kq(){
	 var kq=eval(document.getElementById("ketqua").value);
	document.getElementById("ketqua").value = kq;
}
function del(){
	document.getElementById("ketqua").value = "  " ;
}
