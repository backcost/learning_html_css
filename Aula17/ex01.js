// 01. Escreva um programa em JavaScript que liste todas as 
// propriedades de um objeto.


const student = {
    name: 'Marcle Rodrigues',
    grade: 'A',
    age: 26
    }
// => name, grade, age

for(let [key, value] of Object.entries(student)) {
    console.log(`${key}: ${value}`)
}