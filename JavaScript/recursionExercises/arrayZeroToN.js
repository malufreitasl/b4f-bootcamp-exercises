function arrayDeZeroAN(n){
    // escreve aqui a função
    if(n < 0){
        return "Por favor insira um número superior a 0.";
    }
    else if(n === 0){
        return [0];
    }
    return [...arrayDeZeroAN(n - 1), n]
}

console.log(arrayDeZeroAN(4))