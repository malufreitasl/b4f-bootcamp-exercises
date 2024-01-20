function contaNumeroDeDivisoesPorDois(n){
    // escreve aqui a função
    let contador = 0
    for (contador; n > 1; contador++){
        n = Math.floor(n/2);
    }
    return contador;
}

console.log(contaNumeroDeDivisoesPorDois(9))