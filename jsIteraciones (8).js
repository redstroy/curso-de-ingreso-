function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var num = 0
	var respuesta='si';
	
	do{

		num=prompt("ingrese un numero")
		
		num=parseInt(num)

		if(num>0)

			positivo=positivo+num;

		if(num<0)

			negativo=negativo*num

		respuesta = prompt("desea continuar?")
	} while(respuesta=="si");


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN