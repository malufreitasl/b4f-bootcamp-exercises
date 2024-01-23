function dataPorExtenso(data){
    // escreve aqui a função
    return `${data.toLocaleString("pt-PT", {weekday: "long"}).toLowerCase()}, ${data.getDate()} de ${data.toLocaleString("pt-PT", {month: "long"}).toLowerCase()} de ${data.getFullYear()}`
} 

console.log(dataPorExtenso(new Date(2022, 3, 4)))