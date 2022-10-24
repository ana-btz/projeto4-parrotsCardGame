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
            <li class="carta" class="${i}" onclick="viraCarta()">
                <div class="face frente" >
                    <img src='./media/front 1.png'>
                </div>
                <div class="face verso">
                    ${gifs[i]}
                </div>
            </li>`

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

function viraCarta() {
    const frente = document.querySelector(".frente");
    const verso = document.querySelector(".verso");

    for (let i = 0; i < qtd; i++) {
        frente.classList.add("frente-onclick");
        verso.classList.add("verso-onclick");
    }

    // setTimeout(desviraCarta, 1000);
}

// function viraCartaVerso() {    

//     for (let i = 0; i < qtd; i++) {
//         const verso = document.querySelector(`.$[i] .verso"`);
//         verso.classList.add("verso-onclick");
//     }

// }

// function desviraCarta() {
//     frente.classList.remove("frente-onclick");
//     verso.classList.remove("verso-onclick");
// }

