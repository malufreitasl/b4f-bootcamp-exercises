function subtraiHoras(data, horas) {
    // escreve aqui a função
    data.setHours(data.getHours() - horas)
    return data
}

console.log(subtraiHoras(new Date (2023,1,2), 5))