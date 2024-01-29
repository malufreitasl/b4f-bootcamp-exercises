function contaSuperioresAN(array, n){
    // escreve aqui a função
    if (array.length === 0) {
        return 0;
    }
    if (array[0] > n){
        return 1 + contaSuperioresAN(array.slice(1), n);
    }
    return contaSuperioresAN(array.slice(1), n);
}

console.log(contaSuperioresAN([0, 1, 2, 3, 4], 2))