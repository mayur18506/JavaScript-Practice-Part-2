var element;

document.getElementById("header").addEventListener("click", abc);

function abc() {
    // document.getElementById("header").classList.add("xyz","efg"); //for add class

    // document.getElementById("header").classList.remove("xyz");  //for remove class
    // var a =document.getElementById("header").classList; 

    //   var a =document.getElementById("header").classList.length;

    // document.getElementById("header").classList.toggle("xyz");
    // var a =document.getElementById("header").classList;

    //  var a =document.getElementById("header").classList.item(2);

    var a = document.getElementById("header").classList.contains("xyz");
    console.log(a);
}

