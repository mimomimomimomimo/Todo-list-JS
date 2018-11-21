let tache = document.querySelector('.tache');
let todos = [];
let btnAdd = document.querySelector('.btnadd');
let clic = document.querySelector('.clic');

let part1 = "<div class=\"forme\"><span id=\"spa\" contenteditable=\"false\">";
let part2 = "</span><button class=\"fl2 btn supprimer btn-danger\">X</button><button class=\"fl2 btn editer btn-warning\">E</button><button class=\"fl2 btn btn-success valider\">V</button></div>";


btnAdd.addEventListener('click', function () {
    tache.innerHTML += part1 + clic.value + part2;

    document.querySelector(".clic").value = "";

    todos = tache.querySelectorAll('.forme');
    for (let i = 0; i < todos.length; i++) {
        todos[i].querySelector('.btn-danger').addEventListener('click', function () {
            tache.removeChild(todos[i]);
        });
        todos[i].querySelector('.btn-success').addEventListener('click', function () {
            todos[i].classList.toggle('bg-secondary');
        });
        todos[i].querySelector('.btn-warning').addEventListener('click', function () {
            let spa = document.getElementById("spa");
            
            if (spa.contentEditable == "true") {
                spa.contentEditable = "false";
                button.innerHTML = "Enable";
            } else {
                spa.contentEditable = "true";
                button.innerHTML = "Disable";
            }
        });
    }
});










































































// let button = document.querySelector(".clic");

// function add() {
//     var btnvalider = document.createElement("button")
//     btnvalider.innerText = "V";
//     btnvalider.classList.add("fl2", "btn", "btn-success", "mt-1", "valider", "m-1")

//     var btnedit = document.createElement("button")
//     btnedit.innerText = "E";
//     btnedit.classList.add("fl2", "btn", "mt-1", "ml-1", "editer", "btn-warning", "m-1")

//     var btnsupp = document.createElement("button")
//     btnsupp.innerText = "S";
//     btnsupp.classList.add("fl2", "btn", "mt-1", "ml-1", "supprimer", "btn-danger", "m-1")

//     let task = document.querySelector(".inputt").value;
//     let div = document.createElement("div");
//     document.querySelector(".taches").appendChild(div).classList.add("forme");
//     document.querySelector(".inputt").value = "";
//     div.innerText = task;
//     div.appendChild(btnsupp)
//     div.appendChild(btnedit)
//     div.appendChild(btnvalider)
//     btnsupp.addEventListener('click', supp)
//     function supp() {
//         document.querySelector(".taches").removeChild(div)
//     }
//     btnvalider.addEventListener('click', valider)
//     function valider() {
//         document.querySelector(".forme").classList.add("bg-success");
//     }
// }

// button.addEventListener("click", add);
