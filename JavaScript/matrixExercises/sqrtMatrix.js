function somaDiagonalSecundaria(matrizquadrada) {
    // escreve aqui a função
    let sum = 0;
    for (let i = 0; i < matrizquadrada.length; i++){
        console.log(matrizquadrada[i][matrizquadrada[i].length -1 - i])
        sum += matrizquadrada[i][matrizquadrada[i].length - i]
    }
    return sum;
}

console.log(somaDiagonalSecundaria([
    [1,2,3],
    [1,2,3],
    [1,2,3]
]))