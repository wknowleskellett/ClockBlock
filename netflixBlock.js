
var date = new Date();
var d = date.getDay();
var h = date.getHours();

alert("" + (d == 0 && h >= 22));
alert("" + (d < 5));
alert("" + (d == 5 && h < 15));

if ((d == 0 && h >= 22) || d < 5 || (d == 5 && h < 15)) {
	window.history.back();
	window.close(); // close tab if back didn't work
}