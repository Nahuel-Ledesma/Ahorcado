/********** Código para agregar una nueva palabra al juego **********/
var nuevaPalabra = document.querySelector("#palabra-nueva");
var numeroPalabras = listaPalabras.length;


function vaciar(){
	nuevaPalabra.placeholder = "";
}

function guardarPalabra(){
	if(nuevaPalabra.value != "") {
		if(nuevaPalabra.value.length > 12){
			cuadroAlerta("Palabra muy larga. Por favor ingrese otra pelabra", "rojo");
			nuevaPalabra.value = ""
			nuevaPalabra.focus();	
		}else{
			listaPalabras.push(nuevaPalabra.value.toUpperCase());
	        nuevaPalabra.value = "";
	        nuevaPalabra.focus();
	        cuadroAlerta("Guardado (" + (numeroPalabras + 1) + "): " + listaPalabras[numeroPalabras], "verde");     
	        numeroPalabras += 1;
	    }
    }else{
        cuadroAlerta("Ingrese una palabra", "rojo");
        nuevaPalabra.focus();
    }	
}

function cuadroAlerta(contenido, clase) {
    var mensaje = document.querySelector(".alerta");
    var texto = document.createElement('p');

    texto.classList.add(clase);
    texto.innerHTML = contenido;

    mensaje.appendChild(texto);

    setTimeout(activacion, 1500);
    function activacion() {
        texto.classList.add("active");
    }

    setTimeout(remover, 3000);
    function remover() {
        mensaje.removeChild(texto);
    }
}

