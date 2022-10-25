var botao = window.document.getElementById('botao');
botao.addEventListener('click', setarValores);
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
}

function calculo(numUm, numQuatro) {
    for (let i = 0; i <= 3; i++) {
        if (numero[i]) {

        }
        
    }
}