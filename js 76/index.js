var target = document.getElementById("list1").children[0];

var copyelememt = target.cloneNode(true);

console.log(copyelememt);

document.getElementById("list2").appendChild(copyelememt);