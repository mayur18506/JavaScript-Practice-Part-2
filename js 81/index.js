function focusfunction(element) {
    element.style.background = "lime";
}

function blurfunction(element) {
    element.style.background = "";
}

function inputfunction(element) {
    var x = element.value;
    document.getElementById("test").innerHTML = x;
}

function changefunction(element) {
    var x = element.value;
    document.getElementById("test").innerHTML = x;
}

function selectfunction() {
    console.log("You Selected some");
}

function submitfunction() {
    var x = document.getElementById("fname").value;
    alert("You submitted a form  " + x);
}