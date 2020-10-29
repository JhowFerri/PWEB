function maximizaTexto(){
	let checkbox1 = document.getElementById('chk1');
	let checkbox2 = document.getElementById('chk2');
	let txt = document.getElementById('txt');

	if(checkbox1.checked) {
    	txt.value = txt.value.toUpperCase();
    	checkbox2.checked = false;
	} 
}

function minimizaTexto(){
	let checkbox1 = document.getElementById('chk1');
	let checkbox2 = document.getElementById('chk2');
	let txt = document.getElementById('txt');

	if(checkbox2.checked) {
    	txt.value = txt.value.toLowerCase();
    	checkbox1.checked = false;
	} 
}
