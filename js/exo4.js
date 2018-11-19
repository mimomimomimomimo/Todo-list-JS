var count = 0;
function swap() {
    document.querySelector(".carre1").classList.toggle("d-none");
    document.querySelector('.carre2').classList.toggle("d-none");
    count += 1;
    document.querySelector(".lala").innerText = count;
}
document.querySelector('.button').addEventListener("click", swap);

function reset() {
    count = 0;
    document.querySelector(".lala").innerText = 0;
}
document.querySelector(".button2").addEventListener("click", reset);             
