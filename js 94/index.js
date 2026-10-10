const target = document.querySelector("#box");
target.addEventListener("scroll", () => {
    console.clear();
    console.log("ScrollTop : " + target.scrollTop);
    console.log("ScrollLeft : " + target.scrollLeft);
});
