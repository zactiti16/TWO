/// Declaração de variáveis
//var numero = 1;
//var decimal = 1.5;
//var texto = '';
//var texto = 2;

let nome = '';
const pi = 3.1415;
console.log(nome);
console.log("Hoje não");

// Declarar uma variável para representar os elementos do jogo
let letra = 'X'; // X ou O

function joga(casa) {
    let celulaClicada = document.getElementById(casa).innerHTML;

    if(celulaClicada == 'X' || celulaClicada == 'O') {
        alert('Esta célula já tem um valor!');
    } else {
    document.getElementById(casa).innerHTML = letra;
    if(letra == 'X') {
        letra = 'O'
    } else {
        letra = 'X';
    }
  }
}
