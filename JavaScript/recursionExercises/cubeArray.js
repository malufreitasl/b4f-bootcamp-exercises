function cubosDoArray(array){
    // escreve aqui a função
    if (array.length === 0){
        return [];
    }
    return [array[0]**3, ...cubosDoArray(array.slice(1))]
}

console.log(cubosDoArray([1,2,3,4]))