"use strict";
const deta = {
    mes: 'Httttte',
}
function getM() {
    return this.mes;
}
console.log(getM.call(deta));

function css_btn_fun () {
    document.getElementById("css-block").classList.toggle("show");
}