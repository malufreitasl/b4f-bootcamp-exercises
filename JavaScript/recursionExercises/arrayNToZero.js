function arrayDeNAZero(n){
    // escreve aqui a função
    if (n < 0){
        return "Por favor insira um número superior a 0."
    }
    else if (n === 0){
        return 0
    }
    return [n].concat(arrayDeNAZero(n-1))
}

console.log(arrayDeNAZero(4))

