function diaDoAno(data){
    // escreve aqui a função
    let diasMesBissexto = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let diasMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let totalDiasAno = data.getDate()
    let ano = data.getFullYear()
    let mes = data.getMonth()

    if (((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)){
        for (let i = 0; i < mes; i++){
            totalDiasAno += diasMesBissexto[i];
            console.log(totalDiasAno)
        }
    }
    else {    
        for (let i = 0; i < mes; i++){
            totalDiasAno += diasMes[i];
        }
    }
    return totalDiasAno;
} 

console.log(diaDoAno(new Date(2016,11,31)))