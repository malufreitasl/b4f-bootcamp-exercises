function horaPorExtenso(data){
    // escreve aqui a função
    const HORAS_POSSIVEIS = ["meia noite", "uma", "duas", "três", "quatro", "cinco","seis","sete","oito", "nove", "dez", "onze", "doze", "treze", "catorze", "quinze", "dezasseis", "dezassete", "dezoito", "dezanove", "vinte", "vinte e uma", "vinte e dois","vinte e três", "meia noite"]
    const MIN_POSSIVEIS = ["em ponto", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "catorze", "um quarto", "dezasseis", "dezassete","dezoito", "dezanove", "vinte", "vinte e um", "vinte e dois", "vinte e três", "vinte e quatro", "vinte e cinco", "vinte e seis", "vinte e sete", "vinte e oito", "vinte e nove", "meia", "trinta e um", "trinta e dois", "trinta e três", "trinta e quatro", "trinta e cinco", "trinta e seis", "trinta e sete", "trinta e oito", "trinta e nove", "quarenta", "quarenta e um", "quarenta e dois", "quarenta e três", "quarenta e quatro", "três quartos", "quarenta e seis", "quarenta e sete", "quarenta e oito", "quarenta e nove", "cinquenta", "cinquenta e um", "cinquenta e dois", "cinquenta e três", "cinquenta e quatro", "cinquenta e cinco", "cinquenta e seis", "cinquenta e sete", "cinquenta e oito", "cinquenta e nove"
    ];
    let h = data.getUTCHours()
    let m = data.getUTCMinutes()

    if (m == 0){
        return HORAS_POSSIVEIS[h] + " " + MIN_POSSIVEIS[m]
    }
    else{ console.log(h)
        return HORAS_POSSIVEIS[h] + " e " + MIN_POSSIVEIS[m]
       
    }
}

console.log(horaPorExtenso(new Date("2021-05-17 01:30")))
console.log(horaPorExtenso(new Date("2021-05-17 03:15")))
console.log(horaPorExtenso(new Date("2021-05-17 09:45")))
console.log(horaPorExtenso(new Date("2021-05-17 09:23")))
console.log(horaPorExtenso(new Date("2021-05-17 09:47")))
