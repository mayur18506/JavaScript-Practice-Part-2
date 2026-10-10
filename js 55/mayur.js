var a = [10, 23, 8, 20];

document.write(a + "<br><br>");

var b = a.map(checkadult);
document.write(b + "<br><br>");

function checkadult(x) {
    return x * 10;
}

