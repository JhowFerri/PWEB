function escolha(opcao){
	
	document.getElementById('voce').value = opcao;

	var dado = Math.floor(Math.random() * 3);
	var computador = dado == 0 ? 'Pedra' : dado == 1 ? 'Papel' : 'Tesoura';
	document.getElementById('computador').value = computador;

	var resultado = '';
	if(opcao == computador){
		resultado = 'Empate';
	} else if(opcao == 'Pedra'){
		if(computador == 'Papel'){
			resultado = 'Derrota';
		} else {
			resultado = 'Vitória';
		}
	} else if(opcao == 'Papel'){
		if(computador == 'Pedra'){
			resultado = 'Vitória';
		} else {
			resultado = 'Derrota';
		}
	} else if(opcao == 'Tesoura'){
		if(computador == 'Pedra'){
			resultado = 'Derrota';
		} else {
			resultado = 'Vitória';
		}
	}

	document.getElementById('resultado').value = resultado;
}