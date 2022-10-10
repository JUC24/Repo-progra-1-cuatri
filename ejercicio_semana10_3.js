/**
  ejercicio 3: Escriba un programa, que solicite una serie de números al usuario, separados por coma.
  Luego convertir esta serie de números a una lista de JavaScript, esta lista podría contener números duplicados 
  en ella. Se debe generar otra lista, que contiene solo los elementos duplicados. En palabras simples, la nueva 
  lista debe contener los elementos que aparecen más de una vez en los números ingresados por el usuario. 
  Ejemplo:  Lista = [-2, 1, -2, 8]
  lista_salida = [-2
*/

let listnumbers = []

let numbers = prompt("Digite una serie de numeros: ")

numbers = Number(numbers)

listnumbers.push(numbers)

let sep = numbers.split(" ")