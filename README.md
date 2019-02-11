# Secretext Cipher
---
*Secretext* es una app de cifrado para crear e intercambiar mensajes secretos entre amigos :D

## Definición del producto

Al generar el prototipado busqué opciones en la temática y por alguna razón me vino a la mente el viejo juego de intercambiar mensajes con claves.  

Probablemente, en algún momento de la infancia, todos pretendimos comunicarnos en lenguajes súper secretos con nuestros mejores amigos y compinches al sustituir las letras que conocemos por símbolos, dibujos, etc. Lo cual era perfecto para hablar de cualquier cosa sin ser expuestos en caso de que alguien ajeno viera nuestros mensajes, como cuando pasabas un chiste en clase y no querías ser castigada si el/la profe lo llegaba a ver. O algo mucho más común, hablar de la persona que te gusta sin que nadie que no sea tu cómplice se pueda enterar; en este caso sólo necesitas cifrar el nombre de esa persona especial, y listo. Tu secreto estará seguro de chismosos y hasta de tu mismo crush :P

* __Quiénes son los principales usuarios de producto.__  
Personas interesadas en intercambiar mensajes encriptados por diversión.

* __Cuáles son los objetivos de estos usuarios en relación con tu producto.__  
Ocultar la información cifrada de cualquiera con quien no se deseé compartir el código, mantener conversaciones secretas sin importar la falta de privacidad y obtener un sentimiento de complicidad al intercambiar mensajes con alguien más.

* __Cómo crees que el producto que estás creando está resolviendo sus problemas.__  
Es un sistema fácil de usar, sin muchos pasos, ni formularios complejos, por ello tiene todas las opciones visibles e información disponible al momento de la acción (cifrar/descifrar) y un botón de ayuda para entender el funcionamiento e importancia del *offset*.  
La apariencia general (logo, fondo, íconos) hacen alegoría a una estética femenina y caricaturesca, nada seria, puesto que no se pretende manipular información delicada como claves bancarias o contraseñas, sino crear un lenguaje secreto entre amigos para jugar o conversar en complicidad.

### ¿Qué es el Cifrado César?

El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.
