function mostrar()
{

	var contador=0;
	var acumulador=0;
	var intentos=0;

	while(intentos<5){

		contador=prompt("ingrese un numero");
		
		contador=parseInt(contador);

		acumulador=acumulador+contador

		intentos=intentos+1
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN