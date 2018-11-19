function generate() {
    var img = document.createElement("IMG");
    img.setAttribute("src", "./public/img/chahid.png");
    document.querySelector(".divchahid").appendChild(img);
}

document.querySelector(".but").addEventListener("click", generate);