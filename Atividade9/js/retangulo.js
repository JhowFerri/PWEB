class Retangulo{
	constructor(x, y){
		this.base = x;
		this.altura = y;
	}

	calcularArea(){
		return this.base * this.altura;
	}
}


var base = parseInt(prompt("Digite a base do retangulo:"));
var altura = parseInt(prompt("Digite a altura do retangulo:"));

var ret1 = new Retangulo(base, altura);

alert("A área do retângulo é: " + ret1.calcularArea());
