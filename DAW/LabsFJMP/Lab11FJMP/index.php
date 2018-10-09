<?php
require_once("util.php");
if(isset($_POST["email"]) && isset($_POST["password"])){
    //aqui se redefine usuario, puesto que se limpia la entrada para que sea pasada como string si es que meten codigo
    $_POST["email"]=limpia_entrada($_POST["email"]);
    $_POST["password"]=limpia_entrada($_POST["password"]);

    if($_POST["email"]=="123@hotmail.com" && $_POST["password"]=="w3school"){
        include("MainView.html");
    }else if($_POST["email"] == "" && $_POST["password"] == ""  && isset($_POST["email"])  && isset($_POST["password"])){
        $error = "Ingresa tu email y contraseña";
       include("NoSignin.html");
       include("footer.html");
    }
    //si mete cualquier cosa que no sea la contraseña o el usario , espera tres segundos, esto ayuda a evitar que un usuario haga una rafaga de envio de solicitudes y marca error
    else if(isset($_POST["email"]) || isset($_POST["password"]) ) {
        sleep(3);
        $error = "Usuario y/o password incorrectos";
        include("NoSignin.html");
        include("footer.html");
    } else {
        include("NoSignin.html");
        include("footer.html");
    }

}else {
  include("NoSignin.html");
  include("footer.html");
}





 ?>
