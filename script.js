//scroller
let scroller = document.getElementById("TGK_scroller");

window.onscroll = function () {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scroller.style.display = "block";
    } else {
        scroller.style.display = "none";

    }
}
function toTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'});
}