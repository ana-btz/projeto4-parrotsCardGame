// variaveis globais

let qtd = parseInt(prompt("Com quantas cartas você deseja jogar?"));

const papagaio1 = "<img src='./media/bobrossparrot.gif'";
const papagaio2 = "<img src='./media/fiestaparrot.gif'";
const papagaio3 = "<img src='./media/metalparrot.gif'";
const papagaio4 = "<img src='./media/revertitparrot.gif'";
const papagaio5 = "<img src='./media/tripletsparrot.gif'";
const papagaio6 = "<img src='./media/unicornparrot.gif'";
const papagaio7 = "<img src='./media/mineparrot.gif'";

const gifs = [
    papagaio1, papagaio1,
    papagaio2, papagaio2,
    papagaio3, papagaio3,
    papagaio4, papagaio4,
    papagaio5, papagaio5,
    papagaio6, papagaio6,
    papagaio7, papagaio7];

let cartas = [];

// feature que pergunta ao usuario com quantas cartas ele deseja jogar

while ((qtd < 4) || (qtd > 14) || (isNaN(qtd)) || (qtd % 2 !== 0)) {

    if (isNaN(qtd)) {
        alert("Isso não é um número :)");
        qtd = parseInt(prompt("Com quantas cartas você deseja jogar?"));
    } else {
        alert("Por favor, insira um valor válido :)");
        qtd = parseInt(prompt("Com quantas cartas você deseja jogar?"));
    }

}

// funçao que gera e armazena as cartas de acordo com a quantidade de cartas informada pelo usuário

function geraCartas() {
    // pegar cada gif do array e adicionar na tela como <li> dentro da <ul>
    const deck = document.querySelector("ul");

    for (let i = 0; i < qtd; i++) {
        const carta = `
            <li class="carta" onclick="viraCarta(this)">
                <div class="face verso" >
                    <img src='./media/front 1.png'>
                </div>
                <div class="face frente">
                    ${gifs[i]}
                </div>
            </li>
            `

        cartas.push(carta);
    }

    cartas.sort(comparador);
    deck.innerHTML += cartas;
}
geraCartas();

function comparador() {
    return Math.random() - 0.5;
}


// funçao que vira a cartinha ao ser clicada

let cartaVirada = [];
let jogadas = 0;

function viraCarta(carta) {
    // carta.classList.contains(".carta")
    carta.classList.add("frente-onclick");
    carta.classList.add("verso-onclick");
    cartaVirada += carta;

    if (cartaVirada.length >= 22) {
        if (cartaVirada[0] === carta) {
            cartaVirada = [];
        } else {
            setTimeout(desviraCarta, 1000);
            cartaVirada += carta;
        }
    }

    jogadas++;

}

function desviraCarta() {
    let frente = document.querySelectorAll(".carta .frente");
    let verso = document.querySelectorAll(".carta .face")
    for (let i = 0; i < qtd; i++) {
        frente[i].classList.remove("frente-onclick");
        verso[i].classList.remove("verso-onclick");
    }
}



