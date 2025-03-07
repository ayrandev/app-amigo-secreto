let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo')
    let nome = input.value.trim();
    
    if (nome === '') {
        alert("Por favor, insira um nome");
        return;
    }
    amigos.push(nome);
    input.value = "";
    atualizarLista();
};

function atualizarLista() {
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    })
};

function sortearAmigo () {
    if ( amigos.length === 0) {
        alert("Nenhum amigo disponivel para sorteio.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio]
    document.getElementById('resultado').innerHTML = `Amigo sorteado: ${amigoSorteado}`;

}


