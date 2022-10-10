/**
  Ejercicio 4: Escriba un programa, que solicite una serie de números al usuario, separados por coma.
  Luego convertir esta serie de números a una lista de JavaScript. Posteriormente, solicitar un número
  al usuario, y remover de la lista todas las veces que aparezca dicho número. 
  Ejemplo: i. Lista: (1, 3, 4, 6, 5, 1, 3] 
  Número ingresado por el usuario: 3 
  lista_salida: (1,4, 6, 5, 1] 

*/

let listnumbers = []

let numbers = prompt("Digite una serie de numeros: ")

numbers = Number(numbers)

listnumbers.push(numbers)

let sep = numbers.split(",")