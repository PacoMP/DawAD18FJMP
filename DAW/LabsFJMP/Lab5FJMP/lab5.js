var imgPhone=document.getElementById('phone');
var imgGame=document.getElementById('nintendo');
var imgClock=document.getElementById('watch');

function validatePass(){
var pass=document.getElementById('password').value;
var passc=document.getElementById('passconfirm').value;

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
