//Programa para praticar prompt() e conversão de valores.
/*Peça ao usuário o ano de nascimento e calcule sua idade.
*/

let ano_nasc = Number(prompt("Digite seu ano de nascimento:")); // Foi necessario converter a entrada para um numero pois o prompt recebe srtings
let idade = 2026 - ano_nasc;
alert(`Você tem aproximadamente ${idade} anos.`);

