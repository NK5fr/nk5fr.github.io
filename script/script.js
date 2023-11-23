function showMenu() {
    let visibility = document.getElementById("hamburger").style.display;
    if(visibility == "none") {
        document.getElementById("hamburger").style.display = "block";
    } else {
        document.getElementById("hamburger").style.display = "none";
    }
}