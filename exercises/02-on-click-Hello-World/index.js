//Declare your function here

// window.myClickFunction = function myClickFunction() {
// 	alert("Your first function!");
// };

var listenerfunction = function myClickFunction() {
	alert("First click");
	document.getElementById("Hello").removeEventListener("click", listenerfunction);
};
var listenerfunction2 = function inicialize() {
	document.getElementById("Hello").addEventListener("click", listenerfunction);
};
