
var id = setTimeout(Anime, 5000);

function Anime() {

    var target = document.getElementById("test");
    target.style.width = "500px";

    console.log("Hello");
}

function stopanimation() {
    clearTimeout(id)
}