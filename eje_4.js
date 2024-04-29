/* Dado un array de personas, donde cada objeto tiene las propiedades nombre y edad, crea una función que utilice map para generar un nuevo array con los nombres de las personas en mayúsculas, luego utilice filter para filtrar solo las personas mayores de 18 años, y finalmente utilice find para encontrar la primera persona que tenga exactamente 25 años.
 */
let personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Pedro", edad: 40 },
  { nombre: "Ana", edad: 35 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Sofía", edad: 28 },
  { nombre: "Carlos", edad: 45 },
  { nombre: "Laura", edad: 33 },
  { nombre: "David", edad: 29 },
  { nombre: "Elena", edad: 27 }
];


let mayuscula = personas.map(persona => {return {nombre: persona.nombre.toUpperCase(), edad: persona.edad }})


let mayores = mayuscula.filter(mayor => mayor.edad>18)
console.log (mayores)

let mas_de = mayores.find(edad=>edad.edad===25)
console.log (mas_de)



