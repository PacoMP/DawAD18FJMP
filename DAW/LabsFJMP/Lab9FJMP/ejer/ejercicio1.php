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

  prom($array);

  echo "El arreglo es: ";
  echo implode(" ",$array);


  echo "<br>El promedio es: $promedio";

?>
