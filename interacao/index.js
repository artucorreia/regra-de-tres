let botao = window.document.getElementById('botao');
botao.addEventListener('click', setarValores);

// observação
function obs() {
    window.alert('OBS.: O local da icógnita deve permanecer em branco ou nulo ( 0 )')
}

// setar Valores
let valorUm = window.document.getElementById('primeiro');
let valorDois = window.document.getElementById('segundo');
let valorTres = window.document.getElementById('terceiro');
let valorQuatro = window.document.getElementById('quarto');
let numero = [0, 0, 0, 0];
function setarValores() {
    resetar();
    numero[0] = Number(valorUm.value); //8
    numero[1] = Number(valorDois.value); // 8
    numero[2] = Number(valorTres.value); // 0
    numero[3] = Number(valorQuatro.value); // 8
    membros();
}


// cálculo dos membros separadamente
let membroX = false;
let posX = -1;
let membroUm = 0;
let membroDois = 0;
let resp = 0;
function membros() {
    verificar();
    limparInputs();
    if (liberado != false) {
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
}

// limpar inputs
function limparInputs() {
    valorUm.value = '';
    valorDois.value = '';
    valorTres.value = '';
    valorQuatro.value = '';
}

// validação
let liberado = true;
function verificar() {
    for (let i = 0; i <= 3; i++) {
        if ((numero[i] == 0) && (posX == -1)) {
            posX = i;
            liberado = true;
        } else if ((numero[i] == 0) && (posX != -1) && (liberado == true)) {
            window.alert('Verifique os dados e tente novamente');
            liberado = false;
        }
    }
    if (posX == -1) {
        window.alert('Verifique os dados e tente novamente');
        liberado = false;
    }
}

// cálculo da reposta
function resposta() {
    if (membroX == true) {
        resp = membroDois / membroUm;
    } else {
        resp = membroUm / membroDois;
    }
    exibir();
}

// exibição calculo
let area = window.document.querySelector('div#area');
let subtitulo = window.document.querySelector('h2#subtitulo');
function exibir() {
    subtitulo.innerHTML = `Cálculos`;
    if (membroX == true) {
        area.innerHTML = `<p>${membroUm}x = ${numero[1]} * ${numero[2]}</p>`;
        area.innerHTML += `<p>${membroUm}x = ${membroDois}</p>`;
        area.innerHTML += `<p>x = ${membroDois} / ${membroUm}</p>`
    } else {
        area.innerHTML = `<p>${numero[0]} * ${numero[3]}  = ${membroDois}x</p>`;
        area.innerHTML += `<p>${membroUm} = ${membroDois}x</p>`;
        area.innerHTML += `<p>${membroUm} / ${membroDois} = x</p>`;
        area.innerHTML += `<p>${resp} = x</p>`;
    }
    area.innerHTML += `<p>x = ${resp}</p>`;
    if ((resp >= 1000) || (resp <= 0.001)) {
        area.innerHTML += '<p>ou</p>'
        area.innerHTML += notCient(resp);
    }
}

// conversor para notação científica
let exp = 0;
function notCient(r) {
    if (r < 1) {
        while (r < 1) {
            r *= 10;
            exp--;
        }
    } else {
        while (r > 10) {
            r /= 10;
            exp++;
        }
    }
    if (r != 10) {
        return `<p>x = ${r} * 10<sup>${exp}</sup></p>`;
    } else {
        exp++;
        return `<p>x = 10<sup>${exp}</sup></p>`;
    }
}

// resetar valores
function resetar() {
    liberado = false;
    membroX = false;
    posX = -1;
    membroUm = 0;
    membroDois = 0;
    resp = 0;
    numero = [0, 0, 0, 0];
    subtitulo.innerHTML = ``;
    area.innerHTML = `<em>CÁLCULOS</em>`;
    exp = 0;
}