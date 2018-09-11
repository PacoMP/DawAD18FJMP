<?php
$array = array ('45','67','87','34','100');

function prom($array){
  global $suma;
  global $promedio;

  for($i=0;$i<count($array);$i++){
  $suma = $suma + $array[$i];
  }
  $promedio = $suma/(count($array));
}

function mediana($array){
    global $median;
    sort($array);
    $median= $array[count($array)/2];
}

prom($array);
mediana($array);


echo "<ul>";
echo "<li>La media es: $promedio</li>";
echo "<li>La mediana es: $median</li>";
sort($array);
echo "<li>El arreglo en orden ascendete es: ".implode(" ",$array)."</li>";
rsort($array);
echo "<li>El arreglo en orden descendete es: ".implode(" ",$array)."</li>";
echo "</ul>"
?>
