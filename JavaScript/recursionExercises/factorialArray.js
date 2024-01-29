function fatorial(n){
    if (n === 1){
        return 1;
    }
    return n * fatorial(n - 1);
}

function fatoriaisDoArray(array){
    // escreve aqui a função
    if (array.length === 0) {
        return [];
    }
    return [fatorial(array[0]), ...fatoriaisDoArray(array.slice(1))];
}

console.log(fatoriaisDoArray([1, 2, 3, 4]))