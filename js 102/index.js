var target = document.querySelector("#box");
target.addEventListener('mousedown', function (e) {

    console.clear();
    //     var ctrl = e.ctrlKey;

    //     if (ctrl) {
    //         console.log("You press control key");
    //     }
    //     else {
    //         console.log("You not press control key")
    //     }
    // });

    //  var ctrl = e.shiftKey;

    //     if (ctrl) {
    //         console.log("You press control key");
    //     }
    //     else {
    //         console.log("You not press control key")
    //     }
    // });

    //  var ctrl = e.altKey;

    //     if (ctrl) {
    //         console.log("You press control key");
    //     }
    //     else {
    //         console.log("You not press control key")
    //     }
    // });

    var meta = e.metaKey;

    if (meta) {
        console.log("You press control key");
    }
    else {
        console.log("You not press control key")
    }
});
