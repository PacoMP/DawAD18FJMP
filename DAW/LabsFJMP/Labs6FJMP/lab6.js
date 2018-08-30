
var title2=document.getElementById('title2');
var title3=document.getElementById('title3');

var tooltip1=document.getElementById('tooltip1');

var bodyVisibility=document.getElementById('bodyVisibility');

title2.onmouseover = function(){
  title2.style.fontFamily = "Arial";
  title2.style.color= "#00e6ac";
}

title2.onmouseout = function(){
  title2.style.fontFamily = "Gill Sans Extrabold";
  title2.style.color= "#9c1d1d";
}

title3.onmouseover = function(){
  title3.style.fontFamily = "Arial";
  title3.style.color= "#00e6ac";
}

title3.onmouseout = function(){
  title3.style.fontFamily = "Gill Sans Extrabold";
  title3.style.color= "#9c1d1d";
}

let passw=document.getElementById('password');
passw.onmouseover = function(){
  tooltip1.style.visibility = "visible";
}

passw.onmouseout = function(){
  tooltip1.style.visibility = "hidden";
}

/*
function efecto() {
  console.log("evento");
  img.style.width="500px";
}

function reestablecer() {
  img.style.width="200px";
}

let img=document.getElementById('phone');
img.onmouseover = efecto;
img.onmouseout = reestablecer;
*/

function validatePass(){
let pass=document.getElementById('password').value;
let passc=document.getElementById('passconfirm').value;

//Numbers debug
/*  alert(pass);
  alert(passc);*/

  let mayusFlag = false;
  let numFlag = false;
  let speFlag = false;
  let sizFlag = false;

if(pass.length > 5){
  sizFlag=true;
  for(let i = 0; i<=pass.length;i++){
    let ascii=pass.charCodeAt(i);
    switch(true){
      case (ascii>48 && ascii<58) :
        numFlag=true;
      break;
      case (ascii>32 && ascii<48):
        speFlag=true;
      break;
      case (ascii>57 && ascii<65) :
        speFlag=true;
      break;
      case (ascii>64 && ascii<91) :
        mayusFlag=true;
      break;
    }
  }
 }

//Flags debug
/*let banderas =mayusFlag + ',' + numFlag + ',' + speFlag + ',' + sizFlag;
alert(banderas);*/

 if((mayusFlag==true)&&(numFlag==true)&&(speFlag==true)&&(sizFlag==true)){
   if(pass.toString().localeCompare(passc.toString()) == 0){
    alert("Los passwords coinciden");
  }else{
    alert("Los password no coinciden");
  }
 }else{
   alert("El pass debe contener al menos un número, un carácter especial,una mayúscula y al menos 6 caractéres");
 }

}

function calculate(){
  var phone = document.getElementById('fphoneq').value;
  var nintendo = document.getElementById('fnintendoq').value;
  var watch = document.getElementById('fwatchq').value;

  let precioPhone = 1000;
  let precioNintendo = 400;
  let precioWatch = 250;
  let iva = .16;
  let total;

  total= ((phone*precioPhone) + (nintendo*precioNintendo) + (watch*precioWatch))*1.16;

  //alert(total);
  document.getElementById('total').value = total.toFixed(1) + " USD";
  document.getElementById('iva').value= (total*iva).toFixed(2) + " USD";

}

var request=document.getElementById('request');
function SendRequest(){
request.innerHTML= "<p>Enviando pedido...</p>";

}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    bodyVisibility.style.visibility="visible";
}
