/* Dado un array de números, crea una función que utilice filter para filtrar solo los números pares y devolver un nuevo array con esos números.
 */

let numeros =[2,3,4,5,6,8]
let pares = numeros.filter (par => par %2 === 0)
console.log(pares)