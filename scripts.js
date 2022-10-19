// variaveis globais
let qtd = parseInt(prompt("Com quantas cartas você deseja jogar?"));


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

console.log(qtd);
typeof (qtd);


// feature que gera e armazena as cartas de acordo com a quantidade de cartas informada pelo usuário
// ...


// funçao que vira a carta ao ser clicada
function virarCarta() {
    const frente = document.querySelector(".frente");
    const verso = document.querySelector(".verso");

    frente.classList.add("frente-onclick");
    verso.classList.add("verso-onclick");
}