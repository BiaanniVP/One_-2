let numeroSecreto = generarNumeroSecreto; 

/* para ver si esta funcionando
console.log(numeroSecreto); */


//interactuar con un boton y conectar con htlm con funciones 
function asignarTextoElemento(elemento,texto){
  let elementoHTLM= document.querySelector('h1'); //regresa titulo
  elementoHTLM.innerHTLM=texto;
  return;//buena practica 
}
function verificarIntento (){
  let numeroDe Usuario = document.querySelector('input');
  return;
}//funcion

function generarNumeroSecreto(){
  let numeroSecreto =Math.floor ( Math.ramdom()*10)+1;
  return numeroSecreto; 
}

//Puedo llamar la funcion desde el codigo js SOLO en eventos 
asignarTextoElemento( 'h1','Juego del número secreto');
asignarTextoElemento( 'p','Indica un número del 1 al 10');

