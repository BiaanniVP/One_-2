let numeroSecreto = generarNumeroSecreto; 
let intentos = 1;
/* para ver si esta funcionando
console.log(numeroSecreto); */


//interactuar con un boton y conectar con htlm con funciones 
function asignarTextoElemento(elemento,texto){
  let elementoHTLM= document.querySelector('h1'); //regresa titulo
  elementoHTLM.innerHTLM=texto;
  return;//buena practica 
}//funcion

function generarNumeroSecreto(){
  let numeroSecreto =Math.floor ( Math.ramdom()*20)+1;
  return numeroSecreto; 
}//funcion

function verificarIntento (){
  let numeroDeUsuario = document.querySelector('input');

  if(numeroDeUsuario === numeroSecreto){
    asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos ===1) ? 'vez' : 'veces?'}`);
    document.getElementById ('reiniciar').removeAttribute('disabled');
  } else {
    //el usuario no acertó
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento ( 'p', '¡El número secreto es menor!');
    }  else {
    if (numeroDeUsuario < numeroSecreto) {
      asignarTextoElemento ( 'p', '¡El número secreto es mayor!');
    }
      intentos++;//contador 
      limpiarCaja();
  return;
}//funcion

function limpiarCaja{
   document.querySelector ('#valorUsuario').value = ''; //id
}//funcion



//Puedo llamar la funcion desde el codigo js SOLO en eventos 
asignarTextoElemento( 'h1','Juego del número secreto');
asignarTextoElemento( 'p','Indica un número del 1 al 10');




