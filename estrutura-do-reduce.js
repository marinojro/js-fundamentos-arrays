const numeros = [43, 50, 65, 12]

// const soma = numeros.reduce((acm, num) => {
//     return num + acm
// }, 0);


// function operacaoNumerica(acum, atual) {
//     return atual + acum
// }

// const soma = numeros.reduce(operacaoNumerica, 0)

const soma = numeros.reduce((acum, atual) => acum + atual); 

console.log(soma)