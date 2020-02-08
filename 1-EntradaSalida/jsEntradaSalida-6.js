/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var num1;
    var num2;
    var mensaje;
    var numero1;
    var numer2;
    var resultado;
        num1 = document.getElementById("numeroUno").value;
        num2 = document.getElementById("numeroDos").value;

            numero1 = parseInt(num1);
            numero2 = parseInt(num2);

                resultado=(numero1+numero2)    

                    mensaje = "la suma es "+(resultado);

                        alert(mensaje);
}

