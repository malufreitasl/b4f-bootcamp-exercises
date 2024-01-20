function calculaFaixaEtaria(idade){
    // escreve aqui a função
    if (idade < 12){
        return "Criança";
    }
    else if (idade >= 12 && idade <= 17){
        return "Adolescente";
    }
    else if (idade >= 18 && idade <= 64){
        return "Adulto";
    }
    else {
        return "Sénior";
    }
}