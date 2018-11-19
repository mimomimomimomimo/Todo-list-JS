var resultat = document.querySelector(".resultat");
var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");
var btn1 = document.querySelector(".boutton");


var addition = function () {
    var a = parseInt(input1.value);
    var b = +input2.value;
    var resultata = a + b;
    resultat.textContent = resultata;
}

btn1.addEventListener("click", addition);