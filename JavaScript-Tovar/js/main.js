console.log("Hello World!")
//alert("Bienvenido a javascript")

/*
Comentario Multilinea


let nombre = prompt( "Cual es tu nombre?");

console.log(parseInt(nombre))

console.log(typeof(nombre))
*/
let numeroUno = prompt ("Ingresa un numero");
let numeroDos = prompt("Ingresa un numero");

let resultadoSuma = parseInt(numeroUno) + parseInt (numeroDos);
let resultadoResta = parseInt(numeroUno) - parseInt (numeroDos);
let resultadoMulti = parseInt(numeroUno) * parseInt (numeroDos);
let resultadoDivi = parseInt(numeroUno) / parseInt (numeroDos);

console.log( `El resultado de la suma es: ${ resultadoSuma}`);
console.log( `El resultado de la resta es: ${ resultadoResta}`);
console.log( `El resultado de la multiplicacion es: ${ resultadoMulti}`);
console.log( `El resultado de la division es: ${ resultadoDivi}`);