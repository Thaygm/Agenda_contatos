let contadorDeCliques = 0;
let listarContatos = document.getElementById('listarContatos');

listarContatos.onclick = function () {
    contadorDeCliques += 1;
    if (contadorDeCliques === 1) {
        listar(contatos);
    }
};

let Caio = {
    nome: "Caio",
    sobrenome: "Mendes",
    celular: "(61) 9999-9999",
    email: "caiomendes@mail.com"
};

let Catarina = {
    nome: "Catarina",
    sobrenome: "Maués",
    celular: "(61) 8888-8888",
    email: "Cat.maues@mail.com"
};

let Levi = {
    nome: "Levi",
    sobrenome: "Calenzo",
    celular: "(61) 7777-7777",
    email: "levi.calenzo@mail.com"
};

let Fernando = {
    nome: "Fernando",
    sobrenome: "Calenzo",
    celular: "(61) 7777-7777",
    email: "nando.calenzo@mail.com"
};

let contatos = [Caio, Catarina, Levi, Fernando];

function listar() {
    for (let i = 0; i < contatos.length; i++) {
        imprimir(contatos[i]);
    }
}


function imprimir(pessoa) {
    let contatos = document.getElementById('contatos');
    contatos.innerHTML += "<div class='itemLista'><b>Nome</b>:" + " " + pessoa.nome + " " + pessoa.sobrenome + " " + "<b>Celular:</b> " + " " + pessoa.celular + " " + "<b>E-mail:</b> " + pessoa.email + "</div>";
}

let adicionarContato = document.getElementById('adicionarContato');
adicionarContato.onclick = function () {
    let nome = prompt("Digite um nome");
    let sobrenome = prompt("Digite um sobrenome");
    let celular = prompt("Digite um número de celular");
    let email = prompt("Digite um endereço de e-mail");

    if (nome === null && sobrenome === null && celular === null && email === null) {
        nome = " ";
        sobrenome = " ";
        celular = " ";
        email = " ";
    }
    contatos[contatos.length] = new add(nome, sobrenome, celular, email);
    atualizarLista();
}

function atualizarLista() {
    document.getElementById('contatos').innerHTML = '';
    listar(contatos.length);
}

function add(nome, sobrenome, celular, email) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.celular = celular;
    this.email = email;
}

let removerContato = document.getElementById('removerContato');
removerContato.onclick = function () {
    let removerNome = prompt("Digite o primeiro nome do contato que deseja remover");
    for (let i = 0; i < contatos.length; i++) {
        if (removerNome === contatos[i].nome) {
            contatos.splice(contatos[i], 1);
        }
    }

    atualizarLista();
}

let limparLista = document.getElementById('limparLista');
limparLista.onclick = function () {
    location.reload(true);
}

