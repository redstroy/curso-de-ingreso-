/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var nombre;
    var edad;
    var mensaje;
    nombre = document.getElementById("elNombre").value;
    edad = document.getElementById("laEdad").value;
        
    mensaje = "te llamas "+nombre+" y tenes "+edad;
        alert(mensaje);
}

