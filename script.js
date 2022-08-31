const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".closeMenu");
const nav = document.querySelector(".hero ul");
const navLink = document.querySelectorAll(".hero ul li");
const header = document.querySelector("header");

menu.addEventListener("click", () => {
    nav.style.display = "block";
})

closeMenu.addEventListener("click", () => {
    nav.style.display = "none";
})

window.onscroll = () => {
    if(window.scrollY > 300){
        header.style.backgroundColor = "rgba(0,0,0,.9)";
    }
    else{
        header.style.backgroundColor = "transparent"
    }
}

navLink.forEach(element => {
    element.addEventListener("click", () => {
        nav.style.display = "none";
    })
});