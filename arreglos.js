let listadenumero = []
for(let i=1 ; i <= 10; i++){
  listadenumero.push(i + 94)
}

for (let i = 0; i < listadenumero.length; i++) {
  if(listadenumero [i]  % 2 ){
    console.log(`numeros pares: ${listadenumero[i]}`);
  }
}
