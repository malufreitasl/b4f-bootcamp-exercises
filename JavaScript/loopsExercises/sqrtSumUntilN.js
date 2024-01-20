function somaQuadradosAteN(n){
    // escreve aqui a função
    let resultado = 0;
    for (let i = 1; i <= n; i++){
        resultado += i**2;
    }
    return resultado;
}
