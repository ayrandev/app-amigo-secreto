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

/*let amigos = [];

function adicionarAmigo() {
    let inputNome = document.getElementById("nomeAmigo");
    let inputEmail = document.getElementById("emailAmigo");
    let nome = inputNome.value.trim();
    let email = inputEmail.value.trim();
    
    if (nome === "" || email === "") {
        alert("Por favor, insira um nome e um e-mail válido.");
        return;
    }
    
    amigos.push({ nome, email });
    inputNome.value = "";
    inputEmail.value = "";
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = `${amigo.nome} - ${amigo.email}`;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo disponível para sorteio.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    document.getElementById("resultadoSorteio").innerHTML = `Amigo sorteado: ${amigoSorteado.nome}`;
    enviarEmail(amigoSorteado.nome, amigoSorteado.email);
}

function enviarEmail(nome, email) {
    if (!window.emailjs) {
        alert("EmailJS não está carregado corretamente.");
        return;
    }
    
    emailjs.send("seu_servico_id", "seu_template_id", {
        to_name: nome,
        to_email: email,
        message: `Parabéns, ${nome}! Você foi sorteado!`
    }).then(
        function(response) {
            alert("Email enviado com sucesso para " + email);
        }, 
        function(error) {
            alert("Erro ao enviar email: " + JSON.stringify(error));
        }
    );
}*/

