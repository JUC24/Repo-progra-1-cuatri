let peso = prompt("Ingrese su peso: ")
let altura = prompt ("Ingrese su altura: ")

imc = peso / altura**2

alert(imc)

if (imc <= 18.5){
  alert("Bajo Peso")
}else if(imc <= 25){
  alert("Peso normal")
}else if(imc <= 30){
  alert("Sobre peso")
}else if(imc <= 35){
  alert("Obesidad leve")
}else if(imc <= 39.99){
  alert("Obesidad Media")
}else if(imc >= 40){
  alert("Obesidad Morbida")
}
else("Digite solo valores numericos que indique su peso y altura")