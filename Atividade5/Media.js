var nome = prompt("Digite o nome do aluno:");
var nota1 = parseFloat(prompt("Digite a nota 1:"));
var nota2 = parseFloat(prompt("Digite a nota 2:"));
var nota3 = parseFloat(prompt("Digite a nota 3:"));

var media = (nota1 + nota2 + nota3) / 3;

alert("A média do aluno " + nome + " é " + media);