<?php

$n = 10;

function powerN($n){
  echo "<table>";
  for($i=0;$i<$n;$i++){
    echo "<tr>";
    for($j=1;$j<=3;$j++){
      echo "<td>".pow($i,$j)."</td>";
    }
    echo "</tr>";
  }
  echo "</table>";
}

powerN($n);


?>
