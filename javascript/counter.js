const VALUE = document.querySelector("#value");
const PLUSBUTTON = document.querySelector("#plus");
const MINUSBUTTON = document.querySelector("#minus");
let counter_value = 0; 
VALUE.innerHTML = `<p>${counter_value}</p>`;

checkCookie();

function moveCounter(direction) {
    if (direction === "minus") {
        counter_value = counter_value - 1;
    }
    else {
        counter_value = counter_value + 1;
    }
    VALUE.innerHTML = `<p>${counter_value}</p>`;
    setCookie("count", counter_value, 365);
}

PLUSBUTTON.addEventListener("click", ()=> {
    moveCounter("plus");
});

MINUSBUTTON.addEventListener("click", ()=> {
    moveCounter("minus");
});

// 
function setCookie(cname, cvalue, exdays) {
    const d = new Date ();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires"+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
    let count = getCookie("count");
    if (count != "") {
        counter_value = Number(count);
        VALUE.innerHTML = `<p>${counter_value}</p>`;
    } 
    else {
        counter_value = 0;
    }
}
;