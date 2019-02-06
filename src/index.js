function entrar(){
    document.getElementById("bloqueInicio").style.display = "none";
    document.getElementById("bloqueCifrado").style.display = "block";
    document.getElementById("bloqueInformacion").style.display = "none";
    document.getElementById("bloqueEnviado").style.display = "none";
  }
  document.getElementById("botonEntrar").addEventListener("click", entrar);

function irAyuda(){
  document.getElementById("bloqueInicio").style.display = "none";
  document.getElementById("bloqueCifrado").style.display = "none";
  document.getElementById("bloqueInformacion").style.display = "block";
  document.getElementById("bloqueEnviado").style.display = "none";
  }
  document.getElementById("botonAyuda").addEventListener("click", irAyuda);

function salir(){
    document.getElementById("bloqueInicio").style.display = "none";
    document.getElementById("bloqueCifrado").style.display = "block";
    document.getElementById("bloqueInformacion").style.display = "none";
    document.getElementById("bloqueEnviado").style.display = "none";
  }
  document.getElementById("botonSalir").addEventListener("click", salir);

function encode(){
    let string = document.getElementById("string").value;
    let offset = Number(document.getElementById("offset").value);
    let output = window.cipher.encode(offset, string);
    document.getElementById("newString").innerHTML = output;
  }
  document.getElementById("botonCifrar").addEventListener("click",encode);

function decode(){
  let string = document.getElementById("string").value;
  let offset = Number(document.getElementById("offset").value);
  let output = window.cipher.decode(offset, string);
  document.getElementById("newString").innerHTML = output;
}
document.getElementById("botonDescifrar").addEventListener("click",decode);

function enviar(){
  document.getElementById("bloqueInicio").style.display = "none";
  document.getElementById("bloqueCifrado").style.display = "none";
  document.getElementById("bloqueInformacion").style.display = "none";
  document.getElementById("bloqueEnviado").style.display = "block";
  }
  document.getElementById("botonEnviar").addEventListener("click", enviar);

function volverACifrar(){
  document.getElementById("bloqueInicio").style.display = "none";
  document.getElementById("bloqueCifrado").style.display = "block";
  document.getElementById("bloqueInformacion").style.display = "none";
  document.getElementById("bloqueEnviado").style.display = "none";
  }
  document.getElementById("botonVolver").addEventListener("click", volverACifrar);
