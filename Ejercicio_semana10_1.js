/** 
 Ejercicio 1: Escriba un programa, que solicite una serie de números al usuario, separados por coma.
 Luego convertir esta serie de números a una lista de JavaScript. Posteriormente devolver la multiplicación
 de todos los elementos de la lista. 
 Ejemplo: Si el usuario ingreso 3,1,2,3 el resultado de la multiplicación será: 18 
*/

let listnumbers = []
debugger
let numbers = prompt("Digite una serie de numeros: ")

listnumbers.push(numbers)

let listnum = numbers.split(' ')

/** let multplicacion = (multiplicador, num) => multiplicador * num; */


let mul = listnumbers.reduce(function(multipl, num){
  return multipl * num
})

alert(mul)

