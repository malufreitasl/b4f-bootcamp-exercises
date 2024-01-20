function calculaSigno(dia, mes){
    // escreve aqui a função
    if (dia < 1 || dia > 31){
        return "Por favor introduza um dia entre 1 e 31.";
    }
    else if (mes < 1 || mes > 12){
        return "Por favor introduza um mês entre 1 e 12.";
    }
    else if((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30){
        return "Por favor introduza um dia entre 1 e 30.";
    }
    else if (mes === 2 && dia > 28){
        return "Por favor introduza um dia entre 1 e 28.";
    }
    else if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 20)){
        return "Carneiro";
    }
    else if ((mes === 4 && dia >= 21) || (mes === 5 && dia <= 20)){
        return "Touro";
    }
    else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)){
        return "Gémeos";
    }
    else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)){
        return "Caranguejo";
    }
    else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)){
        return "Leão";
    }
    else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)){
        return "Virgem";
    }
    else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)){
        return "Balança";
    }
    else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)){
        return "Escorpião";
    }
    else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)){
        return "Sagitário";
    }
    else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 20)){
        return "Capricórnio";
    }
    else if ((mes === 1 && dia >= 21) || (mes === 2 && dia <= 18)){
        return "Aquário";
    }
    else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <=20)){
        return "Peixes";
    }
}
