/*Running_Shapes*/

var start = new Date().getTime();

function getColours() {
		var letters = '0123456ABCDEF'.split('');
		var colours = "#";
		for (i = 0; i < 6; i++) {
			colours = colours + letters[Math.floor(Math.random() * 16)]
		}
    return (colours);
}

function popUp() {
		var top = Math.random() * 400;
		var left = Math.random() * 850;
		var width = (Math.random() * 50) + 50;
		if (Math.random() > 0.5) {
			document.getElementById("shapes").style.borderRadius = "50%";
		} else {
			document.getElementById("shapes").style.borderRadius = "0";
		}
		document.getElementById("shapes").style.backgroundColor = getColours();
		document.getElementById("shapes").style.top = top + "px";
		document.getElementById("shapes").style.left = left + "px";
		document.getElementById("shapes").style.width = width + "px";
		document.getElementById("shapes").style.height = width + "px";
		document.getElementById("shapes").style.display = "block";
    
         start = new Date().getTime();
}

function popUpAfterPause() {
	setTimeout(popUp, Math.random() * 1000);
}
popUpAfterPause();

	document.getElementById("shapes").onclick = function () {
		document.getElementById("shapes").style.display = "none";
		var end = new Date().getTime();
		var reakcja = (end - start) / 1000;
		document.getElementById("clickTimer").innerHTML = reakcja + " s.";
		
		popUpAfterPause();
	}
