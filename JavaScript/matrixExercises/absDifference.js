function diferencaAbsolutaEntreDiagonais(matrizquadrada) {
    // escreve aqui a função
    let diagonalPrincipal = 0;
    let diagonalSecundaria = 0;
    
    for (let row = 0; row < matrizquadrada.length; row++){
        diagonalPrincipal += matrizquadrada[row][row]
        diagonalSecundaria += matrizquadrada[row][matrizquadrada.length - row - 1]
    }
    let resultado = diagonalPrincipal - diagonalSecundaria
    if (resultado < 0){
        return resultado * (-1)
    }
    return resultado
}

console.log(diferencaAbsolutaEntreDiagonais([[1,2,3],[1,2,3],[1,2,6]]))