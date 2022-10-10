let Desicion = prompt("digite 1. suma, 2. resta, 3. multiplicacion, 4. division")
let num1 = prompt("Digite un valor: ")
let num2 = prompt("Digite un valor: ")
num1 = Number(num1)
num2 = Number(num2)
if(Desicion == "1"){
  suma(num1, num2)  
}
if(Desicion == "2"){
  resta(num1, num2)
}
if(Desicion == "3"){
   multiplicacion(num1, num2)
}
if(Desicion == "4"){
  division(num1, num2)
}
function suma (a, b){
  let resul = a + b
  console.log("suma " + resul)
}
function resta (a, b){
  let resul = a - b
  console.log("resta " + resul)
}
function multiplicacion (a, b){
  let resul = a * b
  console.log("Multiplicar "+ resul)
}
function division (a, b){
  let resul = a / b
  if(num2 === 0){
    console.log("la division no se puede realizar")
  }else{
    console.log("Division " + resul)
  }

}

