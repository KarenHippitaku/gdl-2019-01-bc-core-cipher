function enter(){
    document.getElementById("blockStart").style.display = "none";
    document.getElementById("blockCipher").style.display = "block";
    document.getElementById("blockInfo").style.display = "none";
    document.getElementById("blockSend").style.display = "none";
  }
  document.getElementById("buttonEnter").addEventListener("click", enter);

function help(){
  document.getElementById("blockStart").style.display = "none";
  document.getElementById("blockCipher").style.display = "none";
  document.getElementById("blockInfo").style.display = "block";
  document.getElementById("blockSend").style.display = "none";
  }
  document.getElementById("buttonHelp").addEventListener("click", help);

function exit(){
    document.getElementById("blockStart").style.display = "none";
    document.getElementById("blockCipher").style.display = "block";
    document.getElementById("blockInfo").style.display = "none";
    document.getElementById("blockSend").style.display = "none";
  }
  document.getElementById("buttonExit").addEventListener("click", exit);

function encode(){
    let string = document.getElementById("string").value;
    let offset = Number(document.getElementById("offset").value);
    let output = window.cipher.encode(offset, string);
    document.getElementById("newString").innerHTML = output;
  }
  document.getElementById("buttonCipher").addEventListener("click",encode);

function decode(){
  let string = document.getElementById("string").value;
  let offset = Number(document.getElementById("offset").value);
  let output = window.cipher.decode(offset, string);
  document.getElementById("newString").innerHTML = output;
}
document.getElementById("buttonDecipher").addEventListener("click",decode);

function send(){
  let mailTo = document.getElementById("email").value;
  let newString = document.getElementById("newString").value;
  let offset = document.getElementById("offset").value;
  let subject = "Secretext";
  let body = "Este es tu secreto " + newString + " y este tu nivel de cifrado " + offset + ", lo necesitarás para seguir revelando secretos en www.secretextcipher.com";
  window.open(`mailto:${mailTo}?subject=${subject}&body=${body}`);

  document.getElementById("blockStart").style.display = "none";
  document.getElementById("blockCipher").style.display = "none";
  document.getElementById("blockInfo").style.display = "none";
  document.getElementById("blockSend").style.display = "block";
  }
  document.getElementById("buttonSend").addEventListener("click", send);

function backToCipher(){
  document.getElementById("blockStart").style.display = "none";
  document.getElementById("blockCipher").style.display = "block";
  document.getElementById("blockInfo").style.display = "none";
  document.getElementById("blockSend").style.display = "none";
  }
  document.getElementById("buttonReturn").addEventListener("click", backToCipher);

function backToStart(){
  document.getElementById("blockStart").style.display = "block";
  document.getElementById("blockCipher").style.display = "none";
  document.getElementById("blockInfo").style.display = "none";
  document.getElementById("blockSend").style.display = "none";
  }
  document.getElementById("buttonNotSend").addEventListener("click", backToStart);
