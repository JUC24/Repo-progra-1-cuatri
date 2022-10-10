alert("Digite 6 números: ");
let v1 = prompt("Digite el primer número: ");
let v2 = prompt("Digite el segundo número: ");
let v3 = prompt("Digite el tercer número: ");
let v4 = prompt("Digite el cuarto número: ");
let v5 = prompt("Digite el quinto número: ");
let v6 = prompt("Digite el sexto número: ");

if (v1 > v2 && v1 > v3 && v1 > v4 && v1 > v5 && v1 > v6) {
  alert("El numero 1 es el mayor " + v1)
}else if (v2 > v1  && v2 > v3  && v2 > v4  && v2 > v5  && v2 > v6) {
  alert("El numero 2 va a ser el mayor " + v2)
}else if (v3 > v1 && v3 > v2 && v3 > v4 && v3 > v5 && v3 > v6) {
  alert("el numero 3 es el mayor de todos" + v3)
}else if (v4 > v1 && v4 > v2 && v4 > v3 && v4 > v5 && v4 > v6) {
  alert("el numero 4 es el mayor de todos" + v4)
}else if (v5 > v1 && v5 > v2 && v5 > v3 && v5 > v4 && v5 > v6) {
  alert("el numero 5 es el mayor de todos" + v5)
}else if (v6 > v1 && v6 > v2 && v6 > v3 && v6 > v4 && v6 > v5) {
  alert("el numero 6 es el mayor de todos" + v6)
}
else {
  alert("son iguales")
}