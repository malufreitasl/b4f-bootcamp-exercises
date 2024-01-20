// // Cria uma função que mapeia cada elemento de um array de objetos com as 
// propriedades name e birthday para um objeto que além destas propriedades, 
// tem a propriedade age.
let people = [
    {name: "Joaquina",birthday: new Date(2024,0,1)},
    {name: "Malu",birthday: new Date(1999,5,12)},
    {name: "Teodogo",birthday: new Date(2001,2,10)},
]

function calculateAge(array){
    return array.map(e => {
        const msInAYear = new Date(1971, 0).valueOf();
        const ageDiffMs = new Date() - e.birthday;
        const age = Math.floor(ageDiffMs - msInAYear);
        return {
            ...e, age: age
        }
    })
}