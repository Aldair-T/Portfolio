const slider = document.querySelector("#slider");
let sliderSeccion = document.querySelectorAll(".slider_seccion");
let sliderSeccionLast = sliderSeccion[sliderSeccion.length-1];

const btnIzq = document.querySelector("#btn-izq");
const btnDer = document.querySelector("#btn-der");

slider.insertAdjacentElement('afterbegin', sliderSeccionLast);

function moverDer() {
    let sliderSeccionFirst = document.querySelectorAll(".slider_seccion")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s"
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSeccionFirst);
        slider.style.marginLeft = "-100%"
    }, 500);
}

function moverIzq() {
    let sliderSeccion = document.querySelectorAll(".slider_seccion");
    let sliderSeccionLast = sliderSeccion[sliderSeccion.length-1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s"
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSeccionLast);
        slider.style.marginLeft = "-100%"
    }, 500);
}

btnIzq.addEventListener('click', function(){
    moverDer();
})

btnDer.addEventListener('click', function(){
    moverIzq();
})

setInterval(function(){
    moverDer();
}, 5000);