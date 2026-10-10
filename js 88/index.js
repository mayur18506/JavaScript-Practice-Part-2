var mywindow;
function openwindow() {
    mywindow = window.open("", "", "width=500px,height=200px,left=500px,top=200px");
    mywindow.document.write("<p>This is My window.</p>");
}

// function resizewindow() {
//     mywindow.resizeTo(200, 200);
//     mywindow.focus();
// }

function resizewindow() {
    mywindow.resizeBy(200, 200);
    mywindow.focus();
}