

function calculaDiaDoAno(dia, mes){
    // escreve aqui a função
    let diasMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let diasAno = dia;

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
    else if (mes == 1){
        return dia;
    }
    for (let i = 0; i < mes - 1; i++){
        diasAno += diasMes[i];
    }
    return diasAno;
}