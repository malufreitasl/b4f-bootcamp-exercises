function contaInteirosDoArray(array){
    // escreve aqui a função
    if(array.length === 0) {
        return 0;
    }
    if(array[0] % 1 === 0) {
        return 1 + contaInteirosDoArray(array.slice(1));
    }
    return contaInteirosDoArray(array.slice(1));
}

console.log(contaInteirosDoArray([1.2, 2.2, 1, 2, 4, 3.3]))