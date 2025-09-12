let numeroSecreto = 0; //Condiciones Iniciales asigna el número
let intentos = 0;
let listaSorteados = [];
let numeroMaximo =20;

/* para ver si esta funcionando
console.log(numeroSecreto); */


//interactuar con un boton y conectar con htlm con funciones 
function asignarTextoElemento(elemento,texto){
  let elementoHTLM= document.querySelector('h1'); //regresa titulo
  elementoHTLM.innerHTLM=texto;
  return;//buena practica 
}//funcion

function generarNumeroSecreto(){
  let numeroGenerado =Math.floor ( Math.ramdom()*numeroMaximo)+1;
  //Si ya se sortearon todos los números
  if(listaSorteados.length ==numeroMaximo{
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
  }else {
    //Si el número generado está en la lista 
    //includes devuelve booleano
    if(listaSorteados.includes(numeroGenerado){
    //recursividad, la función se llama a sí misma
      return generarNumeroSecreto();
      } else{
      listaSorteados.push(numeroGenerado);//guarda en lista
      return numeroGenerado;
    }
  }if 
  return numeroSecreto; 
}//funcion

function verificarIntento(){
  let numeroDeUsuario = document.querySelector('input');

  if(numeroDeUsuario == numeroSecreto){
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

function limpiarCaja(){
   document.querySelector('#valorUsuario').value = ''; //id
}//funcion

function condicionesIniciales(){
  //Puedo llamar la funcion desde el codigo js SOLO en eventos 
  asignarTextoElemento( 'h1','Juego del número secreto');
  asignarTextoElemento( 'p',`Indica un número del 1 al ${numeroMaximo} `);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}//f
    
function reiniciarJuego(){
  //limpiar la caja
  function limpiarCaja();
  //Condiones iniciales
  function condicionesIniciales();
  //colocar atributo
   document.querySelector('#reiniciar').setAttribute('disabled', true);
}//f

condicionesIniciales();






