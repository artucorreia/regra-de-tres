var botao = window.document.getElementById('botao');
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
    calculo();
    console.log(numero[0])
    console.log(numero[3])
}


// Cálculo
let termoUm = false;
let posX = 0;
let primeiraParte = 0;
let segundaParte = 0;
let resp = 0;
function calculo() {
    for (let i = 0; i <= 3; i++) {
        if (numero[i] == 0) {
            posX = i
        }
    }
    if ((posX == 0) || (posX == 3)) {
        termoUm = true;
        if (posX == 0) {
            primeiraParte = numero[3];
        } else {
            primeiraParte = numero[0];
        }
    } else {
        primeiraParte = numero[0] * numero[3];
    }
    if ((posX == 1) || (posX == 2)) {
        termoUm = false;
        if (posX == 1) {
            segundaParte = numero[2]; 
        } else {
            segundaParte = numero[1];
        }
    } else {
        segundaParte = numero[1] * numero[2];
    }
    if (termoUm == true) {
        alert(primeiraParte + 'x = ' + segundaParte);
        resp = segundaParte / primeiraParte;
        alert(resp);
    } else {
        alert(primeiraParte + ' = ' + segundaParte + 'x');
        resp = primeiraParte / segundaParte;
        alert(resp);
    }
    termoUm = false;
}