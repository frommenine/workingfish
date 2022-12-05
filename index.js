// "use strict";
// const deta = {
//     mes: 'Httttte',
// }
// function getM() {
//     return this.mes;
// }
// console.log(getM.call(deta));


function js2_fun() {
    document.getElementById("js2").classList.toggle("show");
}

function js3_fun() {
    document.getElementById("js3").classList.toggle("show");
}

function js4_fun() {
    document.getElementById("js4").classList.toggle("show");
}

function js5_fun() {
    document.getElementById("js5").classList.toggle("show");
}

function js6_fun() {
    document.getElementById("js6").classList.toggle("show");
}

function js7_fun() {
    document.getElementById("js7").classList.toggle("show");
}


// FIXED MENU

let = fixedMenuStart = 'menu-start';

var ID_MENU = "menu";//ИД меню
window.onload = function(){
  	document.getElementById(fixedMenuStart).classList.add("bgColor1");
window.addEventListener("scroll",function(){
	var element = document.getElementById(ID_MENU);
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;//текущая позиция скролла
  if(scrollTop == 0){
  	
  	document.getElementById(ID_MENU).classList.remove("bgColor2");
  	document.getElementById(ID_MENU).classList.add("bgColor1");
  }
  else{
  	document.getElementById(ID_MENU).classList.remove("bgColor1");
  	document.getElementById(ID_MENU).classList.add("bgColor2");
    }
});
}

