const VALUE = document.querySelector("#value");
const PLUSBUTTON = document.querySelector("#plus");
const MINUSBUTTON = document.querySelector("#minus");
let counter_value = 0; 

function moveCounter(direction) {
    VALUE.innerHTML = "";
    if (direction === "minus") {
        counter_value = counter_value - 1;
    }
    else {
        counter_value = counter_value + 1;
    }
    VALUE.innerHTML = `<p>${counter_value}</p>`;
}

PLUSBUTTON.addEventListener("click", ()=> {
    moveCounter("plus");
});

MINUSBUTTON.addEventListener("click", ()=> {
    moveCounter("minus");
});