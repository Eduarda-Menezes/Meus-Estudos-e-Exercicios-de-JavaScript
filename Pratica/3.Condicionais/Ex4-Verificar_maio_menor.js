//Programa para praticar condições if e else e operações
/*Peça dois números e informe qual deles é o maior.

Caso sejam iguais:

Os dois números são iguais. */

let num_1 = Number(prompt("Digite o 1° numero: "));
let num_2 = Number(prompt("Digite o 2° numero: "));

if (num_1 === num_2){
  alert(`Os numeros ${num_1} e ${num_2} são iguais!`)
} else if (num_1 > num_2){
  alert(`O numero ${num_1} é o maior que ${num_2}`)
} else if(num_2 > num_1){
  alert(`O numero ${num_2} é o maior que ${num_1}`)
}