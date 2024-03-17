
let hambuger = document.querySelector(".HamBurger");
let menu = document.querySelector(".Nav-ul");

let a0Element = document.getElementById("0");
let a1Element = document.getElementById("1");
let a2Element = document.getElementById("2");
let a3Element = document.getElementById("3");
let a4Element = document.getElementById("4");


hambuger.onclick = function () {
    hambuger.classList.toggle("Active");
    menu.classList.toggle("Active");
}

window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

a0Element.onclick = function () {
    hambuger.classList.remove("Active");
    menu.classList.remove("Active");

}

a1Element.onclick = function () {
    hambuger.classList.remove("Active");
    menu.classList.remove("Active");

}
a2Element.onclick = function () {
    hambuger.classList.remove("Active");
    menu.classList.remove("Active");

}
a3Element.onclick = function () {
    hambuger.classList.remove("Active");
    menu.classList.remove("Active");

}
a4Element.onclick = function () {
    hambuger.classList.remove("Active");
    menu.classList.remove("Active");

}