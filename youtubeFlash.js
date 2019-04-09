//alert("active");

function checkOk() {
	var h = (new Date()).getHours();
	if (h < 5) {
		var c = confirm("You probably shouldn't be on here.");
		if (c) {
			window.history.back();
			window.close(); // close tab if back didn't work
		}
	}
}
checkOk();
setInterval(checkOk, 300000);