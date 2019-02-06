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
