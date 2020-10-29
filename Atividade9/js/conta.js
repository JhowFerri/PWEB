class Conta{
	setNomeCorrentista(nomeCorrentista){
		this.nomeCorrentista = nomeCorrentista;
	}

	getNomeCorrentista(){
		return this.nomeCorrentista;
	}
	
	setBanco(banco){
		this.banco = banco;
	}

	getBanco(){
		return this.banco;
	}

	setNumeroDaConta(numeroDaConta){
		this.numeroDaConta = numeroDaConta;
	}

	getNumeroDaConta(){
		return this.numeroDaConta;
	}

	setSaldo(saldo){
		this.saldo = saldo;
	}

	getSaldo(){
		return this.saldo;
	}
}

class ContaCorrente extends Conta{
	setSaldoEspecial(saldoEspecial){
		this.saldoEspecial = saldoEspecial;
	}

	getSaldoEspecial(){
		return this.saldoEspecial;
	}

	imprimeContaCorrente(){
		return "CONTA CORRENTE<br>"
			+ "Nome: " + this.nomeCorrentista + "<br>" 
			+ "Banco: " + this.banco + "<br>" 
			+ "Número da Conta: " + this.numeroDaConta + "<br>" 
			+ "Saldo: R$" + this.saldo + "<br>" 
			+ "Saldo Especial: R$" + this.saldoEspecial + "<br>";
	}
}

class ContaPoupanca extends Conta{
	setJuros(juros){
		this.juros = juros;
	}

	getJuros(){
		return this.juros;
	}

	setDataVencimento(dataVencimento){
		this.dataVencimento = dataVencimento;
	}

	getDataVencimento(){
		return this.dataVencimento;
	}

	imprimeContaPoupanca(){
	return "CONTA POUPANÇA<br>"
		+ "Nome: " + this.nomeCorrentista + "<br>" 
		+ "Banco: " + this.banco + "<br>" 
		+ "Número da Conta: " + this.numeroDaConta + "<br>" 
		+ "Saldo: R$" + this.saldo + "<br>" 
		+ "Juros: " + this.juros + "% ao mês<br>"
		+ "Data Vencimento: " + this.dataVencimento + "<br>";
	}
}

var contaCorrente = new ContaCorrente();
contaCorrente.setNomeCorrentista("Jacinto Penna");
contaCorrente.setBanco("Da Praça")
contaCorrente.setNumeroDaConta("1111111111");
contaCorrente.setSaldo(2000);
contaCorrente.setSaldoEspecial(5000);

var contaPoupanca = new ContaPoupanca();
contaPoupanca.setNomeCorrentista("Amanda Carta");
contaPoupanca.setBanco("Da Praça")
contaPoupanca.setNumeroDaConta("1111111112");
contaPoupanca.setSaldo(5000);
contaPoupanca.setJuros(0.5);
contaPoupanca.setDataVencimento("20/10/2021");

document.getElementById("contaCorrente").innerHTML = contaCorrente.imprimeContaCorrente();
document.getElementById("contaPoupanca").innerHTML = contaPoupanca.imprimeContaPoupanca();
