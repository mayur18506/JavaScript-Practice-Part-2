var element = document.createElement("h2");

var Nelement = document.createTextNode("This is just text");

var mayur = document.createComment("This is just comment");

element.appendChild(Nelement);

// document.getElementById("test").appendChild(Nelement);

// document.getElementById("test").appendChild(mayur);

var target = document.getElementById("test");

target.insertBefore(element, target.childNodes[0])

console.log(element);

