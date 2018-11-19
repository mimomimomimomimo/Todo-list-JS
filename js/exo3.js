function changer() {
    var v = document.querySelector("input").value;
    var p = document.querySelector("h3 span").innerText = v;
}
let btn = document.querySelector(".btn");
btn.addEventListener("click", changer);
