//Programa para praticar condições if e else e operações
/*Peça a média de um aluno.

Regras:

média maior ou igual a 7 → aprovado
média entre 5 e 6.9 → recuperação
média menor que 5 → reprovado */

let media = Number(prompt("Digite sua media: "));

if (media >= 7){
  alert("Aprovado!")
} else if (6.9 > media && media > 5){
  alert("Recuperação!")
} else{
  alert("Reprovado")
}