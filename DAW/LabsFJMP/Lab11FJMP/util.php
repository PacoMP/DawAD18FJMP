
<?php

//una libreria donde tengo la funcion que evita que un usuario introduzca codigo
    function limpia_entrada($variable){
        //htmlspecialchars, me ayuda a que no inyecten codigo html y puedan violar la seguridad
        return $variable = htmlspecialchars($variable);
    }
?>