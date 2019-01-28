/*REACTION_GAME*/

var start = new Date().getTime();

function losujKolory() {
    var litery = '0123456ABCDEF'.split('');
    var kolory = "#";
    for (i = 0; i < 6; i++) {
        kolory = kolory + litery[Math.floor(Math.random() * 16)]
    }
    return (kolory);
}

function pojawSie() {
    var top = Math.random() * 400;
    var left = Math.random() * 850;
    var width = (Math.random() * 50) + 50;
    if (Math.random() > 0.5) {
        document.getElementById("kwadrat").style.borderRadius = "50%";
    } else {
        document.getElementById("kwadrat").style.borderRadius = "0";
    }
    document.getElementById("kwadrat").style.backgroundColor = losujKolory();
    document.getElementById("kwadrat").style.top = top + "px";
    document.getElementById("kwadrat").style.left = left + "px";
    document.getElementById("kwadrat").style.width = width + "px";
    document.getElementById("kwadrat").style.height = width + "px";
    document.getElementById("kwadrat").style.display = "block";
    
    start = new Date().getTime();
}

function pojawSiePoPrzerwie() {
    setTimeout(pojawSie, Math.random() * 1000);
}
pojawSiePoPrzerwie();

document.getElementById("kwadrat").onclick = function () {
    document.getElementById("kwadrat").style.display = "none";
    var end = new Date().getTime();
    var reakcja = (end - start) / 1000;
    document.getElementById("reakcja").innerHTML = reakcja + " s.";
    
    pojawSiePoPrzerwie();
}
