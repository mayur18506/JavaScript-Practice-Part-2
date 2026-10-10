var target = document.querySelector("#box");

// window.addEventListener('offline', function () {

//     target.innerHTML = "You are offline"
//     target.style.backgroundColor = "pink";
// });

function offlinefunction() {
    target.innerHTML = "You are offline"
    target.style.backgroundColor = "pink";
}

var target = document.querySelector("#box");

window.addEventListener('online', function () {

    target.innerHTML = "You are Online"
    target.style.backgroundColor = "lightpink";
});

console.log(navigator.onLine);
