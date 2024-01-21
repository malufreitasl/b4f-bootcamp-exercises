function formataData(data){
    // escreve aqui a função
    const DAY = data.getDate();
    const MONTH = data.getMonth() + 1;
    const YEAR = data.getFullYear();
    if (DAY < 10 && MONTH < 10){
        return `0${MONTH}-0${DAY}-${YEAR}`;
    }
    else if (DAY < 10 && MONTH >= 10){
        return `${MONTH}-0${DAY}-${YEAR}`;
    }
    else if (DAY >= 10 && MONTH < 10){
        return `0${MONTH}-${DAY}-${YEAR}`;
    }
    return `${MONTH}-${DAY}-${YEAR}`;
} 

console.log(formataData(new Date(2022,3,4)))