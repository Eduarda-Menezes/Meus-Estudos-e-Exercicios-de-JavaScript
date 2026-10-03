//Programa para praticar entrada de dados e operações matematicas
/* Peça três notas ao usuário e calcule a média. */

let nota_1 = Number(prompt("Digite sua 1° nota: "));
let nota_2 = Number(prompt("Digite sua 2° nota: "));
let nota_3 = Number(prompt("Digite sua 3° nota: "));
let media = (nota_1 + nota_2 + nota_3)/3;

alert(`Sua média é ${Number(media.toFixed(2))}`);
//Dica o Number(nome_da_variavel.toFixed(numero_casas_decimais)) Dlimita quantas casas decimais serão mostradas