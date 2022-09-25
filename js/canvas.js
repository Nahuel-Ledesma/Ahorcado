function baseDibujado(){
	tablero.lineCap = "round";
	tablero.lineJoin = "round";
	tablero.fillStyle = "#F3F5FC";
	tablero.strokeStyle = "#8A3871";
}

function dibujarCanvas(){
	tablero.lineWidth = 8;

	baseDibujado();

	tablero.fillRect(0, 0, 900, 600);
	tablero.beginPath();
	tablero.moveTo(250, 350);
	tablero.lineTo(650, 350);
	tablero.stroke();
	tablero.closePath();
}

function dibujarLinea(){
	tablero.lineWidth = 6;

	baseDibujado();

	var anchura = 750/palabraElegida.length;

	for (var i = 0; i < palabraElegida.length; i++) {
		tablero.moveTo(100 + (anchura * i), 450);
		tablero.lineTo(150 + (anchura * i), 450);
	}

	tablero.stroke();
	tablero.closePath();
}


function dibujarLetraCorrecta(index){
	tablero.font = 'bold 63px Inter';
	tablero.lineWidth = 6;
	tablero.lineCap = "round";
	tablero.lineJoin = "round";
	tablero.fillStyle = "#8A3871";

	var anchura = 750/palabraElegida.length;

	tablero.fillText(palabraElegida[index], 105 + (anchura*index), 430);
	tablero.stroke();
}

function dibujarLetraIncorrecta(letra, errorsLeft){
	tablero.font = 'bold 40px Inter';
	tablero.lineWidth = 6;
	tablero.lineCap = "round";
	tablero.lineJoin = "round";
	tablero.fillStyle = "#E85034";

	tablero.fillText(letra, 135+(40*(10-errorsLeft)), 550, 40);
}



function dibujarPalos(ix,iy,fx,fy,color) {
    tablero.beginPath();
    tablero.moveTo(ix,iy);
    tablero.lineTo(fx,fy);
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.strokeStyle = color;
    tablero.stroke();
 }
 
 function dibujarCabeza(x, y, radio,color) {
    tablero.fillStyle = "#8A3871";
    tablero.beginPath();
    tablero.arc(x, y, radio, 0, 2*Math.PI);
    tablero.stroke();
 }
 
 function dibujarHorca(){
    var color = "#8A3871";
    var ancho = 900;
    var alto = 500;

    switch(errores){
    	case 9:
    		//poste
    		dibujarPalos(ancho*0.3,alto*0.1,ancho*0.3,alto*0.7,color);
    		break;
     	case 8:
     		//travesaño
        	dibujarPalos(ancho*0.3,alto*0.1,ancho*0.5,alto*0.1,color);
          	break;
       	case 7:
          	//cuerda
          	dibujarPalos(ancho*0.5,alto*0.1,ancho*0.5,alto*0.2,color);
          	break;
       	case 6:
          	//cabeza
          	dibujarCabeza(ancho*0.5,(alto*0.2)+25,25,color);
          	break;
       	case 5:
          	//dorso
          	dibujarPalos(ancho*0.5,(alto*0.2)+50,ancho*0.5,alto*0.49,color);
          	break;
       	case 4:
          	//pierna derecha
          	dibujarPalos(ancho*0.5,alto*0.49,ancho*0.4,alto*0.65,color);
          	break;
       	case 3:
          	//pierna izquierda
          	dibujarPalos(ancho*0.5,alto*0.49,ancho*0.6,alto*0.65,color);
          	break;
       	case 2:
          	//pierna derecha
          	dibujarPalos(ancho*0.5,(alto*0.25)+50,ancho*0.4,alto*0.45,color);
          	break;
       	case 1:
          	//brazo izquierdo
          	dibujarPalos(ancho*0.5,(alto*0.25)+50,ancho*0.6,alto*0.45,color);
          	break;
    }
 }