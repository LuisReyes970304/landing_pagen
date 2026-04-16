const burger = document.querySelector(".burger");
const burger_nav = document.querySelector(".burger_nav");

burger.addEventListener("click", (e) => {
    e.stopPropagation();
    burger_nav.classList.toggle("show");
});

burger_nav.addEventListener("click", (e) => {
    e.stopPropagation();
});

window.addEventListener("click", () => {
    burger_nav.classList.remove("show");
});


// Below is the video effect

const capaArriba = document.querySelector(".capa_arriba");
const imagen = capaArriba.querySelector("img");
const videoOculto = capaArriba.querySelector("iframe");

imagen.ATTRIBUTE_NODE.addEventListener("click", () => {
    imagen.style.display = "none";
    videoOculto.style.display = "flex";
});