function dataMaisRecente(data1, data2) {
    // escreve aqui a função
    return new Date(Math.max(data1, data2));
}

console.log(dataMaisRecente(new Date(2022,3,4), new Date(2022,3,9)))