<?php
// 1. Cuántas veces aparece un número específico dentro de un arreglo.

function contar($arr, $num, $i=0)
{

    if ($i == count($arr)) {    // Caso base 
        return 0;
    }

    if ($arr[$i] == $num) {   // Llamada recursiva
        return 1 + contar($arr, $num, $i + 1);
    }

    return contar($arr, $num, $i + 1);
}

$a = [0, 5, 1, 2, 5, 2 ,3, 9, 2, 8, 7, 5];

echo "El 5 aparece " . contar($a, 5) . " veces <br><br>";


// 3. Repetir texto n veces
function repetir($texto, $n)
{
    if ($n == 0) { // Caso base
        return "";
    }

    return $texto . repetir($texto, $n - 1);   // Llamada recursiva
}

echo repetir("Hola ", 3);


// 5. Suma de cuadrados
function cuadrados($n)
{
    if ($n == 1) {      // Caso base
        return 1;
    }

    return ($n * $n) + cuadrados($n - 1);     // Llamada recursiva
}

echo "Resultado: " . cuadrados(5);

?>
