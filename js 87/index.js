var mywindow;
function openwindow() {
    window.open("", "", "width=500px,height=200px,left=500px,top=200px");
    mywindow.document.write("<p>This is My window.</p>");
}

function movewindow() {
    mywindow.moveTo(200, 200);
    mywindow.focus();
}