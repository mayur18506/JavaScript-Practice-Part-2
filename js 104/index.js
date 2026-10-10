var target = document.querySelector("#myinput");
target.addEventListener('keydown', function (e) {

    console.clear();
    var text = "You pressed button : " + e.key;

    console.log(text);

});
