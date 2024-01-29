function partesDecimais(array){
    // escreve aqui a função
    return array.map(e => e % 1);
}

console.log(partesDecimais([1.5, 2.4]))