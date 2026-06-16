<?php

function sumaDigitos($n) {
    if ($n < 10) { 
        return $n; 
    } 
        return ($n % 10) + sumaDigitos(intval($n / 10)); 
}
echo "La suma de los digitos de 285 es: " . sumaDigitos(285);


?>
