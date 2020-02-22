function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var num=0

    do{

		num=prompt("ingrese un numero")

		num=parseInt(num)

			acumulador=acumulador+num;

			contador=contador+1;

			contador=parseInt(contador)

		respuesta = prompt("desea continuar?")
	} while(respuesta=="si");



	

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN