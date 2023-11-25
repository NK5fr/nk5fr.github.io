const link = document.getElementsByClassName("link");

function hamburger() {
    let visibility = document.getElementById("hamburger").style.display;
    if(visibility == "none") {
        document.getElementById("hamburger").style.display = "block";
    } else {
        document.getElementById("hamburger").style.display = "none";
    }
}

function hideMenu() {
    document.getElementById("hamburger").style.display = "none";
}

for(let l of link) {

    l.addEventListener("click", function() {
        hideMenu();
    });

}