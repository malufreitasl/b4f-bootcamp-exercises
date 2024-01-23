function somaDoArray(array){
    // escreve aqui a função
    if (array.length === 0){
        return 0
    } 
    return somaDoArray(array.slice(1)) + array[0];
}

console.log(somaDoArray([1,2,3,4]))