var start = new Date().getTime();

function getColors() {
	var characters = '0123456ABCDEF'.split('');
	var colors= "#";
	for (i = 0; i < 6; i++) {
			colors = colors + characters[Math.floor(Math.random() * 16)]
	}
    return (colors);
}

function showUp() {
	var top = Math.random() * 380;
	var left = Math.random() * 550;
	var width = (Math.random() * 50) + 50;
	if (Math.random() > 0.5) {
		document.getElementById("shapes").style.borderRadius = "50%";
	} else {
		document.getElementById("shapes").style.borderRadius = "0";
    }

	document.getElementById("shapes").style.backgroundColor = getColors();
	document.getElementById("shapes").style.top = top + "px";
	document.getElementById("shapes").style.left = left + "px";
	document.getElementById("shapes").style.width = width + "px";
	document.getElementById("shapes").style.height = width + "px";
	document.getElementById("shapes").style.display = "block";

	start = new Date().getTime();
}

function appearAfterDelay() {
    setTimeout(showUp, Math.random() * 1000);
}

appearAfterDelay();

	document.getElementById("shapes").onclick = function () {
		document.getElementById("shapes").style.display = "none";
		var end = new Date().getTime();
		var clickTime = (end - start) / 1000;
		document.getElementById("clickTime").innerHTML = clickTime + " s.";

	appearAfterDelay();
}
