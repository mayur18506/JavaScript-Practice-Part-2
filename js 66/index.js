var element;

// document.getElementById("header").onmouseenter = abc;

// function abc() {
//     document.getElementById("header").style.background = "green";
// }

document.getElementById("header").addEventListener("mouseenter", abc);
document.getElementById("header").addEventListener("click", function () {
    // document.getElementById("header").style.border = "10px solid red";  //or this 
    this.style.border = "10px solid red";
});

function abc() {
    document.getElementById("header").style.background = "green";
}

console.log(element);