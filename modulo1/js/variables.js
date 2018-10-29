var nombre = prompt("Ingrese su Nombre");
console.log("Este es mi nombre", nombre);
//** */alert(nombre);*/

//**Variables numericas */
var num = 5;
console.log("num", num);

//**Variables de texto */
var palabras = "palabras";
console.log("palabras", palabras);

//**Variables booleanas */
var activo=true;
console.log("activo",activo);

//**Variables tipo arreglo */
var colores = ["red","cyan",activo,num];
console.log("Colores",colores);

var apellido = "lola";
console.log("Apellido",apellido);
apellido=12;
console.log("apellido numerico",apellido);

//**Estructura If */
if(true){
    apellido="Locos";
    console.log("Apellido dentro del if",apellido);
}
console.log("Apellido despues del if",apellido);
//**La estructura anterior, el if que esta fuera sigue con el valor asignado dentro del if */

var cantidad = 34;
console.log("Cantidad Num", cantidad);
if(true){
    let cantidad=69;
    console.log("cantidad dentro del if",cantidad)
}
console.log("Cantidad fuera del if",cantidad);
//**Con la variable let, el valor que se le aasigne dentro de la estructura solo sera valido dentro de la estructura */