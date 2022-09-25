var menu = document.querySelector(".desaparecer");
var juego = document.querySelector(".aparece-ahorcado");
var pantallaAgregar = document.querySelector(".aparece-agregar-palabra");

var tablero = document.getElementById("trazo").getContext("2d");
var listaPalabras = ["JAVASCRIPT", "PERRO", "ALABAR", "ESPADA", "TELEVISION"];
var palabraElegida = "";

var letrasUsadas = [];
var errores = 9;

/********** Código para elegir una palabra ********/
function seleccionarPalabra(){
	var eleccion = "";

	eleccion = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
	palabraElegida = eleccion.toUpperCase();
	console.log(palabraElegida);
}


/********** Código para leer letras del teclado **********/
function comprobarLetra(key,lista){
	//var estado = false;
	if(key.charCodeAt() >= 65 || key.charCodeAt() <= 90){
		console.log(lista.includes(key));
		if(!lista.includes(key)){
			lista.push(key);
			return false;
		}else{
			console.log(lista);
			return true;
		}
	}
}


function anhadirError(){
	errores -= 1;
}


/********** Código para que desaparezca el menú principal **********/
function iniciarJuego(){
	//Setea el número posibles de errores y aciertos 
	errores = 9;
	aciertos = 0;
	letrasUsadas = [];

	//Setea los displays de los menús
	menu.style.display = "none";
	pantallaAgregar.style.display = "none";
	juego.style.display = "inline";


	//Selecciona la palabra
	seleccionarPalabra();

	//Dibuja el canvas
	dibujarCanvas();
	dibujarLinea();

	document.onkeydown = (e) => {
		var letra = e.key.toUpperCase();

		if(errores != 0){
			if(!comprobarLetra(letra, letrasUsadas)){
				if(palabraElegida.includes(letra)){
					for (var i = 0; i < palabraElegida.length; i++){
						if(palabraElegida[i] === letra){
							dibujarLetraCorrecta(i);
						
							aciertos += 1;
							if(aciertos == palabraElegida.length){
								alert("Has Ganado!");
								errores = 0;
							}
						}
					}	
				}else{
					dibujarHorca();
					anhadirError();
					dibujarLetraIncorrecta(letra,errores);
					if(errores == 0){
						alert("Has Perdido");
					}
				}
			}
		}
	}
}


/********** Código para que aparezca el menú para agregar una palabra **********/
function agregarPalabra(){
	pantallaAgregar.style.display = "contents";
	juego.style.display = "none";
	menu.style.display = "none";
}


/********** Código para volver al menú principal **********/
function volverMenu(){
	pantallaAgregar.style.display = "none";
	juego.style.display = "none";
	menu.style.display = "inline"
}