function fatorialN(n){
    // escreve aqui a função
    if (n == 0){
        return 1;
    }
    let resultFatorial = BigInt(1);
    let i = BigInt(n);
    while (i > 0){
        resultFatorial *= i;
        i--;
    }
    return resultFatorial;
}