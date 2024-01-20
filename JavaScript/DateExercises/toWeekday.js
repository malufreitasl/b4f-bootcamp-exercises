function diaDaSemanaPorExtenso(data){
    // escreve aqui a função
    return data.toLocaleString("pt-PT", {weekday: "long"})
} 

console.log(diaDaSemanaPorExtenso(new Date(2022,6,4)))