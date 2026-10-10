
var newelement = document.createElement("li");

var newetext = document.createTextNode("Wow New Text");

newelement.appendChild(newetext);

var target = document.getElementById("list");

var oldelement = target.children[0];

// console.log(oldelement);

target.replaceChild(newelement, oldelement);