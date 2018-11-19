let button = document.querySelector(".clic");

function add() {
    var btnvalider = document.createElement("button")
    btnvalider.innerText = "VALIDER";
    btnvalider.classList.add("fl2", "btn", "btn-success", "mt-1", "valider")

    var btnedit = document.createElement("button")
    btnedit.innerText = "EDITER";
    btnedit.classList.add("fl2", "btn", "mt-1", "ml-1", "editer", "btn-warning")

    var btnsupp = document.createElement("button")
    btnsupp.innerText = "SUPPRIMER";
    btnsupp.classList.add("fl2", "btn", "mt-1", "ml-1", "supprimer", "btn-danger")

    let task = document.querySelector(".inputt").value;
    let div = document.createElement("div");
    document.querySelector(".taches").appendChild(div).classList.add("forme");
    document.querySelector(".inputt").value = "";
    div.innerText = task;
    div.appendChild(btnsupp)
    div.appendChild(btnedit)
    div.appendChild(btnvalider)
    btnsupp.addEventListener('click', supp)
    function supp(){
        document.querySelector(".taches").removeChild(div)
    }
}

button.addEventListener("click", add);
