
/* Dado un array de objetos que representan productos, donde cada objeto tiene las propiedades nombre, precio y descuento, crea una función para calcular el precio final de cada producto después de aplicar el descuento, luego filtrar solo los productos con un precio final mayor que 50, y finalmente utilice una función para  encontrar el primer producto que tenga un descuento del 20%.
 */
let productos = [
  { nombre: "Camisa", precio: 30, descuento: 10 },
  { nombre: "Pantalón", precio: 50, descuento: 15 },
  { nombre: "Zapatos", precio: 80, descuento: 20 },
  { nombre: "Chaqueta", precio: 100, descuento: 25 },
  { nombre: "Bufanda", precio: 20, descuento: 5 },
  { nombre: "Gorra", precio: 15, descuento: 0 },
  { nombre: "Calcetines", precio: 10, descuento: 0 },
  { nombre: "Reloj", precio: 120, descuento: 30 },
  { nombre: "Bolsa", precio: 40, descuento: 10 },
  { nombre: "Gafas de sol", precio: 60, descuento: 15 }
];


let precio_final = productos.map(precio =>precio.precio - precio.descuento)
console.log(precio_final)

let precio_mayor = precio_final.filter(precio =>precio>50)
console.log(precio_mayor) 

let desc_final = productos.find(desc=>desc.descuento===20)
console.log(desc_final)