function calculaEstacaoDoAno(dia, mes){
    // escreve aqui a função
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
    else if (mes === 3 && dia >= 21 || mes === 6 && dia <= 20 || mes > 3 && mes < 6){
        return "Primavera";
    }
    else if (mes === 6 && dia >= 21 || mes === 9 && dia <= 20 || mes > 6 && mes < 9){
        return "Verão";
    }
    else if (mes === 9 && dia >= 21 || mes === 12 && dia <= 20 || mes > 9 && mes < 12){
        return "Outono";
    }
    else{
        return "Inverno";
    }
}