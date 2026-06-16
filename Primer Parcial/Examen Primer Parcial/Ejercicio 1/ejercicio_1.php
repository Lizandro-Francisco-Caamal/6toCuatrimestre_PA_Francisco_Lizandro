<?php 

function contarDigito($n) {
    if ($n < 10) { 
        return 1; 
    } 
    
        return 1 + contarDigito($n / 10); 
} 
echo "El numero 12345 tiene : " . contarDigito(12345);


?>
