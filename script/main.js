const links = document.querySelectorAll(".link");
const button = document.querySelector("button");
const hamburger = document.querySelector("#hamburger");
let visible = false;

button.addEventListener("click", event => {
    event.preventDefault();
    if(visible) hamburger.style.display = "none";
    else hamburger.style.display = "block";
    visible = !visible;
});

links.forEach(link => {
    link.addEventListener("click", event => {
        hamburger.style.display = "none";
        visible = false;
    });
});