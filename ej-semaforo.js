let color = prompt("Digite el color del semaforo") /* la cajita que salia en el navegador*/
 
if (color == "rojo"){
    alert("Stop")
}

if (color == "amarillo"){
    alert("Warnig")
}

if (color == "verde"){
    alert("Go")
}


/*
Operadores logico
 
< = mayor/igual que
> = menor/igual que
(==): igual
(=)
(!=): diferente
**/

/* 3 escenarios posibles: parar, disminuir la velocid, seguir */

if (color=="rojo"){
  alert("STOP")
}else if (color=="amarillo"){
  alert("WARNIG")
}else if (color=="verde"){
  alert("GO")
}else{
  alert("No se ingreso los valores correctos.")
}