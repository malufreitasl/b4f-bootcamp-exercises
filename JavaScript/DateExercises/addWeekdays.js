function adicionaSemanas(data, semanas) {
    // escreve aqui a função
    data.setTime(data.getTime() + (semanas * 7 * 24 * 60 * 60 * 1000))
    return data
}