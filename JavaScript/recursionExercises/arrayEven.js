function paresDoArray(array){
    // escreve aqui a função
    if(array.length === 0){
        return [];
    }
    if(array[0] % 2 === 0){
        return [array[0], ...paresDoArray(array.slice(1))]
    }
    return [...paresDoArray(array.slice(1))]
}

console.log(paresDoArray([0, 1, 2, 3, 4, 5]))