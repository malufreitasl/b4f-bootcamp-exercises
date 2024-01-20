function calculaDiasAteAoNatal(dia, mes){
    // escreve aqui a função
    let diasMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let diasNoAno = dia;
    let diasRestantes = 0;
    if (dia < 1 || dia > 31){
        return "Por favor introduza um dia entre 1 e 31.";
    }
    else if (mes < 1 || mes > 12){
        return "Por favor introduza um mês entre 1 e 12.";
    }
    else if((mes === 4 || mes === 6 || mes === 9 || mes === 10) && dia > 30){
        return "Por favor introduza um dia entre 1 e 30.";
    }
    else if (mes === 2 && dia > 28){
        return "Por favor introduza um dia entre 1 e 28.";
    }
    else if (mes === 12 && dia === 25){
        return "Hoje é Natal!";
    }
    else if (mes === 12 && dia == 24){
        return "Falta 1 dia até ao Natal.";
    }
    else if (mes === 12 && dia < 25){
        diasRestantes = 25 - dia;
        return `Faltam ${diasRestantes} dias até ao Natal.`;
    }
    else if (mes === 12 && dia > 25){
        diasRestantes = 365 - (dia - 25);
        return `Faltam ${diasRestantes} dias até ao Natal.`;
    }
    for (let i = 0; i < mes - 1; i++){
        diasNoAno += diasMes[i];
    }
    diasRestantes = 359 - diasNoAno;
    return `Faltam ${diasRestantes} dias até ao Natal.`;
}
console.log(calculaDiasAteAoNatal(26,12))