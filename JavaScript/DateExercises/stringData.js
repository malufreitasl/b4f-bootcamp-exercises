function dataPorExtenso(data){
    // escreve aqui a função
    const WEEK_DAYS = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
    const POSSIBLE_MONTHS = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    
    return `${WEEK_DAYS[data.getDay()]}, ${data.getDate()} de ${POSSIBLE_MONTHS[data.getMonth()]} de ${data.getFullYear()}`
} 

console.log(dataPorExtenso(new Date(2022, 3, 4)))