/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
var dividendo;
var divisor;
var dividendo1;
var divisor1;
var mensaje;
var resultado;

    dividendo = document.getElementById("numeroDividendo").value;
    divisor = document.getElementById("numeroDivisor").value;

        dividendo1=parseInt(dividendo);
        divisor1=parseInt(divisor);

            resultado=(dividendo1%divisor1);

                mensaje="el resto es "+resultado;
                
                    alert(mensaje);
}
