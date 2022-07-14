var escreverTarefa = document.getElementById("caixinha");
var botao = document.getElementById("botao");
var listaDeTarefas = document.getElementById("listadetarefas");

function lista() {
    var valor = escreverTarefa.value;

    if(valor === "") {
        return;
    }

    var listinha = document.createElement("li");

    var caixinha = document.createElement("input");
    caixinha.classList.add("caixinha");
    caixinha.type = "checkbox";


    var texto = document.createElement("h4");
    texto.classList.add("h4");
    texto.textContent = valor;

    var apagar = document.createElement("span");
    apagar.classList.add("apagar");
    apagar.innerHTML = " x ";

    listinha.appendChild(caixinha);
    listinha.appendChild(texto);
    listinha.appendChild(apagar);
    listaDeTarefas.appendChild(listinha);

    escreverTarefa.value = "";
}

function apagar(removeElement) {
    removeElement.parentElement.remove();
}

listaDeTarefas.addEventListener("click", function (event) {
    switch (event.target.tagName) {
        case "SPAN":
            apagar(event.target);
            break;    
    }
});

botao.addEventListener("click", lista);

escreverTarefa.addEventListener("keypress", function(apertarenter){
    if(apertarenter.key === "Enter"){
        lista();
    }
})