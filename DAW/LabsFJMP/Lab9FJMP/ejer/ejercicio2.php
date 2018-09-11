<?php
$array = array ('45','67','87','34','100');

  function mediana($array){
      global $median;
      sort($array);
      $median= $array[count($array)/2];
  }

  mediana($array);

  echo "El arreglo es: ";
  echo implode(" ",$array);

  echo "<br>La mediana es $median";

?>
