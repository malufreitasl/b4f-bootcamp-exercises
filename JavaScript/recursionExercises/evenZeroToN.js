function paresDeZeroAN(n){
    // escreve aqui a função
    if (n < 0){
        return "Por favor insira um número superior a 0";
    }
    else if(n === 0){
        return 0;
    }
    if(n % 2 === 0){
        return[n].concat(paresDeZeroAN(n-1)).sort((a,b) => a - b);
    }
    return paresDeZeroAN(n-1)

}

console.log(paresDeZeroAN(4))