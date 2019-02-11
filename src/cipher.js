window.cipher = {
//Funcion para codificar el mensaje
encode: (offset, string) => {
//Declaro un string nuevo vacio donde voy a guardar mi mensaje encriptado
  let newString = "";
  let i;

 //Ciclo for para encriptar letra por letra
 for(i = 0; i < string.length; i++){

   //Guardo el caracter en la posicion i en una variable
   let x = string.charCodeAt(i);

   //Si el valor de desplazamiento es mayor a 26, agarro el residuo
   //para que empiece nuevamente el abecedario
   while (offset > 26){
     offset = offset % 26;
   }

   //Defino el rango de las letras del abecedario, dentro de ASCII
   if ((x >= 65) && (x <= 90)){

     //Aplico la formula de cifrado y guardo el caracter nuevo en una variable
     let y = String.fromCharCode(((x - 65 + offset)%26) + 65);
     //Actualizo mi nuevo string, concatenando las letras cifradas
     newString = newString + y;
   }
 }

let output = newString;
return output;

},



 decode: (offset, string) => {
//Declaro un string nuevo vacio donde voy a guardar mi mensaje encriptado
  let newString = "";
  let i;

 //Ciclo for para encriptar letra por letra
 for(i = 0; i < string.length; i++){

   //Guardo el caracter en la posicion i en una variable
   let x = string.charCodeAt(i);

   //Si el valor de desplazamiento es mayor a 26, agarro el residuo
   //para que empiece nuevamente el abecedario
   while (offset > 26){
     offset = offset % 26;
   }

   //Defino el rango de las letras del abecedario, dentro de ASCII
   if ((x >= 65) && (x <= 90)){

     //Aplico la formula de cifrado y guardo el caracter nuevo en una variable
     let y = String.fromCharCode(((x - 90 - offset)%26) + 90);
     //Actualizo mi nuevo string, concatenando las letras cifradas
     newString = newString + y;
   }
 }

let output = newString;
return output;

 }


};
