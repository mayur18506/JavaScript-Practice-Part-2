var element;

// document.querySelector("#header").style.backgroundColor="tan";
// element = document.querySelector("#header").style.border;

// document.querySelector("#header").className = "abc xyz";
// element = document.querySelector("#header").className;

document.querySelector("#header").classList = "abc xyz";
// document.querySelector("#header").classList.add("xyz");
element = document.querySelector("#header").classList;
console.log(element);