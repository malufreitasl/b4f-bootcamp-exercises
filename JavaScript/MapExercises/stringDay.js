function diaEmPalavras(dia, mes, ano){
    // escreve aqui a função
    const possiveisMeses = new Map([
        [1, "janeiro"],
        [2, "fevereiro"],
        [3, "março"],
        [4, "abril"],
        [5, "maio"],
        [6, "junho"],
        [7, "julho"],
        [8, "agosto"],
        [9, "setembro"],
        [10, "outubro"],
        [11, "novembro"],
        [12, "dezembro"]
    ]);

    const possiveisNum = new Map([
        [1, "um"],
        [2, "dois"],
        [3, "três"],
        [4, "quatro"],
        [5, "cinco"],
        [6, "seis"],
        [7, "sete"],
        [8, "oito"],
        [9, "nove"],
        [10, "dez"],
        [11, "onze"],
        [12, "doze"],
        [13, "treze"],
        [14, "catorze"],
        [15, "quinze"],
        [16, "dezasseis"],
        [17, "dezassete"],
        [18, "dezoito"],
        [19, "dezanove"],
        [20, "vinte"],
        [21, "vinte e um"],
        [22, "vinte e dois"],
        [23, "vinte e três"],
        [24, "vinte e quatro"],
        [25, "vinte e cinco"],
        [26, "vinte e seis"],
        [27, "vinte e sete"],
        [28, "vinte e oito"],
        [29, "vinte e nove"],
        [30, "trinta"],
        [31, "trinta e um"]
    ]);

    let anoAbsoluto = ano - 2000; 

    if (dia < 1 || dia > 31){
        return "Por favor introduza um dia entre 1 e 31.";
    }
    else if (mes < 1 || mes > 12){
        return "Por favor introduza um mês entre 1 e 12.";
    }
    else if((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30){
        return "Por favor introduza um dia entre 1 e 30.";
    }
    else if (mes === 2 && ((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0) && dia > 29) {
        return "Por favor introduza um dia entre 1 e 29.";
    }
    else if (mes === 3 && dia > 28) {
        return "Por favor introduza um dia entre 1 e 28.";
        }
    else if (ano < 2000 || ano > 2030) {
        return "Por favor introduza um ano entre 2000 e 2030."
    }
    if(ano === 2000){
        return `${possiveisNum.get(dia)} de ${possiveisMeses.get(mes)} de dois mil`
    }
    return `${possiveisNum.get(dia)} de ${possiveisMeses.get(mes)} de dois mil e ${possiveisNum.get(anoAbsoluto)}`
}
console.log(diaEmPalavras(4,4, 2031))
console.log(diaEmPalavras(29,2, 2023))
console.log(diaEmPalavras(29,2, 2024))
console.log(diaEmPalavras(2,2, 2000))