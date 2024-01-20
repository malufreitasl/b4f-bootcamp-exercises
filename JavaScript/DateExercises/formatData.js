function formataData(data){
    // escreve aqui a função
    const DAY = data.getDate();
    const MONTH = data.getMonth() + 1;
    const YEAR = data.getFullYear();
    if (DAY < 10 && MONTH < 10){
        return `0${DAY}-0${MONTH}-${YEAR}`;
    }
    else if (DAY < 10 && MONTH > 10){
        return `0${DAY}-${MONTH}-${YEAR}`;
    }
    else if (DAY > 10 && MONTH < 10){
        return `${DAY}-0${MONTH}-${YEAR}`;
    }
    return `${DAY}-${MONTH}-${YEAR}`;
} 

console.log(formataData(new Date(2022,3,4)))