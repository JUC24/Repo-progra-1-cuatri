/* Ejemplo de metodo map */

let numeros = [1, 5, 10, 15]

opemul = numeros.map(operacion)

function operacion(value, index, arr){
  return value * 2
}

console.log(opemul)
console.log(numeros)