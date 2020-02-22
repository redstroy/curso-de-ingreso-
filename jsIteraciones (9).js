function mostrar()
{
	var num
	var contador=0;
	var numMax
	var numMin
	var continuar
	// declarar variables
	
	do{
		
		num=parseInt(prompt("ingresar un numero"));

		if(contador==0){

			numMax=num;
			numMin=num;
		}
		else

			if(numMax<num){

				numMax=num;
			}
			if(numMin>num)

			numMin=num

		continuar=prompt("desea seguir ingresando?")	

		contador++;

	}while(continuar=="si")

	document.getElementById("maximo").value=numMax;
	document.getElementById("minimo").value=numMin;





}//FIN DE LA FUNCIÓN