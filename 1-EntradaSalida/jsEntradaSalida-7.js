/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var num1;
    var num2;
    var numero1;
    var numero2;
    var resultado;
    var mensaje;

        num1 = document.getElementById("numeroUno").value;
        num2 = document.getElementById("numeroDos").value;

            numero1=parseInt(num1);
            numero2=parseInt(num2);

                resultado=(numero1+numero2)

                    mensaje="la suma es "+resultado;

                        alert(mensaje);
}

function restar()
{
    var num1;
    var num2;
    var numero1;
    var numero2;
    var resultado;
    var mensaje;

        num1 = document.getElementById("numeroUno").value;
        num2 = document.getElementById("numeroDos").value;

            numero1=parseInt(num1);
            numero2=parseInt(num2);

                resultado=(numero1-numero2)

                    mensaje="la resta es "+resultado;

                        alert(mensaje);	
}

function multiplicar()
{ 
    var num1;
    var num2;
    var numero1;
    var numero2;
    var resultado;
    var mensaje;

        num1 = document.getElementById("numeroUno").value;
        num2 = document.getElementById("numeroDos").value;

            numero1=parseInt(num1);
            numero2=parseInt(num2);

                resultado=(numero1*numero2)

                    mensaje="la multiplicacion es "+resultado;

                        alert(mensaje);	
}

function dividir()
{
    var num1;
    var num2;
    var numero1;
    var numero2;
    var resultado;
    var mensaje;

        num1 = document.getElementById("numeroUno").value;
        num2 = document.getElementById("numeroDos").value;

            numero1=parseInt(num1);
            numero2=parseInt(num2);

                resultado=(numero1/numero2)

                    mensaje="la division es "+resultado;

                        alert(mensaje);	
}

