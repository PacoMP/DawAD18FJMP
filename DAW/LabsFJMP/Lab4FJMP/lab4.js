

var array = [0,-2,-3,5,20,34,1,-50,125];
var matrix = new Array([0,3,4,7,7],[0,6,2,85,34,6],[123,654,65,34,90,98,765,234]);

function ejer1(){
  let boton1 = prompt("Dame un número positivo");
  if(boton1<0){
      alert("El numero es inválido");
    }else{
  let table = "<table>";
  for(let i=1;i<=boton1;i++){
    table = table + '<tr>';
    for(let j=1; j<=3;j++){
      let pow = Math.pow(i,j);
      table = table+'<td>'+pow+'</td>';
    }
    table = table+('</tr>');
   }
  table = table+'</table>';
  document.write(table);
  }
  //div.innerHTML = table;
}

//Resultado de una suma
function ejer2(){
  let rand1 = Math.floor(Math.random()*100);
  let rand2 = Math.floor(Math.random()*100);
  let timeI = Date.now();
  let msg = "El resultado de la suma entre ";
  msg =msg + rand1 + ' y ';
  msg = msg + rand2 + ' es:';
  let boton = prompt(msg);
  let timeF = Date.now()
  let time = (timeF - timeI)/1000;
  let result = rand1 + rand2;
    if(boton == result){
      msg = "El resultado es correcto y tardaste "+time+" segundos";
    }else{
      msg = "El resultado es incorrecto y tardaste "+time+" segundos"
    }
    alert(msg);
}

//Contar coincidencias !!!
function ejer3(array1){
    let negat=0;
    let zero=0;
    let pos=0;
    let msg = "El arreglo es: "+array1;
    alert(msg);
    for(let i=0;i<array1.length;i++){
        if(array1[i]<0){
          negat++;
        }else if(array1[i]==0){
          zero++;
        }else{
          pos++;
        }
    }
    msg = negat+' números negativos, '+zero+' ceros y '+pos+' números positivos';
    alert(msg);
}

//promedios de arreglos
function ejer4(matrix1){
    let prom=0;
    let sum=0;
    let exarray = new Array(matrix1.length);
    let msg = "La matriz esta compuesta por:\n";
    for(let a=0;a<matrix1.length;a++){
      msg = msg + matrix1[a]+'\n';
    }
    alert(msg);

    for(let i=0;i<matrix1.length;i++){
      for(let j=0;j<matrix1[i].length;j++){
        sum= sum + matrix1[i][j];
      }
      prom = (sum/matrix1[i].length);
      exarray[i] = prom.toFixed(2);
    }

    msg = "El promedio de los arreglos es: "
      for(let b=0;b<exarray.length;b++){
        msg= msg + exarray[b]+' ';
      }
      alert(msg);
}

function exeEjer5(){
  let number = prompt("Escribe un número:");
  ejer5(number);
}

function ejer5(number){
  let newnum='';
  for(let i=(number.length-1);i>=0;i--){
    newnum += number.charAt(i);
  }
  alert("El número invertido es: "+newnum);
}

//
