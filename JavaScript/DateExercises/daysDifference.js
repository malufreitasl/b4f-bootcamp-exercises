// Cria uma função que recebe dois objetos do tipo Date como argumentos e retorna o tempo entre a primeira e a segunda string em dias (períodos de 24h).

// O valor retornado deve ser sempre um número positivo e inteiro.

function diferencaEmDias(data1, data2) {
    // escreve aqui a função
    return Math.floor(Math.abs((data1 - data2)/(1000 * 60 * 60 * 24)))
}

console.log(diferencaEmDias(new Date(2022, 3, 4), new Date(2022, 2, 28))) //7