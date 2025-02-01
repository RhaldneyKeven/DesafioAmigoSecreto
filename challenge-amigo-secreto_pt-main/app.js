//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []


function sortearAmigo() {
    var indexSorteado = obterNumeroAleatorio(amigos.length - 1);
    var amigo = amigos[indexSorteado];
    console.log(amigo);
    document.getElementById("resultado").innerHTML = amigo;
}

function obterNumeroAleatorio(numeroMaximo) {
    return Math.floor(Math.random() * numeroMaximo);
}

function adicionarAmigo() {
    let amigoInput = document.getElementById("amigo");
    let amigo = amigoInput.value;
    if (!amigo && amigo == '') {
        alert("Informe o nome do amigo");
        return;
    }
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    let listaAmigos = document.getElementById("listaAmigos");
    let item = document.createElement("li");
    item.textContent = amigo;
    listaAmigos.appendChild(item);
    console.log(amigos);
}

