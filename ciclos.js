/**
 //(while = mientas)

  contador = 0

  while(contador <= 10)
  {
    console.log("ejecucion", contador)
    contador++;
  } 
*/


  contador = 0;
 
  sumatoria = 0;

  while(contador <= 10)
  {
    if(contador % 2 == 0) // validar si el numero es par o no
    {
      console.log("Ejecucion" , contador)
      sumatoria = sumatoria + contador ;
    }
    contador = contador + 1;
  }

  console.log("Sumatoria: " + sumatoria)




/** 
let inc = 0
while(inc <= 10 ){
  let color = prompt("digite un color: ")
  if(color == "rojo"){
    console.log("intento", inc)
    console.log("pare")
  }else if (color == "amarillo"){
    console.log("intento", inc)
    console.log("despacio")
  }else if(color == "verde"){
    console.log()
    break
  }
  inc++
}*/