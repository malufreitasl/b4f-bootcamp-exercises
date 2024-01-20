function arrayDeZeroAN(n){
    // escreve aqui a função
    if(n < 0){
        return "Por favor insira um número superior a 0.";
    }
    else if(n === 0){
        return 0;
    }
    return [n].concat(arrayDeZeroAN(n-1)).sort((a,b) => a-b);
}

console.log(arrayDeZeroAN(4))