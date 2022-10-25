let botao = window.document.getElementById('botao');
botao.addEventListener('click', setarValores);

// Setar Valores
let valorUm = window.document.getElementById('primeiro');
let valorDois = window.document.getElementById('segundo');
let valorTres = window.document.getElementById('terceiro');
let valorQuatro = window.document.getElementById('quarto');
let numero = [0, 0, 0, 0]
function setarValores() {
    numero[0] = Number(valorUm.value);
    numero[1] = Number(valorDois.value);
    numero[2] = Number(valorTres.value);
    numero[3] = Number(valorQuatro.value); 
    membros();
}


// Cálculo
let membroX = false;
let posX = 0;
let membroUm = 0;
let membroDois = 0;
let resp = 0;
function membros() {
    for (let i = 0; i <= 3; i++) {
        if (numero[i] == 0) {
            posX = i;
        }
    }
    if ((posX == 0) || (posX == 3)) {
        membroX = true;
        if (posX == 0) {
            membroUm = numero[3];
        } else {
            membroUm = numero[0];
        }
    } else {
        membroUm = numero[0] * numero[3];
    }
    if ((posX == 1) || (posX == 2)) {
        membroX = false;
        if (posX == 1) {
            membroDois = numero[2]; 
        } else {
            membroDois = numero[1];
        }
    } else {
        membroDois = numero[1] * numero[2];
    }
    resposta();
    membroX = false;
}

function resposta() {
    if (membroX == true) {
        alert(membroUm + 'x = ' + membroDois);
        resp = membroDois / membroUm;
        alert(resp);
    } else {
        alert(membroUm + ' = ' + membroDois + 'x');
        resp = membroUm / membroDois;
        alert(resp);
    }
}