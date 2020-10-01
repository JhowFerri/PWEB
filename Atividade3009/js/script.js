//inicializando variáveis
var list = [];
var somatoria = 0;
var media = 0;
var maiorIdade = 0;
var menorIdade = 1000;
var contPessimo = 0;
var percentOtimoBom = 0;
var contOtimoBom = 0;
var contHomem = 0;
var contMulher = 0;

//gerando valores aleatórios para simular uma pesquisa real
for(i = 0;i < 45 + 10;i++){
	var idade = Math.floor(Math.random() * 50) + 18;
	var sexo = (Math.floor(Math.random() * 100) < 50) ? 'F' : 'M';
	var opiniao = (Math.floor(Math.random() * 100) < 25) ? 4 : (Math.floor(Math.random() * 100) < 50) ? 3 : (Math.floor(Math.random() * 100) < 75) ? 2 : 1;
	var pessoa = {idade, sexo, opiniao};
	list.push(pessoa);
}

//calculando saídas
for(i = 0; i < list.length; i++){
	somatoria += list[i].idade;
	if(list[i].idade > maiorIdade){
		maiorIdade = list[i].idade;
	}
	if(list[i].idade < menorIdade){
		menorIdade = list[i].idade;
	}
	if(list[i].opiniao == 1){
		contPessimo++;
	}
	if(list[i].opiniao == 4){
		contOtimoBom++;
	}
	if(list[i].sexo == 'F'){
		contMulher++;
	} else {
		contHomem++;
	}

}

media = somatoria / list.length;
percentOtimoBom = contOtimoBom * 100 / list.length;

//saidas
document.getElementById('media').innerHTML = parseInt(media);
document.getElementById('pessoa-mais-velha').innerHTML = maiorIdade;
document.getElementById('pessoa-mais-nova').innerHTML = menorIdade;
document.getElementById('contador-pessimo').innerHTML = contPessimo;
document.getElementById('porcentagem-otimo-bom').innerHTML = parseInt(percentOtimoBom) + '%';
document.getElementById('contador-sexo').innerHTML = 'Homens: ' + contHomem + '<br>Mulheres: ' + contMulher;


