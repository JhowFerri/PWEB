function validar(){	
	var formPrincipal = document.forms["frmFormPrincipal"];
	var nome = formPrincipal.elements["txtNome"].value;
	var email = formPrincipal.elements["txtEmail"].value;
	var comentario = formPrincipal.elements["txtaComentario"].value;
	var primeiraVez = (formPrincipal.elements["rdbSim"].checked ? true : false);

	if(nome.length < 10){
		alert("O nome deve ter 10 caracteres ou mais.");
	} else if(!email.includes("@")){
		alert("O email precisa conter @.");
	} else if(!email.includes(".")){
		alert("O email precisa ter pelo menos um .");
	} else if(comentario.length < 20){
		alert("O comentário precisa ter pelo menos 20 caracteres.");
	} else if(primeiraVez){
		alert("Volte sempre a esta página!");
	} else {
		alert("Que bom que você voltou a visitar esta página!");
	}
}

function limpar(){
	var formPrincipal = document.forms["frmFormPrincipal"];
	formPrincipal.elements["txtNome"].value = "";
	formPrincipal.elements["txtEmail"].value = "";
	formPrincipal.elements["txtaComentario"].value = "";
	formPrincipal.elements["rdbSim"].checked = true;
}