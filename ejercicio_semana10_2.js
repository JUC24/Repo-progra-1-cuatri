/**
  Ejercicio 2: Escriba un programa, que solicite una serie de números al usuario, separados por coma
  Luego convertir esta serie de números a una lista de JavaScript. Posteriormente el programa deberá 
  intercambiar el primer y último elemento de la lista.
  Ejemplo: Lista: [1, 2, 3] Resultado: [3, 2, 1] 

*/

let listnumbers = []

let numbers = prompt("Digite una serie de numeros: ")

listnumbers.push(numbers)

let sep = numbers.split(' ')

let conversor = listnumbers.reverse()

alert(conversor)

