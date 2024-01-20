function tempoEmPalavras(horas, minutos){
    // escreve aqui a função
    const horasPossiveis = ["meia noite", "uma", "duas", "três", "quatro", "cinco","seis","sete","oito", "nove", "dez", "onze", "meio dia", "uma", "duas", "três", "quatro", "cinco","seis","sete","oito", "nove", "dez", "onze", "meia noite"]
    const minPossiveis = ["em ponto", "um", "dois", "três", "quatro", "cinco","seis","sete","oito", "nove", "dez", "onze", "doze", "treze", "catorze", "um quarto", "dezasseis", "dezassete", "dezoito", "dezanove", "vinte", "vinte e um", "vinte e dois", "vinte e três","vinte e quatro","vinte e cinco","vinte e seis","vinte e sete","vinte e oito","vinte e nove","meia"]

    if (minutos > 30){
        minutos = 60 - minutos
        horas += 1
        if (horas == 12){
            horas = horas - 12
            return minPossiveis[minutos] + " para a " + horasPossiveis[horas]
        }
        else if (horas == 23){
            return minPossiveis[minutos] + " para a " + horasPossiveis[horas]
        }
        else if (horas == 11){
            return minPossiveis[minutos] + " para o " + horasPossiveis[horas]
        }
        else{
            return minPossiveis[minutos] + " para as " + horasPossiveis[horas]
        }
    }
    else if (minutos == 0){
        return horasPossiveis[horas] + " " + minPossiveis[minutos]
    }
    else{
        return horasPossiveis[horas] + " e " + minPossiveis[minutos]
    }
}