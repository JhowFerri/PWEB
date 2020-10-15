n1 = parseInt(prompt("Digite um número:"));
n2 = parseInt(prompt("Digite um número:"));
n3 = parseInt(prompt("Digite um número:"));

n4 = isIgual([n1, n2, n3]);

if(!n4) {
	alert("O número " + retornaMaior([n1, n2, n3]) + " é o maior!");
} else {
	alert("O número " + n4 + " possui uma igualdade.");
}

function retornaMaior(numeros){
	var aux = 0;
	for(i = 0; i < numeros.length; i++){
		if(numeros[i] > aux){
			aux = numeros[i];
		}
	}
	return aux;
}

function isIgual(numeros){
	for(i = 0;i < numeros.length; i++){
		for(j = 0; j < numeros.length; j++){
			if(i != j){
				if(numeros[i] == numeros[j]){
					return numeros[i];
				}
			}
		}
	}
	return false;
}
	