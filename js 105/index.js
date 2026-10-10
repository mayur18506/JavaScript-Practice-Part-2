var target = document.querySelector("#myinput");
target.addEventListener('copy', function () {

    console.clear();

    console.log("You Copied Test");
    target.style.backgroundColor = "lightgreen";
});

var target = document.querySelector("#myinput");
target.addEventListener('cut', function () {

    console.clear();

    console.log("You Cut Test");
    target.style.backgroundColor = "pink";
});

var target = document.querySelector("#myinput");
target.addEventListener('paste', function () {

    console.clear();

    console.log("You Pasted Test");
    target.style.backgroundColor = "lightblue";
});
