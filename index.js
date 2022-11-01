"use strict";
const deta = {
    mes: 'Httttte',
}
function getM() {
    return this.mes;
}
console.log(getM.call(deta));



